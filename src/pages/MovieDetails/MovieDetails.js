import { fetchIdMovie } from 'api';
import { BackLink } from 'components/BackLink/BackLink';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AdittionalContainer,
  Container,
  ContainerInfo,
  Div,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchIdMovie(movieId);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movies;
  const allGenres = genres ? genres.map(genre => genre.name).join(', ') : [];
  const releaseYear = release_date ? `(${release_date.substring(0, 4)})` : '';

  return (
    <>
      <BackLink to={backLinkHref.current}></BackLink>
      <Container>
        {loading && <Loader />}
        {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )}
        <Div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width={250}
            alt={title}
            loading="lazy"
          />
          <ContainerInfo>
            <h2>
              {title} {releaseYear}
            </h2>
            <p>
              User Score: {Math.round(vote_average * 10) ?? 'No User Score'}%
            </p>
            <h3>Overview</h3>
            <p>{overview !== '' ? overview : 'No overview provided'}</p>
            <h3>Genres</h3>
            <p>{allGenres !== '' ? allGenres : 'No genres'}</p>
          </ContainerInfo>
        </Div>

        <AdittionalContainer>
          <ContainerInfo>
            <h2>Adittional information</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </ContainerInfo>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </AdittionalContainer>
      </Container>
    </>
  );
}
