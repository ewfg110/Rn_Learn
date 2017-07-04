
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import CategroyPage from "./src/pages/CategroyPage"

import Login2 from "./src/pages/Login2"

import {StackNavigator, NavigationActions} from 'react-navigation';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Alert,
    View,
    TextInput,
    NavigatorIOS,
    Button
} from 'react-native';


export default class TestRN extends Component {
    
    
    
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
        
        fetch("http://116.228.118.218:9098/Account/LogOn?userName="+this.state.user+"&password="+this.state.pass).then((res)=>res.json())
        .then((responseJSON)=>{
              this.setState({
                            text:responseJSON.MESSAGE
                            })
              }).then(()=>{
                      
                      if(this.state.text=="请求成功"){
                      Alert.alert("提示","请求成功");
                      navigate('Categroy', { name: 'Categroy' });
                      }
                      })
        
    }
    
    
    
    render() {
        
        
        return (
                
                /*<View style={styles.continue}>
                 
                 <Text style={{fontSize:20,textAlign:'center',marginTop:20}}>摘果App</Text>
                 
                 <View style={{flexDirection:'row',alignItems:'center',marginLeft:10,marginTop:40}}>
                 <Text >账号:</Text>
                 <TextInput style={[styles.input,{flex:1,marginRight:10,marginLeft:10}]} underlineColorAndroid="transparent" placeholder="账号" onChangeText={(str)=>this.setState({user:str})}/>
                 </View>
                 <View style={{flexDirection:'row',alignItems:'center',marginTop:20,marginLeft:10}}>
                 <Text >密码:</Text>
                 <TextInput style={[styles.input,{flex:1,marginRight:10,marginLeft:10}]} underlineColorAndroid="transparent" placeholder="密码" secureTextEntry={true}  onChangeText={(str)=>this.setState({pass:str})}  />
                 </View>
                 <View  style={{marginTop:20,marginLeft:10,marginRight:10}} >
                 <Button  title="登  录" onPress={()=>{this.props.navigation.navigate('Categroy')}} />
                 </View>
                 <Text style={{textAlign:'center',marginTop:20}} >{this.state.text}</Text>
                 
                 </View>*/
                <Login2/>
                
                //<LoginPage/>
                );
    }
}




AppRegistry.registerComponent('TestRN', () => TestRN);

