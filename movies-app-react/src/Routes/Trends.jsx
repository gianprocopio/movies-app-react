import React, {useState, useEffect} from 'react'
import {API_TOKEN, API_KEY, API_URL, URL_TRENDING_MOVIES, URL_CATEGORIES, URL_MOVIE_BY_GENRE, URL_IMG_POSTER, URL_SEARCH_MOVIE} from  "./../config/settings"
import Card from '../Components/Card';
import Layout from '../Components/Layout';



function Trends() {

  const [trendingMovies, setTrendingMovies] = useState([]);

  async function fetchData(){
    try{
      const response = await fetch(API_URL + URL_TRENDING_MOVIES + API_KEY);
      const data = await response.json();
      console.log(data.results);
      setTrendingMovies(data.results)
      return data.results;
    }catch(e){
      console.error(e);
    }
  } 

  useEffect(() => {
    fetchData();
    
  }, [])

console.log(trendingMovies);
  
  return (
    <Layout title="Trends">
      <div className='grid lg:gap-4 w-full max-w-screen-lg grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:m-0 md:grid-cols-3'>

      {trendingMovies.map(movie => (
        <Card
        key={movie.id}
        title={movie.title}
        img={URL_IMG_POSTER + movie.poster_path}
        />
      ))
      }
      </div>
      
      
    </Layout>
  )
}

export default Trends
