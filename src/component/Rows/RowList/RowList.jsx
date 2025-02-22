import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <>
    <Row 
    title={'NETFLIX ORIGINALS'}
    fetchUrl={requests.fetchNetflixOriginals}
    isLarge={true}
    />
    <Row title={'Trending Now'}
    fetchUrl={requests.fetchTrending}
   
    />
    <Row title='Action Movies'
      fetchUrl={requests.fetchActionMovies}
    />
    <Row title={'Comedy Movies'} 
    fetchUrl={requests.fetchComedyMovies}/>
    <Row title={'Documentary Movies'} fetchUrl={requests.fetchDocumentaries}/>

    <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
   <Row title={'Top Rated'} fetchUrl={requests.fetchTopRatedMovies}/>
    <Row   title='Romance movies'fetchUrl={requests.fetchRomanceMovies}/>
    <Row  title={'Tv Shows'} fetchUrl={requests.fetchTvShow}/>
    </>
  )
}

export default RowList
