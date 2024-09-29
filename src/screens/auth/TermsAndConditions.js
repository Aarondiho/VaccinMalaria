import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function TermsAndConditions() {

    const navigation = useNavigation()


  return (
    <View style={styles.container} className='bg-bg-one '>

        <View className="font-sans flex-row items-center mb-4 mt-10 p-2 ">
        <TouchableOpacity className="font-sans ">
          <IconButton icon="arrow-left" size={24} iconColor="black" onPress ={()=>navigation.goBack()} />
        </TouchableOpacity>
        <Text className="font-sans text-xl font-bold text-text-black w-54 text-center" >
            LES CONDITIONS GÉNÉRALES D'UTILISATION
        </Text>
      </View>

      <ScrollView style={styles.scrollView}
                showsVerticalScrollIndicator={false} >

      

        <Text style={styles.text}>
        Bienvenue sur notre application dédiée à notre marque Brarudi® (« Amstel Royale »).
            Vous devez avoir l'âge légal pour consommer de l'alcool dans votre pays pour utiliser l'Application.
        </Text>

        <Text style={styles.text}>
            Ces Conditions générales d'utilisation, ainsi que notre Politique de confidentialité et
            notre Politique relative aux cookies (les « Conditions »), 
            régissent votre utilisation de cette Application.
        </Text>

        <Text style={styles.sectionTitle}>Applicabilité</Text>
        <Text style={styles.text}>
            Ces Conditions s'appliquent à toutes les visites et à toute utilisation de cette Application de Brarudi SA,
            située au Boulevard Ndadaye Melchior - BP 540 Bujumbura, Burundi, 
            ainsi qu'à toutes les informations, 
            recommandations et/ou services qui vous sont fournis sur ou via cette Application (les « Informations »).</Text>


        <Text style={styles.text}>
            En utilisant cette Application, vous acceptez l'applicabilité de ces Conditions.
            Nous vous informons que ces Conditions peuvent être modifiées au fil du temps.
            Ces modifications seront effectives dès la publication des Conditions modifiées.
            Les utilisateurs de l'Application sont invités à lire régulièrement 
            les Conditions pour prendre connaissance d'éventuels changements.
        </Text>

        <Text style={styles.sectionTitle}>Informations et Responsabilité</Text>

        <Text style={styles.text}> Les Informations sont fournies à des fins d'information générale uniquement et ne constituent pas un conseil. BRARUDI ne saurait être tenue responsable de tout dommage résultant de l'utilisation (ou de l'impossibilité d'utiliser) de cette Application, y compris toute inexactitude ou omission dans les Informations, sauf si ce dommage résulte d'une faute intentionnelle ou d'une négligence grave de la part de BRARUDI.</Text>
        <Text style={styles.text}>BRARUDI ne saurait également être tenue responsable des dommages pouvant résulter de l'utilisation de moyens de communication électroniques, y compris, mais sans s'y limiter, les dommages résultant de la défaillance ou du retard de livraison des communications électroniques, de l'interception ou de la manipulation des communications électroniques par des tiers ou par des programmes informatiques utilisés pour les communications électroniques et la transmission de virus.</Text>

        <Text style={styles.sectionTitle}>Droits de propriété intellectuelle</Text>
        <Text style={styles.text}>L'Application et l'ensemble de son contenu, de ses fonctionnalités et de ses caractéristiques (y compris, mais sans s'y limiter, toutes les informations, logiciels, textes, affichages, images, vidéos et audios, ainsi que la conception, la sélection et la disposition de ceux-ci) sont la propriété de BRARUDI, de ses concédants ou d'autres fournisseurs de ces matériels et sont protégés par les lois sur le droit d'auteur, les marques commerciales, les brevets, les secrets commerciaux et autres droits de propriété intellectuelle ou de propriété.</Text>
        <Text style={styles.text}>Vous ne pouvez utiliser l'Application qu'à des fins conformes à ces Conditions. Vous êtes autorisé à faire des copies de (parties de) l'Application pour un usage personnel. Vous ne devez utiliser aucune partie du contenu de notre Application à d'autres fins sans obtenir une licence écrite de notre part.</Text>

        <Text style={styles.sectionTitle}>Indemnisation</Text>
        <Text style={styles.text}>
        Vous acceptez de nous indemniser contre toute action, réclamation et responsabilité découlant de ou en relation avec votre violation de ces Conditions ou de toute utilisation illégale de l'Application.
        </Text>

        <Text style={styles.sectionTitle}>Comment Nous Partageons Vos Données Personnelles</Text>
        <Text style={styles.text}>
          En tant que membre d'une entreprise mondiale, nous partageons des Données Personnelles au sein du groupe HEINEKEN, avec des filiales et des sociétés affiliées et nous recevons également des Données Personnelles de nos filiales et sociétés affiliées à des fins analytiques et opérationnelles agrégées et pour l'activation du marché.
        </Text>

        <Text style={styles.sectionTitle}>Sécurité des Données Personnelles</Text>
        <Text style={styles.text}>
          Nous prendrons les mesures techniques, physiques et organisationnelles appropriées pour protéger les Données Personnelles collectées via l'Application contre toute utilisation abusive ou destruction, perte, altération, divulgation, acquisition ou accès accidentel, illégal ou non autorisé, conformément aux lois et règlements applicables en matière de confidentialité et de sécurité des données.
        </Text>

        <Text style={styles.sectionTitle}>Dispositions diverses</Text>
        <Text style={styles.text}>
            Chacun des paragraphes de ces Conditions fonctionne séparément. Si un tribunal ou une autorité compétente décide que l'un d'eux est illégal ou inapplicable, les autres paragraphes resteront pleinement en vigueur.
        </Text>

        <Text style={styles.text}>
        Ces Conditions sont régies par le droit burundais. Tout litige ou réclamation découlant de ou en relation avec l'utilisation de l'Application sera réglé par les tribunaux de Bujumbura, Burundi.
         </Text>

        <Text style={styles.text}>
         Veuillez ne pas partager notre contenu avec des personnes n'ayant pas l'âge légal pour consommer de l'alcool.
        </Text>
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
