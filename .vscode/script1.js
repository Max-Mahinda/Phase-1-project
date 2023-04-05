function getNowPlayingMovies() {
    const api_key = 'YOUR_API_KEY'; // Replace with your own API key
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`;
  
    axios.get(url)
      .then(response => {
        const movieData = response.data.results;
  
        const movieCards = movieData.map(movie => {
          return `
            <div class="movie-card">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.release_date}</p>
              </div>
            </div>
          `;
        });
  
        const movieImgContainer = document.getElementById('movie-link');
        movieImgContainer.innerHTML = movieCards.join('');
      })
      .catch(error => console.log(error));
  }
  
  getNowPlayingMovies();
  