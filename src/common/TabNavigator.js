import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {TabNavigator} from 'react-navigation';

import HomePage from "../pages/HomePage"
import ListsPage from "../pages/ListsPage"
import WelfarePage from "../pages/WelfarePage"
import AnimPage from "../pages/AnimPage"


const Navigator = TabNavigator({
    One:{
        screen: HomePage, navigationOptions: {
            title: "Home",
            titleStyle: {color: '#000000'},
            selectedTitleStyle: {color: '#1e90ff'}
        }
    },
    Two: {
        screen: ListsPage, navigationOptions: {
        title:"Android",
        titleStyle:{color:'#000000'},
        selectedTitleStyle:{color:'#1e90ff'}
        }
    },
    Three: {
        screen: WelfarePage, navigationOptions: {
        title:"福利",
        titleStyle:{color:'#000000'},
        selectedTitleStyle:{color:'#1e90ff'}
        }
    },
    four:{
        screen: AnimPage, navigationOptions: {
        title:"动画测试",
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