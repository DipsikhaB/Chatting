import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Button } from 'react-native';
import { db } from '../firebase';

const AddChatScreen = ({navigation}) => {
    const[input, setInput] = useState("");
    useLayoutEffect(() => {
        navigation.setOptions({
          title: "Add a new Chat",
        });
    }, [navigation]);

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input,
        })
        .then(() => {
            navigation.goBack();
        })
        .catch((error) => alert(error));
    }

    return (
      <View style={styles.container}>
        <Input
          placeholder="Enter a chat name"
          value={input}
          onSubmitEditing={createChat}
          onChangeText={(text) => setInput(text)}
          leftIcon={
            <Ionicons name="chatbubble-ellipses" size={24} color="black" />
          }
        />
        <Button disabled={!input} onPress={createChat} title="Create a new Chat"/>
      </View>
    );
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    }
})
