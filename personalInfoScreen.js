import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
  } from "react-native";


const personalInfoScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
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
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default personalInfoScreen;
