import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../constants';
import Loader from '../../components/Loading';

const Lessons6 = () => {


  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window');

  const [screen6, setScreen6] = useState(false)
  
  const [showFirst, setShowFirst] = useState(false);
  




  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
       
        const initializeData = async () => {
          
          const storedScreen6 = await AsyncStorage.getItem("screen6");
          
          setScreen6(JSON.parse(storedScreen6 || 1));
          
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


      AsyncStorage.setItem("screen6", JSON.stringify(screen6 + 1));
      setScreen6(screen6 + 1)

      navigation.replace(ROUTES.LESSONS6)


    }

    const goToPreviousSlide = () =>{


      AsyncStorage.setItem("screen6", JSON.stringify(screen6 - 1));
      setScreen6(screen6 - 1)

      navigation.replace(ROUTES.LESSONS6)


    }

    
  



  return (
    <SafeAreaView className="flex-1">
      <View 
       
        className="flex-1  bg-bg-one justify-center "
      >

      <View className=" font-sans mt-10 flex-row justify-between">
        
        <IconButton icon='arrow-left' size={20} iconColor="green"    style={{alignSelf:'flex-start',height:20}} onPress={() => navigation.goBack()}/> 
        <Text className="font-sans text-black text-2xl   font-medium">Module 6</Text> 

        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium  text-green-800 flex-end">
        {screen6} / 6 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

    {
        screen6 == 1?
          
          <>

           
            <View className="px-2 mt-4 mb-10">

              <Text className="font-sans text-xl text-blue-800  mx-4 text-center">
              
              6.1 Qu’est-ce qu’une MAPI? 

              </Text>

              <View className="px-2 mt-4 mb-10">

            

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod3/9.png')}
                  style={{ height: height * 0.29, width: width * 0.9, marginBottom: 40, marginTop: 20 }}
                />
              </TouchableOpacity>

              </View>
               
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   Une MAPI est une manifestation post vaccinales indésirable qui survient après une vaccination et qui n’a pas nécessairement de lien de cause à effet avec l’utilisation du vaccin


                   </Text>
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
            onPress={()=>goToNextSlide()}
            style={{
                padding: 10,
                borderRadius: 5,
                alignSelf:'flex-end'
            }}
            className=" mx-4 bg-black/80"
            >
            <Text style={{ color: '#fff' }}>Suivant</Text>
                    
            
            </TouchableOpacity>


            </View>
          

          
          <View className="mb-48"></View>
        </>

        :screen6 == 2?
          <>
            <View className="px-2 mt-4 mb-10">

            <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                         Une manifestation post vaccinale indésirable peut être:

                    </Text>
                </View>
            

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod3/10.png')}
                  style={{ height: height * 0.22, width: width * 0.5, marginBottom: 40, marginTop: 20 }}
                />
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black text-center text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   un symptôme signalé par le vacciné ou le parent


                   </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod3/11.png')}
                  style={{ height: height * 0.25, width: width * 0.38, marginBottom: 40, marginTop: 20 }}
                />
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-center text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   un résultat de laboratoire anormal




                   </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod3/12.png')}
                  style={{ height: height * 0.28, width: width * 0.5, marginBottom: 40, marginTop: 20 }}
                />
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black text-center text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   Un symptôme constaté par un soignant

                   </Text>
                </View>
              </TouchableOpacity>

              
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
            onPress={()=>goToNextSlide()}
            style={{
                padding: 10,
                borderRadius: 5,
                alignSelf:'flex-end'
            }}
            className=" mx-4 bg-black/80"
            >
            <Text style={{ color: '#fff' }}>Suivant</Text>
                    
            
            </TouchableOpacity>


        </View>
          

          </>
        :screen6 == 3?
            <>
                  <View className="px-2 mb-2">

                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4"> 
                  6.2 MAPI connues à la suite d’une vaccination contre le paludisme
 

                  </Text>

                  <Text className="font-sans text-xl  mt-4 mx-4"> 
                 
                  Le vaccin contre le paludisme est sûr et bien toléré.


                  </Text>

                  <Text className="font-sans text-xl  mt-4 mx-4"> 
                    Les MAPI les plus fréquemment signalées:
                 </Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/13.png')}
                              className="mx-4 mt-4 "
                              style={{width:width*0.6,height:height*0.3}} 
                    />
                    <Text className="font-sans text-xl  mt-4 mx-4"> 
                              Fièvre


                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/14.png')}
                              className="mx-4 mt-4"
                              style={{width:width*0.28,height:height*0.3}} 
                    />
                    <Text className="font-sans text-xl  mt-4 mx-4"> 
                    Irritabilité 


                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/15.png')}
                              className="mx-4 mt-2 w-72 h-52 "/>
                    <Text className="font-sans text-xl text-center  mt-4 mx-4"> 
                    
                    Douleur et gonflement au point d’injection
                    

                    </Text>
                    </TouchableOpacity>

                    

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                    <Text className="font-sans text-xl  text-blue-800 mt-8 mx-4"> 
                    
                    Peu courants :

 
                     </Text>
                     <Image source={require('../../../assets/mod3/16.png')}
                              className="mx-4 mt-4 w-36 h-24 "/>
                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                        Convulsions fébriles survenant dans les 7 jours qui suivent la vaccination (principalement dans les 2 à 3 jours)

                        </Text>
                    </View>
                    </TouchableOpacity>


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
                onPress={()=>goToNextSlide()}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-end'
                }}
                className=" mx-4 bg-black/80"
              >
                <Text style={{ color: '#fff' }}>Suivant</Text>
                      
                
              </TouchableOpacity>

            </View>
          </>
        :screen6 == 4?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4">
                    
                  Tous les événements indésirables doivent-ils être signalés?



                  </Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/17.png')}
                              className="mx-4 mt-4 w-48 h-40 "/>

                     <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Oui - Signaler TOUS les événements indésirables (même s’ils ne sont pas mentionnés ici). 


                        </Text>
                     </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <View className="p-4 bg-red-800 rounded-3xl">
                     <Image source={require('../../../assets/mod3/18.png')}
                              className="mx-4 mt-4 w-24 h-24 "/>
                    </View>
                     <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Remplir le formulaire de notification et l’envoyer au BDS.
 


                        </Text>
                     </View>
                    </TouchableOpacity>

                    

                   
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
            onPress={()=>goToNextSlide()}
            style={{
                padding: 10,
                borderRadius: 5,
                alignSelf:'flex-end'
            }}
            className=" mx-4 bg-black/80"
            >
            <Text style={{ color: '#fff' }}>Suivant</Text>
                    
            
            </TouchableOpacity>

            </View>
          </>
        


        :screen6 == 5?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4">
                  6.3 Signaler TOUTES LES MAPI

                  </Text>

                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Complétez le formulaire de notification MAPI en version papier et en ligne.


                    </Text>
                </View>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/19.png')}
                              className="mx-4 mt-4 "
                              qtyle={{width:width,height:height}}  />
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Les principaux élément de la fiche sont notamment : 
                    </Text>
                    <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >
                        Renseignements sur le client
                        </Text>
                    <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >
                        Description des événements de vaccination
                        </Text>
                    <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >
                            Description des événements indésirables
                            </Text>
                    <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >    
                    Antécédents médicaux et thérapeutiques pertinents
                    </Text>
                    <Text 
                        className="font-sans text-black  text-xl text-center mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >
                    </Text>
                    <Text 
                        className="font-sans text-black  text-xl text-center mb-4 "
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >
                                Événements associés
                    </Text>
                    <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >
                            Renseignements du rapporteur


                    </Text>

                 
                </View>

                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                    Envoyer le formulaire rempli au BDS.

                    </Text>
               </View> 

               <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/20.png')}
                              className="mx-4 mt-4 rounded-3xl"
                              />
            </TouchableOpacity>

            <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-10 text-center mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Télécharger VIGIMOBILE FOR AEFI

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
                onPress={() =>navigation.navigate(ROUTES.QUIZ6)}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-end'
                }}
                className=" mx-4 bg-black/80"
              >
                <Text style={{ color: '#fff' }}>Evaluation</Text>
                      
                
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

export default Lessons6

const styles = StyleSheet.create({})