import { fetchTrendingMovie } from 'api';
import { useEffect, useState } from 'react';
import {MoviesList} from 'components/MoviesList'

export default function Home() {
  const [movies, setMovies] = useState([]);
  console.log(movies)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovie();
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData()
  }, []);

  return (
    <div>
        <h2>Trending Movies</h2>
        <MoviesList movies={movies} />
    </div>
  );
}
