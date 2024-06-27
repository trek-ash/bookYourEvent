import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/navigation/header";
import { useLocalSearchParams } from "expo-router";
import EventsInfo from "@/components/events/eventsInfo";
import CustomToast from "@/components/common/CustomToast";
import Footer from "@/components/eventDetails/footer";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

export default function EventDetails(props) {
  const item = useLocalSearchParams();

  useEffect(() => {
      handleToast()
  }, [item]);
  const handleToast = () => {    
    if (item?.currentUserStatus == "PENDING")
      Toast.show({
        position: "bottom",
        type: "hangToast",
        props: {
          title: "Ticket Confirmed",
          subTitle:
            "Now we need to wait for the host to approve you. Once you’re approved you’ll have access to your ticket.",
          onClose: () => {
            Toast.hide()
          }
        },
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/398b/2834/7094c9c92732c9782a619e9880650d8f?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z2gJzM7vqxEqCkC-8MMTD8KmdrlSEsjJ8mqHM~Ykhs4boHCicKjqhj0XRIyYpENmn14VmT~HW-88NQQH24bLCPuccCY8MYO8dWdUjvC367koxfD6cJC8vh1AEhnlAxG-0cUBin4jG4ypv1Q0giOv~YVHlLn3bYrEZQaBBK4Acc7Zqe0iRoqdxnnuzhg-p-DO9qXKFMdWZkYlmEzEGiQp~2ykk6lvjZo2EUq04XPLLghWXVVNBzmj4KCkw8pzNab3resZi4xJ668pUHU2cYymqoOW4e7JXYjPxOEZdIa-KiBKoNMq6luYQTAlAy9Cda28Do9zdivYUP4YgJm938FOpw__",
        }}
        style={styles.backgroundImage}
        resizeMode="stretch"
      >
        <ThemedView style={styles.overlay}>
          <Header title={"Event"} />
          <ThemedView
            style={styles.titleContainer}
            lightColor="transparent"
            darkColor="transparent"
          >
            <EventsInfo data={item} />
            <Footer item={item} />
          </ThemedView>
        </ThemedView>
      </ImageBackground>
      <CustomToast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
