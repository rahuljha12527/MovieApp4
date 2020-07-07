import React from 'react';
import {data} from '../data';
import {addMovieToList,handleMovieSearch} from '../actions';
import {StoreContext} from '..';


class Navbar extends React.Component { 

 constructor(props){
    super(props);
    this.state={ 
        
         searchText:''
    };
 }
    
 handleAddToMovies=(movie)=>{
     this.props.dispatch(addMovieToList(movie));
     this.setState({
         showSearchResults:false
     });
 }
    
handleChange=(e)=>{
    this.setState({
       searchText:e.target.value
    });
}
handleSearch=()=>{
    const {searchText}=this.state;

    this.props.dispatch(handleMovieSearch(searchText));      


};
//cool? bro tumne kya change kiya//search ki jagah storekiya hai//yes okay
    render(){
        // console.log('blah',this.props);
        const { showSearchResults,result:movie}=this.props.store;
        return (
            <div className="nav">
                <div className="search-container">
                     <input onChange={this.handleChange}/>
                     <button id="search-btn" onClick={this.handleSearch}>Search</button>
                     {

                         showSearchResults&&
                         <div className="search-results">
                             <div className="search-result">
                                 <img src={movie.Poster} alt="search-pic" />


                                 <div className="movie-info">
                                 <span>{movie.Title}</span>
                                 <button onClick={()=>this.handleAddToMovies(movie)} >
                                     Add To Movies
                                 </button>
                                 </div>
                                 </div>

                      </div>
                     }
                </div>
                 
            </div>
          );
    }
 
}

class NavbarWrapper extends React.Component{
    render(){
        return (
            <StoreContext.Consumer>
             {(store)=><Navbar dispatch={store.dispatch}  store={this.props.search}/>}
            </StoreContext.Consumer>
        )
    }
}
    
export default NavbarWrapper;
