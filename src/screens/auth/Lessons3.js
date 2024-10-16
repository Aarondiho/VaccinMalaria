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
        <Text className="font-sans text-sm font-medium  text-green-800 flex-end">
        {screen3} / 4 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

    {
        screen3 == 1?
          
          <View >

              <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center">  3.1. Calendrier de vaccination incluant le vaccin contre le paludisme              </Text>
              
          

            <View className="mb-10" >
                <TouchableOpacity className="font-sans p-1 justify-center items-center" >
                <Image source={require('../../../assets/mod2/1.png')}
                          className="mx-4  mt-4 " 
                          style={{height:height*0.4, width: width*0.95}} />
                </TouchableOpacity>
                <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >Le vaccin Mosquirix a été intégré dans le calendrier de vaccination et les enfants le recevront en 4 doses comme indiqué sur le calendrier ci-dessus.
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

          
          <View className="mb-10"></View>
        </View>

        :screen3 == 2?
          <>
            <View className="px-2 mb-10">
              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod2/2.png')}
                  style={{ height: height * 0.29, width: width * 0.9, marginBottom: 40, marginTop: 20 }}
                />
              </TouchableOpacity>

              <View style={{ flex: 1, paddingHorizontal: 4 }}>
                <Text 
                  className="font-sans text-black  text-xl mb-4 mt-2"
                  numberOfLines={50} // Optional: limit to a specific number of lines if desired
                  ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                >
                  En vue d’une bonne efficacité du vaccin antipaludique, il faudra administrer 4 doses aux enfants mais à différents âges. 
                  La première dose à 6 mois, la deuxième à 7 mois, la troisième à 9 mois et la dernière après 6 à 18 mois correspondant 
                  à l’âge d’une année et demi (18 mois).
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
        :screen3 == 3?
            <>
                  <View className="px-2 mb-2">

                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4"> 3.2. Que faire si un enfant arrive en retard pour sa vaccination ?</Text>
                   

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
                      A chaque rendez-vous vaccinal, l’enfant devra recevoir tous les vaccins et autres interventions préventives prévus à cet âge y compris les doses précédentes manquées. 
 
                    </Text>

               
                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   Il faudra, par la même occasion, rappeler aux parents/tuteurs les prochaines doses et les sensibiliser sur les autres méthodes de prévention qui accompagnent la vaccination.


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
        :screen3 == 4?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-xl text-center text-blue-800 mt-4 mx-4">3.3. Contre indication à la vaccination contre le paludisme
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
                      Le vaccin contre le paludisme n’est pas recommandé pour  un enfant qui a présenté une hypersensibilité sévère connue à une dose antérieure du vaccin Mosquirix, du vaccin pentavalent/Hépatite B ou à l’un des composants du vaccin. Il est donc déconseillé de lui administrer les prochaines doses de ce vaccin. 

                    </Text>

               
                  <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                   Cela dit, la malnutrition, la séropositivité ou une infection mineur tel qu’un rhume ne devraient pas être considérées comme contre-indications à la vaccination contre le paludisme.

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

export default Lessons3

const styles = StyleSheet.create({})