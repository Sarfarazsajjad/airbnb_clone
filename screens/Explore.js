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
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

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
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex:1, backgroundColor: 'white', paddingTop: 20}}>
                            <Text style={{ fontSize:24, fontWeight:'700', paddingHorizontal: 20 }}>
                                What can we help you find, Sarfaraz?
                            </Text>
                        </View>

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