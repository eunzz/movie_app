import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';



class App extends Component {

  state = {
  }

  componentDidMount(){
    this._getMovies();
  }

/*
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "500 days of Summer",
            poster: "http://ticketimage.interpark.com/Movie/still_image/V09/V0901797p_01.gif",
          },
          {
            title: "Matix",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          },
          {
            title: "Full Metal jacket",
            poster: "https://m.media-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          },
          {
            title: "Oldboy",
            poster: "https://m.media-amazon.com/images/M/MV5BYjQwZTc3ODktZjk1ZS00N2Y3LWFlYmUtMmQ4M2IwMjZlYTIwXkEyXkFqcGdeQXVyNjQwMzk1MDM@._V1_UY268_CR1,0,182,268_AL_.jpg",
          },
          {
            title: "Star Wars",
            poster: "https://lumiere-a.akamaihd.net/v1/images/sb_dolby_worldwide_handout_13x19_v3_lg_use_this_one_cc3cc869.jpeg?region=0%2C0%2C821%2C1200",
          },
        ],
      })
    }, 5000)
  }
*/

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        genres={movie.genres}
        synopsis = {movie.synopsis} 
        key={movie.id} />
    })
    return movies
  }

  // asynchronous function
  _getMovies = async () => {
    const movies = await this._callApi(); // await mode로 _callApi라는 function을 value에 담음
    // await : _callApi가 끝나기를 기다리고, 그 retrun value가 무엇이든, movies에 그 value를 넣음
    //setState가 callapi 작업 완료되기 전까지는 실행되지 않는 것
    this.setState({
      movies // == movies: movies 랑 같은 뜻임. 모던자바스크립트
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json()) //response 다른 이름으로 써도 됨
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
