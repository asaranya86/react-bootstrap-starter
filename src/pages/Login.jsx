import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useHistory, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import { useAuth } from '../auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';

const LoginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('email required'),
  password: Yup.string().required('password required'),
});

export default function LoginPage() {
  const { user, signin } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      signin(values);
    },
  });

  useEffect(() => {
    if (user) {
      let { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    }
  }, [user, history, location.state]);

  const {
    isValid,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
  } = formik;

  return (
    <Container className='d-flex justify-content-center align-items-center h-100'>
      <Form
        className='shadow-sm px-5 py-4 rounded-sm border'
        onSubmit={handleSubmit}>
        <Figure className='w-100 d-flex align-items-center justify-content-center'>
          <Figure.Image src='logo192.png' />
        </Figure>
        <h3>
          <u>Sign In</u>
        </h3>
        <Form.Group className='my-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={Boolean(errors.email)}
          />
          <Form.Text className='text-danger'>{errors.email}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={Boolean(errors.password)}
          />
          <Form.Text className='text-danger'>{errors.password}</Form.Text>
        </Form.Group>
        <Form.Group className='d-flex justify-content-between'>
          <Button variant='danger' type='submit' className='mr-1'>
            Forgot Password
          </Button>
          <Button variant='primary' type='submit' disabled={!dirty || !isValid}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
