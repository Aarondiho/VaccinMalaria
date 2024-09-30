import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';

const Quiz4 = () => {

    const navigation = useNavigation()


    const [answers, setAnswers] = useState([null, null, null]); // to store answers
    const [score, setScore] = useState(0);  // to track score
    const [quizCompleted, setQuizCompleted] = useState(false);  // to track completion
  

    const questions = [
        {
          question: 'Quel est le nom du vaccin contre le paludisme recommandé pour les enfants ?',
          options: ['RTS,S', 'MalariaVac', 'MAL-123'],
          correctAnswer: 'RTS,S',
        },
        {
          question: 'Quel est un des effets secondaires possibles du vaccin contre le paludisme ?',
          options: ['Mal de tête', 'Fièvre légère', 'Douleur à l\'estomac'],
          correctAnswer: 'Fièvre légère',
        },
        {
          question: 'Le vaccin contre le paludisme doit être administré avec quel type de traitement ?',
          options: ['Antibiotiques', 'Médicaments antipaludiques', 'Pas de traitement nécessaire'],
          correctAnswer: 'Médicaments antipaludiques',
        }
      ];
  
    const handleAnswer = (index, answer) => {
      const updatedAnswers = [...answers];
      updatedAnswers[index] = answer;
  
      // Update the score only if the answer is correct
      if (answer === questions[index].correctAnswer) {
        setScore(prevScore => prevScore + 1); // 1 point per correct answer
      }
  
      setAnswers(updatedAnswers);
  
      // Check if the quiz is completed
      if (updatedAnswers.every(a => a !== null)) {
        // Calculate final score when the quiz is completed
        const finalScore = (score + (answer === questions[index].correctAnswer ? 1 : 0)) * 100 / questions.length;
        setQuizCompleted(true);
        storeAnswers(updatedAnswers, finalScore.toFixed(2)); // Store the final score formatted to 2 decimal places
      }
    };
  
    const storeAnswers = async (answersArray, finalScore) => {
      try {
        await AsyncStorage.setItem('Quiz1Answers', JSON.stringify(answersArray));
        await AsyncStorage.setItem('score4', JSON.stringify(finalScore));
        Alert.alert('Votre score est : ' + finalScore + '/100                 Continuer avec module 3&4');
        navigation.navigate(ROUTES.LOGIN)
    } catch (error) {
        console.error('Échec de l\'enregistrement des réponses dans AsyncStorage :', error);
      }
    };

  return (
    <SafeAreaView className="flex-1">
      
      <LinearGradient 
        colors={['#BD1634', '#291737']}
        start={[0, 0]}
        end={[1, 0]}
        className="flex-1 justify-center items-center px-6"
      >

        <Text className="text-white text-2xl font-bold mt-10">Question Module 7&8</Text>

        <ScrollView showsVerticalScrollIndicator={false} className="mt-8">

       

        {questions.map((item, index) => (
          <View key={index} className="mb-6 w-full">
            <Text className="text-white text-xl mb-4">{item.question}</Text>
            {item.options.map((option, optIndex) => (
              <TouchableOpacity
                key={optIndex}
                className={`mb-2 p-4 rounded-lg ${
                  answers[index] === option ? (option === item.correctAnswer ? 'bg-green-500' : 'bg-red-500') : 'bg-white'
                }`}
                onPress={() => handleAnswer(index, option)}
                disabled={answers[index] !== null} // Disable once an answer is selected
              >
                <Text className={`text-lg ${answers[index] === option ? 'text-white' : 'text-black'}`}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {quizCompleted && (
          <Text className="mt-6 text-white text-2xl text-center mb-24">
            Score obtenu: {(score * 100 / questions.length).toFixed(2)} %
          </Text>
        )}

        
        </ScrollView>
      </LinearGradient>
      
    </SafeAreaView>
  );
};

export default Quiz4;
