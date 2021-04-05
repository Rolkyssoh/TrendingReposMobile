import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const CustomHeader = ({title}) => {
    return(
        <View style={styles.custom_header}>
            <Text h4>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    custom_header:{
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f7f6f6'
    }
})

export default CustomHeader