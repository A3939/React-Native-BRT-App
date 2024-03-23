import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLOR, ROUTES} from '../../constants';
import {Icons} from '../../assets/Icons';
import React from 'react';

function BottomTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.tabBarStyle}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName;

        if (route.name === ROUTES.HOME) {
          iconName = isFocused ? Icons.HOME : Icons.HOME;
        } else if (route.name === ROUTES.SEARCH_NAVIGATOR) {
          iconName = isFocused ? Icons.SEARCH : Icons.SEARCH;
        } else {
          iconName = Icons.BUS;
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarStyle}>
            <View
              style={[
                styles.menuItem,
                {backgroundColor: isFocused ? COLOR.primary : COLOR.white},
              ]}>
              <Image
                source={{uri: iconName}}
                style={[
                  styles.bottomIcon,
                  {tintColor: isFocused ? COLOR.white : COLOR.primary},
                ]}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? wp('23%') : wp('18%'),
    backgroundColor: COLOR.white,
    borderTopLeftRadius: wp('10%'),
    borderTopRightRadius: wp('10%'),
  },
  bottomIcon: {
    width: wp('6%'),
    height: wp('6%'),
    marginTop: Platform.OS === 'ios' ? wp('7%') : wp('0%'),
    bottom: Platform.OS === 'ios' ? wp('4%') : 0,
  },
  menuItem: {
    paddingVertical: Platform.OS === 'ios' ? wp('0%') : wp('3%'),
    paddingHorizontal: Platform.OS === 'ios' ? wp('10%') : wp('10%'),
    backgroundColor: COLOR.primary,
    borderRadius: wp('10%'),
  },
});
