import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/theme/color';
// agar expo-router use kar rahe ho
import { useRouter } from 'expo-router';

export default function StartScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={26} color="#111827" />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logo}
      />

      {/* Heading */}
      <Text style={styles.heading}>Let’s you in</Text>

      {/* Facebook Button */}
      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-facebook" size={22} color="#1877F2" />
        <Text style={styles.socialText}>Continue with Facebook</Text>
      </TouchableOpacity>

      {/* Google Button */}
      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-google" size={22} color="#DB4437" />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Sign in with password */}
      <TouchableOpacity style={styles.passwordButton}>
        <Text style={styles.passwordText}>Sign in with password</Text>
      </TouchableOpacity>

      {/* Sign up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    zIndex: 10,
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 30,
    resizeMode: 'contain',
  },

  heading: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#111827',
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingVertical: 14,
    marginBottom: 15,
    gap: 10,
  },

  socialText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  orText: {
    marginHorizontal: 10,
    color: '#9CA3AF',
    fontSize: 14,
  },

  passwordButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 25,
  },

  passwordText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  signupText: {
    color: '#6B7280',
    fontSize: 14,
  },

  signupLink: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
});
