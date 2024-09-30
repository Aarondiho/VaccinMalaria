import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
    <KeyboardAvoidingView
          
          style={{ flex: 1 }}
          >

      {
      screen1 == 1?

        <ImageBackground 
                source={require('../../../assets/mod1/Image1.png')}
                style={{ position :'absolute',top:0,width:width, heigth:height,bottom:-80}}
                blurRadius={2} 
                className={" -translate-y-20"}
                >
            <ScrollView showsHorizontalScrollIndicator={false} className='bg-black/60'>
                
            <View className="font-sans flex-row justify-between mb-10 mt-8">
        
            <TouchableOpacity className="font-sans p-1 justify-start" >
              <IconButton icon="arrow-left" size={24} iconColor="white" onPress ={()=>navigation.goBack()} className="mt-24"/>
          
            </TouchableOpacity>

            <TouchableOpacity className="font-sans p-1 justify-end" >
              <Image source={require('../../../assets/mod1/Logo_1.png')}
                        className="mt-24 mx-4" />
            </TouchableOpacity>

        
      
      </View>
                  
                  <View>
                    <Text className="font-sans text-2xl text-white mt-2 mx-4">Module 1 : Qu’est-ce que le paludisme ?
                    </Text>
                    <Text className="font-sans text-2xl text-white mt-4 mx-4">  1.1 Définition </Text>
                    
                  </View>

                  <View className="font-sans flex-row justify-between mb-10 mt-8">
        
                    <TouchableOpacity className="font-sans p-1 justify-start" >
                    <Image source={require('../../../assets/mod1/1.png')}
                              className="mx-4  w-32 h-40 text-center"/>
                    </TouchableOpacity>

                    <Text className="font-sans mb-10 text-sm text-white mt-2 w-48 mx-6 justify-end" style={{fontSize:16}}>
                      Le paludisme, aussi appelé malaria, est une maladie infectieuse causée par un parasite,
                      plasmodium, qui se transmet principalement 
                      par les piqûres de moustiques infectés, notamment le moustique femelle Anophèles.
                    </Text>
                  
                  </View>

                  <View className="font-sans flex-row justify-between mb-10 mt-8">
        
                    <Text className="font-sans mx-4  text-sm text-white mt-2 w-52 justify-start" style={{fontSize:16}}>
                    Les symptômes du paludisme peuvent varier, mais incluent généralement : 
                    la fièvre, les frissons, les maux de tête, les douleurs musculaires,
                     la fatigue ainsi que les vomissements.


                    </Text>
                   <TouchableOpacity className="font-sans p-1 justify-end" >
                    <Image source={require('../../../assets/mod1/2.png')}
                              className="mb-10 mx-4 w-32 h-24 "/>
                    </TouchableOpacity>
                  </View>

                  <View className="font-sans flex-row justify-between mb-10 mt-8">
        
                    <TouchableOpacity className="font-sans p-1 justify-start" >
                    <Image source={require('../../../assets/mod1/3.png')}
                              className="mx-4  w-32 h-32 text-center"/>
                    </TouchableOpacity>

                    <Text className="font-sans mb-10 text-sm text-white mt-2 w-44 justify-end" style={{fontSize:16}}>
                        Chaque minute, un enfant meurt du paludisme dans le monde. 
                    </Text>
                  
                  </View>

                  <View className="font-sans flex-row justify-between mb-10 mt-8">
        
                    <Text className="font-sans mx-4  text-sm text-white mt-2 w-52 justify-start" style={{fontSize:16}}>
                    En 2022, environ 14 enfants sur 100 000 sont morts à cause de cette maladie. 
                     94 % des cas de paludisme étaient concentrés en Afrique,
                     et le taux de mortalité était de 56 pour 100 000 habitants
                    </Text>
                   <TouchableOpacity className="font-sans p-1 justify-end" >
                    <Image source={require('../../../assets/mod1/4.png')}
                              className="mb-10 mx-4 w-32 h-36 "/>
                    </TouchableOpacity>
                  </View>

                  <Text className="font-sans text-2xl text-white mt-4 mx-4"> 1.2 Traitement et prévention du paludisme</Text>
                   
                   <Text className="font-sans  mx-8  text-sm text-white mt-6 justify-start mb-10" style={{fontSize:16}}>Le paludisme est la principale cause de maladie et de décès chez les enfants au Burundi. Pour traiter cette maladie, on utilise principalement des médicaments antipaludiques, comme Artéméther Luméfantrine (AL), qui sont efficaces contre les formes les plus courantes du paludisme. Il est très important de diagnostiquer le paludisme rapidement, de préférence avec des tests rapides, pour commencer le traitement au plus vite.</Text> 

                 <Text className="font-sans mx-8  text-sm text-white mt-2  justify-start" style={{fontSize:16}}>
                 De plus, les mesures de prévention suivantes sont déjà utilisées :
                 </Text>

                 <View className="font-sans flex-row justify-between mb-10 mt-8">
        
                    <TouchableOpacity className="font-sans p-1 justify-start" >
                    <Image source={require('../../../assets/mod1/5.png')}
                              className="mx-4  w-40 h-32 text-center"/>
                    </TouchableOpacity>

                    <Text className="font-sans mb-10 text-center  text-sm text-white mt-2 w-44 mx-4 justify-end" style={{fontSize:16}}>
                    Dormir sous une moustiquaire imprégnée
                    </Text>
                  
                  </View>

                  <View className="font-sans flex-row justify-between mb-10 mt-8 ">
        
                    <Text className="font-sans mx-4  text-sm text-white mt-2 w-52 justify-start" style={{fontSize:16}}>
                      Pulvérisation d’insecticides à l'intérieur de la maison 
                    </Text>
                   <TouchableOpacity className="font-sans p-1 justify-end" >
                    <Image source={require('../../../assets/mod1/6.png')}
                              className="w-44 h-32 -ml-10"/>
                    </TouchableOpacity>
                  </View>

                  <View className="font-sans flex-row justify-between mb-10 mt-8">
        
                    <TouchableOpacity className="font-sans p-1 justify-start" >
                    <Image source={require('../../../assets/mod1/7.png')}
                              className="mx-4  w-32 h-32 text-center"/>
                    </TouchableOpacity>

                    <Text className="font-sans mb-10 text-sm text-white mt-2 w-44 mx-4 justify-end" style={{fontSize:16}}>
                     Soins préventifs occasionnels pendant la grossesse 
                    </Text>
                  
                  </View>

                  <Text className="font-sans text-2xl text-white mt-4 mx-4 text-center">   1.3 Comment sera déployé le vaccin contre le paludisme ?</Text>
                  <Text className="font-sans  text-sm text-white mt-6 mx-8 justify-start mb-10" style={{fontSize:16}}>
                  En raison du nombre limité de vaccins contre le paludisme dans le monde, le Ministère de la Sante Publique et de la Lutte contre le Sida (MSPLS) a choisi des districts sanitaires en fonction du risque élevé de cas grave et de décès du paludisme. 
                  </Text>

      <View className="font-sans flex-row justify-between mb-10 mt-8">
        
        <TouchableOpacity className="font-sans p-1 justify-start" >
        <Image source={require('../../../assets/mod1/8.png')}
                  className="mx-4  w-32 h-36 mt-12 text-center"/>
        </TouchableOpacity>

        <Text className="font-sans mb-10 text-sm text-white mt-2 w-48 mx-6 justify-end" style={{fontSize:16}}>
        Ainsi, le vaccin sera disponible dans 25 districts de santé lors de cette première étape : Mabayi, Cibitoke, Bukinanyana, Bubanza, Mpanda, Gihofi, Rutana, Butezi, Kinyinya, Gisuru, Ruyigi, Cankuzo, Murore, Buhiga, Nyabikere, Muyinga, Gashoho, Giteranyi, Buye, Ngozi, Kiremba, Busoni, Mukenke, Kirundo et Vumbi.
        </Text>
      
      </View>
            <TouchableOpacity
              onPress={() =>goToNextSlide()}
              style={{
                position: 'absolute',
                bottom: 10,
                right: 20,
                padding: 10,
                borderRadius: 5,
              }}
              className="bg-black mt-10"
            >
              <Text style={{ color: '#fff' }}>Suivant (Module 2)</Text>
            </TouchableOpacity> 

            </ScrollView>

        </ImageBackground>
          

          :screen1 == 2?

          <ImageBackground 
          source={require('../../../assets/mod1/Image1.png')}
          style={{ position :'absolute',top:0,width:width, heigth:height,bottom:-80}}
          blurRadius={2} 
          className={" -translate-y-20"}
          >

          <ScrollView showsHorizontalScrollIndicator={false} className='bg-black/60'>
              
          <View className="font-sans flex-row justify-between mb-10 mt-8">
        
            <TouchableOpacity className="font-sans p-1 justify-start" >
              <IconButton icon="arrow-left" size={24} iconColor="white" onPress ={()=>navigation.goBack()} className="mt-24"/>
          
            </TouchableOpacity>

            <TouchableOpacity className="font-sans p-1 justify-end" >
              <Image source={require('../../../assets/mod1/Logo_1.png')}
                        className="mt-24 mx-4" />
            </TouchableOpacity>
          </View>

                <View>
                  <Text className="font-sans text-2xl text-white mx-4">
                    Module 2 : Caractéristiques et conditions de stockage du vaccin
                  </Text>
                  <Text className="font-sans mx-8  text-sm text-white mt-6  justify-start mb-10" style={{fontSize:16}}>
                    Le vaccin MosquirixTM, également connu sous le nom de RTS,S/AS01, a été conçu pour prévenir le paludisme chez les enfants, 
                    en particulier celui causé par le parasite Plasmodium falciparum, la forme la plus répandue et dangereuse de la maladie. 
                  </Text> 

                </View>

                <View className="font-sans flex-row justify-between mb-10 mt-8">
      
                  <TouchableOpacity className="font-sans p-1 justify-start" >
                  <Image source={require('../../../assets/mod1/9.jpg')}
                            className="mx-4  w-32 h-32 text-center mt-8"/>
                  </TouchableOpacity>

                  <Text className="font-sans mb-10 text-sm text-white mt-2 w-48 mx-6 justify-end" style={{fontSize:16}}>
                    Le vaccin est fourni sous forme de deux flacons : un contenant la poudre lyophilisée du vaccin et l'autre contenant un diluant qui pour reconstituer le vaccin.
                    Les deux flacons sont collés ensemble pour diminuer le risque d'erreur lors de la préparation.
                  </Text>
                
                </View>

                <View className="font-sans flex-row justify-between mb-10 mt-8">
      
                  <Text className="font-sans mx-4  text-sm text-white mt-2 w-52 justify-start" style={{fontSize:16}}>
                  
                  MosquirixTM (RTS,S) vient dans une boite de 100 flacons dont 50 flacons de vaccins et 50 flacons de diluants soit 100 doses après reconstitution. 
                  Chaque flacon permet de préparer deux doses de 0,5 ml. 
                  Chaque dose est ainsi injectée sous forme intramusculaire chez un enfant âgé de 6 à 18 mois.


                  </Text>
                <TouchableOpacity className="font-sans p-1 justify-end" >
                  <Image source={require('../../../assets/mod1/10.png')}
                            className="mb-10 mx-4 w-32 h-40 "/>
                  </TouchableOpacity>
                </View>

                <Text className="font-sans text-2xl text-white  text-center mt-10 mx-4">
                  Conservation du vaccin contre le paludisme
                </Text>

                <View className="font-sans flex-row justify-between mb-10 mt-8">
      
                  <TouchableOpacity className="font-sans p-1 justify-start" >
                  <Image source={require('../../../assets/mod1/11.png')}
                            className="mx-4  w-24 h-72 text-center"/>
                  </TouchableOpacity>

                  <Text className="font-sans mb-10 text-sm text-white mt-2 w-52 mx-8 justify-end" style={{fontSize:16}}>
                  Il est crucial de maintenir le vaccin Mosquirix dans des conditions appropriées pour garantir son efficacité et sa sécurité. Celui-ci doit être stocké au réfrigérateur à une température comprise entre 2 °C et 8 °C. Il est important de ne pas séparer les deux flacons qui sont collés ensemble durant le stockage et le transport. Par ailleurs, le vaccin doit être protégé de la lumière et du gel.

 
                  </Text>
                
                </View>

                <Text className="font-sans text-2xl text-white  text-center mt-10 mx-4">
                Comment range-t-on le vaccin dans le réfrigérateur ?
                </Text>

                <View className="font-sans flex-row justify-between mb-10 mt-8">
      
                  <Text className="font-sans mx-4  text-sm text-white mt-2 w-52 justify-start" style={{fontSize:16}}>
                  Pour bien gérer les vaccins, il est essentiel de ranger ceux qui sont sensible au froid 
                  (PCV13, Rotarix, DTC-HepB-Hib, Td, DTC, VPI et RTS,S/AS01) dans le panier du haut. 
                  Par contre, les vaccins qui supportent mieux les températures plus chaudes (BCG et le RR), 
                  doivent être rangés dans le panier du bas.
                  </Text>

                <TouchableOpacity className="font-sans p-1 justify-end" >
                  <Image source={require('../../../assets/mod1/12.png')}
                            className="mb-10 mx-4 w-32 h-36 "/>
                  </TouchableOpacity>
                </View>

                <Text className="font-sans text-2xl text-white mt-4 mx-4 text-center">Conditionnement du vaccin contre le paludisme</Text>
                
                <Text className="font-sans mx-8  text-sm text-white mt-6  justify-start mb-10" style={{fontSize:16}}>
                  
                Le diluant utilisé pour préparer le vaccin contre le paludisme ne doit jamais être utilisé pour préparer d'autres vaccins. 
                De même, les diluants destinés à d'autres vaccins ne doivent en aucun cas être utilisés pour la préparation du vaccin contre le paludisme.

                </Text>


                  <Image source={require('../../../assets/mod1/13.png')}
                            className="mx-4  h-24 mb-20" style={{width:width*0.92}} />
                 

                 

                 <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-24 mt-4">

            <TouchableOpacity
                onPress={() =>goToPreviousSlide()}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  alignSelf:'flex-start'
                }}
                className=" mx-4 bg-black"
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
                className=" mx-4 bg-black"
              >
                <Text style={{ color: '#fff' }}>Evaluation</Text>
                      
                
              </TouchableOpacity>

  
 

</View>

          </ScrollView>

      </ImageBackground>

        
        : <Loader/>

        

        
      }
        </KeyboardAvoidingView>

    
  )
}

export default Lessons

const styles = StyleSheet.create({})