import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}


export function MatTabBarIcon({style, ...rest}: IconProps<ComponentProps<typeof MaterialIcons>['name']>) {
  return <MaterialIcons size={24} style={[{ marginBottom: -3 }, style]} {...rest} />;
}


export function MatCommunityTabBarIcon({style, ...rest}: IconProps<ComponentProps<typeof MaterialCommunityIcons>['name']>) {
  return <MaterialCommunityIcons size={24} style={[{ marginBottom: -3 }, style]} {...rest} />;
} 
export function FeatherIcon({style, ...rest}: IconProps<ComponentProps<typeof Feather>['name']>) {
  return <Feather size={24} style={[{ marginBottom: -3 }, style]} {...rest} />;
} 