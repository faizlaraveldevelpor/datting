import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Colors } from '@/theme/color';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.jpg")}
          style={styles.logo}
        />
      </View>

      {/* User Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }}
          style={styles.profileImage}
        />
      </View>

      {/* VIP Card */}
      <View style={styles.vipCard}>
  {/* Left Content */}
  <View style={styles.vipContent}>
    <Text style={styles.vipTitle}>Enjoy all benefits</Text>

    <Text style={styles.vipDescription}>
      Get unlimited access to premium features and exclusive content.
    </Text>

    <TouchableOpacity style={styles.vipButton}>
      <Text style={styles.vipButtonText}>Get VIP</Text>
    </TouchableOpacity>
  </View>

  {/* Right Image */}
  <Image
    source={{
      uri: 'https://cdn-icons-png.flaticon.com/512/2583/2583344.png',
    }}
    style={styles.vipImage}
  />
</View>


      {/* Settings */}
      <View style={styles.settingsContainer}>
        
        {/* Dark Mode */}
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="moon" size={22} color="#333" />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        {/* Help Center */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialIcons name="help-outline" size={22} color="#333" />
            <Text style={styles.settingText}>Help Center</Text>
          </View>
          <Entypo name="chevron-right" size={22} color="#999" />
        </TouchableOpacity>

        {/* Invite Friend */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="person-add-outline" size={22} color="#333" />
            <Text style={styles.settingText}>Invite Friend</Text>
          </View>
          <Entypo name="chevron-right" size={22} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="person-add-outline" size={22} color="#333" />
            <Text style={styles.settingText}>Settings</Text>
          </View>
          <Entypo name="chevron-right" size={22} color="#999" />
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.settingItem} onPress={()=>router.push("/startScreen")}>
          <View style={styles.settingLeft}>
            <Ionicons name="log-out-outline" size={22} color="red" />
            <Text style={[styles.settingText, { color: 'red' }]}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    paddingHorizontal: 20,
  },

  logoContainer: {
    marginTop: 40,
    alignItems: 'flex-start',
  },

  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },

  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 25,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  vipCard: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: Colors.primary,
  borderRadius: 18,
  padding: 18,
  marginBottom: 30,
  elevation: 4,
},

vipContent: {
  flex: 1,
},

vipTitle: {
  fontSize: 18,
  fontWeight: '700',
  color: Colors.white,
  marginBottom: 6,
},

vipDescription: {
  fontSize: 14,
  color: Colors.white,
  marginBottom: 14,
},

vipButton: {
  alignSelf: 'flex-start',
  backgroundColor: Colors.white,
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 10,
},

vipButtonText: {
  color: Colors.primary,
  fontWeight: '600',
  fontSize: 14,
},

vipImage: {
  width: 70,
  height: 70,
  resizeMode: 'contain',
  marginLeft: 10,
},

  settingsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 15,
  },

  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  settingText: {
    fontSize: 15,
    color: Colors.black,
  },
});
