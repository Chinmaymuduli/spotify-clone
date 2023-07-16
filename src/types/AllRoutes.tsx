import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PublicRoutesTypes = {
  Login: undefined;
};
export type PrivateRoutesTypes = {};
export type BottomTabsTypes = {};

export type PublicNavigationProps =
  NativeStackNavigationProp<PublicRoutesTypes>;
export type PrivateNavigationProps =
  NativeStackNavigationProp<PrivateRoutesTypes>;
export type StackAndTabType = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsTypes>,
  NativeStackNavigationProp<PrivateRoutesTypes>
>;
