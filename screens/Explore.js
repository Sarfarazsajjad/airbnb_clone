import React, { Component } from "react";
import { 
    View,
    TextInput,
    StyleSheet,
    SafeAreaView
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

class Explore extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* Header */}
                    <View style={{ height:80, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        {/* SearchBar */}
                        <View style={{ flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20, shadowOffset: { width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.2, elevation:1}}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10}} />
                            <TextInput 
                                underlineColorAndroid="transparent"
                                placeholder="Try Karachi"
                                placeholderTextColor="grey"
                                style={{ flex:1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
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