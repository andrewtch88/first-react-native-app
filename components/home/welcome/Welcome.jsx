import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity ,Image, FlatList } from 'react-native'
import { icons, SIZES } from '../../../constants';
import styles from './welcome.style'

const jobTypes = ["full-time", "part-time", "contractor"];
const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const [activeJobType, setActiveJobType] = useState("full-time");
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello John</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect job</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput} value={searchTerm} onChangeText={(text) => setSearchTerm(text)}  placeholder="what are you looking for"/>
        </View>


        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image style={styles.searchBtnImage}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabsContainer}>

        <FlatList data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
            }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}

          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      
      </View>

    </View>
  )
}

export default Welcome