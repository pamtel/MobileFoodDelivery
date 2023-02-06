import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from "react-native-maps-directions"
import { COLORS, FONTS, SIZES, icons } from '../constants'
import { Iprops } from './Restaurant'


const GOOGLE_API_KEY = process.env.REACT_APP_WEATHER_API_KEY as string;

export const OrderDelivery = ({ route, navigation }: Iprops) => {
  const mapView = React.useRef()

  let { restaurant, currentLocation } = route.params;

  // console.log('res', restaurant, currentLocation)

  let fromLocation = currentLocation.gps
  let toLocation = restaurant.location
  let streetName = currentLocation.streetName

  let region = {
    latitude: (fromLocation.latitude + toLocation.latitude) / 2,
    longitude: (fromLocation.longitude + toLocation.longitude) / 2,
    latitudeDelta: Math.abs(fromLocation.latitude - toLocation.latitude) * 2,
    longitudeDelta: Math.abs(fromLocation.longitude - toLocation.longitude) * 2,
  }

  useEffect(() => {

  }, [])

  const renderMap = () => {
    const destinationMaker = () => {
      return (
        <Marker
          coordinate={toLocation}
        >
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.white
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.pin}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white,
                }}
              />
            </View>
          </View>
        </Marker>
      )
    }
    const carIcon = () => {
      return (
        <Marker
          coordinate={toLocation}
          anchor={{ x: 0.5, y: 0.5 }}
          flat={true}
        // rotation
        >
          <Image
            source={icons.car}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </Marker>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{ flex: 1 }}
        >
          <MapViewDirections
            origin={fromLocation}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
          />
          {destinationMaker()}
          {carIcon()}
        </MapView>
      </View>
    )
  }


  return (
    <View style={{ flex: 1 }}>
      {renderMap()}
    </View>
  )
}