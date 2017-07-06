import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Animated,
} from 'react-native'

export default class AnimPage extends Component{

    static navigationOptions={
        headerTitle:"动画测试",
        header:null,
    }

    constructor(props){
        super(props);
        this.state={
            fadeAnim:new Animated.Value(0),
        };
        this._rotateAnim()
    }

    /*旋转*/
    _rotateAnim(){
        Animated.timing(
            this.state.fadeAnim,{
                toValue:1,
                duration:10000,
            }
        ).start(()=>this._rotateAnim());
    }
    
    render(){
        let {fadeAnim}=this.state;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Animated.View
                style={{
                    width: 100, height: 100,
                    backgroundColor:'green',
                    transform:[
                        {rotateZ:fadeAnim.interpolate({ inputRange: [0, 1], 
                                outputRange: ['0deg', '360deg'] })},
                    ],
                    
                }}
                >
                    <Text >事事事事事事</Text>
                </Animated.View>
            </View>
        );
    }

}
