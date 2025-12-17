import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '@/theme/color';
import BottomFilterDialog from '@/dialog/Bottomdialog';
import { Fonts } from '@/theme/fonts';

export default function Hometop() {
    const [open, setOpen] = useState(false);
    
  return (
    <View style={styles.container}>
      
      {/* LEFT SIDE */}
      <View style={styles.left}>
        <Image
          source={require('../../assets/images/user.jpg')}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.greeting}>Good Morning 👋</Text>
          <Text style={styles.name}>Faiz Ansari </Text>
        </View>
      </View>

      {/* RIGHT SIDE */}
      <TouchableOpacity>
        <Ionicons name="settings-outline" size={24} color={Colors.primary} onPress={() => setOpen(true)}/>
      </TouchableOpacity>
      <BottomFilterDialog
        visible={open}
        onClose={() => setOpen(false)}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:100,
    paddingVertical: 12,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24, // rounded-full
  },

  greeting: {
    fontSize: 14,
    color: Colors.gray, // gray
    fontFamily:Fonts.medium
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    fontFamily:Fonts.bold
  },
})
