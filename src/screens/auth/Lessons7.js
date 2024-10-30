import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../constants';
import Loader from '../../components/Loading';

const Lessons7 = () => {


  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window');

  const [screen7, setScreen7] = useState(false)
  
  const [showFirst, setShowFirst] = useState(false);

  const [buttonEnabled, setButtonEnabled] = useState(false);
  
  useEffect(() => {
    const initializeData = async () => {
      const storedScreen = await AsyncStorage.getItem("screen7" + screen7);
      if (!storedScreen) {
        await AsyncStorage.setItem("screen7" + screen7, JSON.stringify(true));
        setButtonEnabled(false);
        setTimeout(() => {
          setButtonEnabled(true);
        }, 15000); // 30 seconds delay
      } else {
        setButtonEnabled(true);
      }
    };
    initializeData();
  }, [screen7]);
  




  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
       
        const initializeData = async () => {
          
          const storedScreen7 = await AsyncStorage.getItem("screen7");
          
          setScreen7(JSON.parse(storedScreen7 || 1));
          
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


      AsyncStorage.setItem("screen7", JSON.stringify(screen7 + 1));
      setScreen7(screen7 + 1)

      navigation.replace(ROUTES.LESSONS7)


    }

    const goToPreviousSlide = () =>{


      AsyncStorage.setItem("screen7", JSON.stringify(screen7 - 1));
      setScreen7(screen7 - 1)

      navigation.replace(ROUTES.LESSONS7)


    }

    
  



  return (
    <SafeAreaView className="flex-1">
      <View 
       
        className="flex-1  bg-bg-one justify-center "
      >

      <View className=" font-sans mt-10 flex-row justify-between">
        
        <IconButton icon='arrow-left' size={20} iconColor="green"    style={{alignSelf:'flex-start',height:20}} onPress={() => navigation.goBack()}/> 
        <Text className="font-sans text-black text-2xl   font-medium">Module 7</Text> 

        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium mr-2 text-green-800 flex-end">
        {screen7} / 5 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

    {
        screen7 == 1?
          
          <>

           
            <View className="px-2 mt-4 mb-10">

              <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center"> Communiquer avec les parents/tuteurs d'enfants sur le vaccin contre le paludisme
 

              </Text>

              <View className="px-2 mt-4 mb-10">

              <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   Une bonne communication favorise le respect et la confiance entre les prestataires, les parents, les familles et les communautés.
                    Cette communication survient avant, pendant et après les séances de vaccination.


                   </Text>
                </View>

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod4/1.png')}
                  style={{ height: height * 0.29, width: width * 0.9, marginBottom: 40, marginTop: 20 }}
                />
              </TouchableOpacity>

              </View>
               
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   L’agent de santé doit :




                   </Text>
                </View>

                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                  
                    - Accorder une attention personnelle
                    


                   </Text>

                   <Text 
                        className="font-sans text-black  text-xl mb-4 "
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                  
                   - Accueillir chaleureusement et féliciter le parent



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

        :screen7 == 2?
          <>
            <View className="px-2 mt-4 mb-10">

            
            

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
              <Image source={require('../../../assets/mod4/14.png')}
                              className="mx-4 mt-4 w-72 h-10 "/>
                              <Text className="-mt-7 font-bold text-white ">Au cours de la séance de vaccination</Text>
                <Image 
                  source={require('../../../assets/mod4/2.png')}
                  style={{ height: height * 0.3, width: width * 0.448, marginBottom: 40, marginTop: 30 }}
                />
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                         Encourager les parents à partager leurs idées et émotions

                    </Text>
                </View>

                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                         
                    </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod4/3.png')}
                  style={{ height: height * 0.29, width: width * 0.5, marginBottom: 40}}
                />
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   Répondre aux préoccupations avec compassion.



                   </Text>
                   <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                       Poser des questions pour bien comprendre.





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
                    onPress={goToNextSlide}
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>{'Suivant'}</Text>
              </TouchableOpacity>


        </View>
          

          </>
        :screen7 == 3?
            <>
                  <View className="px-2 mb-2">
                   

                    <TouchableOpacity className="font-sans mt-5 justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod4/14.png')}
                              className="mx-4 mt-4 w-72 h-10 "/>
                              <Text className="-mt-7 font-bold text-white ">Aprés la séance de vaccination</Text>

                    <Image source={require('../../../assets/mod4/4.png')}
                              className="mx-4 mt-4 w-80 h-52 "/>
                    <Text className="font-sans text-xl  mt-4 text-center mx-4 mb-10"> 
                    Reprendre /Résumer et inviter les parents à amener leurs enfants au prochain rendez-vous de vaccination 



                    </Text>
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
                    onPress={goToNextSlide}
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>{'Suivant'}</Text>
              </TouchableOpacity>

            </View>
          </>
        :screen7 == 4?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4">
                    
                  7.1 Communication des messages clés aux parties prenantes


                  </Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod4/5.png')}
                              className="mx-4 mt-4 w-72 h-52 "/>

                     <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Donner des conseils sur le vaccin administré : vaccin sûr et efficace, calendrier, mode d’administration.


                        </Text>
                     </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod4/6.png')}
                              className="mx-4 mt-4 w-48 h-40 "/>

                     <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black text-center text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Alerter
                        sur les effets secondaires possibles



                        </Text>
                     </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod4/7.png')}
                              className="mx-4 mt-4 w-72 h-52 "/>

                     <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Organiser la prochaine visite :  communiquer au parent le RDV prochain et le mettre dans le carnet santé mère-enfant.




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
                    onPress={goToNextSlide}
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>{'Suivant'}</Text>
              </TouchableOpacity>

                </View>

          </>
        


        :screen7 == 5?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4">
                  
                    7.2 Conversations avec une personne qui a des doutes ? 

                  </Text>

                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      
                      
                  <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Si le parent hésite, utilisez les approches suivantes :


                    </Text>
                </View>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod4/8.png')}
                              className="mx-4 mt-4 w-72 h-52 "/>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                      1. Écouter avec empathie pour comprendre les préoccupations des parents/tuteurs en posant des questions ouvertes.

                    </Text>
                 
                </View>

                
                </TouchableOpacity>

                <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod4/9.png')}
                              className="mx-4 mt-4 w-72 h-72 "/>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        2. S'impliquer personnellement en partageant son expérience et en évoquant ses motivations pour recommander la vaccination.

                    </Text>
                 
                </View>

                
                </TouchableOpacity>

                <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod4/10.png')}
                              className="mx-4 mt-4 w-72 h-72 "/>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        3. Encourager la vaccination en partageant son expérience personnelle et en expliquant ses motivations.

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
                onPress={() =>navigation.navigate(ROUTES.QUIZ7)}
                
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

export default Lessons7

const styles = StyleSheet.create({})