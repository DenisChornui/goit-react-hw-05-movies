import { fetchIdMovie } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  const defaultImg = 
  return (
    <div>
      <img src={
                    movies.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
                        : defaultImg
                }
                    width={250}
                    alt="poster"
                />
      <div>
        <h2>{movies.title}</h2>
        <p>Rating: {movies.vote_average}</p>
        <h3>Overview</h3>
        <p>{movies.overview}</p>
        <h3>Genres</h3>
      </div>
    </div>
  );
}
