import React, { Component } from 'react'
import {View,Text,TextInput,StyleSheet,Dimensions,Image,ScrollView,Button} from 'react-native';
import { Icon} from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');

export default class Home extends Component {
    render() {
        return (
            <ScrollView>
            <View>
                {/* 搜索框 */}
                <View style={{flexDirection:'row',backgroundColor:'red',height:60,width:'100%',
                               justifyContent:'space-evenly',paddingTop:13
                            }}>
                    <View style={{
                            paddingLeft:7,
                            color:'#ffffff',
                            flexDirection:'row',
                            backgroundColor:'#fbb8b8',
                            width:'75%',
                            height:40,
                            borderRadius:30,
                            alignItems:'center',
                            flexDirection:'row'}}>
                      <Icon key='search' name='search' style={{color:'white',size:'lg',marginTop:5}}/>
                      <TextInput placeholder='请输入你要搜索的关键字'/>
                    </View>
                    <Icon key='ss' name="shopping-cart" size="lg" style={{color:'white'}}/>
                </View>
                {/* 轮播图 */}
                <Swiper style={{height:240}} loop autoplay>
                    <Image resizeMode='stretch' style={styles.image} source={require('../Images/lun-1.jpg')} />
                    <Image resizeMode='stretch' style={styles.image} source={require('../Images/lun-2.jpg')} />
                    <Image resizeMode='stretch' style={styles.image} source={require('../Images/lun-1.jpg')} />
                </Swiper>
                
                {/* 条列 */}
                <View style={{flexDirection:'row',backgroundColor:'white',height:90,alignItems:'center',paddingLeft:10,marginBottom:5}}>
                    <View style={{backgroundColor:"#ffcccc",width:60,height:60,borderRadius:60}}>
                    <Image source={require('../Images/icon_01.png')} style={{height:50,width:50}}/>
                    </View>
                    <Text style={{fontSize:20,color:'#333333',marginLeft:30}}>居家维修保养</Text>
                    <Icon name="right" style={{marginLeft:"50%"}}/>
                </View>

                <View style={{flexDirection:'row',backgroundColor:'white',height:90,alignItems:'center',paddingLeft:10,marginBottom:5}}>
                    <View style={{backgroundColor:"#ffe1b1",width:60,height:60,borderRadius:60}}>
                    <Image source={require('../Images/icon_02.png')} style={{height:45,width:45,marginTop:10,marginLeft:10}}/>
                    </View>
                    <Text style={{fontSize:20,color:'#333333',marginLeft:30}}>住宿优惠</Text>
                    <Icon name="right" style={{marginLeft:"57%"}}/>
                </View>

                <View style={{flexDirection:'row',backgroundColor:'white',height:90,alignItems:'center',paddingLeft:10,marginBottom:5}}>
                    <View style={{backgroundColor:"#bfe6a8",width:60,height:60,borderRadius:60}}>
                    <Image source={require('../Images/icon_03.png')} style={{height:50,width:50,marginTop:3,marginLeft:3}}/>
                    </View>
                    <Text style={{fontSize:20,color:'#333333',marginLeft:30}}>出行接送</Text>
                    <Icon name="right" style={{marginLeft:"57%"}}/>
                </View>

                <View style={{flexDirection:'row',backgroundColor:'white',height:90,alignItems:'center',paddingLeft:5}}>
                    <View style={{backgroundColor:"#c3ddf2",width:60,height:60,borderRadius:60}}>
                    <Image source={require('../Images/icon_04.png')} style={{height:50,width:50,marginTop:3,marginLeft:3}}/>
                    </View>
                    <Text style={{fontSize:20,color:'red',marginLeft:30}}>E族活动</Text>
                    <Icon name="right" style={{marginLeft:"57%"}}/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{backgroundColor:'red',width:'80%',height:50,textAlign:'center',color:'white',fontSize:20,paddingTop:10,borderRadius:10,marginTop:10}}>发布需求</Text>
                    <Text style={{color:'#767676',marginTop:10}}>OE族之家 版权所有</Text>
                </View>

                
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        flex:1
    }
})