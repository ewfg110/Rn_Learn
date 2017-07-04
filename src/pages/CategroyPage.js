import React,{Component} from 'react'
import {

   StyleSheet,
     Text,
     View,
     TextInput,
     Button,
     image

}from 'react-native'

export default class CategroyPage extends Component{


   // let functions=Arrays.from(["分拣","摘果仓下架","摘果仓调整","中间仓下架"]);

  constructor(props){
    super(props);
    this.state={
       title:"摘果",

    }

  }

  render(){

      return (

           <View  style={{flex:1,justifyContent:'center',alignItems: 'center'}}>

                <Text style={{fontSize:20,textAlign:'center'}}> 摘果</Text>

           </View>

      )
  }

}