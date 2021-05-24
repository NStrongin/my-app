import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, TextInput } from 'react-native';


export default function Buttons({getOneMarches, getTwoMarches, getThreeMarches, isStartGame}) {

    const button = [
        {key:'1', title:'Take 1 match', color:'#F06960', nameFuction:getOneMarches},
        {key:'2', title:'Take 2 match', color:'#49C0F0', nameFuction:getTwoMarches},
        {key:'3', title:'Take 3 match', color:'#3CF086', nameFuction:getThreeMarches}
      ];

    return(
        <View style={styles.mainBlocks}>
            <FlatList
                data={button}
                renderItem = {({ item }) => (
                    <Button
                        title={item.title}
                        color={item.color}
                        onPress={item.nameFuction}
                        disabled={!isStartGame}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainBlocks: {
      justifyContent: 'center',
      flex:1,
    },
  });