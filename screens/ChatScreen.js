import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ChatRooms } from './../dummy-data/DummyData';
import ChatRoom from './../components/ChatRoom'

const ChatScreen = props => {
   
   return (
      <View style={styles.container}>
         
          <FlatList
            data={ChatRooms}
            renderItem={itemData => (
                <ChatRoom chatroom={itemData.item}></ChatRoom>
            )}
            keyExtractor={item => item.chatRoomId}
        />
      </View>
 );
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
   },
});

export default ChatScreen;