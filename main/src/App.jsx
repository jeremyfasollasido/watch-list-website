import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListMovie from './ListMovie.jsx';
import WishListPage from './WishListPage.jsx'; // Halaman Wish List baru
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [wishList, setWishList] = useState([]);

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onClickSearch = () => {
    setSearch(text);
  }

  const addToWishList = (movie) => {
    if (!wishList.some(item => item.id === movie.id)) {
      setWishList([...wishList, movie]);
    }
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Search Movies</Link>
            </li>
            <li>
              <Link to="/wishlist">Watch List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <h1>Search Movies</h1>
              <div className="search">
                <label>
                  Search movie
                  <input onChange={onChangeText} type="text" />
                </label>
                <button onClick={onClickSearch}>Search</button>
              </div>

              <ListMovie search={search} onAddToWishList={addToWishList} />
            </>
          } />

          <Route path="/wishlist" element={<WishListPage wishList={wishList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
