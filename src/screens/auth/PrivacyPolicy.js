import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function PrivacyPolicy() {

  const navigation = useNavigation()

  return (
    <View style={styles.container} className='bg-bg-one'>

      <View className="font-sans flex-row items-center mb-4 mt-10">
        <TouchableOpacity className="font-sans">
          <IconButton icon="arrow-left" size={24} iconColor="black" onPress ={()=>navigation.goBack()} />
        </TouchableOpacity>
        <Text className="font-sans text-xl font-bold text-text-black w-52 text-center">
          POLITIQUE DE CONFIDENTIALITÉ
        </Text>
      </View>
        
      <ScrollView style={styles.scrollView}
      showsVerticalScrollIndicator={false} >

        <Text style={styles.sectionTitle}>Général</Text>
        <Text style={styles.text}>
          Cette Politique de Confidentialité s'applique à notre application mobile dédiée à notre marque BRARUDI, où nous, Brarudi SA, située au Boulevard Ndadaye Melchior - BP 540 Bujumbura, Burundi, collectons certaines données personnelles. Nous faisons partie du groupe HEINEKEN. Nous sommes responsables du traitement des Données Personnelles collectées et traitées via cette application.
        </Text>
        <Text style={styles.text}>
          Veuillez lire attentivement cette Politique de Confidentialité car elle contient des informations importantes pour vous aider à comprendre nos pratiques concernant les informations personnelles que vous nous fournissez ou que nous collectons dans le cadre de l'Application (« Données Personnelles »).
        </Text>

        <Text style={styles.sectionTitle}>Quelles Données Personnelles Nous Collectons et Comment Nous Les Utilisons</Text>
        <Text style={styles.text}>
          Pour certains services ou activités, vous devrez fournir des Données Personnelles pour que nous puissions vous fournir le service ou le produit demandé ou pour que vous puissiez participer à l'activité. Les informations demandées sur l'Application marquées d'un astérisque sont obligatoires. Si vous ne fournissez pas les informations demandées, nous ne pourrons pas vous fournir le service ou le produit ou vous ne pourrez pas participer à l'activité.
        </Text>

        <Text style={styles.sectionTitle}>Informations Sur Votre Utilisation de Notre Application</Text>
        <Text style={styles.text}>
          Nous collectons certaines informations lorsque vous visitez notre Application, telles que votre nom complet, numéro de téléphone pour vérifier votre identité et vous différencier avec autre utilisateurs.
        </Text>

        <Text style={styles.sectionTitle}>Maintenance et Optimisation de Notre Application</Text>
        <Text style={styles.text}>
          Vos Données Personnelles seront également utilisées pour la maintenance et l'analyse de notre Application afin de résoudre les problèmes de performance, y compris le dépannage, l'analyse des données, les tests, la maintenance du système, le support, la création de rapports et l'hébergement des données, afin d'améliorer la disponibilité et l'expérience utilisateur de l'Application et de protéger l'Application contre la fraude.
        </Text>

        <Text style={styles.sectionTitle}>Utilisation de Photos et/ou de Vidéos</Text>
        <Text style={styles.text}>
          Les Données Personnelles peuvent inclure des photos et/ou des vidéos prises lors d'événements publics ou privés sur les réseaux sociaux, avec des agences de marketing et en interne. Nous pouvons partager ces photos et vidéos sur notre Application ou utiliser les réseaux sociaux pour promouvoir nos produits et marques et développer notre activité.
        </Text>

        <Text style={styles.sectionTitle}>Comment Nous Partageons Vos Données Personnelles</Text>
        <Text style={styles.text}>
          Nous ne partageons pas vos des Données Personnelles.
        </Text>

        <Text style={styles.sectionTitle}>Sécurité des Données Personnelles</Text>
        <Text style={styles.text}>
          Nous prendrons les mesures techniques, physiques et organisationnelles appropriées pour protéger les Données Personnelles collectées via l'Application contre toute utilisation abusive ou destruction, perte, altération, divulgation, acquisition ou accès accidentel, illégal ou non autorisé, conformément aux lois et règlements applicables en matière de confidentialité et de sécurité des données.
        </Text>

        <Text style={styles.sectionTitle}>Conservation de Vos Données Personnelles</Text>
        <Text style={styles.text}>
          Nous conserverons vos Données Personnelles aussi longtemps que la loi l'exige ou aussi longtemps que nécessaire pour vous fournir les services demandés ou pour toute autre finalité énumérée dans cette Politique de Confidentialité.
        </Text>

        <Text style={styles.sectionTitle}>Cookies</Text>
        <Text style={styles.text}>
          Une grande partie des informations mentionnées dans cette Politique de Confidentialité est collectée via notre utilisation de cookies et de techniques similaires. Les cookies sont de petits fichiers texte contenant de petites quantités d'informations qui sont téléchargées et peuvent être stockées sur votre appareil.
        </Text>

        <Text style={styles.sectionTitle}>Réseaux Sociaux</Text>
        <Text style={styles.text}>
          Vous pouvez choisir de partager des informations sur notre Application via les réseaux sociaux, tels que Facebook, Instagram, LinkedIn et YouTube. Cela signifie que les informations que vous partagez, avec votre nom et vos préférences, seront visibles pour les visiteurs de vos pages personnelles.
        </Text>

        <Text style={styles.sectionTitle}>Confidentialité des Enfants</Text>
        <Text style={styles.text}>
          L'Application n'est pas destinée à être utilisée par des personnes de moins de 18 ans (ou l'âge légal applicable pour la consommation des produits en question). Nous ne collectons pas sciemment de Données Personnelles auprès de personnes de moins de 18 ans.
        </Text>

        <Text style={styles.sectionTitle}>Vos Droits</Text>
        <Text style={styles.text}>
          Vous avez le droit de demander l'accès à vos données personnelles, de demander leur suppression, de demander une limitation du traitement, de recevoir un aperçu des données personnelles que vous nous avez fournies dans un format structuré, couramment utilisé et lisible par machine. Vous avez également le droit de déposer une plainte auprès de votre autorité locale de protection des données.
        </Text>

        <Text style={styles.sectionTitle}>Votre Droit d'Opposition</Text>
        <Text style={styles.text}>
          Vous avez également le droit de vous opposer à notre utilisation de vos Données Personnelles à des fins de marketing direct, y compris le profilage.
        </Text>

        <Text style={styles.sectionTitle}>Mises à Jour</Text>
        <Text style={styles.text}>
          Nous tiendrons cette Politique de Confidentialité à jour et procéderons à des mises à jour de temps en temps. Toute modification de cette Politique de Confidentialité sera publiée sur notre Application.
        </Text>

        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.text}>
          Si vous souhaitez exercer l'un de vos droits mentionnés ci-dessus,
           si vous avez une autre question ou une plainte concernant cette Politique de Confidentialité 
           ou concernant notre traitement de vos Données Personnelles, 
           veuillez nous contacter :
        </Text>
        <Text style={styles.text}>Tél : (+257) 22 28 80 00/ 22 28 80 01</Text>
        <Text style={styles.text}>E-mail : infobrarudi@heineken.com</Text>


        <View className="font-sans mb-40"></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },
});
