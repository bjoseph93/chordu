import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type CardProps = {
  chore: string;
  onPress: () => void;
}

const Card = (props: CardProps) => {
  const choreImageMap = {
    "sweep": require('../assets/broom.png'),
    "mail": require('../assets/envelope.png'),
    "dishes": require('../assets/mug.png'),
    "recycle": require('../assets/recycle.png'),
    "toilet": require('../assets/toilet.png'),
    "water-plants": require('../assets/watering-can.png'),
    "trash": require('../assets/trash.png'),
    "counters": require('../assets/sponge.png')
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image source={choreImageMap[props.chore]} style={styles.icon}/>
      </View>
    </TouchableOpacity>
  );
}

export default Card;


const styles = StyleSheet.create({
    container: {
      borderRadius: 5,
      width: 57,
      height: 47,
      backgroundColor: '#A5D7F2',
      justifyContent: 'center'
    },
    icon: {
      justifyContent: 'center',
      alignSelf: 'center'
    },
    name: {
      alignSelf: 'center',
      color: '#00A1E0',
      fontSize: 45
    }
  });
  