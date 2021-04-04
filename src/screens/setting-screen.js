import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import CustomHeader from '../components/custom-header.component';

const SettingScreen = () => {
    return(
        <>
        <CustomHeader title="Settings" />
            <View style={styles.setting_container}>
                <Text>Setting Screen</Text>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    setting_container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SettingScreen