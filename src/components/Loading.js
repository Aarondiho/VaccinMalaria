
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Modal, View, Animated,Image, Dimensions, ImageBackground } from 'react-native';

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
      <LinearGradient
          colors ={['#92BC1D', '#149BD5','#92BC1D']}
          start={[0, 1]}
          end={[1, 0]}
          style={{ position :'absolute',top:0,width:width, heigth:height,bottom:-80}}
          blurRadius={2} 
          className={"w-84 -translate-y-20"}
        >
          <View className="font-sans mt-12 flex-1 justify-center items-center flex-row">
                {/* First Image */}
                <Image 
                  source={require('../../assets/mod1/Logo_1.png')} 
                  className="w-20 h-20" 
                />

                {/* Vertical Line */}
                <View className="h-16 w-[5px] bg-gray-400 mx-2" />

                {/* Second Image */}
                <Image 
                  source={require('../../assets/Gavi_Logo_B.png')} 
                  className="w-32 h-12" 
                />
              </View>
        
        
      </LinearGradient>
    </Modal>
  );
};

export default Loader;
