import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  FeatherIcon,
  MatCommunityTabBarIcon,
} from "@/components/navigation/TabBarIcon";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Share, StyleSheet, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

const Footer = ({ item }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("screens/questionnaire", item);
  };

  const onPending = () => {
    return (
      <TouchableOpacity
        style={{
          ...styles.footerButton,
          backgroundColor: "#F5AC40",
          marginHorizontal: 20,
        }}
        disabled={true}
        onPress={onPress}
      >
        <ThemedText
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            fontWeight: 600,
          }}
        >
          Waiting for approval
        </ThemedText>
      </TouchableOpacity>
    );
  };

  const onApproved = () => {
    const onMyTickets = () => {
      
    }
    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'Sharing a great event',
        });
      } catch (error: any) {
        console.log(error)
      }
    };
    return (
      <ThemedView style={styles.approvedContainer}>
        <TouchableOpacity
          style={{
            ...styles.footerButton,
            gap: 6,
            backgroundColor: "#6C63FF",
          }}
          onPress={onMyTickets}
        >
          <MatCommunityTabBarIcon
            name="ticket-confirmation-outline"
            size={24}
            color={"#fff"}
          />

          <ThemedText
            style={{
              fontSize: 18,
              color: "#FFFFFF",
              fontWeight: 600,
            }}
          >
            My tickets
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.footerButton,
            gap: 6,
            backgroundColor: "#fff",
            borderRadius: 100,
            borderColor: "#6C63FF",
            borderWidth: 2,
          }}
          onPress={onShare}
        >
          <FeatherIcon name="share" size={20} color={"#6C63FF"} />

          <ThemedText
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "#6C63FF",
              fontWeight: 600,
            }}
          >
            Share event
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    );
  };

  const onNoStatus = () => {
    return (
      <TouchableOpacity
        style={{
          ...styles.footerButton,
          backgroundColor: "#6C63FF",
          marginHorizontal: 20,
        }}
        onPress={onPress}
      >
        <ThemedText
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            fontWeight: 600,
          }}
        >
          Buy tickets
        </ThemedText>
      </TouchableOpacity>
    );
  };

  return (
    <ThemedView style={styles.footerContainer}>
      {item?.currentUserStatus == "PENDING"
        ? onPending()
        : item?.currentUserStatus == "APPROVED"
        ? onApproved()
        : onNoStatus()}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",

    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 18,
    elevation: 10,
    zIndex: 100,
  },
  footerButton: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    borderRadius: 100,
    flex: 1,
  },
  approvedContainer: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 20,
  },
});
export default Footer;
