import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../constants';
import Loader from '../../components/Loading';

const Lessons4 = () => {


  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window');

  const [screen4, setScreen4] = useState(false)
  
  const [showFirst, setShowFirst] = useState(false);

  const [buttonEnabled, setButtonEnabled] = useState(false);
  
  useEffect(() => {
    const initializeData = async () => {
      const storedScreen = await AsyncStorage.getItem("screen4" + screen4);
      if (!storedScreen) {
        await AsyncStorage.setItem("screen4" + screen4, JSON.stringify(true));
        setButtonEnabled(false);
        setTimeout(() => {
          setButtonEnabled(true);
        }, 15000); // 30 seconds delay
      } else {
        setButtonEnabled(true);
      }
    };
    initializeData();
  }, [screen4]);
  




  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
       
        const initializeData = async () => {
          
          const storedScreen4 = await AsyncStorage.getItem("screen4");
          
          setScreen4(JSON.parse(storedScreen4 || 1));
          
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


      AsyncStorage.setItem("screen4", JSON.stringify(screen4 + 1));
      setScreen4(screen4 + 1)

      navigation.replace(ROUTES.LESSONS4)


    }

    const goToPreviousSlide = () =>{


      AsyncStorage.setItem("screen4", JSON.stringify(screen4 - 1));
      setScreen4(screen4 - 1)

      navigation.replace(ROUTES.LESSONS4)


    }

    
  



  return (
    <SafeAreaView className="flex-1">
      <View 
       
        className="flex-1  bg-bg-one justify-center "
      >

      <View className=" font-sans mt-10 flex-row justify-between">
        
        <IconButton icon='arrow-left' size={20} iconColor="green"    style={{alignSelf:'flex-start',height:20}} onPress={() => navigation.goBack()}/> 
        <Text className="font-sans text-black text-2xl   font-medium">Module 4</Text> 

        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium mr-2 text-green-800 flex-end">
        {screen4} / 6 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

    {
       screen4 == 1?
          <>
            <View className="px-2 mt-4 mb-10">

            <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center">
               4.1 Activités critiques avant une séance de vaccination
            </Text>

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod2/6.png')}
                  className=" w-80 h-56 mt-6"
                />
              </TouchableOpacity>

              <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      
                <View className="flex-row items-center mb-4">
                  <Text className="bg-orange-400 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">1</Text>
                  <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >Sortir les deux flacons accolés dans les réfrigérateurs.</Text>
                </View>

                <View className="flex-row items-center mb-4">
                  <Text className="bg-blue-500 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">2</Text>
                  <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >Vérifier la date de péremption et l'état de la pastille de controle du vaccin (PCV) sur le flacon à anneau vert.</Text>
                </View>

                <View className="flex-row items-center mb-4">
                  <Text className="bg-gray-700 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">3</Text>
                  <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >Vérifier que le diluant du flacon à anneau vert est clair, incolore ou légèrement brun et sans particules ni décoloration.</Text>
                </View>

                <View className="flex-row items-center mb-4">
                  <Text className="bg-yellow-400 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">4</Text>
                  <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >Jeter les deux flacons si la PVC indique une 
                    exposition à la chaleur, une date de péremption dépassée, une décoloration ou si des particules sont observées.
                  </Text>
                </View>

                <View className="flex-row items-center mb-4">
                  <Text className="bg-red-700 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">5</Text>
                  <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >Retirer le clip en plastique</Text>
                </View>

                <View className="flex-row items-center mb-4">
                  <Text className="bg-green-900 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">6</Text>
                  <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                    Rassembler le matériel de vaccination et les outils de collecte des données
                     et de surveillance pour la séance de vaccin.

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
                    onPress={goToNextSlide}
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>{'Suivant'}</Text>
              </TouchableOpacity>


</View>
          

          </>
        :screen4 == 2?
            <>
                  <View className="px-2 mb-2">

                  <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center"> 
                    4.2. Comment s’assurer que le vaccin est de bonne qualité?
                  </Text>
                   

                  <View className="flex-1 px-4 py-5">
                    <Text className="text-xl font-bold text-center text-purple-900 mb-6">Pastilles de contrôle des vaccins</Text>

                    <View className=" justify-between items-center mb-4">
                      <Text className="text-white bg-blue-500 text-base font-bold py-2 px-4 text-center rounded-lg">USAGE</Text>
                    </View>

                    <View className="flex-row justify-between mb-4">

                      <View className="flex-1  p-1 bg-white rounded-l-lg">
                      <Image source={require('../../../assets/mod2/square1.png')}
                              className="mx-4 w-28 h-24  "/>
                    
                      </View>

                      <View className="flex-1 mr-2 p-3 bg-white rounded-r-lg">
                        <Text className="text-base font-semibold mb-2">Le carré intérieur est plus clair que le cercle extérieur</Text>
                        
                      </View>

                    </View>

                    <View className="flex-1 ml-2 p-3 mb-5 bg-gray-100 rounded-lg">
                    <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >  Au début la couleur du carré intérieur de la PCV est d'une teinte plus clair que celle du cercle extérieur. Avec le temps et/ou l'exposition à la chaleur elle se met à s'assombrir.
                        </Text>
                   </View>

                    

                    <View className="flex-row justify-center items-center mb-4">
                      <Text className="text-white bg-gray-800 text-base font-bold py-2 px-6 rounded-lg">POINT DE REJET</Text>
                    </View>

                    

                    <View className=" justify-between items-center mb-4">
                      <Text className="text-white bg-red-500 text-base font-bold py-2 px-4 text-center rounded-lg">HORS D'USAGE</Text>
                    </View>

                    <View className="flex-row justify-between mb-4">

                      <View className="flex-1  p-1 bg-white rounded-l-lg">
                      <Image source={require('../../../assets/mod2/square22.png')}
                              className="mx-4 w-28 h-24  "/>
                    
                      </View>

                      <View className="flex-1 mr-2 p-3 bg-white rounded-r-lg">
                      <Text className="text-base font-semibold mb-2">Le carré intérieur a la même couleur que le cercle extérieur</Text>
                        
                      </View>

                    </View>
                    <View className="flex-row justify-between mb-4">

                      <View className="flex-1  p-1 bg-white rounded-l-lg">
                      <Image source={require('../../../assets/mod2/square33.png')}
                              className="mx-4 w-28 h-24  "/>
                    
                      </View>

                      <View className="flex-1 mr-2 p-3 bg-white rounded-r-lg">
                      <Text className="text-base font-semibold mb-2">Le carré intérieur est plus sombre que le cercle extérieur</Text>
                        
                      </View>

                    </View>

                   

                    <View className="flex-1 ml-2 p-3 mb-5 bg-gray-100 rounded-lg">
                    <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                          Une fois qu'un vaccin atteint ou dépasse le point de rejet, le carré intérieur devient plus sombre  ou a la même couleur que le cercle extérieur.
                        </Text>
                        
                   </View>

                   
                  </View>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                      Il est très important de s’assurer de la qualité du vaccin RTS,S (Mosquirix) avant de l’administrer à un enfant. La vérification se fait au niveau de la date de péremption et de la pastille de contrôle sur le flacon à anneau vert. Celle du flacon en bon état est présentée sous forme d’un carré à l’intérieur d’un cercle ; et le carré a une teinte plus claire que le cercle.
                      
                    </Text>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                      Plus la pastille sera exposée à la lumière/chaleur plus le carré intérieur sera de la même couleur voire même plus sombre que le cercle extérieur, ce qui vous démontrera que ce flacon est hors usage.

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
                    onPress={goToNextSlide}
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>{'Suivant'}</Text>
              </TouchableOpacity>

            </View>
          </>
        :screen4 == 3?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-2xl text-center text-blue-800 mt-4 mx-4">Pendant la séance de vaccination (avec le vaccin contre le paludisme)

                  </Text>

                  <View className="flex-row items-center mb-4">
                  <Text className="bg-red-700 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">1</Text>
                  <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod2/8.png')}
                              className="mx-4 mt-4 w-72 h-52 "/>
                    </TouchableOpacity>
                </View>
                   

                    

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                      1. Accueillir les parents et identifier le nom de l'enfant dans les registres de vaccination;
                    

                    </Text>

                    <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                     
                    2. Vérifier le statut vaccinal de l'enfant dans le carnet Santé mère et informer les parents des constats


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
        :screen4 == 4?
        <>
               <View className="px-2 mb-2 mt-5">

               <View className="flex-row items-center mb-4">
                  <Text className="bg-red-700 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">2</Text>
                  <TouchableOpacity className="font-sans justify-center items-center" >
                   
                   <Image source={require('../../../assets/mod2/14.png')}
                            className="mx-4 mt-4 w-72 h-52 "/>
                  </TouchableOpacity>
                </View>

                 

                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                    <Text 
                      className="font-sans text-black  text-2xl mb-4 mt-5 text-purple-900"
                      numberOfLines={50} // Optional: limit to a specific number of lines if desired
                      ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >

                      Préparer le vaccin: 

                  

                  </Text>

                  <Text 
                      className="font-sans text-black  text-xl mb-4 mt-2"
                      numberOfLines={50} // Optional: limit to a specific number of lines if desired
                      ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >
                   
                   Puiser le contenu du flacon à anneau vert (AS01) et le verser dans le flacon à anneau rouge (RTS,S), en utilisant une seringue de 2 ml. 
                  Un flacon reconstitué contient 1 ml (2 doses) de vaccin injectable

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

        :screen4 == 5?
        <>
              <View className="px-2 mb-2">
                  
              <View className="flex-row items-center mb-4">
                  <Text className="bg-red-700 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">3</Text>
                  <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod2/15.png')}
                              className="mx-4 mt-4 w-72 h-52 "/>
                    </TouchableOpacity>
                </View>

                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                    <Text 
                      className="font-sans text-black  text-base mt-5"
                      numberOfLines={50} // Optional: limit to a specific number of lines if desired
                      ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >

                  <Text className="text-blue-900">1. Voie d’injection:</Text>  Injection intramusculaire

                  </Text>

                  <Text 
                      className="font-sans text-black  text-base  mt-2"
                      numberOfLines={50} // Optional: limit to a specific number of lines if desired
                      ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >
                  
                  <Text className="text-blue-900">2. Site d’injection: </Text>  au niveau du deltoïde



                  </Text>

                  <Text 
                      className="font-sans text-black  text-base  mt-2"
                      numberOfLines={50} // Optional: limit to a specific number of lines if desired
                      ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >

                  <Text className="text-blue-900">3. Angle d’injection :</Text> 90 degrés


                  </Text>

                  <Text 
                      className="font-sans text-black  text-base mb-10 mt-2"
                      numberOfLines={50} // Optional: limit to a specific number of lines if desired
                      ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                    >
                  
                  <Text className="text-blue-900">4. Vacciner l’enfant avec une dose de :</Text>  0,5 ml




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

        :screen4 == 6?
          <>
            <View className="px-2 mb-2">
                
            <View className="flex-row items-center mb-4">
                <Text className="bg-red-700 text-white rounded-full w-8 h-8 text-center leading-8 mr-2">4</Text>
                <TouchableOpacity className="font-sans justify-center items-center" >
                  
                  <Image source={require('../../../assets/mod2/16.png')}
                            className="mx-4 mt-4 w-72 h-52 "/>
                  </TouchableOpacity>
              </View>

                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                  <Text 
                    className="font-sans text-black  text-xl mt-5"
                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                  >

                <Text className="text-blue-900">1. </Text> Fixer la date du prochain rendez-vous pour la dose


                </Text>

                <Text 
                    className="font-sans text-black  text-xl  mt-4"
                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                  >
                
                <Text className="text-blue-900">2. </Text>Rappeler au parent de revenir avec l’enfant pour les prochaines doses




                </Text>

                <Text 
                    className="font-sans text-black  text-xl  mt-4"
                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                  >

                <Text className="text-blue-900">3.</Text>Donner au parent le CSME mis à jour et expliquer les effets secondaires possibles



                </Text>

              
              
                </View>

                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                  <Text 
                    className="font-sans font-bold text-black  text-xl mt-5 text-red-800"
                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                  >

                N.B : 


                </Text>

                <Text 
                    className="font-sans text-black  text-xl mt-5"
                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                  >

                <Text className="text-blue-900 underlined">1. </Text>Pendant la séance : Mettre les flacons ouverts dans le porte-vaccins et NE surtout PAS les remettre au réfrigérateur.


                </Text>

                <Text 
                    className="font-sans text-black  text-xl mb-10 mt-4"
                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                  >
                
                <Text className="text-blue-900">2. </Text>Jeter tout flacon ouvert contenant des doses non utilisées 6 heures après l’ouverture ou à la fin de la séance de vaccination.





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
                    onPress={() =>navigation.navigate(ROUTES.QUIZ4)}
                    
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>Evaluation</Text>
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

export default Lessons4

const styles = StyleSheet.create({})