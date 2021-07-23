import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default function Signup() {
  const [emailRef, setEmailRef] = useState('')
  const [passwordRef, setPasswordRef] = useState('')

  const [passwordConfirmRef, setPasswordConfirmRef] = useState('')


  const handlePress=()=>{
      alert(emailRef);
  }
  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        textContentType="emailAddress"
        onChangeText ={setEmailRef}
        value={emailRef}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text>Password:</Text>
      <TextInput
        autoCompleteType="password"
        onChangeText ={setPasswordRef}
        value={passwordRef}
        placeholder="Enter your password"
        keyboardType="string"
      />

      <Text>Password Confirmation:</Text>
      <TextInput
        autoCompleteType="password"
        onChangeText ={setPasswordConfirmRef}
        value={passwordConfirmRef}
        placeholder="Enter your password"
        keyboardType="string"
      />

      <Button title="Signup" onPress={handlePress} />
    </View>
  );
}
