import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const ChatScreen = props => {
   const navigation = useNavigation();

   return (
    <View>
       <Text>Main Chat Screen</Text>
       <Button title="Go to chat message" 
         onPress={() => navigation.navigate('ChatMessages')}></Button>
    </View>
 );
}

const styles = StyleSheet.create({
 
});

export default ChatScreen;