import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Animated,
  TouchableOpacity,
  Dimensions,
  Pressable,
  PanResponder,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Colors } from '@/theme/color';
import { Fonts } from '@/theme/fonts';
const { height } = Dimensions.get('window');
const PRIMARY = '#8A2BE2';

export default function BottomFilterDialog({ visible, onClose }) {
  const translateY = useRef(new Animated.Value(height)).current;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('Karachi');
const [ageRange, setAgeRange] = useState<number[]>([20, 40]); // [min, max]
  const categories = ['Sports', 'Music', 'Travel', 'Food'];

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dy > 10,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) translateY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 120) {
          Animated.timing(translateY, {
            toValue: height,
            duration: 200,
            useNativeDriver: true,
          }).start(() => onClose());
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            stiffness: 150,
            damping: 20,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  if (!visible) return null;

  return (
    <Modal transparent animationType="none">
      {/* Overlay */}
      <Pressable style={styles.overlay} onPress={onClose} />

      {/* Dialog */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.dialog, { transform: [{ translateY }] }]}
      >
        <View style={styles.handle} />

        <Text style={styles.title}>Filter</Text>

        {/* Categories */}
        <Text style={styles.label}>Category</Text>
        <View style={styles.row}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.chip,
                selectedCategory === cat && { backgroundColor: Colors.primary },
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.chipText,
                  selectedCategory === cat && { color: '#fff' },
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Location */}
        <Text style={styles.label}>Location</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedLocation}
            onValueChange={(itemValue) => setSelectedLocation(itemValue)}
            style={{ height: 50 }}
          >
            <Picker.Item label="Karachi" value="Karachi" style={{fontFamily:Fonts.bold}} />
            <Picker.Item label="Lahore" value="Lahore" style={{fontFamily:Fonts.bold}} />
            <Picker.Item label="Islamabad" value="Islamabad" style={{fontFamily:Fonts.bold}} />
            <Picker.Item label="Peshawar" value="Peshawar" style={{fontFamily:Fonts.bold}} />
          </Picker>
        </View>

        {/* Age Range */}
        <Text style={styles.label}>Age Range: {ageRange}</Text>
         <MultiSlider
        values={ageRange}
        sliderLength={280}       // width of slider
        onValuesChange={setAgeRange}
        min={18}
        max={60}
        step={1}
        selectedStyle={{ backgroundColor: Colors.primary }}
        markerStyle={{ backgroundColor: Colors.primary }}
      />

        {/* Footer buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.resetBtn} onPress={onClose}>
            <Text style={{ color: PRIMARY, fontFamily:Fonts.bold  }}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyBtn} onPress={onClose}>
            <Text style={{ color: Colors.white, fontFamily:Fonts.bold  }}>Apply</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  dialog: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '70%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  handle: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
    fontFamily:Fonts.bold
  },
  label: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily:Fonts.medium
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  chip: {
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 25,
  },
  chipText: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily:Fonts.medium
    
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    fontFamily:Fonts.medium
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  resetBtn: {
    backgroundColor: Colors.ligthgray,
    padding: 15,
    borderRadius: 30,
    width: '45%',
    alignItems: 'center',
    fontFamily:Fonts.medium
  },
  applyBtn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 30,
    width: '45%',
    alignItems: 'center',
    fontFamily:Fonts.bold
  },
});
