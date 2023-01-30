import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Animated } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { icons, COLORS, SIZES, FONTS } from '../constants'

export const Restaurant = ({ route }: any) => {
  const [restaurant, setRestaurant] = useState<null>(null)
  const [currentLocation, setCurrentLocation] = useState<null>(null)

  useEffect(() => {
    let { item, currentLocation } = route.params;
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* {renderHeader()} */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  }
})