import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ReposItems from '../components/repos-items.component';

const TrendingScreen = () =>{
    return(
        <ReposItems />
    )
}

const styles = StyleSheet.create({
    home_container:{
        flex:1,
        backgroundColor:'white'
    }
})

export default TrendingScreen