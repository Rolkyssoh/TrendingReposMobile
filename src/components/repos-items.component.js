import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons'

const ReposItems = React.memo (({item}) => {

    return(
        <View style={styles.repos_items_container}>
            <Text h4>{item.name}</Text>
            <Text>{item.description}</Text>
            <View style={styles.image_auteur_star}>
                <View style={styles.image_auteur}> 
                    <View style={styles.image_style}>
                        <Image 
                            source={{ uri: `${item.owner.avatar_url}`}}
                            style={styles.avatarImg}
                        />
                    </View>
                    <Text>{item.owner.login}</Text>
                </View>
                <Text>
                    <Ionicons name='star' size={17} color='black'/>
                    {item.stargazers_count}
                </Text>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    repos_items_container:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:35,
        paddingVertical:30,
        borderColor:'#8e8e93',
        borderBottomWidth:0.5
    },
    image_auteur_star:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        top:10
    },
    image_auteur:{
        flexDirection:'row',
        alignItems:'center'
    },
    image_style:{
        height:25,
        width:25,
        backgroundColor:'gray',
        marginRight:8
    },
    avatarImg:{
        height:'100%',
        width:'100%'
    }

})

export default ReposItems