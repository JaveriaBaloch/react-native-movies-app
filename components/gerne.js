import React from 'react'
import {Text,StyleSheet} from 'react-native'
export const Gerne = ({alldata}) => {
    console.log(alldata)
    return(
        <Text style={styles.min_text}> Categories:
        {
            alldata.map(e=>{
                if(alldata[alldata.length-1].name!==e.name&&e.name!=""){
                        return(" "+e.name+",")
                }else{
                    if(e.name!=""){
                        return(" "+e.name)
                    }
                   
                }
            }
            )
        }
        </Text>
    )
}
const styles={
    min_text:{
        color:'white',
        fontSize:12,
        marginLeft:20,
        marginTop:10,
        fontWeight:700
        }
}