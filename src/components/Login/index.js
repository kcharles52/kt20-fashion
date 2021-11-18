import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../Common/Container';
import CustomButton from '../Common/CustomButton';
import Input from '../Common/Input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../Common/Message';
import styles from './styles';

const LoginComponent = ({
  error,
  form,
  justSignedUp,
  onChange,
  loading,
  onSubmit,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>KT20</Text>
      </View>
      <View>
        <Text style={styles.title}>Welcome to KT20 fashions</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="invalid credentials"
            />
          )}

          {error?.error && <Message danger onDismiss message={error?.error} />}
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            value={form.email || null}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
          <CustomButton
            primary
            title="Submit"
            onPress={onSubmit}
            loading={loading}
          />
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
