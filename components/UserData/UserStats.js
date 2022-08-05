/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
const UserStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View>
          <Text style={styles.color}>Here's How Are You Doing</Text>
        </View>
        <View>
          <Text style={styles.color}>
            <Icon name="questioncircleo" size={17} color="white" />
          </Text>
        </View>
      </View>
      <View style={styles.secondView}>
        <View>
          <Text style={styles.textColor}>Seller Level</Text>
          <Text style={styles.textColor}>Next Evaluation</Text>
          <Text style={styles.textColor}>Response Time</Text>
        </View>
        <View>
          <View style={styles.inline}>
            <Text style={styles.textColor}>New Seller</Text>
          </View>
          <Text style={styles.greenColor}>15-Aug-2022</Text>
          <View style={styles.inline}>
            <Text style={styles.greenColor}>1 hours</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserStats;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: '#303030',
    padding: 5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  color: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  secondView: {
    padding: 5,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textColor: {
    color: 'white',
    padding: 2,
  },
  greenColor: {
    color: '#00C851',
    fontSize: 15,
    fontWeight: '600',
    padding: 2,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
