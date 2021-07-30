import * as React from 'react';
import {Text,View,SafeAreaView,StyleSheet,Platform,StatusBar,TouchableOpacity,Image,ImageBackground} from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={style.container}>
        <SafeAreaView style={style.droidSafeArea}/>
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={style.backgroundImage}
        >
        <View style={style.titleBar}>
         <Image source={require('../assets/main-icon.png')} style={style.titleImage} />
          <Text style={style.titleText}>Stellar App</Text>
        </View>
        
          <TouchableOpacity style={style.routeCard} onPress={()=>{
            this.props.navigation.navigate("Space Crafts")
          }}>
            <Text style={style.routeText} > Space Crafts</Text>
            <Text style={style.knowMore}>Know more</Text>
            <Text style={style.bgDigit}>1</Text>
            <Image source={require('../assets/space_crafts.png')} style={style.iconImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={style.routeCard} onPress={()=>{
            this.props.navigation.navigate("Star Map")
          }}>
        // { console.log(StatusBar.currentHeight)}
            <Text style={style.routeText}> Star Map</Text>
            <Text style={style.knowMore}>Know more</Text>
            <Text style={style.bgDigit}>2</Text>
            <Image source={require('../assets/star_map.png')} style={style.iconImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={style.routeCard} onPress={()=>{
            this.props.navigation.navigate("Pics")
          }}>
            <Text style={style.routeText} > Daily Pictures</Text>
            <Text style={style.knowMore}>Know more</Text>
            <Text style={style.bgDigit}>3</Text>
            <Image source={require('../assets/daily_pictures.png')} style={style.iconImage}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

const style=StyleSheet.create({
  container:{
    flex:1
  },
  titleBar:{
    flex:0.5,
    justifyContent:'center',
    alignItems:"center"
  },
  titleText:{
    fontSize:40,
    fontFamily:"Arial",
    fontWeight:"bolder",
    color:"white"
  },
  droidSafeArea:{
    marginTop: Platform.OS==="android"? StatusBar.currentHeight:0
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  },
  iconImage:{
    position:'absolute',
    height:100,
    width:70,
    right:30,
    top:-40,
    resizeMode:"contain",
    zIndex:-1
  },
  routeCard:{
    flex:0.25,
    backgroundColor:'white',
    borderRadius:30,
    marginTop:40,
    marginLeft:50,
    marginRight:50,
  },
  routeText:{
    color:'black',
    paddingLeft:20,
    fontSize:25,
    fontWeight:"bold",
    marginTop:20
  },
  bgDigit:{
    position:'absolute',
    right:0,
    top:0,
    fontSize:90,
    color:"rgba(100,100,100,0.1)",
    zIndex:0
  },
  knowMore:{
    color:'red',
    paddingLeft:50,
    fontSize:15
  },
  titleImage:{
    resizeMode:"contain",
    height:150,
    width:150
  }
})
