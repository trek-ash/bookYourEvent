import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
const toastConfig = {
  hangToast: ({ props }) => (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props?.title}</Text>
        <TouchableOpacity onPress={props?.onClose}>
          <MaterialCommunityIcons name="close" size={16} />
        </TouchableOpacity>
      </View>
      <Text>{props?.subTitle}</Text>
    </View>
  ),
};
const CustomToast = () => {
  return <Toast config={toastConfig} />;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: "90%",
    // height: 135,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#fff",
    borderTopColor: "#1EC34E",
    borderTopWidth: 10,

    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default CustomToast;
