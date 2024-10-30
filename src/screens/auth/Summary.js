import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

const Summary = () => {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showAnswerModal, setShowAnswerModal] = useState(false);

    const questions = [
        {
            question1: "Un enfant de 6 mois est amené au centre de santé pour recevoir la première dose de vaccin contre le paludisme.",
            question2:"En examinant son carnet santé mère-enfant, vous remarquez qu’il n’a reçu aucune dose de penta. ",
            question3:"Que devriez-vous faire ?",
            question4:" ",
            answer1: "- Administrer le Penta 1 et la 1ère dose de vaccin contre le paludisme. ",
            answer2: "- Administrer de la vitamine A, contrôler la croissance.",
            answer3: "- Demander au parent/tuteur de ramener l’enfant pour la 2ème dose du vaccin contre le paludisme dans 4 semaines (ou à l’âge prévu).",
            answer4: "- Donner RDV pour les doses suivantes de pentavalent",
            answer5: "- Rappeler les messages clés et les autres vaccinations à effectuer. ",

        },

    {
        "question1": "Un enfant de 9 mois est amené au centre de santé pour recevoir le RR1.",
        "question2": "En examinant son carnet santé mère-enfant, vous remarquez qu’il n’a reçu aucune dose de vaccin contre le paludisme.",
        "question3": "Que devriez-vous faire?",
        "question4": "",
        "answer1": "- Administrer le vaccin RR1 et la première dose de vaccin contre le paludisme.",
        "answer2": "- Expliquer au parent le calendrier de 4 doses de la vaccination contre le paludisme.",
        "answer3": "- Lui rappeler qu’il doit ramener l’enfant dans 4 semaines pour la deuxième dose.",
        "answer4": "- Administrer de la vitamine A, contrôler la croissance.",
        "answer5": ""
    },
    {
        "question1": "Un enfant de 22 mois est amené au centre de santé pour recevoir la 4e dose de vaccin contre le paludisme.",
        "question2": "En examinant son carnet santé mère-enfant, vous remarquez qu’il n’a pas reçu le RR2.",
        "question3": "Que devriez-vous faire?",
        "question4": "",
        "answer1": "- Administrer à l’enfant le Vaccin RR2 et le RTS,S.",
        "answer2": "- Ne pas oublier de profiter pleinement des visites pour vérifier si l’enfant a manqué des vaccins antérieurs et les administrer lors de la même visite.",
        "answer3": "- Vérifier également si l’enfant doit recevoir de la vitamine A ou des services de surveillance de la croissance, de déparasitage ou d’autres interventions préventives pour l’enfance.",
        "answer4": "",
        "answer5": ""
    },
    {
        "question1": "Une fillette de 15 mois est amenée au centre de santé par son père.",
        "question2": "Vous remarquez qu’elle a reçu 3 doses du vaccin contre le paludisme.",
        "question3": "Laquelle des actions suivantes devriez-vous faire?",
        "question4": "a) Vacciner avec la 4ème dose",
        "question5": "b) Vérifiez le carnet santé mère-enfant pour voir si l’enfant doit recevoir ou a manqué d’autres vaccins ou autres interventions infantiles qu’il devrait recevoir aujourd’hui",
        "question6": "c) Dites au père de revenir lorsque l’enfant aura 18 mois pour recevoir la 4ème dose de vaccin contre le paludisme",
        "answer1": "- b et c",
        "answer2": "- Ne pas oublier de profiter pleinement des visites pour vérifier si l’enfant a manqué des vaccins antérieurs et les administrer lors de la même visite.",
        "answer3": "-  Vérifier également si l’enfant doit recevoir de la vitamine A ou des services de surveillance de la croissance, de déparasitage ou d’autres interventions préventives pour l’enfance.",
        "answer4": "",
        "answer5": ""
    },
    {
        "question1": "Un enfant de 10 mois est amené au centre de santé pour la vaccination contre le paludisme.",
        "question2": "Il a reçu deux doses précédentes à 6 mois et 7 mois.",
        "question3": "Que devriez-vous faire?",
        "question4": "",
        "answer1": "- Vacciner aujourd’hui et dire au parent de revenir pour la quatrième dose à l’âge de 18 mois.",
        "answer2": "- Rappeler à la personne qui s’occupe de l’enfant de l’amener pour la quatrième dose du vaccin ; la quatrième dose est importante pour une protection optimale.",
        "answer3": "",
        "answer4": "",
        "answer5": ""
    },
    {
        "question1": "Une fillette de 8 mois est amenée à la clinique par sa mère.",
        "question2": "Vous remarquez qu’elle n’a encore reçu aucune dose du vaccin contre le paludisme.",
        "question3": "Peut-elle être vaccinée avec le vaccin contre le paludisme?",
        "question4": "",
        "answer1": "- Oui, elle peut recevoir la première dose du vaccin contre le paludisme aujourd’hui.",
        "answer2": "- Vous devez conseiller à la mère de revenir dans 4 semaines pour la deuxième dose.",
        "answer3": "- Vous devez également consulter le carnet de santé de la mère et de l’enfant pour vous assurer que l’enfant a reçu tous les vaccins appropriés à son âge et la supplémentation en vitamine A.",
        "answer4": "- Vérifiez la croissance de l’enfant et intervenez si elle n’est pas conforme à la courbe de croissance.",
        "answer5": ""
    },
    {
        "question1": "Un enfant de 9 mois est amené au dispensaire par sa mère pour être vacciné contre la rougeole.",
        "question2": "Vous remarquez qu’il a reçu la première dose du vaccin contre le paludisme à l’âge de 6 mois, mais aucune autre dose après cela.",
        "question3": "Doit-il recevoir la deuxième dose du vaccin contre le paludisme?",
        "question4": "",
        "answer1": "- Oui, l’enfant peut recevoir la deuxième dose du vaccin contre le paludisme aujourd’hui.",
        "answer2": "- Ce vaccin peut être administré en toute sécurité en même temps que les vaccins contre la rougeole et la fièvre jaune.",
        "answer3": "- Vous devez conseiller à la mère de revenir dans 4 semaines pour la troisième dose du vaccin contre le paludisme.",
        "answer4": "- Vous devez également consulter le carnet de santé de la mère et de l’enfant pour vous assurer que l’enfant a reçu tous les vaccins appropriés à son âge et la supplémentation en vitamine A.",
        "answer5": "- Vérifiez la croissance de l’enfant et intervenez si elle n’est pas conforme à la courbe de croissance."
    },
    {
        "question1": "À l’âge de 35 mois, l’enfant est amené à la clinique pour une surveillance de la croissance.",
        "question2": "Vous consultez le carnet de santé de la mère et de l’enfant et constatez qu’il a reçu les trois premières doses de vaccin contre le paludisme, mais qu’il n’a pas encore reçu sa quatrième dose.",
        "question3": "Est-il possible d’administrer à cet enfant la quatrième dose du vaccin contre le paludisme lors de cette visite?",
        "question4": "",
        "answer1": "- Oui, l’enfant peut recevoir la quatrième dose du vaccin contre le paludisme à l’âge de 35 mois.",
        "answer2": "- Il n’y a pas de limite d’âge pour la quatrième dose du vaccin contre le paludisme.",
        "answer3": "",
        "answer4": "",
        "answer5": ""
    },
    {
        "question1": "Un enfant de 6 mois est amené au centre de santé pour recevoir la première dose de vaccin contre le paludisme.",
        "question2": "L’enfant est infecté par le VIH sans présenter de symptômes.",
        "question3": "Que devriez-vous faire?",
        "question4": "",
        "answer1": "- Vacciner l’enfant.",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "answer5": ""
    },
    {
        "question1": "Un enfant de 18 mois est amené pour la deuxième dose de vaccin contre la rougeole et la rubéole.",
        "question2": "Le parent demande que la quatrième dose de paludisme soit administrée en même temps.",
        "question3": "Que devriez-vous faire?",
        "question4": "",
        "answer1": "- Administrer le vaccin contre la rougeole et la rubéole ainsi que la 4ème dose de vaccin contre le paludisme.",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "answer5": ""
    },
    {
        "question1": "Un enfant de 9 mois est amené pour sa dose de vaccin antirougeoleux et la personne qui prend soin de l’enfant demande que l’enfant reçoive le vaccin contre le paludisme pour la première fois?",
        "question2": "Que dîtes-vous à la personne qui prend soin de l’enfant?",
        "question3": "",
        "question4": "",
        "answer1": "- Administrer le vaccin contre la rougeole.",
        "answer2": "- Examiner l’enfant pour savoir s’il a reçu tous les vaccins appropriés à son âge, la supplémentation en vitamine A, un antihelminthique et les surveillances de la croissance nécessaires.",
        "answer3": "- Si un enfant est en retard dans le calendrier de vaccination contre le paludisme, il faut lui administrer la dose prévue.",
        "answer4": "- Le vaccin antirougeoleux peut être administré en même temps que le vaccin contre le paludisme.",
        "answer5": "- Informer le parent/tuteur que l’enfant devra être à nouveau présenté 4 semaines plus tard pour la deuxième dose (ou la prochaine dose prévue pour l’enfant)."
    },
    {
        "question1": "Un enfant a quitté un DS où le vaccin contre le paludisme a été introduit et est venu s'installer dans un DS où le vaccin n'est pas encore introduit.",
        "question2": "Il n’a reçu que deux doses du vaccin contre le paludisme.",
        "question3": "Que devriez-vous faire?",
        "question4": "",
        "answer1": "- Orienter le parent vers un DS proche où le vaccin contre le paludisme est disponible pour recevoir la troisième dose du vaccin contre le paludisme.",
        "answer2": "- Lui rappeler l'importance de compléter les 4 doses de vaccin antipaludique.",
        "answer3": "",
        "answer4": "",
        "answer5": ""
    },
    {
        "question1": "Un enfant est amené par son parent qui habite dans un district sanitaire voisin où le vaccin contre le palu n'a pas encore été introduit.",
        "question2": "Votre FOSA dispose de vaccins contre le paludisme.",
        "question3": "Que devriez-vous faire?",
        "question4": "",
        "answer1": "- Lui administrer le vaccin.",
        "answer2": "- Lui dire la date du prochain rendez-vous pour recevoir la dose suivante.",
        "answer3": "",
        "answer4": "",
        "answer5": ""
    }

// Additional questions here
];

    const goToNextQuestion = () => {
        if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
    };

    const goToPreviousQuestion = () => {
        if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    };

    const renderQuestionText = () => (
        <>
            {Object.keys(questions[currentQuestion])
                .filter(key => key.startsWith("question"))
                .map((key, index) => (
                    <Text key={index} className="text-lg text-xl text-center font-sans text-gray-800 mb-5">
                        {questions[currentQuestion][key]}
                    </Text>
                ))}
        </>
    );
    
    const renderAnswerText = () => (
        Object.keys(questions[currentQuestion])
            .filter(key => key.startsWith("answer") && questions[currentQuestion][key])
            .map((key, index) => (
                <Text key={index} className="text-xl font-sans text-center mb-5">
                    {questions[currentQuestion][key]}
                </Text>
            ))
    );
    

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-bg-one  justify-center">
                <View className="font-sans mt-10  flex-row justify-between">
                    <IconButton icon="arrow-left" className="-mt-1" size={20} iconColor="green" onPress={() => navigation.goBack()} />
                    <Text className="text-lg font-bold text-center text-gray-800">Que faire dans ce cas ?</Text>
                    <Text className="text-sm text-green-600 mr-2">{currentQuestion + 1} / {questions.length}</Text>
                </View>

                <ScrollView  showsVerticalScrollIndicator={false}>
                    <View className="mb-6 w-full mt-4 px-2">
                        <TouchableOpacity className=" bg-gray-100 rounded-xl mx-12 font-sans justify-center items-center">
                            <Image source={require('../../../assets/mod3/4.png')} className=" mt-4 w-10 h-24 mb-4" />
                        </TouchableOpacity>

                        <View className="font-sans justify-center items-center">

                        <Text className="text-green-900 text-center mt-5 mb-4 w-24 h-12 text-center text-3xl  font-bold p-2 bg-white rounded-full font-semibold">
                            {currentQuestion + 1}
                        </Text>
                        </View>

                        <View className="mx-2 p-4 border border-gray-300 rounded-xl overflow-hidden mb-10 font-sans justify-center items-center">

                        <TouchableOpacity className="font-sans justify-center items-center">
                            <Image source={require('../../../assets/mod2/19.png')} className="mx-4 mt-2 w-5 h-4 mb-10" />
                        </TouchableOpacity>

                        {renderQuestionText()}

                        <TouchableOpacity className="font-sans justify-center items-center">
                            <Image source={require('../../../assets/mod2/20.png')} className="mx-4 w-5 h-4 mb-10" />
                        </TouchableOpacity>

                        <TouchableOpacity className="mx-4 bg-blue-900 rounded-xl mb-10" onPress={() => setShowAnswerModal(true)}>
                            <Text className="mx-4 text-center text-white p-2">Voir Réponse</Text>
                        </TouchableOpacity>

                        </View>

                        <View className="mb-12 flex-row flex-wrap justify-between">
                            <TouchableOpacity onPress={()=>{
                                currentQuestion + 1 == 1?  navigation.goBack(): goToPreviousQuestion() }} className="mx-4 bg-black/80 rounded-lg p-2">
                                <Text className="text-white text-center">{currentQuestion + 1 == 1?'Retour':'Précedent'}</Text>
                            </TouchableOpacity>
                            {
                                currentQuestion + 1 != 13 &&<TouchableOpacity onPress={ goToNextQuestion}  className="mx-4 bg-black/80 rounded-lg p-2">
                                <Text className="text-white text-center">Suivant</Text>
                            </TouchableOpacity>
                            }
                        </View>
                    </View>
                </ScrollView>
               
            </View>

            <Modal
                    visible={showAnswerModal}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setShowAnswerModal(false)}
                > 
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ScrollView showsVerticalScrollIndicator={false} className="mt-2 px-6">
            
                            <View className=" p-2 bg-white rounded-lg items-center">
                                <Text className="text-xl font-bold font-sans  mb-4 text-blue-900">Réponse</Text>
                                {renderAnswerText()}
                                <TouchableOpacity className="mt-5 px-4 py-2 bg-blue-500 rounded-lg" onPress={() => setShowAnswerModal(false)}>
                                    <Text className="text-white font-bold">Fermer</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                </Modal>
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
    }
});

export default Summary;
