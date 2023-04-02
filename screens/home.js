/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text,View,StyleSheet,Dimensions,FlatList,SafeAreaView,ScrollView,Image,Pressable} from 'react-native';
import axios from 'axios';
import {useState,useEffect} from 'react';
import * as genric from '../services/services'
import { SliderBox } from "react-native-image-slider-box";
import react from 'react';
const dimensions = Dimensions.get('screen')
const DisplayList=({movies,navigation})=>{
   
    const list =movies
    const click=(title)=>{
        console.log(title.id)
      
        navigation.navigate('Detials', {id: title})
       }
    return(
        <FlatList
        horizontal
         data={list} renderItem={({item})=>{
            return( list.map((m)=>{
                const img = "https://image.tmdb.org/t/p/w500"+m.poster_path
                return(
                    <View key={m.id} style={styles.carousel}>
                        <Pressable onPress={ () => click(m) }>
                            <View>
                                <Image style={styles.logo} source={{uri:img}}/>
                            </View>
                         </Pressable>
                    </View>
                )
            })
            )
        }}/>
    )
}
const Home =({navigation})=>{

  const [movieImages,setMoviesImages] = useState([])
  const [movies,setMovies] = useState([])
  const [upcomingMovies,setUpcomingMovies] = useState([])
  const [popularTV,setPopularTV] = useState([])
  const [familyMovies,setFamilyMovies] = useState([])
  const [actionMovies,setActionMovies] = useState([])
  const [adventureMovies, setAdventureMovies] = useState([])
  const [animationMovies, setAnimationMovies] = useState([])
  const [comedyMovies, setComedyMovies] = useState([])
  const [crimeMovies,setCrimeMovies]= useState([])
  const [documentaryMovies, setDocumentaryMovies]= useState([])
  const [dramaMovies, setDramaMovies]= useState([])
  const [fantisyMovies,setFantisyMovies]= useState([])
  const [historyMovies,setHistoryMovies]= useState([])
  const [horrorMovies,setHorrorMovies]= useState([])
  const [musicMovies,setMusicMovies]= useState([])
  const [mysteryMovies,setMysteryMovies]= useState([])
  const [romanceMovies,setRomanceMovies]= useState([])
  const [scienceFictionMovies,setScienceFictionMovies]= useState([])
  const [tvMovies,setTVMovies]= useState([])
  const [thrillerMovies,setThrillerMovies]= useState([])
  const [warMovies,setWarMovies]= useState([])
  const [westernMovies,setWesternMovies]= useState([])

  const [error,setError] = useState(false)
  const list = []

  
  console.reportErrorsAsExceptions = false;

  useEffect(()=>{
    genric.getUpCommingMovies().then(movies=>{

        movies.forEach(element => {
          const img = "https://image.tmdb.org/t/p/w500"+element.poster_path
          list.push(img)
          
        });
        setUpcomingMovies(movies)
        setMoviesImages(list)
      }).catch(err=>{
        setError(true)
      })
      genric.getPopularTV().then(shows=>setPopularTV(shows)).catch(err=>{
      setError(true)
    })

    genric.getPopularMovies().then(movies=>{
        setMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getFamilyMovies().then(family=>{
        setFamilyMovies(family)
      }).catch(err=>{
        setError(true)
      })
      genric.getActionMovies().then(movies=>{
        setActionMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getAdventureMovies().then(movies=>{
        setAdventureMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getAnimationMovies().then(movies=>{
        setAnimationMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getComedyMovies().then(movies=>{
        setComedyMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getCrimeMovies().then(movies=>{
        setCrimeMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getDocumentaryMovies().then(movies=>{
        setDocumentaryMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getDramaMovies().then(movies=>{
        setDramaMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getFantasyMovies().then(movies=>{
        setFantasyMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getHistoryMovies().then(movies=>{
        setHistoryMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getHorrorMovies().then(movies=>{
        setHorrorMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getMysteryMovies().then(movies=>{
        setMysteryMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getMusicMovies().then(movies=>{
        setMusicMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getRomanceMovies().then(movies=>{
        setRomanceMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getScienceFictionMovies().then(movies=>{
        setScienceFictionMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getTVMovies().then(movies=>{
        setTVMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getThrillerMovies().then(movies=>{
        setThrillerMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getWarMovies().then(movies=>{
        setWarMovies(movies)
      }).catch(err=>{
        setError(true)
      })
      genric.getWesternMovies().then(movies=>{
        setWesternMovies(movies)
      }).catch(err=>{
        setError(true)
      })

  },[])
   
  
  return(
    <react.Fragment>
    <View style={styles.container}>
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
    {movieImages.length>0&&
    
    <SliderBox 
    images={movieImages} 
    sliderBoxHeight={dimensions.height/1.5} 

    autoplay={true} circleLoop={true} 
    dotStyle={styles.sliderStyle}
    ImageComponentStyle={{ width: '97%', marginTop:0}}
    resizeMethod={'resize'}
    resizeMode={'cover'}
  imageLoadingColor="#2196F3"
    />
}
    <View style={styles.margin}>
        { movies.length>0 &&
        <>
            <Text style={styles.heading}>Popular Movies</Text>
            <DisplayList movies={movies} navigation={navigation}/>
            </>
        }
        { upcomingMovies.length>0 &&
         <>
            <Text style={styles.heading}>Upcoming Movies</Text>
            <DisplayList movies={upcomingMovies} navigation={navigation}/>
        </>
         }
         { popularTV.length>0 &&
         <>
            <Text style={styles.heading}>Popular TV Series</Text>
            <DisplayList movies={popularTV} navigation={navigation}/>
        </>
         }
          { actionMovies.length>0 &&
         <>
        <Text style={styles.heading}>Action Movies</Text>
        <DisplayList movies={actionMovies} navigation={navigation}/>
        </>
        }
         { adventureMovies.length>0 &&
         <>
        <Text style={styles.heading}>Adventure Movies</Text>
        <DisplayList movies={adventureMovies} navigation={navigation}/>
        </>}
        { animationMovies.length>0 &&
         <>
        <Text style={styles.heading}>Animation Movies</Text>
        <DisplayList movies={animationMovies} navigation={navigation}/>
        </>
        }
         { comedyMovies.length>0 &&
         <>
        <Text style={styles.heading}>Comedy Movies</Text>
        <DisplayList movies={comedyMovies} navigation={navigation}/>
        </>}
        { crimeMovies.length>0 &&
         <>
        <Text style={styles.heading}>Crime Movies</Text>
        <DisplayList movies={crimeMovies} navigation={navigation}/>
        </>}
        { documentaryMovies.length>0 &&
         <>
        <Text style={styles.heading}>Documentry Movies</Text>
        <DisplayList movies={documentaryMovies} navigation={navigation}/>
        </>}
        { dramaMovies.length>0 &&
         <>
        <Text style={styles.heading}>Drama Movies</Text>
        <DisplayList movies={dramaMovies} navigation={navigation}/>
        </>}
        { familyMovies.length>0 &&
         <>
        <Text style={styles.heading}>Family Movies</Text>
        <DisplayList movies={familyMovies} navigation={navigation}/>
        </>}
        { historyMovies.length>0 &&
         <>
        <Text style={styles.heading}>History Movies</Text>
        <DisplayList movies={historyMovies}/>
        </>}
        { horrorMovies.length>0 &&
         <>
        <Text style={styles.heading}>Horror Movies</Text>
        <DisplayList movies={horrorMovies} navigation={navigation}/>
        </>}
        { musicMovies.length>0 &&
         <>
        <Text style={styles.heading}>Music Movies</Text>
        <DisplayList movies={musicMovies} navigation={navigation}/>
        </>}
        { mysteryMovies.length>0 &&
         <>
        <Text style={styles.heading}>Mystery Movies</Text>
        <DisplayList movies={mysteryMovies} navigation={navigation}/>
        </>}
        { romanceMovies.length>0 &&
         <>
        <Text style={styles.heading}>Romance Movies</Text>
        <DisplayList movies={romanceMovies} navigation={navigation}/>
        </>}
        { scienceFictionMovies.length>0 &&
         <>
        <Text style={styles.heading}>Science Fiction Movies</Text>
        <DisplayList movies={scienceFictionMovies} navigation={navigation}/>
        </>}
        { tvMovies.length>0 &&
         <>
        <Text style={styles.heading}>TV Movies</Text>
        <DisplayList movies={tvMovies} navigation={navigation}/>
        </>}
        { thrillerMovies.length>0 &&
         <>
        <Text style={styles.heading}>Thriller Movies</Text>
        <DisplayList movies={thrillerMovies} navigation={navigation}/>
        </>}
        { warMovies.length>0 &&
         <>
        <Text style={styles.heading}>War Movies</Text>
        <DisplayList movies={warMovies} navigation={navigation}/>
        </>}
        { westernMovies.length>0 &&
         <>
        <Text style={styles.heading}>Western Movies</Text>
        <DisplayList movies={westernMovies} navigation={navigation}/>
        </>}
    </View>        
    </ScrollView>
    </View>
    </react.Fragment>
  )
}
const styles = StyleSheet.create({
    sliderContianer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color:"white",
        // backgroundColor:"black",
        // height:dimensions.height
        height:dimensions.height

      },
      sliderStyle:{
        width:dimensions.width,
        
        height:0
      },
      carousel:{
        flex:1,
        // justifyContent: 'center',
        // // alignItems: 'center',
        // backgroundColor:"white"
      },
      heading:{
        color:"white",
        fontSize:23,
        marginTop:10,
        fontWeight : 900,
        paddingBottom:10
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black'

      },
   
      fullpageScroll:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:0,
      },
      margin:{
        marginTop:20
      },
      view:{
        flex:1,
        fontSize:23,
        marginTop:10,
        fontWeight : 900,
        backgroundColor: 'white',
      },
      logo:{
        width:100,
        height:150,
        margin:8,
        borderRadius:8,
     
      },
      shadowProp: {
        shadowColor: 'white',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    
})
export default Home