import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../constants';
import Loader from '../../components/Loading';

const Lessons5 = () => {


  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window');

  const [screen5, setScreen5] = useState(false)
  
  const [showFirst, setShowFirst] = useState(false);
  




  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
       
        const initializeData = async () => {
          
          const storedScreen5 = await AsyncStorage.getItem("screen5");
          
          setScreen5(JSON.parse(storedScreen5 || 1));
          
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


      AsyncStorage.setItem("screen5", JSON.stringify(screen5 + 1));
      setScreen5(screen5 + 1)

      navigation.replace(ROUTES.LESSONS5)


    }

    const goToPreviousSlide = () =>{


      AsyncStorage.setItem("screen5", JSON.stringify(screen5 - 1));
      setScreen5(screen5 - 1)

      navigation.replace(ROUTES.LESSONS5)


    }

    
  



  return (
    <SafeAreaView className="flex-1">
      <View 
       
        className="flex-1  bg-bg-one justify-center "
      >

      <View className=" font-sans mt-10 flex-row justify-between">
        
        <IconButton icon='arrow-left' size={20} iconColor="green"    style={{alignSelf:'flex-start',height:20}} onPress={() => navigation.goBack()}/> 
        <Text className="font-sans text-black text-xl   font-medium">Module 5</Text> 

        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium  text-green-800 flex-end">
        {screen5} / 6 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

    {
        screen5 == 1?
          
          <>

           
            <View className="px-2 mt-4 mb-10">

              <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center"> 5.1 Où enregistrer la vaccination contre le paludisme ?
              
                </Text>
             

                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   Dans le cadre d’inclure le vaccin contre le paludisme dans le programme national de vaccination, certains outils de suivi ont été mis à jour à savoir :

                   </Text>
                </View>

                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-2 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   -Registre de vaccination


                   </Text>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-2 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   -Les fiches de pointage


                   </Text>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-2 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   -Carnet santé mère enfant

                   </Text>
                </View>
                
                      <Text 
                        className="font-sans text-black  text-xl mb-2 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   -Les formulaires de gestion des stocks (fiches de stock)


                   </Text>
                
                  <Text 
                        className="font-sans text-black  text-xl mb-2 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   -Les formulaires pour le rapportage mensuel


                   </Text>
                <Text 
                        className="font-sans text-black  text-xl mb-2 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   -DHIS2


                   </Text>

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
          

          
          <View className="mb-10"></View>
        </>

        :screen5 == 2?
          <>
            <View className="px-2 mt-4 mb-10">

            

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod3/1.png')}
                  
                  className="w-80 h-96 rounded-xl"
                />
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   Carnet santé mère enfant



                   </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod3/2.png')}
                  className="w-80 h-96 rounded-xl"
                />

                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   registre de pointage
                   </Text>
                   </View>
                
              </TouchableOpacity>

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod3/3.png')}
                  className="w-80 h-96 rounded-xl"
                />
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   
                   Registre de vaccination

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
        :screen5 == 3?
            <>
                  <View className="px-2 mb-2">

                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4"> 
                  Que faire dans ce cas? 

                  </Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/4.png')}
                              className="mx-4 mt-4 w-32 h-72 "/>
                    </TouchableOpacity>



                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                      Les parents d’un enfant vous présentent le carnet santé mère-enfant dans lequel il n’y a pas de place pour le vaccin contre le paludisme.
                    
                    </Text>

               
                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   Comment devez-vous noter la vaccination effectuée?

                   </Text>
                   </View>
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
        :screen5 == 4?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-center text-2xl text-blue-800 mt-4 mx-4">Comment devez-vous noter la vaccination effectuée?


                  </Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/6.png')}
                              className="mx-4 mt-4 w-96 h-64 rounded-xl"/>
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Trouver un espace approprié sur la page du carnet de santé mère-enfant, précisant les types de vaccins que l'enfant recevra à chaque âge, pour y inclure les lignes Mosquirix1, Mosquirix2, Mosquirix3, Mosquirix4 et noter chaque dose de vaccin administrée à un endroit facilement visible.



                    </Text>

                    <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                     
                     Le carnet santé mère-enfant est principalement utilisé pour indiquer la date de naissance de l’enfant (l’âge), informer sur les doses déjà reçues y compris les prochains rendez-vous de vaccination et surtout identifier les enfants qui ne reviennent pas à temps pour se faire vacciner ou qui ont manqué des vaccins.

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
                on onPress={() =>goToNextSlide()}
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
        


        :screen5 == 5?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4">
                        5.2 Comment assurer le suivi des enfants qui ne sont pas revenus se faire vacciner à temps ?

                  </Text>

                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                    Le suivi des parents dont les enfants n’ont pas complétés les doses (2ème, 3ème et 4ème doses) se fait par:
 

                    </Text>
                </View>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/7.png')}
                              className="mx-4 mt-4 w-72 h-52 rounded-xl"/>
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                    Visites d’agents de santé communautaires au domicile des enfants


                    </Text>

                 
                </View>

                <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod3/8.png')}
                              className="mx-4 mt-4 w-72 h-52 rounded-xl "/>
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                        Utilisation correcte des registres de monitorage communautaires
                        
                    </Text>

                    <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                     
                     Utilisation du registre de vaccination, l’échéancier, Envoi des messages via les carnets de relance des abandons 



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
                onPress={() =>navigation.navigate(ROUTES.QUIZ5)}
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

export default Lessons5

const styles = StyleSheet.create({})