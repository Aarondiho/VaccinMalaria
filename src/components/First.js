import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

const First = () => {
  
  const navigation = useNavigation();

  const toggleRegister = () => {
    AsyncStorage.setItem('first', JSON.stringify(1));
    navigation.replace(ROUTES.LOGIN);
  };

  



  return (
    <ImageBackground 
                source={require('../../assets/mod1/Image1.png')}
                style={{ position :'absolute',top:0,width:width, heigth:height,bottom:-80}}
                blurRadius={2} 
                className={"w-84 -translate-y-20"}
                >
                  <ScrollView showsVerticalScrollIndicator={false}>
              <View className="bg-black/50 -mb-24">

              <Image source={require('../../assets/mod1/Logo_1.png')}
                  className="mx-4 mt-32 w-24 h-24" />

              <Text className="font-sans mt-2 text-2xl text-white mx-4">Vaccination contre le paludisme</Text>

                <Text className="font-sans mb-10 text-sm text-white  mt-10 w-84 mx-4 justify-end" style={{fontSize:18}}>
                  Bienvenue sur l’application dédiée à la formation sur la vaccination contre le paludisme.  
                </Text>

                <Text className="font-sans mb-10 text-sm text-white  w-84 mx-4 justify-end" style={{fontSize:18}}>
                  Dans un contexte où la lutte contre le paludisme reste une priorité de santé publique, 
                  il est essentiel que chaque professionnel de 
                  santé soit bien formé/ informé des protocoles et des meilleures pratiques liés à la vaccination.  
                </Text>

                <Text className="font-sans mb-10 text-sm text-white  w-84 mx-4 justify-end" style={{fontSize:18}}>
                Cette application innovante va vous aider à renforcer vos capacités en vous offrant une formation sur le vaccin contre le paludisme,
                 tout en vous évaluant afin de vous perfectionner dans la pratique.  
                </Text>

                <View className="mb-40"></View>

                <TouchableOpacity
                  style={styles.startButton}
                  onPress={toggleRegister}
                >
                  <Text style={styles.startButtonText} className="bg-input rounded-xl">Commencer</Text>
                </TouchableOpacity>

                <View className="mb-20"></View>

          </View>
          </ScrollView>
    </ImageBackground>
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
    bottom: 210,
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
