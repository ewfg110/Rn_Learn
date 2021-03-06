import React,{Component} from 'react'
import {

   StyleSheet,
     Text,
     View,
     TextInput,
     Button,
     Image,
     FlatList,
     SectionList,
     PixelRatio,
     TouchableHighlight,

}from 'react-native'

export default class WelfarePage extends Component{


   // let functions=Arrays.from(["分拣","摘果仓下架","摘果仓调整","中间仓下架"]);
  static navigationOptions={
  headerTitle: '列表',
  header:null
  }
  constructor(props){
    super(props);
    this.state={
       title:"摘果",
       text:"",
       refreshing:true,
       dataList:[],
       page:1,
    };
    this._init();

  }

   _init=()=>{
    console.log("init");
  /*this.setState({
          text:"ddddddd"
        })*/

    fetch("http://gank.io/api/data/福利/10/1").then((res)=>res.json())
        .then((responseJSON)=>{
        this.setState({
          dataList:responseJSON.results,
          refreshing:false,
        })
        })
   }
      _loadMore=()=>{
       var index=this.state.page+1;
      fetch("http://gank.io/api/data/福利/10/"+index).then((res)=>res.json())
              .then((responseJSON)=>{
              var list=this.state.dataList.concat(responseJSON.results);
              this.setState({
                dataList:list,
                refreshing:false,
                page:index,
              })
              })
      }

   _itemView=({item})=>{

       return (
       <TouchableHighlight onPress={() => this.props.navigation.navigate('web',{url:item.url,title:item.who})}>
            <View style={styles.containers}>

                    <Image source={{uri: this._checkImages({item})}} style={styles.imageStyle} />
                    <Text style={styles.textStyle}>{item.who}</Text>
            </View>
       </TouchableHighlight>
       )
   }

   _checkImages=({item})=>{
        return typeof(item.url)=='undefined'?"https://facebook.github.io/react/img/logo_og.png":item.url
   }

  _extraUniqueKey = (item, index) => {
          return "index" + index + item;
      };
  render(){

      return (

           <View  style={{flex:1,justifyContent:'flex-start'}}>

                   <SectionList
                       onRefresh={this._init}
                       onEndReached={this._loadMore}
                       refreshing={this.state.refreshing}
                       renderItem={this._itemView}
                       sections={[
                         {data:this.state.dataList,key:"ss"}
                       ]}
                       keyExtractor={this._extraUniqueKey}
                       />
           </View>

      )
  }

}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  imageStyle: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          height: 180
      },
      textStyle: {

          marginLeft: 10,
          color: '#51c4fe',
          justifyContent: 'flex-end',
          textAlign:'right',
          flexDirection:'row',
          marginRight:10

      },
      containers: {
              backgroundColor: 'white',
              height: 200,
              marginHorizontal: 15,
              marginVertical: 5,
              borderRadius: 10,

          }
})