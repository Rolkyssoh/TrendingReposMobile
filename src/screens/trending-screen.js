import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import CustomHeader from '../components/custom-header.component';
import ReposItems from '../components/repos-items.component';
import Axios from 'axios';

const TrendingScreen = () =>{

    const getRepos = async () =>{
        await Axios.get()
            .then(response => {
                console.log('response return : ', response)
            })
            .catch((error) => console.log('error getting repos : ', error.message))
    }

    return(
        <>
            <CustomHeader title="Trending Repos" />
            <View style={styles.trending_container}>
                <ReposItems />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    trending_container:{
        flex:1,
        backgroundColor:'white'
    },
})

export default TrendingScreen