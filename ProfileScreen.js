import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

state = {
  people: [
    { height: 5.7},
    { weight: 145},
    { sex: "Male"},
    { date_of_birth: "05/08/2005"},
    { allergies: "Pineapple"},
    { dietary_requirements: "N/A"},
  ],
};

const ProfileScreen = () => {
  return (
    <View style={styles.innerContainer}>
      <ScrollView style={styles.scrollview}>
        {/*this will contain all the elements of the tab*/}
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <Text style={styles.label}>Height:</Text>
            <Text style={styles.label}>Weight:</Text>
            <Text style={styles.label}>Sex:</Text>
            <Text style={styles.label}>Date of Birth:</Text>
            <Text style={styles.label}>Allergies:</Text>
            <Text style={styles.label}>Dietary requirements:</Text>
          </View>
          <View style={styles.column}>
            {/*this will contain the field values */}
            <Text style={styles.field}>5.7</Text>
            <Text style={styles.field}>145</Text>
            <Text style={styles.field}>Male</Text>
            <Text style={styles.field}>05/08/2005</Text>
            <Text style={styles.field}>Pineapple</Text>
            <Text style={styles.field}>N/A</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
