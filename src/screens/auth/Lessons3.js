import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../constants';

const Lessons3 = () => {


  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window');

  const [screen1, setScreen1] = useState(1)

  
  const [showFirst, setShowFirst] = useState(false);




  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
       
        const initializeData = async () => {
          const storedScreen1 = await AsyncStorage.getItem("screen3");
          
          setScreen1(JSON.parse(storedScreen1));
          
        };
    
        initializeData();
  
      });
    
      return unsubscribe;
    }, [navigation]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowFirst(true);
      }, 1000); // 2000ms = 5 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, []);
  


    const goToNextSlide = () =>{


      AsyncStorage.setItem("screen3", JSON.stringify(screen1 + 1));
      setScreen1(screen1 + 1)

      navigation.replace(ROUTES.LESSONS3)


    }

    const goToPreviousSlide = () =>{


      AsyncStorage.setItem("screen3", JSON.stringify(screen1 - 1));
      setScreen1(screen1 - 1)

      navigation.replace(ROUTES.LESSONS3)


    }

    
  



    return (
      <KeyboardAvoidingView
            
            style={{ flex: 1 }}
            >
  
        {
        screen1 == 1?
  
          <ImageBackground 
                  source={require('../../../assets/mod1/Image1.png')}
                  style={{ position :'absolute',top:0,width:width, heigth:height,bottom:-80}}
                  blurRadius={0.6} 
                  className={"w-full -translate-y-20"}
                  >
                  
                    <Image source={require('../../../assets/mod1/Logo_1.png')}
                    className="mt-28 mx-4" />
                    <View>
                      <Text className="font-sans text-4xl text-white mt-24 mx-4">Modules de formation des prestataires sur le vaccin contre le paludisme
                      </Text>

                      <Text className="font-sans text-4xl text-white mt-24 mx-4">  5 & 6
                      </Text>
                    </View>
  
              <TouchableOpacity
                onPress={() =>goToNextSlide()}
                style={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  padding: 10,
                  borderRadius: 5,
                }}
                className="bg-black/60"
              >
                <Text style={{ color: '#fff' }}>Suivant</Text>
              </TouchableOpacity> 
  
            </ImageBackground>
            
  
            :screen1 == 2?
  
           <View >
            <View className="font-sans flex-row items-center mb-4 mt-10">
            <Image source={require('../../../assets/mod1/objectif.png')}
             style= {{width:80,height:80}}
             className="mx-4"/>
          <Text className="font-sans p-2 -mt-4  font-bold text-text-white bg-[#8A1651E6] ">
          OBJECTIFS D‘APPRENTISSAGE
          </Text>
            
          </View>
  
          <ScrollView showsVerticalScrollIndicator={false} className="bg-bg-one p-3 -mb-10">
          
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-8">
            
              <View  style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 24 }} className="bg-input mx-2 ">
                  <Text className="bg-purple-500 p-2 text-center mx-16 text-white mt-2"  style= {{borderRadius:48}} >1</Text>
                  <Text className="text-center mt-4 mx-2">Comprendre les exigences en matière de stockage du vaccin et de chaîne du froid
                  </Text>
                </View>
  
              <View   style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 12 }} className="bg-input mr-3 ">
                <Text className="bg-red-500  p-2 text-center mx-16 text-white mt-2" style= {{borderRadius:48}} >2</Text>
                <Text className="text-center mt-4 mx-2">Discuter des caractéristiques du vaccin contre le paludisme (RTS,S/AS01)
                </Text>
              </View>
  
              <View  style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 24 }} className="bg-input mx-2 ">
                <Text className="bg-green-500 p-2 text-center mx-16 text-white mt-2"  style= {{borderRadius:48}} >3</Text>
                <Text className="text-center mt-4 mx-2">Comprendre les exigences en matière de stockage du vaccin et de chaîne du froid
                </Text>
              </View>
              <View   style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 12 }} className="bg-input mr-3 ">
                <Text className="bg-yellow-500  p-2 text-center mx-16 text-white mt-2" style= {{borderRadius:48}} >4</Text>
                <Text className="text-center mt-4 mx-2">Décrire le calendrier de vaccination recommandé contre le paludisme 
  
                </Text>
              </View>
  
              <View  style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 24 }} className="bg-input mx-2 ">
                <Text className="bg-purple-500 p-2 text-center mx-16 text-white mt-2"  style= {{borderRadius:48}} >5</Text>
                <Text className="text-center mt-4 mx-2">Décrire les contre-indications de la vaccination contre le paludisme        
                </Text>
              </View>
  
              <View   style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 12 }} className="bg-input mr-3 ">
                <Text className="bg-yellow-900  p-2 text-center mx-16 text-white mt-2" style= {{borderRadius:48}} >6</Text>
                <Text className="text-center mt-4 mx-2">Comprendre la technique d'administration du vaccin contre le paludisme
  
                </Text>
              </View>
  
              <View  style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 24 }} className="bg-input mx-2 ">
                <Text className="bg-pink-500 p-2 text-center mx-16 text-white mt-2"  style= {{borderRadius:48}} >7</Text>
                <Text className="text-center mt-4 mx-2">Maitriser l'enregistrement du vaccin contre le paludisme dans les différents outils de collecte des données 
  
                </Text>
              </View>
  
              <View   style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 12 }} className="bg-input mr-3 ">
                <Text className="bg-green-500  p-2 text-center mx-16 text-white mt-2" style= {{borderRadius:48}} >8</Text>
                <Text className="text-center mt-4 mx-2">Décrire le calendrier de vaccination recommandé contre le paludisme 
  
                </Text>
              </View>
  
              <View  style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 24 }} className="bg-input mx-2 ">
                <Text className="bg-green-500 p-2 text-center mx-16 text-white mt-2"  style= {{borderRadius:48}} >9</Text>
                <Text className="text-center mt-4 mx-2">Communiquer efficacement avec les parents et les communautés     
                </Text>
              </View>
  
              <View   style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 12 }} className="bg-input mr-3 ">
                <Text className="bg-green-500  p-2 text-center mx-16 text-white mt-2" style= {{borderRadius:48}} >10</Text>
                <Text className="text-center mt-4 mx-2">Comprendre les occasions manquées de vaccination 
                </Text>
              </View>
  
              <View  style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 24 }} className="bg-input mx-2 ">
                <Text className="bg-green-500 p-2 text-center mx-16 text-white mt-2"  style= {{borderRadius:48}} >11</Text>
                <Text className="text-center mt-4 mx-2">Identifier les opportunités d'intégration de la vaccination avec d'autres interventions de santé infantile    
                </Text>
              </View>
  
              <View   style={{ width: '45%', height: 150, marginBottom: 8, borderRadius: 12 }} className="bg-input mr-3 ">
                <Text className="bg-green-500  p-2 text-center mx-16 text-white mt-2" style= {{borderRadius:48}} >12</Text>
                <Text className="text-center mt-4 mx-2">Discuter des caractéristiques du vaccin contre le paludisme (RTS,S/AS01)
    
  
                </Text>
              </View>
              
            </View>
  
  
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-24 mt-4">
  
            <TouchableOpacity
                onPress={() =>goToPreviousSlide()}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-start'
                }}
                className="bg-black/60"
              >
                <IconButton icon="arrow-left" size={24} iconColor="white"/>
                
              </TouchableOpacity>
  
  
              <TouchableOpacity
                onPress={() =>goToNextSlide()}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-end'
                }}
                className="bg-black/60"
              >
                 <IconButton icon="arrow-right" size={24} iconColor="white" />
                
              </TouchableOpacity>
  
              
             
  
            </View>
  
             
            <View className="mb-48"></View>
          </ScrollView>
  
         
          </View>
  
          :screen1 == 3? 
  
          <View >
  
        <View className="font-sans flex-row justify-between mb-4 mt-10">
          <Text   style={{alignSelf:'flex-start',height:20}} /> 
          
          <Text className="font-sans text-center font-bold text-xl text-[#8A1651E6] ">
                SOMMAIRE
          </Text>
          <TouchableOpacity className="font-sans p-1 justify-end">
                
          </TouchableOpacity>
        </View>
  
           
          <ScrollView showsVerticalScrollIndicator={false} className="bg-white p-3 -mb-10" style={{ borderRadius: 24}}>
          
            <View style={{ justifyContent: 'space-between' }} className="mb-8 mt-4 ">
            
              <View  style={{ width: width*0.9,marginBottom: 8, borderRadius: 10 }} className="bg-[#8A1651E6] mx-2 mt-4 ">
                  <Text className="text-center p-2 mx-2 text-white text-lg"> <Text className="bg-white p-2 text-center text-black"  style= {{borderRadius:48}} > 1 </Text>   Définition du paludisme
                  </Text>
                </View>
  
             
                <View  style={{ width: width*0.9,marginBottom: 8, borderRadius: 10 }} className="bg-[#8A1651E6] mx-2 mt-4 ">
                  <Text className="text-center text-lg p-2 mx-2 text-white"> <Text className="bg-white p-2 text-center text-black"  style= {{borderRadius:48}} > 2 </Text>   Caractéristiques et conditions de stockage du vaccin contre le paludisme RTS,S
  
                </Text>
              </View>
  
              <View  style={{ width: width*0.9,marginBottom: 8, borderRadius: 10 }} className="bg-[#8A1651E6] mx-2 mt-4 ">
                  <Text className="text-center p-2 mx-2 text-white text-lg"> <Text className="bg-white p-2 text-center text-black"  style= {{borderRadius:48}} > 3 </Text>  Calendrier de vaccination contre le paludisme, éligibilité et contre-indications
  
                  </Text>
                </View>
  
                <View  style={{ width: width*0.9,marginBottom: 8, borderRadius: 10 }} className="bg-[#8A1651E6] mx-2 mt-4 ">
                <Text className="text-center p-2 mx-2 text-white text-lg"> <Text className="bg-white p-2 text-center text-black"  style= {{borderRadius:48}} > 4 </Text>  Administration du vaccin contre le paludisme
  
                </Text>
              </View>
  
              <View  style={{ width: width*0.9,marginBottom: 8, borderRadius: 10 }} className="bg-[#8A1651E6] mx-2 mt-4 ">
                  <Text className="text-center p-2 mx-2 text-white text-lg"> <Text className="bg-white p-2 text-center text-black"  style= {{borderRadius:48}} > 5 </Text>  Enregistrement et suivi du vaccin contre le paludisme
  
                  </Text>
                </View>
  
                <View  style={{ width: width*0.9,marginBottom: 8, borderRadius: 10 }} className="bg-[#8A1651E6] mx-2 mt-4 ">
                <Text className="text-center p-2 mx-2 text-white text-lg"> <Text className="bg-white p-2 text-center text-black"  style= {{borderRadius:48}} > 6 </Text>  Surveillance des manifestations postvaccinales indésirables (MAPI)
  
  
                </Text>
              </View>
  
              <View  style={{ width: width*0.9,marginBottom: 8, borderRadius: 10 }} className="bg-[#8A1651E6] mx-2 mt-4 ">
                  <Text className="text-center p-2 mx-2 text-white text-lg"> <Text className="bg-white p-2 text-center text-black"  style= {{borderRadius:48}} > 7 </Text>  Communiquer avec les parents sur le vaccin contre le paludisme
  
                  </Text>
                </View>
  
                <View  style={{ width: width*0.9,marginBottom: 8, borderRadius: 10 }} className="bg-[#8A1651E6] mx-2 mt-4 ">
                <Text className="text-center p-2 mx-2 text-white text-lg"> <Text className="bg-white p-2 text-center text-black"  style= {{borderRadius:48}} > 8 </Text>  Des opportunités manquées de vaccination (OMV)
                </Text>
              </View>
  
            
              
            </View>
  
  
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-24 mt-4">
  
            <TouchableOpacity
                onPress={() =>goToPreviousSlide()}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-start'
                }}
                className="bg-black/60"
              >
                <IconButton icon="arrow-left" size={24} iconColor="white"/>
                
              </TouchableOpacity>
  
  
              <TouchableOpacity
                onPress={() =>goToNextSlide()}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-end'
                }}
                className="bg-black/60"
              >
                 <IconButton icon="arrow-right" size={24} iconColor="white" />
                
              </TouchableOpacity>
  
              
             
  
            </View>
  
             
            <View className="mb-48"></View>
          </ScrollView>
  
         
          </View>
  
          :screen1 == 4?
  
          <View>
               <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-24 mt-4">
  
            <TouchableOpacity
                onPress={() =>goToPreviousSlide()}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-start'
                }}
                className="bg-black/60"
              >
                <IconButton icon="arrow-left" size={24} iconColor="white"/>
                
              </TouchableOpacity>
             
  
            </View>
  
          </View>
          : <Loader/>
  
          
  
          
        }
          </KeyboardAvoidingView>
  
      
    )
}

export default Lessons3

const styles = StyleSheet.create({})