import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/Common/Container';
import Input from '../../components/Common/Input';
import CustomButton from '../../components/Common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {REGISTER} from '../../constants/routeNames';

const LoginComponent = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>KT20</Text>
      </View>
      <View>
        <Text style={styles.title}>Welcome to KT20 fashions</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
          />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <CustomButton primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
