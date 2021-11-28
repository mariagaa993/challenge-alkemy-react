import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import Button from './Button';
import { getToken } from '../services/Login';
import { useHistory } from 'react-router-dom'
import '../scss/components/form.scss';

const Login = () => {
    const history = useHistory()
    return (
        <>
            <Formik initialValues={{email:'', password: ''}}
                onSubmit={(values) => (
                getToken(values) 
                .then(res => res ? history.push('/home') : alert('Invalid email adress or password'))
            )}>
                { ({handleChange, handleSubmit}) => 
                    <Form className='form' onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' name='email' 
                                onChange={handleChange} placeholder='Enter email' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name='password' 
                                onChange={handleChange} placeholder='Password' />
                        </Form.Group>
                        <Button className='login-button' title='Login' type='submit' />
                    </Form>
                }
            </Formik>
        </>
    )
}

export default Login;
