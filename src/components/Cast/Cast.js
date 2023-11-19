import { fetchCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage';
import { CastItem, CastList } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchCast(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const defaultImg = 'https://i.ibb.co/gZcSZG5/avatar.jpg';
  return (
    <div>
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      {cast.length === 0 ? (
        <p>There is not information on cast for this movie</p>
      ) : (
        <CastList>
          {cast.map(actor => (
            <CastItem key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                width={100}
                loading="lazy"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </CastItem>
          ))}
        </CastList>
      )}
    </div>
  );
}
