import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const ReposItems = () => {
    return(
        <View style={styles.repos_items_container}>
            <Text>Repos Items</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    repos_items_container:{
        flex:1,
        backgroundColor:'white'
    }
})

export default ReposItems