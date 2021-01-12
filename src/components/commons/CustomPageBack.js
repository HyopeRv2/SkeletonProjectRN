import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View, ScrollView, StyleSheet} from 'react-native';

const CustomPageBack = ({children, header, hasListView, marginHorizontal}) => {
  const {colors} = useTheme();

  let {formInBody} = styles;
  formInBody = {
    ...formInBody,
    marginHorizontal: marginHorizontal || 0,
  };

  return (
    <View style={styles.formBack}>
      {header}
      {hasListView !== undefined ? (
        <View style={formInBody}>{children}</View>
      ) : (
        <View style={styles.formOutBody}>
          <ScrollView style={styles.formInBodyScroll}>
            <View style={formInBody}>{children}</View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formBack: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  formOutBody: {
    alignItems: 'center',
    flex: 1,
  },
  formInBodyScroll: {
    width: '100%',
  },
  formInBody: {
    flex: 1,
    marginVertical: 10,
  },
});

export {CustomPageBack};
