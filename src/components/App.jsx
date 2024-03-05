import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { MovieDetalist } from './pages/MovieDetails';
import { Cast } from './pages/Cast';
import { Reviews } from './pages/Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<Movies />} />
        <Route path="" element={<MovieDetalist />} />
        <Route path="" element={<Cast />} />
        <Route path="" element={<Reviews />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
