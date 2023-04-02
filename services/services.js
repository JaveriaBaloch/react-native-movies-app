import axios from "axios";
const apiKey = `c6791b35095889ea80f7394618c23311`
const url = `https://api.themoviedb.org/3`

export const getPopularMovies= async ()=>{
  const apiKey = `c6791b35095889ea80f7394618c23311`
  const get = `${url}/movie/popular?api_key=${apiKey}`

  const resp = await axios.get(get)
  return resp.data.results
}

export const getUpCommingMovies= async ()=>{
    const apiKey = `c6791b35095889ea80f7394618c23311`
    const get = `${url}/movie/upcoming?api_key=${apiKey}`
  
    const resp = await axios.get(get)
    return resp.data.results
  }
  export const getPopularTV= async ()=>{
    const apiKey = `c6791b35095889ea80f7394618c23311`
    const get = `${url}/tv/popular?api_key=${apiKey}`
    const resp = await axios.get(get)
    return resp.data.results
  }
  export const getFamilyMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=10751`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getActionMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=28`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getAdventureMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=12`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getAnimationMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=16`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getComedyMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=35`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getCrimeMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=80`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getDocumentaryMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=99`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getDramaMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=18`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getFantasyMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=14`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getHistoryMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=36`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getHorrorMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=27`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getMusicMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=10402`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getMysteryMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=9648`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getRomanceMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=10749`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getScienceFictionMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=878`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getTVMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=10770`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getThrillerMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=53`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getWarMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=10752`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  export const getWesternMovies = async ()=>{
    const uri = `https://api.themoviedb.org/3/discover/movie?api_key=c6791b35095889ea80f7394618c23311&with_genres=37`
    const resp = await axios.get(uri)
    return resp.data.results
  }
  

  
  