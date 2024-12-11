import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, Platform, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, ScrollView, SafeAreaView, Alert, Linking } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import { COLORS, ROUTES } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { IconButton } from 'react-native-paper';
import First from '../../components/First';
import { LinearGradient } from 'expo-linear-gradient';
import Loader from '../../components/Loading';

const Login = () => {

  const ios = Platform.OS == 'ios';
  var { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  //user info

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [BPS, setBPS] = useState("");
  const [BDS, setBDS] = useState("");
  const [sex, setSex] = useState('Masculin');
  const [typeOffice, setTypeOffice] = useState('CDS');
  const [place, setPlace] = useState('');
  const [changes, setChanges] = useState('');
  

  //evaluation info

  /*const [score1,setScore1] = useState(false);
  const [score2,setScore2] = useState(false);
  const [score3,setScore3] = useState(false);
  const [score4,setScore4] = useState(false);
  const [score5,setScore5] = useState(false);
  const [score6,setScore6] = useState(false);
  const [score7,setScore7] = useState(false);
  const [score8,setScore8] = useState(false);*/
  
  const [averageNote,setAverageNote] = useState(false);


  const [first, setFirst] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const [showFirst, setShowFirst] = useState(false);

  const toggleCheckbox = (genre) => {
    setSex(genre);
  };

  const toggleTypeOffice = (office) => {
    setTypeOffice(office);
  };





  useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {

      const initializeData = async () => {

        const storedIsLoggedIn = await AsyncStorage.getItem("isLoggedIn");
        const storedFirst = await AsyncStorage.getItem("first");

        /*await AsyncStorage.setItem("screen1",'1')
        await AsyncStorage.setItem("screen3",'1')
        await AsyncStorage.setItem("screen2",'1')*/
        
        //user Info 
        const storedName = await AsyncStorage.getItem("name");
        const storedPhone = await AsyncStorage.getItem("phone");
        const storedSex = await AsyncStorage.getItem("sex");
        const storedBPS = await AsyncStorage.getItem("BPS");
        const storedBDS = await AsyncStorage.getItem("BDS");
        const storedTypeOffice = await AsyncStorage.getItem("typeOffice");
        const storedPlace = await AsyncStorage.getItem("place");
        
        const storedChanges = await AsyncStorage.getItem("changes");

                //score
                const storedScore1 = await AsyncStorage.getItem("score1");
                const storedScore2 = await AsyncStorage.getItem("score2");
                const storedScore3 = await AsyncStorage.getItem("score3");
                const storedScore4 = await AsyncStorage.getItem("score4");
                const storedScore5 = await AsyncStorage.getItem("score5");
                const storedScore6 = await AsyncStorage.getItem("score6");
                const storedScore7 = await AsyncStorage.getItem("score7");
                const storedScore8 = await AsyncStorage.getItem("score8");

        
        setIsLoggedIn(storedIsLoggedIn || '');
        setFirst(storedFirst || '');

        //user Info

        setName(storedName || '');
        setPhone(storedPhone || '');
        setSex(storedSex || 'Masculin');
        setBPS(storedBPS || '');
        setBDS(storedBDS || '');
        setTypeOffice(storedTypeOffice || 'CDS');
        setPlace(storedPlace || '');
        console.log(storedChanges || '');

        //score Info

        const total = JSON.parse(JSON.parse(storedScore1))+ JSON.parse(JSON.parse(storedScore2))+ JSON.parse(JSON.parse(storedScore3))+ JSON.parse(JSON.parse(storedScore4))+ JSON.parse(JSON.parse(storedScore5))+ JSON.parse(JSON.parse(storedScore6))+ JSON.parse(JSON.parse(storedScore7))+ JSON.parse(JSON.parse(storedScore8));
        const avg = total /8;
        setAverageNote(avg.toFixed(2));
       

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

 



  const handleSignUp = async () =>{

    if(name == ""){

      Alert.alert(" Votre Nom & Prénom SVP!");

      setErrorMessage("Votre Nom & Prénom SVP!")
      
    }else if(phone == ""){
      
      Alert.alert("Votre numéro de téléphone SVP!");

      setErrorMessage("Votre numéro de téléphone SVP!")
      
    }else if(phone.length < 8){
      
      Alert.alert("Votre numéro de téléphone est Incorrect!");

      setErrorMessage("Votre numéro de téléphone SVP!")
      
    }else if(BPS == ""){

      Alert.alert(" Votre Bureau Provinciale Sanitaire (BPS) SVP!");
      setErrorMessage("Votre BPS SVP!")
      
    }else if(BDS == ""){

      Alert.alert(" Votre Bureau de District Sanitaire (BDS) SVP!");
      setErrorMessage("Votre BDS SVP!")
      
    }else if(place == ""){

      Alert.alert(" Votre Lieu de Travail SVP!");
      setErrorMessage("Votre Lieu de Travail SVP!")
      
    }else{

      
        setIsLoading(true);
    
        try {
          const dataToStore = [
            ['isOnline', JSON.stringify(1)],
            ['isLoggedIn', JSON.stringify(1)],
            ['sex', sex],
            ['name', name],
            ['phone', phone],
            ['BPS', BPS],
            ['BDS', BDS],
            ['typeOffice', typeOffice],
            ['place', place],
            ['changes', JSON.stringify(1)],
          ];
          AsyncStorage.multiSet(dataToStore);
        navigation.replace(ROUTES.LOGIN);

          
        } catch (e) {
          console.error('Failed to save data:', e);
        }

        setIsLoading(false)
      
    }
  }

  const profile = async() =>{

    await AsyncStorage.removeItem('isLoggedIn')

    navigation.replace(ROUTES.LOGIN)

  }

  const points = async() =>{

    navigation.navigate(ROUTES.POINTS)

  }

  const tsappText = () => {
    let phoneNumber = 'whatsapp://send?phone=+25761552799';
    Linking.openURL(phoneNumber);
 };


  return (<>
    {!showFirst? <Loader/> 
      : !first?<First/> 
      : isLoggedIn? (
        <KeyboardAvoidingView
        behavior={ios ? 'padding' : 'height'}
        style={{ flex: 1 }}
        >
       <View className="bg-bg-one font-sans  justify-center   px-4 ">
      
      
         {/* Header */}
        

        <View className=" font-sans mt-10 flex-row justify-between items-center">
        
        <IconButton icon='arrow-left' size={20} iconColor="black"    style={{alignSelf:'flex-start',height:20}} onPress={profile}/> 
        <Text className="text-xl font-semibold text-gray-600">Vaccin Malaria</Text>
         
        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium  text-green-800 flex-end">
        </Text>
        </TouchableOpacity>
      </View>

  
        <ScrollView className="px-2 " showsVerticalScrollIndicator={false}>
        
          {/* Profile Info */}

          

          <LinearGradient
          colors ={[ 'gray','#149BD5','gray']}
          start={[0, 1]}
          end={[1, 0]}
          className="items-center py-6   rounded-3xl mt-16 mb-5 "
          >
          
            <Image
              source={sex=="Masculin"? require('../../../assets/male.jpg') : require('../../../assets/female.png') } // Fix the correct path for the user image
              className="w-24 h-24 rounded-full -mt-20 bg-red-900 "
              
            />
            <Text className="font-sans mt-4 text-2xl font-semibold text-white">{name}</Text>


      {/* Follow and Message Buttons */}
            <View className="flex-row justify-between items-center mt-4">
                
              
                <TouchableOpacity className=" bg-white px-4 py-2 rounded-full mr-4" onPress={points}>
                  <Text className="text-black  font-semibold">Points :  {averageNote}%</Text>
                </TouchableOpacity>

                
                
                <TouchableOpacity className="bg-white px-4 py-2 rounded-full " onPress={profile}>
                  <Text className="text-black font-semibold">Modifier Profile</Text>
                </TouchableOpacity>
            </View>
            
  
        
          </LinearGradient>

          <View className="font-sans w-full border-2 border-grey"></View>


            <View >

                <View className="font-sans flex-row justify-between  mt-10 ">
                  <Text   style={{alignSelf:'flex-start',height:20}} /> 
                  
                  <Text className="font-sans text-center font-bold text-2xl text-gray-600 mb-4">
                        MODULES
                  </Text>
                  <TouchableOpacity className="font-sans p-1 justify-end">
                        
                  </TouchableOpacity>
                </View>

                <View className="p-4 mt-4 rounded-2xl bg-white mb-20 items-center">

                <View >

                  <TouchableOpacity 
                      onPress={() => {  
                        navigation.navigate(ROUTES.LESSONS);
                      }}
                      style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                    >
                      <View className="flex-row items-center p-6 mb-4 rounded-xl bg-gray-200 shadow-lg">
                        {/* Number Indicator */}
                        
                        <Text className="text-blue-900 w-12 h-12 text-center  font-bold p-4 bg-white rounded-full font-semibold">
                          1
                        </Text>

                        
                        {/* Text Container */}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                          <Text 
                            className="text-black font-sans text-semiBold" 
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                          >
                            Définition du paludisme
                          </Text>
                          </View>
                      
                      </View>
                    </TouchableOpacity>
            

                  
                    <TouchableOpacity 
                      onPress={() => {  
                        navigation.navigate(ROUTES.LESSONS2);
                      }}
                      style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                    >
                      <View className="flex-row items-center p-4 mb-4 rounded-xl bg-gray-200 shadow-lg">
                        {/* Number Indicator */}
                        <Text className="text-blue-900 w-12 h-12 text-center  font-bold p-4 bg-white rounded-full font-semibold">
                        
                          2
                        </Text>

                        
                        {/* Text Container */}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                          <Text 
                            className="text-black text-semiBold font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                          >
                            Caractéristiques et conditions de stockage du vaccin contre le paludisme RTS,S

                              </Text>
                              </View>
                          
                          </View>
                    </TouchableOpacity>


                    <TouchableOpacity 
                      onPress={() => {  
                        navigation.navigate(ROUTES.LESSONS3);
                      }}
                      style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                    >
                      <View className="flex-row items-center p-4 mb-4 rounded-xl bg-gray-200 shadow-lg">
                        {/* Number Indicator */}
                        <Text className="text-blue-900 w-12 h-12 text-center  font-bold p-4 bg-white rounded-full font-semibold">
                        
                          3
                        </Text>

                        
                        {/* Text Container */}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                          <Text 
                            className="text-black text-semiBold font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                          >
                            Calendrier de vaccination contre le paludisme, éligibilité et contre-indications
                              </Text>
                              </View>
                          
                          </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={() => {  
                        navigation.navigate(ROUTES.LESSONS4);
                      }}
                      style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                    >
                      <View className="flex-row items-center p-4 mb-4 rounded-xl bg-gray-200 shadow-lg">
                        {/* Number Indicator */}
                        <Text className="text-blue-900 w-12 h-12 text-center  font-bold p-4 bg-white rounded-full font-semibold">
                        
                          4
                        </Text>

                        
                        {/* Text Container */}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                          <Text 
                            className="text-black text-semiBold font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                          >
                            Administration du vaccin contre le paludisme

                              </Text>
                              </View>
                          
                          </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={() => {  
                        navigation.navigate(ROUTES.LESSONS5);
                      }}
                      style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                    >
                      <View className="flex-row items-center p-4 mb-4 rounded-xl bg-gray-200 shadow-lg">
                        {/* Number Indicator */}
                        <Text className="text-blue-900 w-12 h-12 text-center  font-bold p-4 bg-white rounded-full font-semibold">
                        
                          5
                        </Text>

                        
                        {/* Text Container */}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                          <Text 
                            className="text-black text-semiBold font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                          >
                            Enregistrement et suivi du vaccin contre le paludisme

                              </Text>
                              </View>
                          
                          </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={() => {  
                        navigation.navigate(ROUTES.LESSONS6);
                      }}
                      style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                    >
                      <View className="flex-row items-center p-4 mb-4 rounded-xl bg-gray-200 shadow-lg">
                        {/* Number Indicator */}
                        <Text className="text-blue-900 w-12 h-12 text-center  font-bold p-4 bg-white rounded-full font-semibold">
                        
                          6
                        </Text>

                        
                        {/* Text Container */}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                          <Text 
                            className="text-black text-semiBold font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                          >
                            Surveillance des manifestations postvaccinales indésirables (MAPI)

                              </Text>
                              </View>
                          
                          </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={() => {  
                        navigation.navigate(ROUTES.LESSONS7);
                      }}
                      style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                    >
                      <View className="flex-row items-center p-4 mb-4 rounded-xl bg-gray-200 shadow-lg">
                        {/* Number Indicator */}
                        <Text className="text-blue-900 w-12 h-12 text-center  font-bold p-4 bg-white rounded-full font-semibold">
                        
                          7
                        </Text>

                        
                        {/* Text Container */}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                          <Text 
                            className="text-black text-semiBold font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                          >
                            Communiquer avec les parents sur le vaccin contre le paludisme
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={() => {  
                        navigation.navigate(ROUTES.LESSONS8);
                      }}
                      style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                    >
                      <View className="flex-row items-center p-4 mb-4 rounded-xl bg-gray-200 shadow-lg">
                        {/* Number Indicator */}
                        <Text className="text-blue-900 w-12 h-12 text-center  font-bold p-4 bg-white rounded-full font-semibold">
                        
                          8
                        </Text>

                        
                        {/* Text Container */}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                          <Text 
                            className="text-black text-semiBold font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                          >
                            Des opportunités manquées de vaccination (OMV)

                              </Text>
                              </View>
                          
                          </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      onPress={() => {  
                        navigation.navigate(ROUTES.SUMMARY);
                      }}
                      style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                    >
                      <View className="flex-row items-center p-4 mb-4 rounded-xl bg-gray-200 shadow-lg">
                        {/* Number Indicator */}
                        <Text className="text-red-600 w-12 h-12 text-center text-3xl  font-bold p-2 bg-white rounded-full font-semibold">
                        
                        !?
                        </Text>

                        
                        {/* Text Container */}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                          <Text 
                            className="text-black font-bold text-lg font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                          >
                           Que faire dans ces cas ?

                              </Text>
                              </View>
                          
                          </View>
                    </TouchableOpacity>
                        
            
                  
                  
                

                  <View className="flex-row mt-4 font-sans justify-center items-center ">
                    {/* First Image */}
                    <Image 
                      source={require('../../../assets/mod1/Logo_1.png')} 
                      className="w-16 h-16" 
                    />

                    
                    {/* Vertical Line */}
                    <View className="h-12 w-[5px] bg-gray-400 mx-2" />

                    {/* Second Image */}
                    <Image 
                      source={require('../../../assets/pev.png')} 
                      className="w-16 h-16 rounded-xl" 
                    />

                    {/* Vertical Line */}
                    <View className="h-12 w-[5px] bg-gray-400 mx-2" />

                    {/* Second Image */}
                    <Image 
                      source={require('../../../assets/gavi.png')} 
                      className="w-28 h-16 " 
                    />
                  </View>

                  </View>
              
               
                </View>


            </View>

            <View >

              <View className="font-sans flex-row justify-between  mt-2">
                <Text   style={{alignSelf:'flex-start',height:20}} /> 
                
                <Text className="font-sans text-center font-bold text-2xl text-gray-600 mb-4">
                      VIDEO DES MODULES
                </Text>
                <TouchableOpacity className="font-sans p-1 justify-end">
                      
                </TouchableOpacity>
              </View>

              <View className="p-4 mt-4 rounded-2xl bg-white mb-20 items-center">

              <View >

                <TouchableOpacity 
                    onPress={() => {Linking.openURL('https://youtu.be/pAn3XmPzi2c?si=-mk2b-UEE-btdMxp')}}
                    style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                  >
                    <View className="justify-center items-center p-6 mb-4 rounded-xl bg-gray-200 shadow-lg">
                     

                      
                      {/* Text Container */}
                      <View style={{ flex: 1, marginLeft: 8 }}>
                        <Image 
                          source={require('../../../assets/video/1.png')}
                          
                          className="w-72 h-40 mb-2 rounded-xl"
                        />

                        {/* Play Icon Overlay */}
                        <View className="flex-1 -mt-32   justify-center items-center">
                          <IconButton 
                            icon="play" 
                            size={48} 
                            iconColor="#FFF" 
                            className="bg-black/40 mb-16 "
                          />
                        </View>
                          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                                  <Text 
                                    className="font-sans text-black  text-xl mb-2"
                                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                          >
                          
                          Module 1

                          </Text>
                        </View>
                      </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => { Linking.openURL('https://youtu.be/9ZVco97uRX4?si=luuWVNOnOamkGCLy')}}
                    style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                  >
                    <View className="justify-center items-center p-6 mb-4 rounded-xl bg-gray-200 shadow-lg">
                     

                      
                      {/* Text Container */}
                      <View style={{ flex: 1, marginLeft: 8 }}>
                        <Image 
                          source={require('../../../assets/video/2.png')}
                          
                          className="w-72 h-40 mb-2 rounded-xl"
                        />
                         {/* Play Icon Overlay */}
                         <View className="flex-1 -mt-32   justify-center items-center">
                          <IconButton 
                            icon="play" 
                            size={48} 
                            iconColor="#FFF" 
                            className="bg-black/40 mb-16 "
                          />
                        </View>
                          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                                  <Text 
                                    className="font-sans text-black  text-xl mb-2"
                                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                          >
                          
                          Module 2

                          </Text>
                        </View>
                      </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                     onPress={() => { Linking.openURL('https://youtu.be/RqrSAeLQRI8?si=rdwPoF4_7lVw551c')}}
                    style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                  >
                    <View className="justify-center items-center p-6 mb-4 rounded-xl bg-gray-200 shadow-lg">
                     

                      
                      {/* Text Container */}
                      <View style={{ flex: 1, marginLeft: 8 }}>
                        <Image 
                          source={require('../../../assets/video/3.png')}
                          
                          className="w-72 h-40 mb-2 rounded-xl"
                        />
                         {/* Play Icon Overlay */}
                         <View className="flex-1 -mt-32   justify-center items-center">
                          <IconButton 
                            icon="play" 
                            size={48} 
                            iconColor="#FFF" 
                            className="bg-black/40 mb-16 "
                          />
                        </View>
                          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                                  <Text 
                                    className="font-sans text-black  text-xl mb-2"
                                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                          >
                          
                          Module 3

                          </Text>
                        </View>
                      </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => { Linking.openURL('https://youtu.be/jDsVhywOW7k?si=nqpodkLnrwOtBgIp')}}
                    
                    style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                  >
                    <View className="justify-center items-center p-6 mb-4 rounded-xl bg-gray-200 shadow-lg">
                     

                      
                      {/* Text Container */}
                      <View style={{ flex: 1, marginLeft: 8 }}>
                        <Image 
                          source={require('../../../assets/video/4.png')}
                          
                          className="w-72 h-40 mb-2 rounded-xl"
                        />
                         {/* Play Icon Overlay */}
                         <View className="flex-1 -mt-32   justify-center items-center">
                          <IconButton 
                            icon="play" 
                            size={48} 
                            iconColor="#FFF" 
                            className="bg-black/40 mb-16 "
                          />
                        </View>
                          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                                  <Text 
                                    className="font-sans text-black  text-xl mb-2"
                                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                          >
                          
                          Module 4

                          </Text>
                        </View>
                      </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => { Linking.openURL('https://youtu.be/dVh1Ug2mbg4?si=D--Rjm8VSrJW8fZ1')}}
                    
                    style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                  >
                    <View className="justify-center items-center p-6 mb-4 rounded-xl bg-gray-200 shadow-lg">
                     

                      
                      {/* Text Container */}
                      <View style={{ flex: 1, marginLeft: 8 }}>
                        <Image 
                          source={require('../../../assets/video/5.png')}
                          
                          className="w-72 h-40 mb-2 rounded-xl"
                        />
                         {/* Play Icon Overlay */}
                         <View className="flex-1 -mt-32   justify-center items-center">
                          <IconButton 
                            icon="play" 
                            size={48} 
                            iconColor="#FFF" 
                            className="bg-black/40 mb-16 "
                          />
                        </View>
                          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                                  <Text 
                                    className="font-sans text-black  text-xl mb-2"
                                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                          >
                          
                          Module 5

                          </Text>
                        </View>
                      </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => { Linking.openURL('https://youtu.be/8lF2Tir-pVk')}}
                    style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                  >
                    <View className="justify-center items-center p-6 mb-4 rounded-xl bg-gray-200 shadow-lg">
                     

                      
                      {/* Text Container */}
                      <View style={{ flex: 1, marginLeft: 8 }}>
                        <Image 
                          source={require('../../../assets/video/6.png')}
                          
                          className="w-72 h-40 mb-2 rounded-xl"
                        />
                         {/* Play Icon Overlay */}
                         <View className="flex-1 -mt-32   justify-center items-center">
                          <IconButton 
                            icon="play" 
                            size={48} 
                            iconColor="#FFF" 
                            className="bg-black/40 mb-16 "
                          />
                        </View>
                          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                                  <Text 
                                    className="font-sans text-black  text-xl mb-2"
                                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                          >
                          
                          Module 6

                          </Text>
                        </View>
                      </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => { Linking.openURL('https://youtu.be/ljq50cFnhic?si=0B_520iZd6Z_ZsP5')}}
                    
                    style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                  >
                    <View className="justify-center items-center p-6 mb-4 rounded-xl bg-gray-200 shadow-lg">
                     

                      
                      {/* Text Container */}
                      <View style={{ flex: 1, marginLeft: 8 }}>
                        <Image 
                          source={require('../../../assets/video/7.png')}
                          
                          className="w-72 h-40 mb-2 rounded-xl"
                        />
                         {/* Play Icon Overlay */}
                         <View className="flex-1 -mt-32   justify-center items-center">
                          <IconButton 
                            icon="play" 
                            size={48} 
                            iconColor="#FFF" 
                            className="bg-black/40 mb-16 "
                          />
                        </View>
                          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                                  <Text 
                                    className="font-sans text-black  text-xl mb-2"
                                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                          >
                          
                          Module 7

                          </Text>
                        </View>
                      </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => { Linking.openURL('https://youtu.be/nXylqKUKDx8?si=O6c-x-2isZwAi_YF')}}
                    
                    style={{ width: width * 0.8 }} // Set the TouchableOpacity width based on screen width
                  >
                    <View className="justify-center items-center p-6 mb-4 rounded-xl bg-gray-200 shadow-lg">
                     

                      
                      {/* Text Container */}
                      <View style={{ flex: 1, marginLeft: 8 }}>
                        <Image 
                          source={require('../../../assets/video/8.png')}
                          
                          className="w-72 h-40 mb-2 rounded-xl"
                        />
                         {/* Play Icon Overlay */}
                         <View className="flex-1 -mt-32   justify-center items-center">
                          <IconButton 
                            icon="play" 
                            size={48} 
                            iconColor="#FFF" 
                            className="bg-black/40 mb-16 "
                          />
                        </View>
                          <View style={{ flex: 1, paddingHorizontal: 4 }}>
                                  <Text 
                                    className="font-sans text-black  text-xl mb-2"
                                    numberOfLines={50} // Optional: limit to a specific number of lines if desired
                                    ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
                          >
                          
                          Module 8

                          </Text>
                        </View>
                      </View>
                    
                    </View>
                </TouchableOpacity>


                
                


                <View className="flex-row mt-4 font-sans justify-center items-center ">
                   {/* First Image */}
                   <Image 
                      source={require('../../../assets/mod1/Logo_1.png')} 
                      className="w-16 h-16" 
                    />

                    
                    {/* Vertical Line */}
                    <View className="h-12 w-[5px] bg-gray-400 mx-2" />

                    {/* Second Image */}
                    <Image 
                      source={require('../../../assets/pev.png')} 
                      className="w-16 h-16 rounded-xl" 
                    />

                    {/* Vertical Line */}
                    <View className="h-12 w-[5px] bg-gray-400 mx-2" />

                    {/* Second Image */}
                    <Image 
                      source={require('../../../assets/gavi.png')} 
                      className="w-28 h-16 " 
                    />
                </View>

                </View>


              </View>


              </View>

              <Text className="font-sans text-xl text-blue-900 text-center mb-4" >Avez-Vous des questions ou des suggestion?</Text> 
              
              <TouchableOpacity
                style={{marginLeft:10}}
                    onPress={()=> Linking.openURL('https://chat.whatsapp.com/LW7HCG0vsziBCeRPgenUcu')}
                    activeOpacity={0.7}>
                <View >
                <LinearGradient
                colors ={['green','#92BC1D']}
                start={[0, 1]}
                end={[1, 0]}
                className="items-center p-2  rounded-3xl mt-10  "
                >
 
                    <Text className="items-center font-sans text-text-white text-center text-xl" >
                   Rejoindre notre communauté Whatsapp
                    </Text>
                   
                    </LinearGradient>
                </View>
                </TouchableOpacity>

            <View className="mb-20"></View> 

         
        </ScrollView>
      </View>
      </KeyboardAvoidingView>
  
    ) : ( 

      <KeyboardAvoidingView
      behavior={ios ? 'padding' : 'height'}
      style={{ flex: 1 }}
      >
       <LinearGradient
          colors ={['#92BC1D', '#149BD5','#92BC1D']}
          start={[0, 1]}
          end={[1, 0]}
        >
       <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

       <View className="font-sans mt-12 mb-2 flex-1 justify-center items-center flex-row">
                {/* First Image */}
                <Image 
                  source={require('../../../assets/mod1/Logo_1.png')} 
                  className="w-20 h-20" 
                />

                {/* Vertical Line */}
                <View className="h-12 w-[5px] bg-gray-400 mx-2" />

                {/* Second Image */}
                <Image 
                  source={require('../../../assets/gavi.png')} 
                  className="w-28 h-12 rounded-xl" 
                />
              </View>

         <View >
           <Text className="text-white text-2xl  mt-1 text-center font-bold ">Vaccination contre le paludisme</Text>
         </View>

         <View className="mt-10 bg-white p-8 mx-2 " style={{borderRadius:40}} >

         <Text className=" font-sans font-bold text-black text-lg text-center mb-10">Compléter les informations suivantes</Text>

         {errorMessage && (
                   <Text className="font-sans text-xl mb-2 text-red-600 text-center">{errorMessage}</Text>
                 )}

          <View className="mb-4">

          <Text className=" text-semiBold  text-lg">Genre</Text>

            <View className="flex-row items-center border-b border-gray-300 mt-4">
            

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-8">
          
              

              <View  style={{ width: '30%'}} className="mx-8 ">
                <TouchableOpacity style={styles.checkboxContainer} onPress={()=>toggleCheckbox('Masculin')}>
                  <View style={[styles.checkbox, sex == 'Masculin' && styles.checked]}>
                    {sex == 'Masculin' && <View style={styles.innerCheckbox} ><IconButton icon='check' size={20} iconColor="#ffffff"  style={{height:20,marginLeft:-8,marginTop:0}}/>
                  </View>}
                  </View>
                  <Text  className="font-sans text-sm text-text-black"> Masculin</Text>
                </TouchableOpacity>
              </View>

              <View   style={{ width: '30%'}} className="mr-3 ">
              
                <TouchableOpacity style={styles.checkboxContainer} onPress={()=>toggleCheckbox('Féminin')}>
                  <View style={[styles.checkbox, sex == 'Féminin' && styles.checked]}>
                    {sex == 'Féminin' && <View style={styles.innerCheckbox} ><IconButton icon='check' size={20} iconColor="#ffffff"  style={{height:20,marginLeft:-8,marginTop:0}}/>
                  </View>}
                  </View>
                  <Text  className="font-sans text-sm text-text-black"> Féminin</Text>
                </TouchableOpacity>
              </View>
    
            </View>
          </View>
          </View>
      
        <View className="mb-4">

             <Text className="  text-semiBold  text-lg">Nom & Prénom</Text>
             <View className="flex-row items-center border-b border-gray-300">
               <TextInput
                 className="flex-1 py-2 text-black"
                 placeholder="Irakoze Jean Marie"
                 value={name}
                 onChangeText={setName}
               />
               <IconButton icon="check" color="#4A0E73" />
             </View>
           </View>
           <View className="mb-4">
              <Text className="  text-semiBold  text-lg">Téléphone</Text>
              <View className="flex-row items-center border-b border-gray-300">
                <TextInput
                  className="flex-1 py-2 text-black"
                  placeholder="61857469"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="numeric"
                />
                <IconButton icon="check" color="#4A0E73" />
              </View>
            </View>
           

           
           
           <View className="mb-4">
             <Text className="  text-semiBold  text-lg">Bureau Provinciale Sanitaire (BPS)</Text>
             <View className="flex-row items-center border-b border-gray-300">
               <TextInput
                 className="flex-1 py-2 text-black"
                 placeholder=" Bubanza"
                 value={BPS}
                 onChangeText={setBPS}
               />
               <IconButton icon="check" color="#4A0E73" />
             </View>
           </View>

           <View className="mb-4">
             <Text className=" text-semiBold  text-lg">Bureau de District Sanitaire (BDS)</Text>
             <View className="flex-row items-center border-b border-gray-300">
               <TextInput
                 className="flex-1 py-2 text-black"
                 placeholder="Mpanda"
                 value={BDS}
                 onChangeText={setBDS}
               />
               <IconButton icon="check" color="#4A0E73" />
             </View>
           </View>

           <View className="mb-4">

           <Text className=" text-semiBold  text-lg">Lieu de Travail</Text>
             <View className="flex-row items-center border-b border-gray-300 mt-4">
               

           <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-8">
         
              <View   style={{ width: '25%',marginLeft:10}}>
            
                <TouchableOpacity style={styles.checkboxContainer} onPress={()=>toggleTypeOffice('CDS')}>
                    <View style={[styles.checkbox, typeOffice == 'CDS' && styles.checked]}>
                      {typeOffice == 'CDS' && <View style={styles.innerCheckbox} ><IconButton icon='check' size={20} iconColor="#ffffff"  style={{height:20,marginLeft:-8,marginTop:0}}/>
                    </View>}
                    </View>
                    <Text  className="font-sans text-sm text-text-black text-center"> Centre De Santé </Text>
                  </TouchableOpacity>
              </View>

              <View  style={{ width: '25%'}} className="mx-2 ml-4">
                <TouchableOpacity style={styles.checkboxContainer} onPress={()=>toggleTypeOffice('Hôpital de District')}>
                  <View style={[styles.checkbox, typeOffice == 'Hôpital de District' && styles.checked]}>
                    {typeOffice == 'Hôpital de District' && <View style={styles.innerCheckbox} ><IconButton icon='check' size={20} iconColor="#ffffff"  style={{height:20,marginLeft:-8,marginTop:0}}/>
                  </View>}
                  </View>
                  <Text  className="font-sans text-sm text-text-black text-center "> Hôpital de District</Text>
                </TouchableOpacity>
              </View>
            
              <View  style={{ width: '25%'}} className="mx-2 ml-4">
                <TouchableOpacity style={styles.checkboxContainer} onPress={()=>toggleTypeOffice('Hôpital National')}>
                  <View style={[styles.checkbox, typeOffice == 'Hôpital National'  && styles.checked]}>
                    {typeOffice == 'Hôpital National' && <View style={styles.innerCheckbox} ><IconButton icon='check' size={20} iconColor="#ffffff"  style={{height:20,marginLeft:-8,marginTop:0}}/>
                </View>}
                  </View>
                  <Text  className="font-sans text-sm text-text-black text-center ml-2"> Hôpital National</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="mb-4">
        
             <Text className=" text-semiBold  text-lg">Nom {typeOffice !=='CDS'?"de l ' "+typeOffice :"de "+typeOffice }</Text>
             <View className="flex-row items-center border-b border-gray-300">
               <TextInput
                 className="flex-1 py-2 text-black"
                 placeholder="Murengeza"
                 value={place}
                 onChangeText={setPlace}
               />
               <IconButton icon="check" color="#4A0E73" />
             </View>
           </View>
          

            <TouchableOpacity onPress={handleSignUp} 
              style={{alignSelf:'flex-end'}}
              className="rounded-full w-24  mt-4 p-2 mb-4 bg-[#149BD5]"
           >
              <Text className="text-white text-center text-lg font-bold" >OK</Text>
            </TouchableOpacity>

          

         
         </View>
         <View className="mb-16"></View>
       </ScrollView>
     </LinearGradient>
   </KeyboardAvoidingView>
      
         
               
  
         

              

              

              
         

           
    )}
  </>);
};

const styles = StyleSheet.create({
  buttons: {
    marginTop: -50,
    marginLeft: 40,
    marginRight: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    letterSpacing: -0.39,
    textAlign: 'center'
  },
  numberText: {
    fontSize: 36,
    color: 'green',
    letterSpacing: 0,
    textAlign: 'center'
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 282,
    height: 348,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 8
  },
  codeContainer: {
    marginTop: 12,
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 20
  },
  code1: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 1,
  },
  code2: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: 'white'
  },
  passcodeText: {
    fontSize: 22,
    color: '#FFFFFF',
    letterSpacing: 0.34,
    lineHeight: 25
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 42,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    backgroundColor: COLORS.primary
  },
  loginErrorTxt: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
    width: '100%',
    height: 35,
    padding: 5,
    backgroundColor: COLORS.red
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    marginTop: 40,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  checked: {
    backgroundColor: '#000',
  },
  innerCheckbox: {
    width: 20,
    height: 20,
    backgroundColor: '#149BD5',
  }
});

export default Login;
