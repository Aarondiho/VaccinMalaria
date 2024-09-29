
import React, { useEffect, useRef } from 'react';
import { Modal, View, Animated,Image, Dimensions } from 'react-native';

const Loader = () => {

  const glassRotation = useRef(new Animated.Value(0)).current;
  var { width, height } = Dimensions.get('window');

  useEffect(() => {
    // Function to create a synchronized "cheers" motion with only top rotation
    const animateGlasses = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(glassRotation, {
            toValue: 15, // Rotate to 45 degrees
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(glassRotation, {
            toValue: 0, // Rotate back to original position
            duration: 3000,
            useNativeDriver: true,
          }),
        ]),
        { iterations: -1 } // Infinite loop
      ).start();
    };

    animateGlasses();
  }, [glassRotation]);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={true}
    >
      <View className="font-sans flex-1 justify-center items-center bg-black/40">
        <View className="font-sans w-11/12 ">
        <View className="font-sans flex-row justify-center items-center mb-6">
      
          <Image source={require('../../assets/splash.png')} className="font-sans " style={{width:width, height:height}} />
        
      </View>
        </View>   
      </View>
    </Modal>
  );
};

export default Loader;
