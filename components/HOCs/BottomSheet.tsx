import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { ThemedView } from "../ThemedView";

const BottomSheet = (WrappedComponent) => {
  return (props) => {
    return (
      <ThemedView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <ThemedView style={styles.draggableIcon}></ThemedView>
        </View>
        <WrappedComponent {...props}/>
      </ThemedView>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    borderTopRightRadius: 42,
    borderTopLeftRadius: 42,
    paddingTop: 10,
    marginTop: 100
  },
  draggableIcon: {
    width: 50,
    height: 5,
    borderRadius: 5,
    margin: 6,
    backgroundColor: "#E0E0E0",
  },
});
export default BottomSheet;
