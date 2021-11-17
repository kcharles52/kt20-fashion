import React, {useState, useContext} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Container from '../../components/Common/Container/index';
import RegisterComponent from '../../components/SignUp';
import {GlobalContext} from '../../context/Provider';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {LOGIN} from '../../constants/routeNames';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();

  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [authDispatch, data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    // TODO: better error clearin later
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    // TODO: better validation later
    if (!form.email) {
      setErrors(prev => ({...prev, email: 'Please add an Email'}));
    }
    if (!form.password) {
      setErrors(prev => ({...prev, password: 'Please add a password'}));
    }
    if (!form.role) {
      setErrors(prev => ({...prev, role: 'Please add a role'}));
    }

    if (
      Object.values(form).length === 3 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response});
      });
    }
  };

  return (
    <Container>
      <RegisterComponent
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
        error={error}
        loading={loading}
      />
    </Container>
  );
};

export default Register;
