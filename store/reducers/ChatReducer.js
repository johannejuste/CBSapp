
import ChatRoom from './../../models/ChatRoom';
import Message from './../../models/Message';
import { NEW_CHATROOM, TOGGLE_HAPPY, DELETE_CHATROOM, NEW_CHATMESSAGE } from "../actions/ChatActions";
import { ChatRooms } from '../../dummy-data/DummyData';
import { Messages } from '../../dummy-data/DummyData';

const initialState = {
    isHappy: false,
    chatRooms: ChatRooms,
};

const ChatReducer = (state = initialState, action) => { // action er det du gerne vil gøre
switch (action.type) { // compact måde at skrive mange if sætninger. switches on the type of action from chataction.js
    case TOGGLE_HAPPY: 
    //state.isHappy = true; //NOO !!!! State mutation not allowed
    return { ...state, isHappy: action.payload } 
    // kopiere det gamle state ved the js spread operator (takes all the items in array and picks them all)
    // after the, the change - som retunere det nye som blev sendt ind med payload
    // if there is any supscriptions from the Chatscreen.js

    case NEW_CHATROOM: 
    const tempId = Math.random().toString()
    // const chatRoom = (id: Math.random(), imageUrl: '', ...)
    const chatRoom = new ChatRoom(tempId, undefined, action.payload, []) // new ChatRoom object and constructor (look at chatRoom.js in models). Now i want to insert it
    const exist = state.chatRooms.find((e) => e.chatRoomName === action.payload)

    if (!exist) {
    
    return {...state, chatRooms: [...state.chatRooms, chatRoom]} //copy of old stat eobject and put what ever is in there in the js object. I want 
    // you cant use push, it is a state mutation!!
    }else{
    console.log('taken');
    return state;
    }

    case DELETE_CHATROOM:
        // return { ...state, chatRooms: state.chatRooms.filter(chatRoom => chatRoom.chatRoomName !== action.payload)}
        
        const newChatRooms = state.chatRooms.filter(chatRoom => chatRoom.chatRoomName !== action.payload);
        // call it on an array
        // arrow function
        // looks at payload, and if the name doesnt exist it is added to the new array without the thing you wrote (removes the room)
            
        return {
        ...state, chatRooms: newChatRooms}
              
    case NEW_CHATMESSAGE:

         // Find the chatroom object based on chatroomId.    
            // Copy messages array of the right chatroom object
            // Copy chatrooms to avoid state mutations when updating the messages array in the 
            // specific chatroom object.
            const chatroom = state.chatRooms.find(room => room.chatRoomId === action.payload.chatRoomId);
            const chatmessages = [...chatroom.messages, action.payload.messageObj];

            
            // 2: Copy chatroom object and attach new chat array that you copied.
            const newChatRoom = { ...chatroom };
            newChatRoom.messages = chatmessages;

            //3: Insert the new chatroom object into the array of chatrooms
            // Hint: use js-array's findIndex function, to find the index in the array of the object we want.
            // js Splice method to create a new array and insert the created chatroom object.
            const index = state.chatRooms.findIndex(room => room.chatRoomId === action.payload.chatRoomId);
            const chatroomArray = [...state.chatRooms];
            chatroomArray.splice(index, 1, newChatRoom);

            return { ...state, chatRooms: chatroomArray };
    
    default:
        return state;

}
}
export default ChatReducer