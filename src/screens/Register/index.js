import React, {useState, useEffect} from 'react';
import Container from '../../components/Common/Container/index';
import RegisterComponent from '../../components/SignUp';
import envs from '../../config/env';
import axiosInstance from '../../helpers/axiosInstance';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  console.log('ens', envs);

  useEffect(() => {
    const login = async () => {
      try {
        const {
          data: {token},
        } = await axiosInstance.post('/signin', {
          password: 'charles',
          email: 'charles@gmail.com',
          role: 'client',
        });
        console.log('token', token);
      } catch (error) {
        console.log(error);
      }
    };

    login();
  }, []);

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
    console.log(form);
    if (!form.email) {
      setErrors(prev => ({...prev, email: 'Please add an Email'}));
    }
    if (!form.password) {
      setErrors(prev => ({...prev, password: 'Please add a password'}));
    }
    if (!form.role) {
      setErrors(prev => ({...prev, role: 'Please add a role'}));
    }
  };

  return (
    <Container>
      <RegisterComponent
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
      />
    </Container>
  );
};

export default Register;
