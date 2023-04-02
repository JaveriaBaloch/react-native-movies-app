import {Text,View,StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'
// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
export const Videos=({videos})=>{
  console.disableYellowBox = true;

    return(
        <>
        {videos.map(e=>{
           
          return(
           <>
            <Text style={styles.min_text}>{e.type}</Text>
            
            <View style={videoStyle}>
            <WebView
                bounces={false}
                javaScriptEnabled
                style={{ height: '100%', width: '100%' }}
                source={{uri:`https://www.youtube.com/embed/${e.key}`}}
                
                />
            </View>
         </>
          )
        })
        }
       </>
    )
}


// Later on in your styles..
const videoStyle = {
    flex:1,
    width:'90%',
    height: 220,
    backgroundColor:'black',
    marginBottom:20,
    marginTop:20,
    marginLeft:20,
    padding:0
  };
const styles={
    min_text:{
        color:'white',
        fontSize:16,
        fontWeight:800,
        marginLeft:20,
        marginTop:5,
        marginRight:20,
        textAlign:'justify',
    
        }
}