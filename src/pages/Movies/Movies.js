import { fetchMovieSearch } from 'api';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieSearch(query);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const onSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <Container>
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      <SearchForm onSubmit={onSubmit} value={query} />
      <MoviesList movies={movies} />
      {movies.length === 0 && <p>No results</p>}
    </Container>
  );
}
