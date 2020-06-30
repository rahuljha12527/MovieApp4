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