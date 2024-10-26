import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTES } from '../../constants';
import Loader from '../../components/Loading';
import { LinearGradient } from 'expo-linear-gradient';

const Lessons = () => {


  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window');

  const [screen2, setScreen2] = useState(false)
  
  const [showFirst, setShowFirst] = useState(false);
  




  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
       
        const initializeData = async () => {
          
          const storedScreen2 = await AsyncStorage.getItem("screen2");
          
          setScreen2(JSON.parse(storedScreen2 || 1));
          
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


      AsyncStorage.setItem("screen2", JSON.stringify(screen2 + 1));
      setScreen2(screen2 + 1)

      navigation.replace(ROUTES.LESSONS2)


    }

    const goToPreviousSlide = () =>{


      AsyncStorage.setItem("screen2", JSON.stringify(screen2 - 1));
      setScreen2(screen2 - 1)

      navigation.replace(ROUTES.LESSONS2)


    }

    
  



  return (
    <SafeAreaView className="flex-1">
      <View 
       
        className="flex-1  bg-bg-one justify-center "
      >



      

      <View className=" font-sans mt-10 flex-row justify-between">
        
        <IconButton icon='arrow-left' size={20} iconColor="green"    style={{alignSelf:'flex-start',height:20}} onPress={() => navigation.goBack()}/> 
        <Text className="font-sans text-black text-2xl   font-medium">Module 2</Text> 

        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium  text-green-800 flex-end">
        {screen2} / 7 </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} >
        <View className="mb-6 w-full mt-4 px-6" >
 
            
      

      {
       
      screen2 == 1?

        <>
                  
        <View>
          <Text className="font-sans text-xl text-center text-blue-800 mt-5 mx-4">Caractéristiques et conditions de stockage du vaccin contre le paludisme
          </Text>
          
        </View>

        <View className="mb-10" >
            <TouchableOpacity className="font-sans p-1 justify-center mt-4 items-center" >
            <Image source={require('../../../assets/mod1/14.png')}
                      className="mx-4  w-72 h-44 mt-4 rounded-xl"/>
            </TouchableOpacity>
            <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-4"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                         Le vaccin MosquirixTM, également connu sous le nom de RTS,S/AS01, a été conçu pour prévenir le paludisme chez les enfants, 
                      en particulier celui causé par le parasite Plasmodium falciparum, la forme la plus répandue et dangereuse de la maladie. 
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
            className=" mx-4 bg-black/90"
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
            className=" mx-4 bg-black/90"
          >
            <Text style={{ color: '#fff' }}>Suivant</Text>
                  
            
          </TouchableOpacity>




        </View>
      </>

    :screen2 == 2?
      <>
        <View className="px-2 mb-10">
          <TouchableOpacity className="font-sans p-1 justify-center items-center" >
          <Image source={require('../../../assets/mod1/9.jpg')}
            className="mx-4  w-64 h-64 rounded-xl text-center mt-8"/>
          </TouchableOpacity>
            
          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      > Le vaccin est fourni sous forme de deux flacons : un contenant la poudre lyophilisée du vaccin et l'autre contenant un diluant pour reconstituer le vaccin.
                    Les deux flacons sont collés ensemble pour diminuer le risque d'erreur lors de la préparation.
                  
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
          className=" mx-4 bg-black/90"
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
          className=" mx-4 bg-black/90"
        >
          <Text style={{ color: '#fff' }}>Suivant</Text>
                
          
        </TouchableOpacity>




      </View>
      </>

    :screen2 == 3?
    <>
      <View className="px-2 mb-10">
        <TouchableOpacity className="font-sans p-1 mt-5 justify-center items-center" >
        <Image source={require('../../../assets/mod1/10.png')}
                            className="mb-10 mx-4 "
                            style={{width:width * 0.5,height:height*0.36}}  />
        </TouchableOpacity>
          
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
                         MosquirixTM (RTS,S) vient dans une boite de 100 flacons dont 50 flacons de vaccins et 50 flacons de diluants soit 100 doses après reconstitution. 
                  Chaque flacon permet de préparer deux doses de 0,5 ml. 
                  Chaque dose est ainsi injectée sous forme intramusculaire chez un enfant âgé de 6 à 18 mois.
          
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
        className=" mx-4 bg-black/90"
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
        className=" mx-4 bg-black/90"
      >
        <Text style={{ color: '#fff' }}>Suivant</Text>
              
        
      </TouchableOpacity>




    </View>
    </>        

               
    :screen2 == 4?
    <>
      <Text className="font-sans text-xl text-blue-800  text-center mt-5 mx-4">
                  2.1 Conservation du vaccin contre le paludisme
                </Text>

      <View className="px-2 mb-10 mt-4">
        <TouchableOpacity className="font-sans p-1 justify-center items-center" >
          <Image source={require('../../../assets/mod1/11.png')}
                            className="mx-4  w-24 h-52 text-center"/>
        </TouchableOpacity>
          
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
          Il est crucial de maintenir le vaccin Mosquirix dans des conditions appropriées pour garantir son efficacité et sa sécurité. Celui-ci doit être stocké au réfrigérateur à une température comprise entre 2 °C et 8 °C. 
          
 
        </Text>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
          Il est important de ne pas séparer les deux flacons qui sont collés ensemble durant le stockage et le transport. Par ailleurs, le vaccin doit être protégé de la lumière et du gel.

 
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
        className=" mx-4 bg-black/90"
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
        className=" mx-4 bg-black/90"
      >
        <Text style={{ color: '#fff' }}>Suivant</Text>
              
        
      </TouchableOpacity>

    </View>
    </>   

    :screen2 == 5?
    <>

                <Text className="font-sans text-xl text-blue-800  text-center mt-5 mx-4">
                2.2 Comment range-t-on le vaccin dans le réfrigérateur ?
                </Text>

        <View className="px-2 mb-10">
          
          <TouchableOpacity className="font-sans p-1 justify-center items-center" >
            <Image source={require('../../../assets/mod1/12.png')}
                              className=" mt-5 mb-5 mx-4 w-32 h-36 "/>
          </TouchableOpacity>
            
          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >
            Pour bien gérer les vaccins, il est essentiel de ranger ceux qui sont sensible au froid 
                    (PCV13, Rotarix, DTC-HepB-Hib, Td, DTC, VPI et RTS,S/AS01) dans le panier du haut. 
                    Par contre, les vaccins qui supportent mieux les températures plus chaudes (BCG et le RR), 
                    doivent être rangés dans le panier du bas.
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
  className=" mx-4 bg-black/90"
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
  className=" mx-4 bg-black/90"
>
  <Text style={{ color: '#fff' }}>Suivant</Text>
        
  
</TouchableOpacity>

</View>

    </>   

    :screen2 == 6?
    <>



                <Text className="font-sans text-xl text-blue-800 mt-4 mx-4 text-center">2.3 Conditionnement du vaccin contre le paludisme</Text>
                

                <View className="px-2 mb-10">
          
                <TouchableOpacity className="font-sans p-1 mt-8 justify-center items-center" >

                <Text className="text-3xl text-red-500 mb-5 "> !! ATTENTION</Text>

                  <Image source={require('../../../assets/mod1/13.png')}
                            className="mx-4  h-24 mb-10" style={{width:width*0.92}} />
                 
                 </TouchableOpacity>
                 <View style={{ flex: 1, paddingHorizontal: 4 }}>
                      <Text 
                        className="font-sans text-black  text-xl mb-4 mt-2"
                        numberOfLines={50} // Optional: limit to a specific number of lines if desired
                        ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                      >  
                  Le diluant utilisé pour préparer le vaccin contre le paludisme ne doit jamais être utilisé pour préparer d'autres vaccins. 
                  De même, les diluants destinés à d'autres vaccins ne doivent en aucun cas être utilisés pour la préparation du vaccin contre le paludisme.

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
                className=" mx-4 bg-black/90"
              >
                <Text style={{ color: '#fff' }}>Précédent</Text>
                
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() =>navigation.navigate(ROUTES.QUIZ2)}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-end'
                }}
                className=" mx-4 bg-black/90"
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