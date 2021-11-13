import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../Common/Container';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {LOGIN} from '../../constants/routeNames';

const LoginComponent = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>KT20</Text>
      </View>
      <View>
        <Text style={styles.title}>Welcome to KT20 fashions</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input label="Email" iconPosition="right" placeholder="Enter Email" />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <Input
            label="Role"
            iconPosition="right"
            placeholder="Your role e.g stylist/client"
          />
          <CustomButton primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
