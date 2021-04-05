import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import CustomHeader from '../components/custom-header.component';
import ReposItems from '../components/repos-items.component';
import Axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const TrendingScreen = () =>{
    const [repositories, setRepositories] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const arraySize = Math.floor(repositories.length/30)

    useEffect(() => {
        getRepos(arraySize +1)
    },[])

    const getRepos = async (pageNumber) =>{
        setLoading(true)
        const url = `https://api.github.com/search/repositories?q=created:>2021-03-05&sort=stars&order=desc&page=${pageNumber}`
        await Axios.get(url)
            .then(response => {
                setTotalCount(response.data.total_count)
                setRepositories([...repositories ,...response.data.items])
                setLoading(false)
                
            })
            .catch((error) => {
                console.log('error getting repos : ', error.message);
                setLoading(false)
            })
    }

    return(
        <>
            <CustomHeader title="Trending Repos" />
            <View style={styles.trending_container}>
                <FlatList 
                    data={repositories}
                    keyExtractor={(item)=>item.id.toString()}
                    extraData={repositories.id}
                    onEndReachedThreshold={0.5}
                    onEndReached={() =>{
                        if(repositories.length<totalCount){
                            getRepos(arraySize + 1)
                        }
                    }}
                    renderItem={({item}) => <ReposItems item={item} />}
                />
                {loading && <ActivityIndicator size="large" color="#0076ff" />}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    trending_container:{
        flex:1,
        backgroundColor:'white',
        marginBottom:55
    },
})

export default TrendingScreen