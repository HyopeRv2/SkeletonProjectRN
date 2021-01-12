import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Typography = ({
  size,
  ultrabold,
  extrabold,
  bold,
  semibold,
  medium,
  light,
  thin,
  italic,
  center,
  right,
  // colors
  color,
  style,
  children,
  ...props
}) => {
  const textStyles = [
    styles.text,

    size && styles.size,
    ultrabold && styles.ultrabold,
    extrabold && styles.extrabold,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    thin && styles.thin,
    italic && styles.italic,

    center && styles.center,
    right && styles.right,
    color && styles.color,
    style, // rewrite predefined styles
  ];

  return (
    <Text adjustsFontSizeToFit style={[textStyles]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  // default style
  size: {
    fontSize: 14,
  },
  color: {
    fontSize: 14,
  },
  // variations
  ultrabold: {
    fontWeight: '900',
  },
  extrabold: {
    fontWeight: '800',
  },
  bold: {
    fontWeight: '700',
  },
  semibold: {
    fontWeight: '600',
  },
  medium: {
    fontWeight: '500',
  },
  light: {
    fontWeight: '300',
  },
  thin: {
    fontWeight: '200',
  },
  italic: {},

  // positions
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
});

export default Typography;
