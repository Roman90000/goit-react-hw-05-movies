import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={ } />
        <Route path='*' element={<NotFound/> } />
      </Routes>
    </div>
  );
};
