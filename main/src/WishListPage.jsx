import React from 'react';

function WishListPage({ wishList }) {
  return (
    <div id="root">
      <h1>Your Wish List</h1>
      {wishList.length > 0 ? (
        <div className="container">
          {wishList.map(movie => (
            <div className="card" key={movie.id}>
              <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <h5>{movie.title}</h5>
              <p>{movie.overview.slice(0, 120)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wish list is empty.</p>
      )}
    </div>
  );
}

export default WishListPage;
