/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import CategroyPage from "../pages/CategroyPage"

import ListsPage from "../pages/ListsPage"
import WelfarePage from "../pages/WelfarePage"
import WebPage from "../pages/WebPage"
import Navigator from '../common/TabNavigator'
import MyToastMoudle from '../components/MyToastMoudle'
import {StackNavigator, NavigationActions} from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  NavigatorIOS,
  Button
} from 'react-native';


 class Login2 extends Component {

 static navigationOptions = {
        headerTitle: "登录",
        header:null
    };

constructor(props){
  super(props);

  this.state={
  text:"请求结果",
  user:"",
  pass:"",
  }

}
 _init=()=>{
  console.log("init");
/*this.setState({
        text:"ddddddd"
      })*/
  fetch("http://gank.io/api/data/Android/10/1").then((res)=>res.json())
      .then((responseJSON)=>{
      this.setState({
        text:responseJSON.results[0].source,
        user:"",
        pass:"",
      })
      })
 }

 _login=()=>{

     fetch("http:///Account/LogOn?userName="+this.state.user+"&password="+this.state.pass).then((res)=>res.json())
     .then((responseJSON)=>{
         this.setState({
         text:responseJSON.MESSAGE
         })
     }).then(()=>{

     if(this.state.text=="请求成功"){


        this.props.navigation.navigate('Navigator')
     }
     })

 }



  render() {


    return (

      <View style={styles.continue}>

      <Text style={{fontSize:20,textAlign:'center',marginTop:20}}>干货App</Text>

            <View style={{flexDirection:'row',alignItems:'center',marginLeft:10,marginTop:40}}>
            <Text >账号:</Text>
             <TextInput style={[styles.input,{flex:1,marginRight:10,marginLeft:10}]} underlineColorAndroid="transparent" placeholder="账号" onChangeText={(str)=>this.setState({user:str})}/>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:20,marginLeft:10}}>
            <Text >密码:</Text>
                 <TextInput style={[styles.input,{flex:1,marginRight:10,marginLeft:10}]} underlineColorAndroid="transparent" placeholder="密码" secureTextEntry={true}  onChangeText={(str)=>this.setState({pass:str})}  />
            </View>
            <View  style={{marginTop:20,marginLeft:10,marginRight:10}} >
               <Button  title="登  录" onPress={this._login} />
            </View>


      </View>

      //<LoginPage/>
    );
  }
}
const SimpleApp = StackNavigator({
    Login2:{screen:Login2},
    Categroy:{screen:CategroyPage},
    Lists:{screen:ListsPage},
    welfare:{screen:WelfarePage},
    Navigator:{screen:Navigator},
    web:{screen:WebPage},
},{
      initialRouteName: 'Login2',
      navigationOptions: {
          headerTintColor: '#51c4fe',
          headerStyle: {backgroundColor: "white"},
          headerTitleStyle: {alignSelf: 'center'},
      }
      });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection:'row'
  },
  input: {
          width: 250,
          height: 40,
          paddingLeft: 10,
          backgroundColor: '#EDEDED',
          borderWidth: 0,
          borderRadius: 5,
          borderStyle: "solid",
      },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

    backgroundColor:'#333333',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    backgroundColor:'#555555'
  },
  test1:{
    textAlign:'right',
    color: '#999999',

    backgroundColor:'#999999'
  },
  bigblue: {
   color: 'blue',
   fontWeight: 'bold',
   fontSize: 30,
   },
  red: {
   color: 'red',
  },
  baseText: { fontFamily: 'Cochin', },
  titleText: { fontSize: 20, fontWeight: 'bold', },
});

export default SimpleApp ;
