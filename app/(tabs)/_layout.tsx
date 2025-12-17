import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/theme/color';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <Tabs
  screenOptions={{
    tabBarActiveTintColor: Colors.primary, // Active tab purple
    tabBarInactiveTintColor: Colors.gray, // Inactive tab gray
    headerShown: false,
    
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Home',
      tabBarIcon: ({ color }:{color:"string"}) => <Ionicons size={28} name="home" color={color} />,
    }}
  />
  <Tabs.Screen
    name="explore"
    options={{
      title: 'Explore',
      tabBarIcon: ({ color }:{color:"string"}) => <Ionicons size={28} name="compass" color={color} />,
    }}
  />
  <Tabs.Screen
    name="match"
    options={{
      title: 'Match',
      tabBarIcon: ({ color }:{color:"string"}) => <Ionicons size={28} name="heart" color={color} />,
    }}
  />
  <Tabs.Screen
    name="chats"
    options={{
      title: 'Chats',
      tabBarIcon: ({ color }:{color:"string"}) => <Ionicons size={28} name="chatbubble-ellipses" color={color} />,
    }}
  />
  <Tabs.Screen
    name="profile"
    options={{
      title: 'Profile',
      tabBarIcon: ({ color }:{color:"string"}) => <Ionicons size={28} name="person" color={color} />,
    }}
  />
  
</Tabs>

  );
}
