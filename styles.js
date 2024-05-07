"use strict";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  welcome: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Roboto",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "white",
    fontSize: 35,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight:'bold',
  },

  top: {
    // backgroundColor: "green",
    padding: 20,
    margin: 5,
    flex: 0.18,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  center: {
    // ,
    // backgroundColor: "black",
    flex: 0.9,
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  bottomView: {
    flexDirection: "row",
    // alignItems: "center",
    paddingTop: 5,
    flex: 0.2,
    justifyContent: "center",
  },

  fields: {
    // backgroundColor: "rgb(255,0,255)",
    borderWidth: 2,
    borderColor: "#FCFAFF",
    borderRadius: 9,
    opacity: 0.6,
    width: '94%',
    height: 55,
    backgroundColor: "#DFC7FF",
    paddingLeft: 15,
    paddingRight: 10,
    margin: 11,
    marginHorizontal: 20,
    color: "black",
    fontSize: 18,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
  },

  button: {
    padding: 10,
    marginTop: 45,
    marginBottom: 40,
    width: 345,
    height: 55,
    borderRadius: 8,
    // flex: .2
    backgroundColor: "white",
    alignItems: "center",
    color: "black",
  },

  buttonTeText: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },

  lineText: {
    width: 130,
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },

  textButton: {
    color: "#f2e013",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "italic",
  },

  bottomButtons: {
    width: 100,
    height: 50,
    borderRadius: 8,
    backgroundColor: "white",
    marginHorizontal: 12,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomButtonsView: {

    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },

  image: {
    width: 30,
    height: 30,
  },
});
