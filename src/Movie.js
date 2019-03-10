import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


/*
class Movie extends Component{

  static propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string,
  }

  render(){
    return(
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
      
    );
    
  }
}

class MoviePoster extends Component{
  static propTypes = {
    poster: PropTypes.string.isRequired,
  }

  render(){
    return(
      <img src={this.props.poster} alt='some value' width="300px;"/>
    );
  }
}
*/

// functional component
function Movie({title, poster, genres, synopsis}){
  return(
    <div className="Movie">
      <div clasName="Movie_Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div clasName="Movie_Columns">
        <h1>{title}</h1>
        <div clasName="Movie_Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie_Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
}

function MoviePoster({poster, alt}){
  return(
    <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
  )
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

function MovieGenre({genre}){
  return (
    <span className="Movie_Genre">{genre}</span>
  )
}
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;