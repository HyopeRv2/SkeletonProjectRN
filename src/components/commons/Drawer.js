import React from 'react';
import {Image, StyleSheet, Switch, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import {CustomText} from './CustomText';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../redux/actions/themeActions';
import {CustomButton} from './CustomButton';
import {userLogout} from '../../redux/actions/userActions';
import {authLogout} from '../../redux/actions/authActions';
import {CustomIcon} from './CustomIcon';
import {CustomSpinner} from './CustomSpinner';
import Block from './Block';
import {changeLanguage} from '../../redux/actions/languagesActions';

const CustomDrawer = ({state, navigation, descriptors}) => {
  const {colors} = useTheme();
  const themeRepo = useSelector((store) => store.theme);
  const languageRepo = useSelector((store) => store.languages);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <View>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&',
          }}
          style={styles.headerImage}
        />
      </View>
      <DrawerContentScrollView>
        <View style={styles.itemSection}>
          <View style={styles.itemSectionTitle}>
            <CustomIcon name={'caret-right'} color={colors.text} />
            <CustomText style={styles.menuTitle}>
              {languageRepo.data.menuTitle.mainMenu}
            </CustomText>
          </View>

          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.drawerLabel !== undefined
                ? options.drawerLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isHasIcon = options.drawerIcon !== undefined;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'drawerItemPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <DrawerItem
                key={label}
                style={{flex: 1}}
                focused={isFocused}
                inactiveTintColor={colors.text}
                activeBackgroundColor={'rgba(200, 200, 200, 0.9)'}
                activeTintColor={colors.primary}
                label={label}
                onPress={onPress}
                icon={() => (isHasIcon ? options.drawerIcon() : null)}
              />
            );
          })}
        </View>

        <View style={styles.itemSection}>
          <View style={styles.itemSectionTitle}>
            <CustomIcon name={'caret-right'} color={colors.text} />
            <CustomText style={styles.menuTitle}>
              {languageRepo.data.menuTitle.brightness}
            </CustomText>
          </View>

          <Switch
            trackColor={{false: colors.primary, true: colors.primary}}
            thumbColor={themeRepo.type === 'light' ? '#FFF' : '#000'}
            ios_backgroundColor={colors.primary}
            onValueChange={() => {
              let type = themeRepo.type === 'light' ? 'dark' : 'light';
              dispatch(changeTheme(type));
            }}
            value={themeRepo.type === 'light'}
          />
        </View>

        <View style={styles.itemSection}>
          <View style={styles.itemSectionTitle}>
            <CustomIcon name={'caret-right'} color={colors.text} />
            <CustomText style={styles.menuTitle}>
              {languageRepo.data.menuTitle.languages}
            </CustomText>
          </View>

          <Block row>
            {languageRepo.languages.map((languageItem) => {
              return (
                <CustomButton
                  flex
                  key={languageItem.key}
                  marginHorizontal
                  text={languageItem.value}
                  backgroundColor={
                    languageItem.key === languageRepo.languageTag
                      ? colors.primaryDark
                      : null
                  }
                  onPress={async () =>
                    await dispatch(changeLanguage(languageItem.key))
                  }
                />
              );
            })}
          </Block>
        </View>
      </DrawerContentScrollView>

      <CustomButton
        marginHorizontal
        text={languageRepo.data.process.logout}
        onPress={async () => {
          await dispatch(userLogout());
          await dispatch(authLogout());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  headerImage: {
    width: '100%',
    height: 180,
  },

  menuTitle: {
    paddingLeft: 10,
  },

  itemSection: {
    marginBottom: 5,
  },

  itemSectionTitle: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export {CustomDrawer};
