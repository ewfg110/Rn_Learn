import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {TabNavigator} from 'react-navigation';


import ListsPage from "../pages/ListsPage"
import WelfarePage from "../pages/WelfarePage"


const Navigator = TabNavigator({
    One: {
        screen: ListsPage, navigationOptions: {
        title:"Android",
        titleStyle:{color:'#000000'},
        selectedTitleStyle:{color:'#1e90ff'}
        }
    },
    Two: {
        screen: WelfarePage, navigationOptions: {
        title:"福利",
        titleStyle:{color:'#000000'},
        selectedTitleStyle:{color:'#1e90ff'}
        }
    }
}, {
    tabBarPosition: 'top',
    backBehavior: 'none',
    tabBarOptions: {
        indicatorStyle: {height: 2,backgroundColor:'#ffffff'},
        showLabel: true,
    }
});

const styles = StyleSheet.create({
    pageIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
});

export default Navigator