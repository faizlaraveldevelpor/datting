import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Colors } from '@/theme/color';
import { Fonts } from '@/theme/fonts';

const { height } = Dimensions.get('window');

interface User {
  image: any;
  name: string;
  profession: string;
  distance: string;
  about: string;
  interests: string[];
}

const user: User = {
  image: require('../assets/images/user.jpg'),
  name: 'Sarah',
  profession: 'Designer',
  distance: '2 km away',
  about:
    'I love design, travel, and photography. Always curious to learn new things.',
  interests: ['Art', 'Travel', 'Photography', 'Music','Art', 'Travel', 'Photography', 'Music'],
};

const UserDetail = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* TOP IMAGE */}
      <Image source={user.image} style={styles.image} resizeMode="cover" />

      {/* INFO CARD */}
      <View style={styles.infoContainer}>
        {/* NAME + DISTANCE */}
        <View style={styles.topRow}>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.profession}>{user.profession}</Text>
          </View>

          <Text style={styles.distance}>{user.distance}</Text>
        </View>

        {/* ABOUT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.sectionContent}>{user.about}</Text>
        </View>

        {/* INTERESTS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.interestsContainer}>
            {user.interests.map((interest, index) => (
              <View key={index} style={styles.interestBadge}>
                <Text style={styles.interestText}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  image: {
    width: '100%',
    height: height * 0.6, // 🔥 60% screen height
  },

  infoContainer: {
    backgroundColor: Colors.background,
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24, // image ke upar overlap effect
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 28,
    color: Colors.black,
    fontFamily:Fonts.medium,
    
  },

  profession: {
    fontSize: 18,
    color: Colors.primary,
    marginTop: 1,
    fontFamily:Fonts.regular
  },

  distance: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
    fontFamily:Fonts.regular
  },

  section: {
    marginTop: 22,
  },

  sectionTitle: {
    fontSize: 18,
    marginBottom: 6,
    color: Colors.black,
    fontFamily:Fonts.bold
  },

  sectionContent: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 22,
    fontFamily:Fonts.regular
  },

  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },

  interestBadge: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 30,
    marginRight: 8,
    marginBottom: 8,
  },

  interestText: {
    color: '#fff',
    fontSize: 14,
    fontFamily:Fonts.medium
  },
});
