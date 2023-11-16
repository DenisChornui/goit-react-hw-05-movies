import { fetchIdMovie } from 'api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        const data = await fetchIdMovie(movieId);
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres, release_date } = movies;
  const allGenres = genres ? genres.map(genre => genre.name).join(', ') : [];
  const releaseYear = release_date ? `(${release_date.substring(0, 4)})` : "";

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        width={250}
        alt={title}
        loading='lazy'
      />
      <div>
        <h2>{title} {releaseYear}</h2>
        <p>User Score: {Math.round(vote_average*10) ?? 'No User Score'}%</p>
        <h3>Overview</h3>
        <p>{overview !== '' ? overview : 'No overview provided'}</p>
        <h3>Genres</h3>
        <p>{allGenres !== '' ? allGenres : 'No genres'}</p>
      </div>
      <div>
        <h2>Adittional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
