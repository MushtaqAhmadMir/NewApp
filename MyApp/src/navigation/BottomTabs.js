// import React from 'react';
// import {
//   createBottomTabNavigator,
//   BottomTabBar,
// } from '@react-navigation/bottom-tabs';
// import colors from '../styles/colors';
// import {Image, StyleSheet, Platform} from 'react-native';

// import {
//   moderateScale,
//   width,
//   moderateScaleVertical,
// } from '../styles/responsiveSize';
// import imagePath from '../constants/imagePath';
// import strings from '../constants/lang';
// import commonStyles from '../styles/commonStyles';
// import fontFamily from '../styles/fontFamily';
// import navigationStrings from '../constants/navigationStrings';
// import {profile, Home, Saved, Sessions, More} from '../Screens';
// import { blackberry } from 'is_js';

// const BottomTab = createBottomTabNavigator();

// moderateScaleVertical;
// const TabRoutes = props => {
//   return (
//     <BottomTab.Navigator
    
//       tabBar={tabsProps => (
//         <>
//           <BottomTabBar {...tabsProps} />
//         </>
//       )}
//       initialRouteName={navigationStrings.HOME}
//       screenOptions={{
        
        
//         style: styles.customBottomtabsStyle,
//         activeTintColor: colors.whiteColorOpacity70,
//         inactiveTintColor: colors.whiteColorOpacity70,
//         labelStyle: {
//           ...commonStyles.fontSize12,
//           fontFamily: fontFamily.barlowSemiBold,
//           color: colors.whiteColor,
        
//         },
        
//       }}>
//       <BottomTab.Screen
      
//         name={navigationStrings.HOME}
//         component={Home}
//         options={{
//           tabBarShowLabel:true,
//           tabBarLabel:strings.HOME,
//           tabBarLabelStyle:{color:colors.textColor},
//           headerShown: false,
//           tabBarIcon: ({focused}) => {
//             return (
//               <Image
//                 style={{
//                   tintColor: focused ? colors.blackColor : 'gray',
//                   // height: moderateScale(40),
//                   // width: moderateScale(40),
//                 }}
//                 source={imagePath.ic_home}
//               />
//             );
//           },
//         }}
//       />
//       <BottomTab.Screen
//         name={navigationStrings.SESSIONS}
//         component={Sessions}
//         options={{
//           tabBarShowLabel:true,
//           tabBarLabel:strings.SESSIONS,
//           tabBarLabelStyle:{color:colors.textColor},
//           headerShown: false,
//           tabBarIcon: ({focused}) => {
//             return (
//               <Image
//                 style={{
//                   tintColor: focused ? colors.blackColor : 'gray',
//                   // height: moderateScale(40),
//                   // width: moderateScale(40),
//                 }}
//                 source={focused ?imagePath.ic_sessions2: imagePath.ic_sessions}
//               />
//             );
//           },
//         }}
//       />
//      <BottomTab.Screen
      
//       name={navigationStrings.SAVED}
//       component={Saved}
//       options={{
//         tabBarShowLabel:true,
//         tabBarLabel:strings.SAVED,
//         tabBarLabelStyle:{color:colors.textColor},
//         headerShown: false,
//         tabBarIcon: ({focused}) => {
//           return (
//             <Image
//               style={{
//                 tintColor: focused ? colors.blackColor : 'gray',
//                 // height: moderateScale(40),
//                 // width: moderateScale(40),
//               }}
//               source={imagePath.ic_saved}
//             />
//           );
//         },
//       }}
//     />
//     <BottomTab.Screen
//       name={navigationStrings.MORE}
//       component={More}
//       options={{
//         tabBarShowLabel:true,
//         tabBarLabel:strings.MORE,
//         tabBarLabelStyle:{color:colors.textColor},
//         headerShown: false,
//         tabBarIcon: ({focused}) => {
//           return (
//             <Image
//               style={{
//                 tintColor: focused ? colors.blackColor : 'gray',
//                 // height: moderateScale(40),
//                 // width: moderateScale(40),
//               }}
//               source={ imagePath.ic_more}
//             />
//           );
//         },
//       }}
//     />
//     </BottomTab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   customBottomtabsStyle: {
//     // borderTopLeftRadius: moderateScale(16),
//     // borderTopRightRadius: moderateScale(16),
//     backgroundColor: colors.themeColor,
//     //padding: 10,
//     // width: width,
//     // zIndex: 8,
//     //height: moderateScaleVertical(72),
//     // backgroundColor: colors.whiteColor,
//     // borderRadius: 4,
//     // shadowColor: '#000',
//     // shadowOffset: { width: 0, height: 1 },
//     // shadowOpacity: 0.4,
//     // shadowRadius: 5,
//     // elevation: 2,
//   },
// });

// export default TabRoutes;
