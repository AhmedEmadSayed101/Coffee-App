import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, SafeAreaView, Image, Dimensions, Text } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { themeColors } from "../theme";
const { width, height } = Dimensions.get("window");

export default function Favourites() {
  return (
    <View >
      <StatusBar />
            <Text>Favourites Screen</Text>
    </View>
  );
}
