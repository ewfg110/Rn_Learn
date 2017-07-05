/**
 * Created by over on 17/7/5.
 */
import React,{Component} from 'react'
import  {
    StyleSheet,
    Text,
    View,
    SectionList,
    Image,
    TouchableHighlight,

} from 'react-native'

export default class HomePage extends Component{

    static navigationOptions={
        header:null,
    }

    constructor(props){
        super(props);
        this.state={
            dataList:[],
            refreshing:true,
            date:"ss",
            headerImg:"https://facebook.github.io/react/img/logo_og.png",
            androidList:[],
            iosList:[],
            frontEndList:[],
            recommendList:[],
            welfareList:[],
            videoList:[],
            expendList:[],
        }
        this._init();
    }

    _init=()=>{
        fetch("http://gank.io/api/day/history").then((res)=>res.json())/*加载拥有资源的历史列表获取第一天*/
           .then((response)=>{
            this.setState({
              date:response.results[0],
            })
           }).then(()=>{
             let url="http://gank.io/api/day/"+this.state.date.split("-")[0]+"/"+this.state.date.split("-")[1]+"/"+this.state.date.split("-")[2];
             fetch(url).then((res)=>res.json())
                 .then((response)=>{
                      this.setState({
                          refreshing:false,
                          androidList:this._checkList(response.results.Android),
                          iosList:this._checkList(response.results.iOS),
                          frontEndList:this._checkList(response.results.前端),
                          recommendList:this._checkList(response.results.瞎推荐),
                          welfareList:this._checkList(response.results.福利),
                          headerImg:response.results.福利[0].url,
                          videoList:this._checkList(response.results.休息视频),
                          expendList:this._checkList(response.results.拓展资源),
                      })
                 })
           })
    }

    /*检测是否为list数组*/
    _checkList=(list)=>{
        return typeof list === 'undefined'?[]:list;
    }

    _checkImages=({item})=>{
        return typeof(item.images)=='undefined'?"https://facebook.github.io/react/img/logo_og.png":item.images[0]
    }

    /*最顶部*/
    _handleHeader = () => {
        return (
            <Image source={{uri: this.state.headerImg}}style={[{ height: 200}, styles.imageStyle]}>
                <Text style={styles.dateStyle}>{this.state.date}</Text>
            </Image>
        );
    }
    /*sectionlist头部*/
    _handleSectionHeader = ({section}) => {
        return <Text style={styles.sectionHeader}>{section.key}</Text>
    };
    /*子项数据*/
    _handleListItem = ({item}) => {
        return (
            <TouchableHighlight underlayColor='#51c4fe' onPress={() => this.props.navigation.navigate('web',{url:item.url,title:item.desc})}>
                <View style={styles.itemContainers}>
                    <Image source={{uri: this._checkImages({item})}} style={styles.itemImageStyle} />
                    <Text style={styles.itemTextStyle}>{item.who}</Text>
                </View>
            </TouchableHighlight>
        )
    };

    render(){

         return (
             <View style={styles.container}>

                <SectionList
                 refreshing={this.state.refreshing}
                 onRefresh={this._init}
                 renderSectionHeader={this._handleSectionHeader}
                 ListHeaderComponent={this._handleHeader}
                 renderItem={this._handleListItem}
                 sections={
                    [
                        {data:this.state.androidList,key:"Android"},
                        {data:this.state.iosList,key:"IOS"},
                        {data:this.state.frontEndList,key:"前端"},
                        {data:this.state.recommendList,key:"瞎推荐"},
                        {data:this.state.expendList,key:"拓展资源"},
                        {data:this.state.videoList,key:"休息视频 "},
                    ]
                 }
                 keyExtractor={(index,item)=>"index"+index+item}


                />
             </View>
         )
    }

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    loadingStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    dateStyle: {
        fontSize: 18,
        backgroundColor: '#ebebeb',
        opacity: 0.7,
        textAlign: 'right',
        color: '#9c9c9c'
    },
    sectionHeader: {
        color: '#9c9c9c',
        textAlign: 'center',
        fontSize: 18
    },
    itemImageStyle: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: 180
    },
    itemTextStyle: {
        marginLeft: 10,
        color: '#51c4fe',


    },
    itemContainers: {
        backgroundColor: 'white',
        height: 200,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
    }
})