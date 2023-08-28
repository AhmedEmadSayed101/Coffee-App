import { View, Text, TouchableOpacity, Image, Dimensions, Platform, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { ShoppingBag } from 'react-native-feather';
const { width, height } = Dimensions.get('window');


export default function ProductScreen(props) {
    const item = props.route.params;
    const [size, setSize] = useState('small');
    const navigation = useNavigation();
    const [cart, setCart] = useState([]);
    const cartList = [];
    function addElements() {
        item.count = counter
        cartList.push(item)
        setCart(cartList)
        navigation.navigate("cart", { 'cart': cartList });
        console.log(cartList);
    }

    const [counter, setCounter]=useState(1)

    const minus =() => {
        if (counter <= 1) {
            setCounter(1)
        } else {
            setCounter(counter-1)
        }
    }

    const plus = () => {
        setCounter(counter+1)
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={require('../assets/images/beansBackground2.png')}
                style={styles.headImageStyle}
            />

            <SafeAreaView>
                <View style={styles.appBarStyling}>
                    <TouchableOpacity style={{ borderRadius: 100, }} onPress={() => navigation.goBack()}>
                        <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchableOpacityStyle}>
                        <HeartIcon size="24" color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.imgItemStyle}>
                    <Image source={{uri: item.image}} style={{ marginTop: 60, height: 190, width: 190, borderRadius: 200 }} />
                </View>

                <View style={styles.ratingSection}>
                    <StarIcon size="15" color="white" style={{ marginRight: 5 }} />
                    <Text style={styles.ratingSectionText}>{item.stars}</Text>
                </View>

                <View style={styles.nameAndPriceSection}>
                    <Text style={styles.nameItemStyle} >
                        {item.title}
                    </Text>
                    <Text style={styles.priceItemStyle}>
                        $ {item.price}
                    </Text>
                </View>

                <View style={styles.sizeSection}>
                    <Text style={{ color: themeColors.text, fontSize: 17, fontWeight: '700', marginBottom: 15 }}>Coffee size</Text>
                    <View style={styles.sizeButtonsStyle}>
                        <TouchableOpacity
                            onPress={() => setSize('small')}
                            style={{ backgroundColor: size == 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.07)', padding: 10, paddingHorizontal: 30, borderRadius: 100, justifyContent: 'center' }}
                        >
                            <Text style={size == 'small' ? color = 'white' : color = "gray-700"}>Small</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchableOpacityStyle}>
                            <HeartIcon size="24" color="white" />
                        </TouchableOpacity>
                    </View>
                    </View>

                <View style={styles.itemDescriptionSection}>
                    <Text style={{ color: themeColors.text, fontSize: 20, fontWeight: '600', paddingBottom: 5 }}>About</Text>
                    <Text style={{ color: 'grey', fontWeight: '600', fontSize: 16, lineHeight: 30 }}>
                        {item.description}
                        
                    </Text>
                    {item.ingredients.map((i) => (
                        <Text style={{ color: 'grey', fontWeight: '600', fontSize: 16, lineHeight: 30 }}>
                        {i}
                    </Text>
                    ))}
                    
                </View>
            </SafeAreaView>

                    <View style={styles.ratingSection}>
                        <StarIcon size="15" color="white" style={{ marginRight: 5 }} />
                        <Text style={styles.ratingSectionText}>{item.stars}</Text>
                    </View>

                    <View style={styles.nameAndPriceSection}>
                        <Text style={styles.nameItemStyle} >
                            {item.name}
                        </Text>
                        <Text style={styles.priceItemStyle}>
                            $ {item.price * counter}
                        </Text>
                    </View>

                    <View style={styles.counterSection}>
                        <TouchableOpacity  onPress={minus}>
                            <MinusIcon size="20" strokeWidth={3} color={themeColors.text} />
                        </TouchableOpacity>
                        <Text style={{ color: themeColors.text, fontWeight: '900', paddingHorizontal: 10, fontSize: 20 }} >{counter}</Text>
                        <TouchableOpacity onPress={plus}>
                            <PlusIcon size="20" strokeWidth={3} color={themeColors.text} />
                        </TouchableOpacity>
                    </View>
                </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
        paddingTop: 20,
    },
    // 
    headImageStyle: {
        position: 'absolute',
        width: '100%',
        opacity: 0.8,
        height: 265,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    appBarStyling: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    touchableOpacityStyle: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
        padding: 7,
    },
    imgItemStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    // 
    ratingSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        borderRadius: 50,
        padding: 6,
        paddingHorizontal: 2,
        marginHorizontal: 20,
        width: 70,
        backgroundColor: '#d4a574',

    },
    ratingSectionText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    //   
    nameAndPriceSection: {
        marginTop: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,

    },
    nameItemStyle: {
        fontSize: 24,
        fontWeight: '600',
        color: themeColors.text,
    },
    priceItemStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: themeColors.text,
    },
    // 
    sizeSection: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    sizeButtonsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    // 
    itemDescriptionSection: {
        paddingHorizontal: 20,
        marginTop: 10,
    },
    // 
    lastSectionInProductScreen: {
        marginTop: 22,
        paddingHorizontal: 20,
    },
    orderSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    volumeSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    volumeSectionText: {
        fontSize: 18,
        color: '#616161',
        fontWeight: '600',
        opacity: 0.7,
    },
    volumeSectionItem: {
        fontWeight: '600',
        color: 'black',
        fontSize: 14,
        paddingLeft: 5,
    },
    counterSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
        borderColor: '#3C2A21',
        borderWidth: 1,
        borderRadius: 9999,
        paddingVertical: 9,
        paddingHorizontal: 15,
    },
    // 
    buyButtonSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 40,
    },
    shoppingBag: {
        padding: 10,
        borderRadius: 100,
        borderColor: 'gray-400',
        borderWidth: 1

    },
    buyButtonStyle: {
        backgroundColor: themeColors.bgLight,
        borderRadius: 100,
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
        paddingVertical: 15


    },






});