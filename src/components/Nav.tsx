import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <section>
      <header>
        <h1>Zoo</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/details/:id">Detaljer</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};