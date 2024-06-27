import { StyleSheet, FlatList, TouchableWithoutFeedback } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { EventsAPI } from "@/networkHandler/apis/events";
import { ThemedTile } from "@/components/ThemedTile";
import { useNavigation } from "expo-router";

export default function EventsScreen() {
  const [events, setEvents] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    onInit();
  }, []);
  const onInit = async () => {
    const data = await EventsAPI.getEventsAvailableForUser();
    setEvents(data?.events);
  };
  const renderEvent = (item) => {
    const onPress = () => {
      // navigation.setParams(item)
      navigation.navigate("screens/eventDetails", item?.item);
    };
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <ThemedTile lightColor="#fff" style={styles.tileContainer}>
          <ThemedText style={{flex: 1}}>{item?.item?.title}</ThemedText>
          {item?.item?.currentUserStatus == "APPROVED" ? (
            <ThemedText style={styles.confirmed}>CONFIRMED</ThemedText>
          ) : null}
        </ThemedTile>
      </TouchableWithoutFeedback>
    );
  };

  const renderHeader = () => {
    return [
      <ThemedView
        key={"header"}
        lightColor="#A1CEDC"
        darkColor="#1D3D47"
        style={styles.titleContainer}
      >
        <ThemedText type="title">Let's Hang!</ThemedText>
      </ThemedView>,
      <ThemedView key={"header-subtitle"} style={{ marginBottom: 10 }}>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Events for you
        </ThemedText>
      </ThemedView>,
    ];
  };
  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={events}
      renderItem={renderEvent}
      keyExtractor={(item) => item.id}
      stickyHeaderIndices={[0]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 30,
    paddingTop: 100,
    paddingBottom: 30,
    flex: 1,
  },
  subtitle: {
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  tileContainer: {
    marginHorizontal: 10,
    flexDirection: "row"
  },
  confirmed: {
    color: "#1EC34E"
  }
});
