import {StyleSheet} from "react-native";

export default StyleSheet.create({
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
    padding: 10,
  },
  field: {
    fontSize: 20,
    fontFamily: "Arial",
    alignSelf: "flex-start",
    padding: 10,
  },
});

