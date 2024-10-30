import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../constants';
import Loader from '../../components/Loading';

const Lessons8 = () => {


  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window');

  const [screen8, setScreen8] = useState(false)
  
  const [showFirst, setShowFirst] = useState(false);

  const [buttonEnabled, setButtonEnabled] = useState(false);
  
  useEffect(() => {
    const initializeData = async () => {
      const storedScreen = await AsyncStorage.getItem("screen8" + screen8);
      if (!storedScreen) {
        await AsyncStorage.setItem("screen8" + screen8, JSON.stringify(true));
        setButtonEnabled(false);
        setTimeout(() => {
          setButtonEnabled(true);
        }, 15000); // 30 seconds delay
      } else {
        setButtonEnabled(true);
      }
    };
    initializeData();
  }, [screen8]);
  




  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
       
        const initializeData = async () => {
          
          const storedScreen8 = await AsyncStorage.getItem("screen8");
          
          setScreen8(JSON.parse(storedScreen8 || 1));
          
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


      AsyncStorage.setItem("screen8", JSON.stringify(screen8 + 1));
      setScreen8(screen8 + 1)

      navigation.replace(ROUTES.LESSONS8)


    }

    const goToPreviousSlide = () =>{


      AsyncStorage.setItem("screen8", JSON.stringify(screen8 - 1));
      setScreen8(screen8 - 1)

      navigation.replace(ROUTES.LESSONS8)


    }

    
  



  return (
    <SafeAreaView className="flex-1">
      <View 
       
        className="flex-1  bg-bg-one justify-center "
      >

      <View className=" font-sans mt-10 flex-row justify-between">
        
        <IconButton icon='arrow-left' size={20} iconColor="green"    style={{alignSelf:'flex-start',height:20}} onPress={() => navigation.goBack()}/> 
        <Text className="font-sans text-black text-2xl   font-medium">Module 8</Text> 

        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium mr-2 text-green-800 flex-end">
        {screen8} / 3 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

    {
        screen8 == 1?
          
          <>

           
            <View className="px-2 mt-4 mb-10">

              <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center"> 8.1.  Qu'est-ce qu'une occasion manquée de vaccination (OMV) ?


              </Text>

              <View className="px-2 mt-4 mb-10">

              <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   Une occasion manquée de vaccination est toute visite dans un établissement de santé d'un enfant (ou d'un adulte)
                   remplissant les conditions requises pour la vaccination qui n'aboutit pas à l'administration de toutes les doses de vaccin auxquelles ce dernier remplit les conditions.


                   </Text>
                </View>

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod4/11.png')}
                  style={{ height: height * 0.29, width: width * 0.7, marginBottom: 40, marginTop: 20, borderRadius:20 }}
                />
              </TouchableOpacity>

              </View>
               
              
            </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-12">

          <TouchableOpacity
                onPress={() =>navigation.goBack()}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-start'
                }}
                className=" mx-4 bg-black/80"
              >
                <Text style={{ color: '#fff' }}>Retour</Text>
                
              </TouchableOpacity>


              <TouchableOpacity
                    onPress={goToNextSlide}
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>{'Suivant'}</Text>
              </TouchableOpacity>


            </View>
          

          
          <View className="mb-48"></View>
        </>

        :screen8 == 2?
          <>
            <View className="px-2 mt-4 mb-10">

            
            

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod4/12.png')}
                  style={{ height: height * 0.29, width: width * 0.7, marginBottom: 40, marginTop: 20, borderRadius:20 }}
                  />
                

                
              </TouchableOpacity>
              
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   Les enfants éligibles à la vaccination pourraient manquer une opportunité lorsque : 
                   </Text>
                   <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                        • Ils reçoivent un vaccin différent (par exemple, un contact de vaccination)
                        </Text>
                   <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                        • Ils sont traitées pour une maladie (par exemple, un contact de traitement) 
                        </Text>
                   <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                        • Ils reçoivent d’autres services préventifs (par exemple, la surveillance de la croissance, etc.) 
                        </Text>
                   <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                        • Ils accompagnent un membre de leur famille à un rendez-vous 
                        </Text>
                   <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                    • Un établissement de santé ne dispose pas de vaccins ou de fournitures connexes




                   </Text>
                </View>
                
              
            </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-12">

            <TouchableOpacity
            onPress={() =>goToPreviousSlide()}
            style={{
                padding: 10,
                borderRadius: 5,
                alignSelf:'flex-start'
            }}
            className=" mx-4 bg-black/80"
            >
            <Text style={{ color: '#fff' }}>Précédent</Text>
            
            </TouchableOpacity>


            <TouchableOpacity
                    onPress={goToNextSlide}
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>{'Suivant'}</Text>
              </TouchableOpacity>


        </View>
          

          </>
        :screen8 == 3?
            <>
                  <View className="px-2 mb-2">

                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4 text-center"> 8.2 Principale stratégie pour réduire les occasions manquées de vaccination


                  </Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod4/13.png')}
                              className="mx-4 mt-4 "
                              style={{ height: height * 0.3, width: width * 0.2, marginBottom: 40, marginTop: 20, }}
                              />

                    
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                       1. Profiter de chaque visite médicale de l’enfant pour « vérifier son statut vaccinal et donner les doses manquantes »

                    </Text>
                   <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                       2. Fournir d’autres services de santé (vitamine A, surveillance de la croissance, Albendazole…)
                    </Text>
                   <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                       3. Rappeler au parent de ramener l'enfant pour les prochaines doses. Préciser que 4 doses du vaccin contre le paludisme assurent la meilleure protection.
                    </Text>
                  
                </View>

            </View>
           
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-12">

            <TouchableOpacity
                onPress={() =>goToPreviousSlide()}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-start'
                }}
                className=" mx-4 bg-black/80"
              >
                <Text style={{ color: '#fff' }}>Précédent</Text>
                
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() =>navigation.navigate(ROUTES.QUIZ8)}
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>{'Evaluation'}</Text>
              </TouchableOpacity>

  
 

            </View>

          </>
        

   
        : <Loader/>

        

        
      }
        
        </View>
        </ScrollView>
      </View>
      
    
    </SafeAreaView>

    
  )
}

export default Lessons8

const styles = StyleSheet.create({})