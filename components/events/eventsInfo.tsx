import { ScrollView, StyleSheet } from "react-native";
import BottomSheet from "../HOCs/BottomSheet";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { MatCommunityTabBarIcon, TabBarIcon } from "../navigation/TabBarIcon";
import { useMemo } from "react";

const EventsInfo = ({ data }) => {
  const subInfo = useMemo(() => {
    return [
      {
        id: 1,
        icon: "calendar-blank",
        title: data?.date,
        subtitle: `${data?.start_time}-${data?.end_time}`,
      },
      {
        id: 2,
        icon: "map-marker",
        title: data?.location,
        subtitle: data?.address_info,
      },
      {
        id: 3,
        icon: "ticket",
        title: `${data?.tickets_left}/${data?.total_tickets} tickets left`,
        subtitle: `${data?.invited_count}+ invited`,
      },
      {
        id: 4,
        icon: "currency-usd",
        title: `${data?.currency_symbol}${data?.min_price} - ${data?.currency_symbol}${data?.max_price}`,
      },
    ];
  }, [data]);
  const renderInfoRowWithIcons = (info) => {
    return (
      <ThemedView key={info.id} style={{ flexDirection: "row", marginTop: 20 }}>
        <MatCommunityTabBarIcon
          name={info?.icon}
          size={25}
          style={{ position: "relative", top: 2 }}
        />
        <ThemedView style={{ marginLeft: 16 }}>
          <ThemedText style={{ fontWeight: 500 }}>{info?.title}</ThemedText>
          <ThemedText
            style={{ color: "#A5A5A5", fontWeight: 500, fontSize: 12 }}
          >
            {info.subtitle}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <ThemedText style={{ fontWeight: 600, fontSize: 26, paddingTop: 15 }}>
        {data?.title}
      </ThemedText>
      <ThemedText style={{ fontWeight: 400, fontSize: 16, paddingTop: 5 }}>
        by {data?.host}
      </ThemedText>
      {subInfo.map((info) => renderInfoRowWithIcons(info))}

      <ThemedText style={{ fontWeight: 600, marginTop: 18, fontSize: 18 }}>
        About this event
      </ThemedText>
      <ThemedText style={{ marginTop: 10 }}>{data?.about}</ThemedText>

      <ThemedText style={{ fontWeight: 600, marginTop: 18, fontSize: 18 }}>
        Find this event
      </ThemedText>
      <ThemedView style={{ alignItems: "center", marginVertical: 18 }}>
        <ThemedView
          style={{
            backgroundColor: "#eee",
            alignItems: "center",
            width: "100%",
            paddingVertical: 40,
            borderRadius: 16,
          }}
        >
          <TabBarIcon name="lock-closed" size={40} color={"#6C63FF"} />
          <ThemedText style={{ color: "#6C63FF", marginVertical: 10 }}>
            Join to unlock
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
});
export default BottomSheet(EventsInfo);
