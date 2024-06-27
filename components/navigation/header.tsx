import { Image, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function Header({ title }) {
  const navigation = useNavigation();
  const onPress = () => {
    console.log("sasdasd");
    navigation.goBack();
  };
  return (
    <ThemedView
      style={{
        flexDirection: "row",
        paddingTop: 60,
        position: "relative",
        paddingHorizontal: 20,
        alignItems: "center"
      }}
      lightColor="transparent"
      darkColor="transparent"
    >
      <TouchableOpacity
        onPress={onPress}
      >
        <Ionicons name="chevron-back" color={"#fff"} size={24} />
      </TouchableOpacity>
      <ThemedText
        style={{
          flex: 1,
          textAlign: "center",
          flexDirection: "row",
          fontSize: 16,
          color: "#fff",
          fontWeight: 800,
        }}
      >
        {title}
      </ThemedText>
    </ThemedView>
  );
}
