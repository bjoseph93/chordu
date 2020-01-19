import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './Card'

type ColumnProps = {
  housemate: object;
  onCardPress: () => void;
}

const Column = (props: ColumnProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.housemate.name.charAt(0)}</Text>
      <View style={{alignItems: 'center'}}>
        {
        props.housemate.chores.map((chore) => {
          // console.log( props.housemate.chores)

          return (
            <View style={styles.cardContainer}>
              <Card chore={chore} onPress={props.onCardPress}/>
            </View>
          )

        })


        }
      </View>
    </View>
  );
}

export default Column;


const styles = StyleSheet.create({
    container: {
      width: 80,
      height: 300,
    },
    cardContainer: {
      paddingBottom: 15
    },
    name: {
      alignSelf: 'center',
      color: '#00A1E0',
      fontSize: 45,
      marginBottom: 45
    }
  });
  