import React from 'react'
import useFetch from '../../hooks/useFetch'
import Movie_Card from '../movies/Movie_Card'
import { useNavigate } from 'react-router-dom'
export default function Upcoming() {
  const {data, error, loading} = useFetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1')
  const navigate = useNavigate()
  
  
  return (
    <div className=' max-w-[80rem] mx-auto'>
        <h2 className=' pt-20 pb-12 px-4 text-3xl uppercase font-bold'>Upcoming Movies</h2>
      {error && <p className=' pt-32 text-2xl text-red-600 text-center'>{error}</p>}
      {loading && <p>Loading...</p>}
      <div className=' grid grid-cols-3  md:grid-cols-4 gap-4 md:gap-8 lg:grid-cols-5  '>
      {data && data.results.slice(0,10).map((movie) => (
        <Movie_Card key={movie.id} movie={movie}/>
      ))}
      </div>
      <button onClick={(()=>navigate('/upcoming'))} className=' mt-2 text-md rounded-xl p-4 bg-orange-600 flex mx-auto'><p className=' text-center'>View all upcoming movies</p></button>
      
    </div>
  )
}
