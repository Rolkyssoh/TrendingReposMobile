import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import TabNav from './tab.navigation';

const TabBar = ({state, navigation}) => {
    const [selected, setSelected] = useState('Trending')
    const {routes} = state;
    const renderColor = (currentTab) => (currentTab === selected ? '#0076ff': '#8e8e93')

    const handlePress = (activeTab, index) => {
        if(state.index !== index){
            setSelected(activeTab)
            navigation.navigate(activeTab)
        }
    }

    return(
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map((route, index) => (
                        <TabNav 
                            tab={route}
                            icon = {route.params.icon}
                            color={renderColor(route.name)}
                            onPress={() => handlePress(route.name, index)}
                            key={route.key}
                        />
                    ))
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        bottom:0,
        width:'100%',
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        backgroundColor:'#f7f6f6',
        borderTopColor:'#8e8e93',
        borderTopWidth:0.5
    }
})

export default TabBar