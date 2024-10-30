import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../constants';
import Loader from '../../components/Loading';

const Lessons3 = () => {


  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window');

  const [screen3, setScreen3] = useState(false)
  
  const [showFirst, setShowFirst] = useState(false);

  const scheduleData = [
    
    { age: 'Paludisme RTS,S', vaccines: ['1', '2', '3', '4'] },
    
  ];

  const [buttonEnabled, setButtonEnabled] = useState(false);
  
  useEffect(() => {

    const initializeData = async () => {
      const storedScreen = await AsyncStorage.getItem("screen3" + screen3);
      if (!storedScreen) {
        await AsyncStorage.setItem("screen3" + screen3, JSON.stringify(true));
        setButtonEnabled(false);
        setTimeout(() => {
          setButtonEnabled(true);
        }, 15000); // 30 seconds delay
      } else {
        setButtonEnabled(true);
      }
    };
    initializeData();
  }, [screen3]);
  




  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
       
        const initializeData = async () => {
          
          const storedScreen3 = await AsyncStorage.getItem("screen3");
          
          setScreen3(JSON.parse(storedScreen3 || 1));
          
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


      AsyncStorage.setItem("screen3", JSON.stringify(screen3 + 1));
      setScreen3(screen3 + 1)

      navigation.replace(ROUTES.LESSONS3)


    }

    const goToPreviousSlide = () =>{


      AsyncStorage.setItem("screen3", JSON.stringify(screen3 - 1));
      setScreen3(screen3 - 1)

      navigation.replace(ROUTES.LESSONS3)


    }

    
  



  return (
    <SafeAreaView className="flex-1">
      <View 
       
        className="flex-1  bg-bg-one justify-center "
      >

      <View className=" font-sans mt-10 flex-row justify-between">
        
        <IconButton icon='arrow-left' size={20} iconColor="green"    style={{alignSelf:'flex-start',height:20}} onPress={() => navigation.goBack()}/> 
        <Text className="font-sans text-black text-2xl   font-medium">Module 3</Text> 

        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium mr-2  text-green-800 flex-end">
        {screen3} / 3 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

    {
        screen3 == 1?
                  
        <View >

            <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center">  3.1. Calendrier de vaccination incluant le vaccin contre le paludisme              </Text>
            


          <View className="mb-10" >
          <View className="mt-6 border bg-white border-gray-300 rounded-lg overflow-hidden">
                  {/* Table Header */}
                  <View className="flex-row border-b border-gray-300 bg-blue-800">
                    <Text className="text-white p-2 flex-1 text-center">Âge de l'enfant</Text>
                    {[ '6 mois', '7 mois',  '9 mois',  '18 mois', ].map((header, index) => (
                      <Text key={index} className="text-white p-2 w-16 text-center border-l border-white">{header}</Text>
                    ))}
                  </View>

                  {/* Table Rows */}
                  {scheduleData.map((item, rowIndex) => (
                    <View key={rowIndex} className="flex-row border-b border-gray-300">
                      <Text className="flex-1 p-2 text-center border-r border-gray-300">{item.age}</Text>
                      {item.vaccines.map((vaccine, colIndex) => (
                        <Text key={colIndex} className="w-16 color-blue-900 p-4 text-center border-l border-gray-300">{vaccine || '-'}</Text>
                      ))}
                    </View>
                  ))}
                </View>

                <Text className="font-sans text-black text-xl mt-6 mx-4">
                  Le vaccin Mosquirix a été intégré dans le calendrier de vaccination et les enfants le recevront en 4 doses comme indiqué sur le calendrier ci-dessus.
                </Text>


            
            
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
                  onPress={goToNextSlide}
                  style={{ padding: 10, borderRadius: 5 }}
                  className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                  disabled={!buttonEnabled}
                >
                  <Text className={buttonEnabled? "text-white" :"text-white"}>{'Suivant'}</Text>
            </TouchableOpacity>




          </View>


        <View className="mb-10"></View>
        </View>
        :screen3 == 2?
          
          <View >

              <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center">  3.2. Cas particulier de la première cohorte d'enfants, à l'introduction</Text>
              
          

            <View className="mb-10" >
                <View className="mt-6 border border-gray-300 rounded-lg overflow-hidden">

                <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod2/17.png')}
                              className="mx-4 mt-4 w-24 h-24 "/>
                    </TouchableOpacity>
                        

                      <Text className="font-sans text-black text-xl mt-6 mx-4">

                      ● Les enfants éligibles à la première dose du RTS,S sont tous les enfants âgés de 6 à 11mois (avant la première anniversaire)

                    
                      </Text>

                      <Text className="font-sans text-black text-xl mt-6 mx-4">
                      ● Les enfants qui seront âgés de 6 mois à l'introduction suivront le calendrier habituel tel que présenté précédemment (diapo précédente)

                      </Text>

                      <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod2/18.png')}
                              className="mx-4 mt-4 w-24 h-44 "/>
                    </TouchableOpacity>

                      <Text className="font-sans text-black text-xl mt-6 mx-4">
                      ● Les autres (7 mois à 11 mois) recevront la première dose à l'introduction, puis la deuxième dose sera administrée 1 mois après l'administration de la première dose et la troisième dose leur sera administrée 1 mois après la deuxième dose 

                      </Text>

                      <Text className="font-sans text-black text-xl mt-6 mb-10 mx-4">
                      ● La quatrième dose sera administrée à l'âge de 18 mois


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
                    onPress={goToNextSlide}
                    style={{ padding: 10, borderRadius: 5 }}
                    className={buttonEnabled? "mx-4 bg-black/80" :"mx-4 bg-black/40"}
                    disabled={!buttonEnabled}
                  >
                    <Text className={buttonEnabled? "text-white" :"text-white"}>{'Suivant'}</Text>
              </TouchableOpacity>




            </View>

          
          <View className="mb-10"></View>
        </View>

        

        :screen3 == 3?
          <>
            <View className="px-2 mb-10">
              <TouchableOpacity className="font-sans  mt-5 p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod2/2.png')}
                 className="w-80 h-44"
                />
              </TouchableOpacity>

              <View style={{ flex: 1, paddingHorizontal: 4 }}>
                <Text 
                  className="font-sans text-black  text-xl mb-4 mt-2"
                  numberOfLines={50} // Optional: limit to a specific number of lines if desired
                  ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                >
                  En vue d’une bonne efficacité du vaccin antipaludique, il faudra administrer 4 doses aux enfants mais à différents âges. 
                 
                </Text>

                <Text 
                  className="font-sans text-black  text-xl mb-4 mt-2"
                  numberOfLines={50} // Optional: limit to a specific number of lines if desired
                  ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                >
                  - La première dose : <Text className="text-blue-900">à 6 mois. </Text>
                </Text>

                <Text 
                  className="font-sans text-black  text-xl mb-4 mt-2"
                  numberOfLines={50} // Optional: limit to a specific number of lines if desired
                  ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                >
                  - La deuxième dose : <Text className="text-blue-900">à 7 mois.</Text>
                </Text>
                <Text 
                  className="font-sans text-black  text-xl mb-4 mt-2"
                  numberOfLines={50} // Optional: limit to a specific number of lines if desired
                  ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                >
                  - la troisième dose : <Text className="text-blue-900">à 9 mois.</Text>
                </Text>

                <Text 
                  className="font-sans text-black  text-xl mb-4 mt-2"
                  numberOfLines={50} // Optional: limit to a specific number of lines if desired
                  ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                >
                  - la quatrième dose : <Text className="text-blue-900"> à 18 mois.</Text>
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
        :screen3 == 4?
            <>
                  <View className="px-2 mb-2">

                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4"> 3.3. Que faire si un enfant arrive en retard pour sa vaccination ?</Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod2/3.png')}
                              className="mx-4 mt-4 w-72 h-52 "/>
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                        Si un enfant se présente en retard, il faut faire recours au guide technique du PEV pour connaitre son éligibilité.
                      
                    </Text>

                     <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                        A chaque rendez-vous vaccinal, l’enfant devra recevoir tous les vaccins et autres interventions préventives prévus à cet âge, et ratrapper les doses manquées.
 
                    </Text>

               
                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                      Il faudra, par la même occasion, rappeler aux parents/tuteurs les prochaines doses et les sensibiliser 
                      sur les autres méthodes de prévention qui accompagnent la vaccination.


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
        :screen3 == 5?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4">3.4. Contre indication à la vaccination contre le paludisme
                  </Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod2/4.png')}
                              className="mx-4 mt-4 w-72 h-52 "/>
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                      Le vaccin contre le paludisme n’est pas recommandé pour  un enfant qui a présenté une hypersensibilité sévère connue à une dose antérieure du vaccin : 

                    </Text>

                    <Text 
                        className="font-sans text-black  text-xl mb-2 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                      - RTS,S (Mosquirix), 
                    </Text>
                    <Text 
                        className="font-sans text-black  text-xl mb-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                      - Hépatite B ( contenu dans Pentavalent ). 
                    </Text>

                    <Text 
                        className="font-sans text-black font-bold  text-xl mb-1 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                    N.B :
                    </Text>

               
                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   La malnutrition, la séropositivité au VIH ou une infection mineure tel qu’un rhume ne sont pas considérées comme des contre-indications à la vaccination contre le paludisme.

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
                    onPress={() =>navigation.navigate(ROUTES.QUIZ3)}
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

export default Lessons3

const styles = StyleSheet.create({})