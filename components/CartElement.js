import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { View, SafeAreaView, Image, Dimensions, Text, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");


export default function CartElement({ item }) {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Image source={require('../assets/images/beansBackground2.png')} style={styles.headImageStyle} />
            <SafeAreaView >
                <Text style={styles.cartSection}>Cart Section</Text>
            </SafeAreaView>

            <View style={styles.oneItemSection}>
                <View>
                    <Text style={styles.nameItemStyle} >
                        {item.name}
                    </Text>
                    <View style={styles.priceAndNumber}>
                        <Text style={styles.priceItemStyle}>
                            $ {item.price}
                        </Text>
                        <Text style={styles.numberOFProducts}> {item.count} </Text>
                    </View>
                </View>

                <View>
                    <Image source={item.image} style={{ width: 80, height: 80 }} />
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
        paddingTop: 50,
    },
    // 
    headImageStyle: {
        height: height * 0.17,
        position: 'absolute',
        width: '100%',
        opacity: 0.8,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    cartSection: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',

    },
    // 
    oneItemSection: {
        marginTop: 70,
        backgroundColor: '#d4a574',
        marginHorizontal: 15,
        borderRadius: 15,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    nameItemStyle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        paddingBottom: 5,
    },
    priceItemStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
    },
    priceAndNumber: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    numberOFProducts: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 20,
        textAlign: 'center',
        padding: 5,
        color: '#8c5319',
        fontWeight: '900',
        fontSize: 16


    },


})
