import { View, Text, Image, TouchableOpacity, TextInput,  Dimensions, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/coffeeCard';

const { width, height } = Dimensions.get('window');

import  {useState, useEffect} from 'react'
import {fetchData} from '../API' ;


export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(1);

const [type, setType]=useState("hot")   
const [allData, setAllData]=useState([])
useEffect(()=>{
  fetchData(type,setAllData)
});

    return (
        <View style={styles.container}>
            <StatusBar />
            <Image
                source={require('../assets/images/beansBackground1.png')}
                style={styles.headImageStyle}
            />
            <SafeAreaView >
            
                {/* bell icon and location section*/}
                <View style={styles.avatarSection}>
                    <View style={styles.locationPart}>
                        <MapPinIcon style={{ marginRight: 7 }} size="23" color='#d4a574' />
                        <Text style={styles.locationTextStyle}>
                            Sharabia , Egypt
                        </Text>
                    </View>
                    <BellIcon size="27" color="black" />
                </View>
                {/* search bar section*/}
                <View style={styles.searchBarSection}>
                    <View style={styles.textInputSection}>
                        <TextInput placeholder='Search' style={styles.inputFieldStyle} />
                        
                        <TouchableOpacity
                            style={styles.touchableOpacityStyle}>
                            <MagnifyingGlassIcon size="22" strokeWidth={2} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.buttonTypeContainer}>
    <TouchableOpacity
            onPress={() => setType("iced")}
            style={styles.buttonType}>
            <Text>
                Cold
            </Text>
          </TouchableOpacity>
    <TouchableOpacity 
            onPress={() => setType("hot")}
            style={styles.buttonType}>
            <Text>
                Hot
            </Text>
          </TouchableOpacity>
    </View>
                {/* Suggestions */}
                <Text style={styles.suggestionsSection}>Our Products</Text>

            </SafeAreaView>
            {/* coffee cards */}
            <View style={styles.coffeeCardsStyle}>
                <View>
                    <Carousel
                        containerCustomStyle={{ overflow: 'visible' }}
                        data={allData}
                        renderItem={({ item }) => <CoffeeCard item={item} />}
                        firstItem={1}
                        loop={true}
                        inactiveSlideScale={0.7}
                        inactiveSlideOpacity={0.9}
                        sliderWidth={width}
                        itemWidth={width * 0.6}
                        slideStyle={{ display: 'flex', alignItems: 'center' }}
                    />
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
        paddingTop: 20,
    },
    buttonTypeContainer: {
        paddingTop:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-around'
    },
    buttonType: {
    backgroundColor: "#DAA06D",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: 6,
    borderRadius: 100,
    width: 70,
    },
    // 
    headImageStyle: {
        height: height * 0.21,
        position: 'absolute',
        width: '100%',
        opacity: 0.1,
    },
    avatarSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    avatarImage: {
        height: 40,
        width: 40,
        borderRadius: 100,
    },
    locationPart: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationTextStyle: {
        fontWeight: '600',
        fontSize: 16,
    },
    // 
    searchBarSection: {
        marginHorizontal: 17,
        marginTop: height * 0.05,
    },
    textInputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 60,
        padding: 10,
        backgroundColor: '#e6e6e6',
    },
    inputFieldStyle: {
        padding: 4,
        flex: 1,
        fontWeight: '600',
        // color: '#6B7280b',
    },
    touchableOpacityStyle: {
        paddingRight: 7,
    },
    //
    suggestionsSection: {
        paddingHorizontal: 20,
        marginBottom: 20,
        marginTop: 40,
        fontSize: 24,
        // fontFamily :'',
        color: '#8c5319'

    },
    // 
    coffeeCardsStyle: {
        marginTop: 10,
        overflow: 'visible',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },





})