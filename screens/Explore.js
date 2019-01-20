import React, { Component } from "react";
import { 
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ScrollView,
    Text,
    Image,
    Dimensions
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../screens/components/Explore/Category'

const { width, height } = Dimensions.get('window')

class Explore extends React.Component {
    componentWillMount(){
        this.startHeaderHeight = 80;
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* Header */}
                    <View style={{ height:this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        {/* SearchBar */}
                        <View style={{ flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20, shadowOffset: { width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.2, elevation:1, marginTop: Platform.OS == 'android' ? 30 : null}}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10}} />
                            <TextInput 
                                underlineColorAndroid="transparent"
                                placeholder="Try Karachi"
                                placeholderTextColor="grey"
                                style={{ flex:1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                        {/* end of SearchBar */}
                    </View>
                    {/* end of Header */}
                    {/* root scrollview */}
                    <ScrollView scrollEventThrottle={16}>
                        {/* main view container inside root scrollview */}
                        <View style={{ flex:1, backgroundColor: 'white', paddingTop: 20}}>
                            <Text style={{ fontSize:24, fontWeight:'700', paddingHorizontal: 20 }}>
                                What can we help you find, Sarfaraz?
                            </Text>
                            {/* first horizontal scrollable component view container */}
                            <View style={{ height: 130, marginTop: 20}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category imageUri={require('../assets/home.jpg')} name="Home"/>
                                    <Category imageUri={require('../assets/experiences.jpg')} name="Experiences"/>
                                    <Category imageUri={require('../assets/restaurant.jpg')} name="Restaurant"/>
                                </ScrollView>
                            </View>
                            {/* end of first horizontal scrollable component view container */}
                            
                            {/* second section */}
                            <View style={{ marginTop: 40, paddingHorizontal: 20}}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for quality & comfort
                                </Text>
                                <View style={{ widht: width - 40, height: 200, marginTop: 20 }}>
                                    <Image style={{flex: 1, height: null, width: null,resizeMode: 'cover', borderRadius: 5, borderWidth: 1,borderColor: '#dddddd' }} source={require('../assets/home.jpg')} />
                                </View>
                            </View> 
                            {/* end of second section */}
                        </View>
                        {/* end of main view container */}

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});