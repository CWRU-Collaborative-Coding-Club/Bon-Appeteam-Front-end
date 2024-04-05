import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  state = {
    people: [
      { name: "Ben", height: 5.7, weight: 145, age: 18 },
      { name: "Kevin", height: 6.2, weight: 160, age: 19 },
    ],
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.navBar}>
        {/*this will contain the top nav bar and cwru logo*/}
      </View>
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
      <View style={styles.tabBar}>
        {/*this will contain the tab selection menu */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flex: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  scrollview: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  navBar: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "steelblue",
    borderWidth: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    flex: 1,
    backgroundColor: "steelblue",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontFamily: "Arial",
    padding: 10,
  },
  columnContainer: {
    borderColor: "steelblue",
    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },
  column: {
    justifyContent: "flex-start",
    alignContent: "space-around",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    alignSelf: "flex-start",
  },
  field: {
    fontSize: 20,
    fontFamily: "Arial",
    alignSelf: "flex-start",
  },
});
