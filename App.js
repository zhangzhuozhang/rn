import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,AsyncStorage,ToastAndroid,BackHandler,} from 'react-native';
import {Router, Overlay, Scene, Tabs, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon} from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import My from './components/My';
import Home from './components/Home';
import Store from './components/Store';
import MyDetail from './components/MyDetail';
import Login from './components/Login';
import SwiperPage from './components/SwiperPage';
const App=()=>{
    let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user.ret==1){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
    },[])
    let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
	
    return (
        <Router
            backAndroidHandler={() => {
                if (Actions.currentScene != 'login' && Actions.currentScene != '_home') {
                    Actions.pop();
                    return true;
                } else {
                    if (new Date().getTime() - now < 2000) {
                        BackHandler.exitApp();
                    } else {
                        ToastAndroid.show('确定要退出吗', 100);
                        now = new Date().getTime();
                        return true;
                    }
                }

            }}>
            <Modal  hideNavBar hideDrawerButton>
            <Overlay>
            <Lightbox key="lightbox">
            <Scene key="root">
                <Tabs
                    key='tabbar'
                    hideNavBar
                    activeTintColor="red"
                    inactiveTintColor="#4f4e4e"
                    tabBarStyle={{backgroundColor:'white'}}
                    >
                        {/* 首页 */}
                        <Scene key="home"
                        hideNavBar
                             title="首页"
                             icon={
                                 ({focused})=><Icon
                                       color={focused?'red':'#4f4e4e'}
                                       name="home"
                                />
                             } 
                             component={Home}      
                        />
                           
                        {/* 商品分类 */}
                        <Scene key="store"
                            hideNavBar
                             title="商品分类"
                             icon={
                                 ({focused})=><Icon
                                       color={focused?'red':'#4f4e4e'}
                                       name="appstore"
                                />
                             } 
                             component={Store}      
                        />
                            
                        {/* 购物车 */}
                        <Scene key="shop"
                            hideNavBar
                             title="购物车"
                             icon={
                                 ({focused})=><Icon
                                       color={focused?'red':'#4f4e4e'}
                                       name="shopping-cart"
                                />
                             } 
                             component={Store}      
                        />
                            
                        {/* 个人中心 */}
                    <Scene key="user"
                        title="个人中心"
                        icon={
                            ({ focused }) => <Icon
                                color={focused ? 'red' : '#4f4e4e'}
                                name="user"
                            />
                        }
                    >
                        <Scene key="my" hideNavBar component={My} />
                        <Scene
                            key="mydetail"
                            hideNavBar
                            title="我的发布"
                            titleStyle={{ textAlign: 'center' }}
                            component={MyDetail}
                        />
                    </Scene>
                </Tabs>
            </Scene>
            </Lightbox>
    
            </Overlay>
            <Scene initial={!isLogin} key="login" component={Login} />
            </Modal>
        </Router>
    )
}

const styles=StyleSheet.create({

})

export default App;