import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { MaterialIcons } from "@expo/vector-icons";
import { forwardRef, useImperativeHandle, useState } from "react";

const Select = forwardRef(({ options, onOptionChange, multi=false }, ref) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selectedValues = selectedOptions 
      setSelectedOptions([])
      return { value: selectedValues };
    },
  }));
  const onChange = (option) => {
    if (!multi) {
      setSelectedOptions([option.value])
      return
    }

    if (selectedOptions.includes(option.value)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option.value));
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
    }
  };
  const renderOptionTile = (option) => {
    const onOptionPress = () => {
      onChange(option);
    };
    return (
      <TouchableOpacity
        style={{ position: "relative" }}
        onPress={onOptionPress}
        key={option?.value}
      >
        <ThemedView
          lightColor="rgba(255, 255, 255, 0.35)"
          style={styles.optionTile}
        >
          <ThemedText
            lightColor="rgba(141, 134, 254, 1)"
            style={styles.optionText}
          >
            {option.label}
          </ThemedText>
          {selectedOptions?.includes(option?.value) ? (
            <MaterialIcons
              name="check-circle"
              style={{ position: "absolute", right: 22 }}
              color={"rgba(141, 134, 254, 1)"}
              size={18}
            />
          ) : (
            <></>
          )}
        </ThemedView>
      </TouchableOpacity>
    );
  };
  return options?.map((option: { label: { label: any } }) =>
    renderOptionTile(option)
  );
});

const styles = StyleSheet.create({
  optionTile: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginBottom: 16,
    borderRadius: 10,
    flexDirection: "row",
  },
  optionText: {
    fontSize: 20,
    fontWeight: 600,
  },
});
export default Select;
