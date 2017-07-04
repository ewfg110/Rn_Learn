import React from 'react';
import {
        StyleSheet,
        Image,

        } from 'react-native';
import {TabNavigator} from 'react-navigation';


import ListsPage from "../pages/ListsPage"
import WelfarePage from "../pages/WelfarePage"

 export default class HomePage extends Component{


   render(){
       return (
         <View style={{flex:1}}>

                         <TabNavigator>
                             <TabNavigator.Item
                             title:"Android"
                             titleStyle:{color:'#000000'}
                             selectedTitleStyle:{color:'#1e90ff'}
                             >
                               <ListsPage/>
                             </TabNavigator.Item>
                             <TabNavigator.Item
                             title:"福利"
                             titleStyle:{color:'#000000'}
                             selectedTitleStyle:{color:'#1e90ff'}
                             >
                               <WelfarePage/>
                             </TabNavigator.Item>
                         </TabNavigator>
                     </View>

       );

   }

}



const styles = StyleSheet.create({
    pageIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
});

