import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

const First = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const navigation = useNavigation();

  const toggleRegister = () => {
    AsyncStorage.setItem('first', JSON.stringify(1));
    navigation.replace(ROUTES.LOGIN);
  };

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  const handleSwipe = (direction) => {
    if (currentIndex === 0 && direction === 'left') {
      // Handle swipe left on the first slide
      console.log('Swipe left on the first slide');
    } else if (currentIndex === 2 && direction === 'right') {
      // Handle swipe right on the last slide
      console.log('Swipe right on the last slide');
    }
  };



  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      showsButtons={true}
      onIndexChanged={handleIndexChanged}
      ref={swiperRef}
      onMomentumScrollEnd={(e, state, context) => {
        const { index } = state;
        const direction = context?.deltaX > 0 ? 'right' : 'left';
        handleSwipe(direction);
      }}
    >
    
      <View key={1} style={styles.slide}>
        <Image source={ios ? require('../../assets/slide-1.png') : require('../../assets/slide-1.png')} style={styles.image} />
        <TouchableOpacity
          style={styles.startButton}
          onPress={toggleRegister}
        >
          <Text style={styles.startButtonText} className="bg-input rounded-xl">Commencer</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    right: 20,
  },
  closeText: {
    fontFamily: 'sans-serif',
    color: 'black',
    fontSize: 24,
  },
  startButton: {
    position: 'absolute',
    bottom: 70,
    right: 30,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
  },
  startButtonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
});

export default First;
