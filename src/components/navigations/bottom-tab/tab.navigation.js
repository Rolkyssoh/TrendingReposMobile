import React from 'react';
import { StyleSheet, TouchableOpacity }  from 'react-native';
import { Text } from 'react-native-elements'; 
import Ionicons from 'react-native-vector-icons/Ionicons'

const TabNav = ({tab, icon, color, onPress}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && <Ionicons name={icon} size={22} color={color} />}
            <Text style={{color}}>{tab.name}</Text>
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:5
    }
})

export default TabNav
