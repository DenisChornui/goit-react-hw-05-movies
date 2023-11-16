import { Outlet } from "react-router-dom";
import { Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <p>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
