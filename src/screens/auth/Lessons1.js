import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../constants';
import Loader from '../../components/Loading';

const Lessons = () => {


  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window');

  const [screen1, setScreen1] = useState(false)
  
  const [showFirst, setShowFirst] = useState(false);
  




  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
       
        const initializeData = async () => {
          
          const storedScreen1 = await AsyncStorage.getItem("screen1");
          
          setScreen1(JSON.parse(storedScreen1 || 1));
          
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


      AsyncStorage.setItem("screen1", JSON.stringify(screen1 + 1));
      setScreen1(screen1 + 1)

      navigation.replace(ROUTES.LESSONS)


    }

    const goToPreviousSlide = () =>{


      AsyncStorage.setItem("screen1", JSON.stringify(screen1 - 1));
      setScreen1(screen1 - 1)

      navigation.replace(ROUTES.LESSONS)


    }

    
  



  return (
    <SafeAreaView className="flex-1">
      <View 
       
        className="flex-1  bg-bg-one justify-center "
      >

      <View className=" font-sans mt-10 flex-row justify-between">
        
        <IconButton icon='arrow-left' size={20} iconColor="green"    style={{alignSelf:'flex-start',height:20}} onPress={() => navigation.goBack()}/> 
        <Text className="font-sans text-black text-2xl   font-medium">Module 1</Text> 

        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium  text-green-800 flex-end">
        {screen1} / 7 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

    {
        screen1 == 1?
          
          <View className="mt-4">

            <View>
              <Text className="font-sans text-xl  text-center text-red-500 mt-2 mx-4">1. Qu’est-ce que le paludisme ?
              </Text>
              <Text className="font-sans text-center text-xl text-blue-800 mt-4 mx-4">  1.1 Définition </Text>
              
            </View>

            <View className="mb-10" >
                <TouchableOpacity className="font-sans p-1 justify-center items-center" >
                <Image source={require('../../../assets/mod1/1.png')}
                          className="mx-4  w-32 h-44 mt-4"/>
                </TouchableOpacity>
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      > 
                        Le paludisme, aussi appelé malaria, est une maladie infectieuse causée par un parasite,
                        plasmodium, qui se transmet principalement 
                        par les piqûres de moustiques infectés, notamment le moustique femelle Anophèles.
                </Text>
                </View>
              
            </View>


          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',  }} className="mb-12">

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
        </View>

        :screen1 == 2?
            <>
                  <View className="px-2 mb-2 mt-5">
                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod1/3.png')}
                              className="mx-4  w-32 h-32 "/>
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black text-center text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >  
                       Chaque minute, un enfant meurt du paludisme dans le monde. 
                    </Text>
                    </View>
                  
                  </View>

               
            <View className="px-2 mb-10">
              <TouchableOpacity className="font-sans justify-center items-center" >
              
              <Image source={require('../../../assets/mod1/4.png')}
                        className="mb-10 mx-4 w-32 h-36 "/>
              </TouchableOpacity>
              <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >  
                      En 2022, environ 14 enfants sur 100 000 sont morts à cause de cette maladie. 
              94 % des cas de paludisme étaient concentrés en Afrique,
              et le taux de mortalité était de 56 pour 100 000 habitants
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
        :screen1 == 3?

          <>
            <View className="px-2 mb-10 mt-5">

            <Text className="font-sans text-center text-xl text-blue-800  mx-4 mb-6">  1.2 Symptômes du paludisme </Text>
              
              <TouchableOpacity className="font-sans p-1 justify-center items-center" >
                <Image source={require('../../../assets/mod1/2.png')}
                            className="mb-10 mx-4 "
                            style={{width:width*0.6,height:height*0.3}}  />
              </TouchableOpacity>
                 
              <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >  
                      Les symptômes du paludisme peuvent varier, mais incluent généralement : 
                      la fièvre, les frissons, les maux de tête, les douleurs musculaires,
                      la fatigue ainsi que les vomissements.
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
        
        :screen1 == 4?
          <>
                  <Text className="font-sans text-xl text-blue-800 mt-5 mx-4 text-center"> 1.3 Traitement et prévention du paludisme</Text>
                   
                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >  
                       Le paludisme est la principale cause de maladie et de décès chez les enfants au Burundi.
                        Pour traiter cette maladie, on utilise principalement des médicaments antipaludiques,
                         comme Artéméther Luméfantrine (AL),
                          qui sont efficaces contre les formes les plus courantes
                           du paludisme. Il est très important de diagnostiquer 
                           le paludisme rapidement, de préférence avec des tests 
                           rapides, pour commencer le traitement au plus vite.
                      </Text> 
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
        :screen1 == 5?
          <>
                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black text-center text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >   
                      De plus, les mesures de prévention suivantes sont déjà utilisées :
                 </Text>
                 </View>

                 <View className="px-2 mb-10 mt-4">
                    <TouchableOpacity className="font-sans justify-center items-center p-4 bg-gray-100 rounded-xl" >
                      <Image source={require('../../../assets/mod1/5.png')}
                              className="mx-4  w-40 h-32 text-center"/>
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black text-center  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >  
                       Dormir sous une moustiquaire imprégnée
                    </Text>
                    </View>
                  
                  </View>
          

                  <View className="px-2 mb-10 mt-4">
                    <TouchableOpacity className="font-sans justify-center items-center p-4 bg-gray-100  rounded-xl" >
                    <Image source={require('../../../assets/mod1/6.png')}
                              className="w-48 h-36 -ml-10 "/>
                    </TouchableOpacity>
                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black text-center text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >  
                        Pulvérisation d’insecticides à l'intérieur de la maison 
                    </Text>
                    </View>
                  
                  </View>

                  <View className="px-2 mb-10 mt-4">
                    <TouchableOpacity className="font-sans justify-center items-center p-4 bg-gray-100 rounded-xl" >
                     <Image source={require('../../../assets/mod1/7.png')}
                              className="mx-4  w-32 h-32 text-center"/>
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black text-center text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >   
                      Soins préventifs occasionnels pendant la grossesse 
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
        :screen1 == 6?
          <>
                    <Text className="font-sans text-xl text-blue-800 mt-4 text-center">   1.4 Comment sera déployé le vaccin contre le paludisme ?</Text>
                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >   
                      En raison du nombre limité de vaccins contre le paludisme dans le monde, le Ministère de la Santé Publique et de la Lutte contre le Sida (MSPLS) a choisi des districts sanitaires en fonction du risque élevé de cas grave et de décès du paludisme. 
                    </Text>
                    </View>

                    <View className="px-2 mb-10 mt-4">
                      <TouchableOpacity className="font-sans justify-center items-center" >
                        <Image source={require('../../../assets/mod1/8.png')}
                          className="mx-4 mt-4 text-center w-80 h-80" />
                      </TouchableOpacity>

                      <Text className="font-sans text-black text-xl mb-4 mt-4" >
                        Ainsi, le vaccin sera disponible dans 25 districts de santé lors de cette première étape : Mabayi, Cibitoke, Bukinanyana, Bubanza, Mpanda, Gihofi, Rutana, Butezi, Kinyinya, Gisuru, Ruyigi, Cankuzo, Murore, Buhiga, Nyabikere, Muyinga, Gashoho, Giteranyi, Buye, Ngozi, Kiremba, Busoni, Mukenke, Kirundo et Vumbi.
                      </Text>
              
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
                onPress={() =>navigation.navigate(ROUTES.QUIZ1)}
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

export default Lessons

const styles = StyleSheet.create({})