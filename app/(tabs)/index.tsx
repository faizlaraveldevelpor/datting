import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import Hometop from '../../components/home/Hometop';
import Homebottom from '@/components/home/Homebottom';
export default function HomeScreen({navigation}:any) {
  return (
    <View style={styles.homeconatiner}>
      <Hometop />
      <Homebottom navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  homeconatiner: { marginLeft:15,marginRight:15,marginTop:30, paddingBottom:300},
  scrollContent: { padding: 16 },
  card: { backgroundColor: '#fff', marginBottom: 12, padding: 16, borderRadius: 8 },
});
