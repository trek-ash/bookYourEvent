import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/utils/useThemeColor";

export type ThemedTileProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  data?: any;
};

export function ThemedTile({
  style,
  lightColor,
  darkColor,
  children,
  ...otherProps
}: ThemedTileProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const tileStyle = {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  };  
  return (
    <View style={[tileStyle, { backgroundColor }, style]} {...otherProps}>
        {children}
    </View>
  );
}
