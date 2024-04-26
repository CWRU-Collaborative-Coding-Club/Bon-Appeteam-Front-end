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
    { name: "Ben", height: 5.7, weight: 145, age: 18 },
    { name: "Kevin", height: 6.2, weight: 160, age: 19 },
  ],
};

const ProfileScreen = () => {
  console.log("test");
  //console.log(styl)
  return (
    <View style={styles.innerContainer}>
      <ScrollView style={styles.scrollview}>
        {/*this will contain all the elements of the tab*/}
        <Text style={styles.title}>Profile/Personal info</Text>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <Text style={styles.label}>Height:</Text>
            <Text style={styles.label}>Weight:</Text>
            <Text style={styles.label}>Age:</Text>
          </View>
          <View style={styles.column}>
            {/*this will contain the field values */}
            <View>
              {this.state.people.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.container}
                  onPress={() => this.alertItemName(item)}
                >
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.field}>Height</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
