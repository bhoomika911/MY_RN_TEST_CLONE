import React, { useState, useEffect, useContext } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ConnectionListScreen(props) {
  const { navigation, route } = props;

  const [connectionList, setConnectionList] = useState(['test1','test2','test3']);

  return (
    <View styel = {{flex :1}} testID="ConnectionListScreen">
      <ScrollView>
        {connectionList.map((objConnection, index) => {
          return (
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {}}
              style={styles.connectionTouch}
            >
              <View style={styles.connectionViewParent}>
                <View style={styles.connectionView}>
                  <View style={styles.connectionViewLft}>
                    <View style={styles.ProfileParent}>
                      <Ionicons name="ios-person" style={styles.personIcon} />
                    </View>
                  </View>
                  <View style={styles.connectionViewCenter}>
                    <Text style={styles.headerText}>{objConnection}</Text>
                  </View>
                  <View style={styles.connectionViewRight}>
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => {}}
                      style={styles.arrowParent}
                    >
                      <Ionicons
                        name={"ios-arrow-down"}
                        style={styles.arrowIcon}
                      />
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          )
        })
        }
      </ScrollView>
    </View>
  );
}

export default ConnectionListScreen;

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  connectionTouch: {},
  logoutTouch: {
    backgroundColor : 'rgba(0,0,0,0.2)',
    alignItems  :'center',
    justifyContent  :'center',
    height : 50,
    margin : 10
  },
  expandedView: {
    flexDirection: "row",
    width: "100%"
  },
  connectionViewParent: {
    margin: 10,
    padding: 10,
    // height: 80,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  connectionView: {
    backgroundColor: "white",
    flexDirection: "row"
  },
  connectionViewLeft: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  connectionViewCenter: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  connectionViewRight: {
    width: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24
  },
  subtext: {
    fontSize: 14
  },
  videoCallIcon: {
    fontSize: 30,
    color: "white"
  },
  accordionIcon: {
    fontSize: 60,
    color: "grey"
  },
  personIcon: {
    fontSize: 40,
    color: "white"
  },
  arrowIcon: {
    fontSize: 30,
    color: "rgba(0,0,0,0.7)"
  },
  arrowParent: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  videoParent: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  ProfileParent: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  spacer: {
    height: 20
  }
});
