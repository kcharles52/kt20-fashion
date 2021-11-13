import React, {useState} from 'react';
import {Text} from 'react-native';
import Container from '../../components/Common/Container';
import Input from '../../components/Common/Input';

const Login = () => {
  const [value, onChangeText] = useState('default text');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="right"
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
