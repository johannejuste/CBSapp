import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { ChatRooms } from './../dummy-data/DummyData';
import ChatRoom from './../components/ChatRoom'
import {useDispatch, useSelector } from 'react-redux';

import {toggleHappy, newChatRoom, deleteChatRoom} from './../store/actions/ChatActions'
// import defaultStyles from './.././GeneralStyles'

const ChatScreen = props => {
  const isHappy = useSelector(state => state.chat.isHappy) // the subscription
  const chatRooms = useSelector(state => state.chat.chatRooms)

  const [text, onChangeText] = useState("");
  const [deleteText, onChangeDelete] = useState("");

  const dispatch = useDispatch();
   
  const handleJohanneHappy = () => {
  dispatch(toggleHappy(!isHappy)) // skifter fortegnet på boolean. action creater toggle happy.
  }
   return (
      <View style={styles.container}>
          <FlatList
            data={chatRooms}
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
   textInput: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
});

export default ChatScreen;