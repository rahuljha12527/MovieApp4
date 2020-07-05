// {
//     type:'INCREASE_COUNT',

// }

// {
//     type:'DECREASE_COUNT'
// }

export const ADD_MOVIES='ADD_MOVIES';

export const ADD_TO_FAVOURITES='ADD_TO_FAVOURITES';

export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';

export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';

export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';

export const  ADD_SEARCH_RESULT='ADD_SEARCH_RESULT'

// action creators 
export function addMovies (movies){
    return {
        type:ADD_MOVIES,
        movies
      }
        
    
}

export function addFavourite (movies){
    return {
        type:ADD_TO_FAVOURITES,
        movies
      }
        
    
}

export function removeFromFavourite (movie){
  return {
    type:REMOVE_FROM_FAVOURITES,
    movie
  }
}

export function setShowFavourite (val){
  return {
    type:SET_SHOW_FAVOURITES,
    val
  }
}

export function addMovieToList(movie){
  return {
    type:ADD_MOVIE_TO_LIST,
    movie
  };
}

export function handleMovieSearch(movie){
  const url=` http://www.omdbapi.com/?apikey=d8ca96b8&t=${movie}`;

  return function(dispatch){
    fetch(url)
     .then(response=>response.json())
    .then(movie=>{
      console.log('movie',movie);
    })

} 
  }
 
  export function addMovieSearchResult (movie){
    return {
      type: ADD_SEARCH_RESULT,
      movie
    }
  }