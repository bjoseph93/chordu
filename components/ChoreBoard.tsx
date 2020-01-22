import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Modal from "react-native-modal";


import db from '../config'
import Column from './Column'

type ChoreBoardState = {
  housemates: Array<String>
}


const ChoreBoard = () => {
  const [housemates, setHousemates] = useState([])
  const [modalVisilbe, setModalVisible] = useState(false)
  const [household, setHousehold] = useState("");
  const [selectedChore, setSelectedChore] = useState(null)


  useEffect(() => {
    db.ref("/households/-Lz3eOHfQ07DdDj4A8d3/housemates").once('value', (snapshot) => {
      // console.log(snapshot)
      // setHousehold(snapshot.val()[0].name)
      // console.log(snapshot.val())
      setHousemates(Object.values(snapshot.val()))
    })

    db.ref("/households/-Lz3eOHfQ07DdDj4A8d3/name").once('value', (snapshot) => {
      // console.log(snapshot)
      setHousehold(snapshot.val().name)
    })
  }, [])


  const handleCardPress = (chore) => {
    setSelectedChore(chore)
    setModalVisible(true)
  }

const handleChoreComplete = () => {


}
// console.log(selectedChore)
// console.log(housemates)
  return (
    <View>
      <Modal isVisible={modalVisilbe} onSwipeComplete={() => setModalVisible(false)} swipeDirection="down">
        <View style={styles.modal}>
          <Text>Hey</Text>
          <TouchableOpacity onPress={handleChoreComplete}><Text>Chore complete</Text></TouchableOpacity>
        </View>
      </Modal>
  <View style={styles.header}><Text style={styles.headerTitle}>{household}</Text></View>
      <View style={styles.columnContainer}>
        {housemates.map((housemate, index) => {
          console.log(housemate)
          return (
            <>
              <Column housemate={housemate} onCardPress={handleCardPress}/>
              {(index !== housemates.length - 1) && <View style={styles.seperator}/>}
            </>
          )     
        })}
      </View>
    </View>
  );
}

export default ChoreBoard;

const styles = StyleSheet.create({
  columnContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  modal: {
    position: 'absolute',
    alignSelf: 'center',
    top: 150,
    backgroundColor: "#ffffff",
    height: 100,
    width: 100
  },
  seperator: {
    alignSelf: 'flex-end',
    borderColor: '#D2D0D0',
    borderRightColor: '#D2D0D0',
    borderWidth: 1,
    height: 200
  },
  headerTitle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 20,
    paddingTop: 25
  },
  header: {
    height: 75,
    backgroundColor: '#00A1E0',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
