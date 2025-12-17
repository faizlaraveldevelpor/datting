import { Colors } from '@/theme/color';
import { Fonts } from '@/theme/fonts';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const LocationPage = () => {
  const router=useRouter()
  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/premium-vector/location-travel-road-white-background-vector-illustration_547150-338.jpg?w=1480' }}
      style={styles.background}
    >
      {/* Top Section */}
      <View style={styles.topContainer}>
        <Text style={styles.locationText}>Location within 10 km</Text>

        <View style={styles.countryContainer}>
          <Text style={styles.countryText}>Selected Country</Text>
          <TouchableOpacity style={styles.changeButton} onPress={()=>router.push("Selectlocation")}>
            <Text style={styles.changeButtonText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.showMoreButton} onPress={()=>router.push('Showmore')}>
          <Text style={styles.showMoreText}>Show More</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  topContainer: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  locationText: {
    color: 'white',
    fontSize: 14, // Chota kar diya
    // marginBottom: 10,
    fontFamily:Fonts.regular
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryText: {
    color: 'white',
    fontSize: 16,
    fontFamily:Fonts.medium
  },
  changeButton: {
    backgroundColor: Colors.primary || '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 'auto', // Full right side push karne ke liye
  },
  changeButtonText: {
    color: Colors.white || '#000',
    fontFamily:Fonts.bold
    
  },
  bottomContainer: {
    alignItems: 'center',
  },
  showMoreButton: {
    backgroundColor: Colors.primary || '#fff',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
  },
  showMoreText: {
    color: Colors.white || '#000',
    fontSize: 16,
    fontFamily:Fonts.bold

  },
});

export default LocationPage;
