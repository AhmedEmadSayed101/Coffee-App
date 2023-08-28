import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform, StyleSheet,Button  } from 'react-native'
import  {useState, useEffect} from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';
const { width, height } = Dimensions.get('window');
import {fetchData} from '../API' ;



 

export default function CoffeeCard({ item }) {
  

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
   
      <View style={styles.imageSection}>
        <Image
          source={{uri: item.image}}
          style={styles.cardSectionImg}
        />
      </View>
      <View style={styles.descriptionSection}>
        <View style={styles.descriptionSectionText}>
          <Text style={styles.descriptionSectionItemName}>
            {item.title}
          </Text>
          <View style={styles.ratingSection}>
            <StarIcon size="15" color="white" style={{ marginRight: 5 }} />
            <Text style={styles.ratingSectionText}>{item.stars}</Text>
          </View>
          <View style={styles.volumeSection}>
            <Text style={styles.volumeSectionText}>
              Volume
            </Text>
            <Text style={styles.volumeSectionTextItem}> {item.volume}</Text>
          </View>
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.priceTextStyle}>$ {item.price}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product', { ...item })}
            style={styles.priceSectionTouchableOpacity}>
            <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    backgroundColor: '#8c5319',
    height: height * 0.45,
    width: width * 0.60,
  },
  // 
  imageSection: {
    borderRadius:200,
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardSectionImg: {
    height: 150,
    width: 150,
    borderRadius:200,
    shadowOpacity:1,
    shadowColor:"black"
  },
  // 
  descriptionSection: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  descriptionSectionText: {
    marginTop: 3,
  },
  descriptionSectionItemName: {
    marginTop: 7,
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    paddingBottom: 10,
  },
  ratingSection: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: 6,
    borderRadius: 100,
    width: 70,

  },
  ratingSectionText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  // 
  volumeSection: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 6,
    zIndex: 10,
    marginHorizontal: 3,
  },
  volumeSectionText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    opacity: 0.6,
  },
  volumeSectionTextItem: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600'
  },
  // 
  priceSection: {
    backgroundColor: 'transparent',
    shadowColor: themeColors.bgDark,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal : 20,
  },
  priceTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  priceSectionTouchableOpacity: {
    shadowColor: 'black',
    padding: 7,         
    backgroundColor: 'white', 
    borderRadius: 9999,
  },


});