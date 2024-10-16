import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView, Button, Modal, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; // Importing the clock icon from FontAwesome
import { ROUTES } from '../../constants';

const Quiz3 = () => {
    const navigation = useNavigation();
    const [answers, setAnswers] = useState([null, null, null,null]); // to store answers
    const [score, setScore] = useState(0);  // to track score
    const [quizCompleted, setQuizCompleted] = useState(false);  // to track completion
    const [submitted, setSubmitted] = useState(false);  // to track if answers are submitted
    const [showCorrection, setShowCorrection] = useState(false); // to show correction modal
    const [isCooldownActive, setIsCooldownActive] = useState(false); // track cooldown state
    const [remainingTime, setRemainingTime] = useState(0); // track remaining cooldown time
    const [showTimerModal, setShowTimerModal] = useState(false); // state for timer modal

    const questions = [
      {
          question: 'A quel âge un enfant doit-il prendre sa deuxième dose du vaccin Mosquirix?',

          options: ['9 mois', '18 mois', '7 mois'],

          correctAnswer: '7 mois',
      },
      {
          question: 'Quel est l’intervalle minimal à respecter entre les 2 premières doses suivant le calendrier classique?   ',

          options: ['6 semaines', '4 semaines', '6 à 18 mois'],
          correctAnswer: '4 semaines',

      },
      {
          question: 'Que doit faire un agent de santé après avoir remarqué qu’un enfant a manqué la troisième dose du vaccin ?',

          options: ['Renvoyer l’enfant pour qu’il revienne à la date fixée pour la quatrième dose', 'Lui administrer à la fois la troisième et la quatrième dose', 'Lui administrer la dose manquée et fixer la date pour le prochain rendez-vous'],

          correctAnswer: 'Lui administrer la dose manquée et fixer la date pour le prochain rendez-vous',
      }, 
      {
          question: 'Dans quel cas un enfant ne devrait-il pas recevoir le vaccin contre le paludisme?',

	        options: ['Quand un enfant présente une infection mineure telle qu’un rhume', 'Si l’enfant a été testé séropositif', 'Quand un enfant présente une hypersensibilité sévère connue à cause d’ une dose antérieure du vaccin RTS,S/MosquirixTM'],
          correctAnswer: 'Quand un enfant présente une hypersensibilité sévère connue à cause d’ une dose antérieure du vaccin RTS,S/MosquirixTM',

      },
    ];


    useEffect(() => {
        const checkCooldown = async () => {
            try {
                const lastAttemptTime3 = await AsyncStorage.getItem('lastAttemptTime3');
                if (lastAttemptTime3) {
                    const currentTime = new Date().getTime();
                    const timeDifference = currentTime - parseInt(lastAttemptTime3);
                    const cooldownDuration = 15 * 60 * 1000; // 15 minutes in milliseconds

                    if (timeDifference < cooldownDuration) {
                        setIsCooldownActive(true);
                        setRemainingTime(Math.ceil((cooldownDuration - timeDifference) / 1000 / 60)); // Calculate remaining minutes
                        setShowTimerModal(true); // Show the timer modal if cooldown is active
                    } else {
                        setIsCooldownActive(false);
                    }
                }
            } catch (error) {
                console.error('Error checking cooldown:', error);
            }
        };

        checkCooldown();
    }, []);

    const handleAnswer = (index, answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = answer;
        setAnswers(updatedAnswers);
    };

    const submitAnswers = () => {
        let newScore = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                newScore += 1;
            }
        });

        const finalScore = (newScore * 100) / questions.length;
        setScore(finalScore);
        setQuizCompleted(true);
        setSubmitted(true);

        storeAnswers(answers, finalScore.toFixed(2)); // Store the final score formatted to 2 decimal places
        setShowCorrection(true); // Show the correction modal
        startCooldown(); // Start the cooldown timer
    };

    const startCooldown = async () => {
        try {
            const currentTime = new Date().getTime();
            await AsyncStorage.setItem('lastAttemptTime3', JSON.stringify(currentTime));
            setIsCooldownActive(true);
        } catch (error) {
            console.error('Error starting cooldown:', error);
        }
    };

    const storeAnswers = async (answersArray, finalScore) => {
        try {
            await AsyncStorage.setItem('Quiz3Answers', JSON.stringify(answersArray));
            await AsyncStorage.setItem('score3', JSON.stringify(finalScore));
        } catch (error) {
            console.error('Échec de l\'enregistrement des réponses dans AsyncStorage :', error);
        }
    };

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-bg-one justify-center">
                <View className="font-sans flex-row items-center mt-10">
                    <TouchableOpacity className="font-sans">
                        <IconButton icon="arrow-left" size={24} iconColor="green" onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <Text className="font-sans text-2xl font-bold text-black">Questions Module 3</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} className="mt-2 px-6">
                    {questions.map((item, index) => (
                        <View key={index} className="mb-6">
                            <Text className="text-blue-800 text-center text-2xl mb-4">{index + 1}. {item.question}</Text>
                            {item.options.map((option, optIndex) => (
                                <TouchableOpacity
                                    key={optIndex}
                                    className={`mb-2 p-4 rounded-lg ${answers[index] === option ? 'bg-green-400' : 'bg-gray-100'}`}
                                    onPress={() => handleAnswer(index, option)}
                                    disabled={submitted || isCooldownActive} // Disable options during cooldown
                                >
                                    <Text className={`text-lg ${answers[index] === option ? 'text-black' : 'text-black'}`}>
                                        {optIndex + 1}. {option}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}

                    {quizCompleted && (
                        <Text className="mt-6 text-black text-2xl text-center mb-24">
                            Note obtenue: {score.toFixed(2)} %
                        </Text>
                    )}
                </ScrollView>

                {!quizCompleted && (
                    <Button
                        title="Envoyer les réponses"
                        onPress={submitAnswers}
                        disabled={answers.some(a => a === null) || isCooldownActive} // Disable button during cooldown
                    />
                )}

                {/* Modal for displaying the cooldown timer */}
                <Modal
                    visible={showTimerModal} // Show this modal only when the user returns and is still in cooldown
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setShowTimerModal(false)} // Close the modal
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <FontAwesome name="clock-o" size={40} color="red" style={{ marginBottom: 10 }} />
                            <Text style={styles.modalTitle}>Veuillez patienter</Text>
                            <Text style={styles.modalMessage}>
                                Vous devez attendre encore {remainingTime} minutes avant de pouvoir refaire le test.
                            </Text>
                            <Button title="Fermer" onPress={() => 
                               navigation.navigate(ROUTES.LOGIN)} />
                        </View>
                    </View>
                </Modal>

                {/* Modal for displaying the score and corrections */}
                <Modal
                    visible={showCorrection}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setShowCorrection(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                        <ScrollView showsVerticalScrollIndicator={false} className="mt-2 px-6">
                    
                            <Text style={styles.modalTitle} className="text-blue-800">Résultat et Corrections</Text>
                            <Text style={styles.modalScore} className="text-red-800">Note Obtenue : {score.toFixed(2)}%</Text>
                            {questions.map((item, index) => (
                                <View key={index} style={styles.correctionItem}>
                                    <Text style={styles.questionText} className="font-sans">{index + 1}. {item.question}</Text>
                                    <Text style={answers[index] === item.correctAnswer ? styles.correctAnswer : styles.wrongAnswer} className="font-sans mt-2">
                                        Votre réponse : {answers[index]}
                                    </Text>
                                    {answers[index] !== item.correctAnswer && (
                                        <Text style={styles.correctAnswer} className="text-blue-600 mt-2 font-sans" >Correction : {item.correctAnswer}</Text>
                                    )}

                                    </View>
                            ))}
                            <Text className=" font-sans mt-2 mb-2">N.B : Vous pouvez refaire le test après 15 min</Text>
                                
                            <Button title="Fermer" onPress={() => {
                              setShowCorrection(false);
                               navigation.navigate(ROUTES.LOGIN)} 
                       

                            } />
                            </ScrollView>

                        </View>
                        
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    modalContent: {
        width: '90%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginTop:20
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalMessage: {
        fontSize: 18,
        textAlign: 'center',
    },
    modalScore: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    correctionItem: {
        marginBottom: 10,
    },
    questionText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    correctAnswer: {
        fontSize: 14,
    },
    wrongAnswer: {
        color: 'red',
        fontSize: 14,
    },
});

export default Quiz3;
