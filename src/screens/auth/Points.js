import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';

const Points = () => {
    
  var { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

    //evaluation info

  const [score1,setScore1] = useState(false);
  const [score2,setScore2] = useState(false);
  const [score3,setScore3] = useState(false);
  const [score4,setScore4] = useState(false);
  const [score5,setScore5] = useState(false);
  const [score6,setScore6] = useState(false);
  const [score7,setScore7] = useState(false);
  const [score8,setScore8] = useState(false);

  
  const [points,setPoints] = useState([]);



  useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {

      const initializeData = async () => {


                //score
                const storedScore1 = await AsyncStorage.getItem("score1");
                const storedScore2 = await AsyncStorage.getItem("score2");
                const storedScore3 = await AsyncStorage.getItem("score3");
                const storedScore4 = await AsyncStorage.getItem("score4");
                const storedScore5 = await AsyncStorage.getItem("score5");
                const storedScore6 = await AsyncStorage.getItem("score6");
                const storedScore7 = await AsyncStorage.getItem("score7");
                const storedScore8 = await AsyncStorage.getItem("score8");

        

        //user Info

        setScore1(storedScore1 || '0');
        setScore2(storedScore2 || '0');
        setScore3(storedScore3 || '0');
        setScore4(storedScore4 || '0');
        setScore5(storedScore5 || '0');
        setScore6(storedScore6 || '0');
        setScore7(storedScore7 || '0');
        setScore8(storedScore8 || '0');

        setPoints([{ age: 'Points', vaccines: [storedScore1,storedScore2,storedScore3,storedScore4,storedScore5,storedScore6,storedScore7,storedScore8] },
            
          ]);
        


      };
      initializeData();

    });
    return unsubscribe;
  }, [navigation]);



 
  return (
    <SafeAreaView className="flex-1">
      <View 
       
        className="flex-1  bg-bg-one justify-center "
      >

      <View className=" font-sans mt-10 flex-row justify-between">
        
        <IconButton icon='arrow-left' size={20} iconColor="green"    style={{alignSelf:'flex-start',height:20}} onPress={() => navigation.goBack()}/> 
        <Text className="font-sans text-black text-2xl   font-medium">Evaluations</Text> 

        <TouchableOpacity className="font-sansjustify-end" onPress={() => {}}>
        <Text className="font-sans text-sm font-medium  text-green-800 flex-end">
         </Text>
        </TouchableOpacity>
      </View>

     

       <ScrollView showsVerticalScrollIndicator={false} className="px-4">
       

            <View >

            <Text className="font-sans text-2xl text-blue-800 mt-4 mx-4 text-center"> Pourcentage Obtenu par module</Text>
              
          

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
                            className="text-black font-sans text-semiBold text-xl " 
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                        >
                            Pourcentage : <Text className="text-blue-900">{JSON.parse(score1)} %</Text>
                        </Text>
                        </View>
                    
                    </View>
                    </TouchableOpacity>


                
                    <TouchableOpacity 
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
                            className="text-black text-semiBold text-xl font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                        >
                            Pourcentage : <Text className="text-blue-900">{JSON.parse(score2)} %</Text>
                            </Text>
                            </View>
                        
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity 
                    
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
                                className="text-black text-semiBold text-xl font-sans "
                                numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                                ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                            >
                            Pourcentage : <Text className="text-blue-900">{JSON.parse(score3)} %</Text>
                            </Text>
                        </View>
                        
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    
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
                            className="text-black text-semiBold text-xl font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                        >
                            Pourcentage : <Text className="text-blue-900">{JSON.parse(score4)} %</Text>

                            </Text>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
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
                            className="text-black text-semiBold text-xl font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                        >
                           Pourcentage : <Text className="text-blue-900">{JSON.parse(score5)} %</Text>

                            </Text>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    
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
                            className="text-black text-semiBold text-xl font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                        >
                           Pourcentage : <Text className="text-blue-900">{JSON.parse(score6)} %</Text>

                            </Text>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    
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
                            className="text-black text-semiBold text-xl font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                        >
                            Pourcentage : <Text className="text-blue-900">{JSON.parse(score7)} %</Text>
                        </Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    
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
                            className="text-black text-semiBold text-xl font-sans "
                            numberOfLines={4} // Limit to a maximum of 2 lines if text is too long
                            ellipsizeMode="tail" // Adds '...' at the end if text is truncated
                        >
                           Pourcentage : <Text className="text-blue-900">{JSON.parse(score8)} %</Text>
                            </Text>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                        

                
                
                

                <View className="flex-row mt-4 font-sans justify-center items-center ">
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
                    className="w-28 h-16 " 
                    />
                </View>

                </View>
            
            
                </View>


            </View>

            <View className="mb-20"></View> 
        </ScrollView>
      </View>
      
    
    </SafeAreaView>

    
  )
}

export default Points

const styles = StyleSheet.create({})