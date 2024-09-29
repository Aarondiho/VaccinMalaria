import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, Platform, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
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
  const topMargin = ios ? 'mt-6' : ' ';
  const bottomMargin = ios ? 'mb-6' : 'mb-2';
  var { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  //user info

  const [Name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [BPS, setBPS] = useState("");
  const [BDS, setBDS] = useState("");
  const [sex, setSex] = useState('Masculin');
  const [typeOffice, setTypeOffice] = useState('CDS');
  const [place, setPlace] = useState('');

  //evaluation info

  const [score1,setScore1] = useState('0');
  const [score2,setScore2] = useState('0');
  const [score3,setScore3] = useState('0');


  const [first, setFirst] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [module, setModule] = useState(1);
  

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
        const storedName = await AsyncStorage.getItem("Name");
        const storedPhone = await AsyncStorage.getItem("phone");
        const storedSex = await AsyncStorage.getItem("sex");
        const storedBPS = await AsyncStorage.getItem("BPS");
        const storedBDS = await AsyncStorage.getItem("BDS");
        const storedTypeOffice = await AsyncStorage.getItem("typeOffice");
        const storedPlace = await AsyncStorage.getItem("place");

                //score
                const storedScore1 = await AsyncStorage.getItem("score1");
                const storedScore2 = await AsyncStorage.getItem("score2");
                const storedScore3 = await AsyncStorage.getItem("score3");
                

        
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

        //score Info

        setScore1(storedScore1 || '0');
        setScore2(storedScore2 || '0');
        setScore3(storedScore3 || '0');

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

    if(Name == ""){

      Alert.alert(" Votre Prénom SVP!");

      setErrorMessage("Votre Prénom SVP!")
      
    }else if(phone == ""){
      
      Alert.alert("Votre numéro de téléphone SVP!");

      setErrorMessage("Votre numéro de téléphone SVP!")
      
    }else if(phone.length < 8){
      
      Alert.alert("Votre numéro de téléphone est Incorrect!");

      setErrorMessage("Votre numéro de téléphone SVP!")
      
    }else if(BPS == ""){

      Alert.alert(" Votre Bureau Provinciale Sanitaire (BPS) SVP!");
      setErrorMessage("Votre Nom SVP!")
      
    }else if(place == ""){

      Alert.alert(" Votre Lieu de Travail SVP!");
      setErrorMessage("Votre Nom SVP!")
      
    }else{

      
        setIsLoading(true);
    
        try {
          const dataToStore = [
            ['isOnline', JSON.stringify(1)],
            ['isLoggedIn', JSON.stringify(1)],
            ['sex', sex],
            ['Name', Name],
            ['phone', phone],
            ['BPS', BPS],
            ['BDS', BDS],
            ['typeOffice', typeOffice],
            ['place', place],
          ];
          AsyncStorage.multiSet(dataToStore);
        navigation.replace(ROUTES.LOGIN);

          
        } catch (e) {
          console.error('Failed to save data:', e);
        }

        setIsLoading(false)
      
    }
  }

  const toggleLessons =()=>{

    module ==1?navigation.navigate(ROUTES.LESSONS) 
    :
    module ==2?navigation.navigate(ROUTES.LESSONS2) 
    :
    navigation.navigate(ROUTES.LESSONS3) 
  }

  const toggleQuiz =()=>{

    module==2?navigation.navigate(ROUTES.QUIZ2) 
    :
    module==3?navigation.navigate(ROUTES.QUIZ3) 
    :
    navigation.navigate(ROUTES.QUIZ1) 
  }


  return (<>
    {!showFirst? <Loader/> : isLoggedIn? (
        <SafeAreaView className="flex-1">
        <LinearGradient 
          colors={['#BD1634', '#291737']}
          start={[0,0]}
          end={[1,0]}
         className="flex-1 justify-center items-center">
      
        {/* Header */}
        <View className="flex-row justify-between items-center p-4 mt-10">
          
          <Text className="text-lg font-semibold text-white">Vaccin Malaria</Text>
          
        </View>
  
        <ScrollView className="p-3" showsVerticalScrollIndicator={false}>
        
          {/* Profile Info */}
          <View
          className="items-center p-6  rounded-3xl mt-16"
        >
            <Image
              source={sex=="Masculin"? require('../../../assets/male.jpg') : require('../../../assets/female.png') } // Fix the correct path for the user image
              className="w-24 h-24 rounded-full -mt-20"
            />
            <Text className="font-sans text-white mt-4 text-xl font-semibold">{Name}</Text>
  
            
  
            {/* Stats */}
            <View className="flex-row mt-4">
              <View className="items-center mx-4">
                <Text className="font-sans text-white font-bold">{JSON.parse(score1)}%</Text>
                <Text className="font-sans text-white">Evaluation 1</Text>
              </View>
              <View className="items-center mx-4">
                <Text className="font-sans text-white font-bold">{JSON.parse(score2)}%</Text>
                <Text className="font-sans text-white">Evaluation 2</Text>
              </View>
              <View className="items-center mx-4">
                <Text className="font-sans text-white font-bold">{JSON.parse(score3)}%</Text>
                <Text className="font-sans text-white">Evaluation 3</Text>
              </View>
            </View>
          </View>

          <View className="font-sans w-full border-2 border-white"></View>
  
          {/* Tabs */}
          <View className="flex-row justify-around mt-6 mb-6">
            <TouchableOpacity onPress={()=>setModule(1)}>
              <Text className={module==1?" font-sans text-lg bg-white p-3 rounded-xl font-semibold":" p-2 text-white font-sans text-lg font-semibold"}>Module 1&2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setModule(2)}>
              <Text className={module==2?"bg-white p-3 rounded-xl font-sans text-lg font-semibold":" p-2 text-white font-sans text-lg font-semibold"}>Module 3&4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setModule(3)}>
              <Text className={module==3?"bg-white p-3  rounded-xl font-sans text-lg font-semibold":"p-2 text-white font-sans text-lg font-semibold"}>Module 5&6</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop:20 }}>
         
          <TouchableOpacity onPress={toggleLessons}  style={{ width: '45%', height: 180, marginBottom: 8, borderRadius: 24 }} className="bg-input mx-2 items-center justify-center ">
             
              <Text className="bg-green-600 p-3 text-center mx-4 text-white mt-2"  style= {{borderRadius:48}} >Leçon {module}</Text>
              <View className="mb-16 mt-4">
              
                <Image
                  source={module === 1 ? require('../../../assets/mod2.png') 
                                      : module === 3 ? require('../../../assets/mod3.png') 
                                      : require('../../../assets/mod1.png')}
                  style={{width:100,height:100}}
                />
                
            </View>
          </TouchableOpacity>
          

          <TouchableOpacity onPress={toggleQuiz}  style={{ width: '45%', height: 180, marginBottom: 8, borderRadius: 24 }} className="bg-input mx-2 items-center justify-center ">
              <Text className="bg-purple-500 p-3 text-center mx-4 text-white mt-2"  style= {{borderRadius:48}} >Evaluation {module}</Text>
              <View className="mb-16 mt-4">
                 
                
                  <Image
                    source={module === 1 ? require('../../../assets/evaluation2.png') 
                                        : module === 3 ? require('../../../assets/evaluation3.png') 
                                        : require('../../../assets/evaluation1.png')}
                                        style={{width:100,height:100}}
                  />
                
              </View>
              </TouchableOpacity>

          </View>
  
        
        </ScrollView>
      </LinearGradient>
      </SafeAreaView>
  
    ) : ( 

      <KeyboardAvoidingView
      behavior={ios ? 'padding' : 'height'}
      style={{ flex: 1 }}
      >
      <LinearGradient 
       colors={['#BD1634', '#291737']}
       start={[0,0]}
       end={[1,0]}
        className="flex-1">
       <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

       <Image source={require('../../../assets/mod1/Logo_1.png')}
                  className="mt-12 mx-4 w-24 h-24" />

         <View className="mt-2">
           <Text className="text-white text-3xl font-bold ml-4">Identification</Text>
         </View>

         <View className="mt-10 bg-white p-8  -mb-10" style={{borderRadius:24}} >
         {errorMessage && (
                   <Text className="font-sans text-xl mb-2 text-red-600 text-center">{errorMessage}</Text>
                 )}

          <View className="mb-4">

          <Text className="text-gray-700 text-lg">Genre</Text>

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

             <Text className="text-gray-700 text-lg">Nom</Text>
             <View className="flex-row items-center border-b border-gray-300">
               <TextInput
                 className="flex-1 py-2 text-gray-700"
                 placeholder="Irakoze Jean Marie"
                 value={Name}
                 onChangeText={setName}
               />
               <IconButton icon="check" color="#4A0E73" />
             </View>
           </View>
           <View className="mb-4">
              <Text className="text-gray-700 text-lg">Téléphone</Text>
              <View className="flex-row items-center border-b border-gray-300">
                <TextInput
                  className="flex-1 py-2 text-gray-700"
                  placeholder="61857469"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="numeric"
                />
                <IconButton icon="check" color="#4A0E73" />
              </View>
            </View>
           

           
           
           <View className="mb-4">
             <Text className="text-gray-700 text-lg">Bureau Provinciale Sanitaire (BPS)</Text>
             <View className="flex-row items-center border-b border-gray-300">
               <TextInput
                 className="flex-1 py-2 text-gray-700"
                 placeholder=" Bubanza"
                 value={BPS}
                 onChangeText={setBPS}
               />
               <IconButton icon="check" color="#4A0E73" />
             </View>
           </View>

           <View className="mb-4">
             <Text className="text-gray-700 text-lg">Bureau de District Sanitaire (BDS)</Text>
             <View className="flex-row items-center border-b border-gray-300">
               <TextInput
                 className="flex-1 py-2 text-gray-700"
                 placeholder="Mpanda"
                 value={BDS}
                 onChangeText={setBDS}
               />
               <IconButton icon="check" color="#4A0E73" />
             </View>
           </View>

           <View className="mb-4">

           <Text className="text-gray-700 text-lg">Lieu de Travail</Text>
             <View className="flex-row items-center border-b border-gray-300 mt-4">
               

           <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} className="mb-8">
         
              <View   style={{ width: '25%',marginLeft:30}}>
            
                <TouchableOpacity style={styles.checkboxContainer} onPress={()=>toggleTypeOffice('CDS')}>
                    <View style={[styles.checkbox, typeOffice == 'CDS' && styles.checked]}>
                      {typeOffice == 'CDS' && <View style={styles.innerCheckbox} ><IconButton icon='check' size={20} iconColor="#ffffff"  style={{height:20,marginLeft:-8,marginTop:0}}/>
                    </View>}
                    </View>
                    <Text  className="font-sans text-sm text-text-black text-center"> Centre De Santé </Text>
                  </TouchableOpacity>
              </View>

              <View  style={{ width: '25%'}} className="mx-2 ">
                <TouchableOpacity style={styles.checkboxContainer} onPress={()=>toggleTypeOffice('Hôpital de District')}>
                  <View style={[styles.checkbox, typeOffice == 'Hôpital de District' && styles.checked]}>
                    {typeOffice == 'Hôpital de District' && <View style={styles.innerCheckbox} ><IconButton icon='check' size={20} iconColor="#ffffff"  style={{height:20,marginLeft:-8,marginTop:0}}/>
                  </View>}
                  </View>
                  <Text  className="font-sans text-sm text-text-black text-center"> Hôpital de District</Text>
                </TouchableOpacity>
              </View>
            
              <View  style={{ width: '25%'}} className="mx-2 ">
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
        
             <Text className="text-gray-700 text-lg">Nom {typeOffice}</Text>
             <View className="flex-row items-center border-b border-gray-300">
               <TextInput
                 className="flex-1 py-2 text-gray-700"
                 placeholder="Murengeza"
                 value={place}
                 onChangeText={setPlace}
               />
               <IconButton icon="check" color="#4A0E73" />
             </View>
           </View>
          

           <LinearGradient 
           colors={['#BD1634', '#291737']}
           start={[0,0]}
           end={[1,0]}
           className="flex-1 rounded-full w-48 p-4 mt-8 mb-14"
           style={{alignSelf:'flex-end'}}
           >
            <TouchableOpacity onPress={handleSignUp}>
              <Text className="text-white text-center text-lg font-bold" >Continuer</Text>
            </TouchableOpacity>

           </LinearGradient>

         
         </View>
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
    backgroundColor: '#BD1634',
  }
});

export default Login;
