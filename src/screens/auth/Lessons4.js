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
        <Text className="font-sans text-sm font-medium  text-green-800 flex-end">
        {screen4} / 5 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

    {
        screen4 == 1?
          
          <View >

            <View>
              
              <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center"> 4.1 Séances de vaccination: activités critiques </Text>
              
            </View>

            <View className="mb-10" >
                <TouchableOpacity className="font-sans p-1 justify-center items-center" >
                <Image source={require('../../../assets/mod2/5.png')}
                          className="mx-4  mt-4 " 
                          style={{height:height*0.32, width: width*0.95}} />
                </TouchableOpacity>
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

        :screen4 == 2?
          <>
            <View className="px-2 mt-4 mb-10">

            <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center">
               Avant la vaccination des enfants
            </Text>

              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod2/6.png')}
                  style={{ height: height * 0.4, width: width * 0.95, marginBottom: 40, marginTop: 20 }}
                />
              </TouchableOpacity>

              <View style={{ flex: 1, paddingHorizontal: 4 }}>
              <TouchableOpacity className="font-sans p-1 justify-center items-center">
                <Image 
                  source={require('../../../assets/mod2/12.png')}
                  style={{ height: height * 0.43, width: width * 0.95, marginBottom: 40, marginTop: 20 }}
                />
              </TouchableOpacity>
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
        :screen4 == 3?
            <>
                  <View className="px-2 mb-2">

                  <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center"> 
                    4.2. Comment s’assurer que le vaccin est de bonne qualité?
                  </Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod2/7.png')}
                              className="mx-4 mt-4"
                              style={{ height: height * 0.39, width: width * 0.98, marginBottom: 40, marginTop: 20 }}
                />
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                      Il est très important de s’assurer de la qualité du vaccin Mosquirix avant de l’administrer à un enfant. La vérification se fait au niveau de la date de péremption et de la pastille de contrôle sur le flacon à anneau vert. Celle du flacon en bon état est présentée sous forme d’un carré à l’intérieur d’un cercle ; et le carré a une teinte plus claire que le cercle. Plus la pastille sera exposée à la lumière/chaleur plus le carré intérieur sera de la même couleur voire même plus sombre que le cercle extérieur, ce qui vous démontrera que ce flacon est hors usage.

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
        :screen4 == 4?
          <>
                 <View className="px-2 mb-2">
                    
                  <Text className="font-sans text-2xl text-blue-800 mt-4 mx-4">Pendant la séance de vaccination (avec le vaccin contre le paludisme)

                  </Text>
                   

                    <TouchableOpacity className="font-sans justify-center items-center" >
                     
                     <Image source={require('../../../assets/mod2/8.png')}
                              className="mx-4 mt-4 w-72 h-52 "/>
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-5"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >

                      1. Accueillir les parents et trouver le nom de l'enfant dans les registres de vaccination
                    

                    </Text>

                    <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                     
                    2. Vérifier le statut vaccinal de l'enfant dans le carnet Santé mère et informer les parents des constats


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
                onPress={() =>navigation.navigate(ROUTES.QUIZ4)}
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

export default Lessons4

const styles = StyleSheet.create({})