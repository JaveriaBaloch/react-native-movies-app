import React from 'react'
import {View, ScrollView,Text,Image,StyleSheet} from 'react-native'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Languages} from '../components/languages'
import {Gerne} from '../components/gerne'
import {Videos} from '../components/videos'
const MovieDetials = ({navigation, route})=>{
    const movie = route.params.id
    navigation.setOptions({ title: movie.title,
        headerLeft: null,
        headerStyle: {
          backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: 'white'
          }
     })
    const [alldata,setAlldata] = useState([])
    const [genre,setGenre] = useState([])
    const [duration,setDuration] = useState('')
    const [videos,setVideos] = useState([])
    const img = "https://image.tmdb.org/t/p/w500"+movie.poster_path
    console.log(movie)
    console.disableYellowBox = true;
    useEffect(()=>{
        
    getMovie(movie.id).then(info => {
        setAlldata(info)
    }).catch(e=>{
        console.log("error")
    })
    getGerne(movie.id).then(info => {
        setGenre(info)
    }).catch(e=>{
        console.log("error")
    })
    getDuration(movie.id).then(info => {
        setDuration(info)
    }).catch(e=>{
        console.log("error")
    })
    getVideos(movie.id).then(info => {
        setVideos(info)
        console.log(info)
    }).catch(e=>{
        console.log("error")
    })
    },[])
    return(
        <View style={styles.bg} key={movie.id}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <Image style={styles.image} source={{uri: img}}/>
                <Text style={styles.text}>Title: {movie.title}</Text>
                <Text style={{...styles.min_text, fontWeight:700}}>Release Date: {movie.release_date}</Text>
                <Text style={{...styles.min_text, fontWeight:700}}>Duration: {duration} minutes</Text>

                <Languages alldata={alldata}/>
                <Gerne alldata = {genre}/>
                <Text style={styles.min_text}>Overview: {movie.overview}</Text>
                {videos.length>0 &&
                <Videos videos={videos}/>
                }
             </ScrollView>
        </View>
    )
}
const getMovie = async(id)=>{
  const info= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c6791b35095889ea80f7394618c23311`)
  return info.data.spoken_languages

}
const getGerne = async(id)=>{
    const info= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c6791b35095889ea80f7394618c23311`)
    return info.data.genres
  
  }
const getDuration = async(id)=>{
    const info= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c6791b35095889ea80f7394618c23311`)
    return info.data.runtime
  
  }
const getVideos = async(id)=>{
    const info= await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c6791b35095889ea80f7394618c23311`)
    return info.data.results
}
export default MovieDetials
const styles = {
    text:{
        color:'white',
        fontSize:17,
        marginLeft:20,
        marginTop:30,
        fontWeight:800
    },
    bg:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        marginTop: -60,
    },
    image:{
        width:400,
        height:400,
    },
    min_text:{
        color:'white',
        fontSize:12,
        marginLeft:20,
        marginTop:10,
        marginRight:20,
        textAlign:'justify',
    
        }
    
}