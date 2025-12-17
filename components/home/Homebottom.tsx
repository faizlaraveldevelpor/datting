import React, { useRef, useState } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/theme/color';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const initialUsers = [
  { id: 1, image: require('../../assets/images/user.jpg'), name: 'Sarah', profession: 'Designer', distance: '2 km away' },
  { id: 2, image: require('../../assets/images/user2.jpg'), name: 'John', profession: 'Developer', distance: '5 km away' },
  { id: 3, image: require('../../assets/images/user.jpg'), name: 'Alice', profession: 'Engineer', distance: '3 km away' },
  { id: 4, image: require('../../assets/images/user2.jpg'), name: 'Bob', profession: 'Artist', distance: '1 km away' },
];

const SWIPE_X_THRESHOLD = width * 0.3;
const SWIPE_Y_THRESHOLD = height * 0.25;

const Homebottom: React.FC = () => {
  const router = useRouter();
  const [users, setUsers] = useState(initialUsers);

  const position = useRef(new Animated.ValueXY()).current;
  const isAnimating = useRef(false);

  const rotate = position.x.interpolate({
    inputRange: [-width, 0, width],
    outputRange: ['-15deg', '0deg', '15deg'],
    extrapolate: 'clamp',
  });

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
    }).start();
  };

  const animateOut = (x: number, y: number) => {
    if (isAnimating.current) return;
    if (users.length === 0) return;

    isAnimating.current = true;

    Animated.timing(position, {
      toValue: { x, y },
      duration: 220,
      useNativeDriver: true,
    }).start(() => {
      setUsers(prev => prev.slice(1));

      requestAnimationFrame(() => {
        position.setValue({ x: 0, y: 0 });
        isAnimating.current = false;
      });
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !isAnimating.current,
      onMoveShouldSetPanResponder: () => !isAnimating.current,

      onPanResponderMove: (_, gesture) => {
        if (isAnimating.current) return;

        position.setValue({
          x: gesture.dx,
          y: Math.min(gesture.dy, 150),
        });
      },

      onPanResponderRelease: (_, g) => {
        if (isAnimating.current) return;

        if (g.dx > SWIPE_X_THRESHOLD) {
          animateOut(width * 1.2, g.dy);
        } else if (g.dx < -SWIPE_X_THRESHOLD) {
          animateOut(-width * 1.2, g.dy);
        } else if (g.dy < -SWIPE_Y_THRESHOLD) {
          animateOut(0, -height);
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  if (users.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.endText}>No more profiles</Text>
      </View>
    );
  }

  const currentUser = users[0];
  const nextUser = users[1];

  return (
    <View style={styles.container}>
      {/* NEXT CARD */}
      {nextUser && (
        <View style={[styles.card, { zIndex: 0 }]}>
          <Image source={nextUser.image} style={styles.image} />
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(128,0,128,0.8)']}
            style={styles.gradient}
          >
            <View style={styles.info}>
              <View>
                <Text style={styles.name}>{nextUser.name}</Text>
                <Text style={styles.profession}>{nextUser.profession}</Text>
              </View>
              <View style={styles.row}>
                <Entypo name="location-pin" size={18} color="#fff" />
                <Text style={styles.distance}>{nextUser.distance}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      )}

      {/* TOP CARD */}
      {currentUser && (
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.card,
            {
              zIndex: 1,
              transform: [
                { translateX: position.x },
                { translateY: position.y },
                { rotate },
              ],
            },
          ]}
        >
          <Image source={currentUser.image} style={styles.image} />
          <LinearGradient
            colors={[Colors.gradiantsColo1, Colors.gradiantsColo2]}
            style={styles.gradient}
          >
            <View style={styles.info}>
              <View>
                <Text style={styles.name}>{currentUser.name}</Text>
                <Text style={styles.profession}>{currentUser.profession}</Text>
              </View>
              <View style={styles.row}>
                <View style={styles.row}>
                  <Entypo name="location-pin" size={18} color="#fff" />
                  <Text style={styles.distance}>{currentUser.distance}</Text>
                </View>
                <TouchableOpacity onPress={() => router.push('userdetail')}>
                  <Entypo name="dots-three-vertical" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>
      )}

      {/* ACTION BUTTONS */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.iconBtn, styles.reject]}
          onPress={() => animateOut(-width * 1.2, 0)}
        >
          <AntDesign name="close" size={28} color="#ff4d4f" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconBtn, styles.superLike]}
          onPress={() => animateOut(0, -height)}
        >
          <FontAwesome name="star" size={26} color="#1e90ff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconBtn, styles.accept]}
          onPress={() => animateOut(width * 1.2, 0)}
        >
          <AntDesign name="heart" size={28} color="#52c41a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homebottom;

const styles = StyleSheet.create({
  container: { height:"100%" },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  image: { width: '100%', height: '100%' },
  actions: {
    position: 'absolute',
    bottom: -30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    zIndex: 10,
  },
  iconBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  reject: { borderColor: '#ff4d4f', borderWidth: 2 },
  superLike: { borderColor: '#1e90ff', borderWidth: 2 },
  accept: { borderColor: Colors.green, borderWidth: 2 },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  name: { color: '#fff', fontSize: 22, fontWeight: '700' },
  profession: { color: '#fff', fontSize: 16 },
  distance: { color: '#fff', fontSize: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  endText: { fontSize: 22, fontWeight: '600' },
});
