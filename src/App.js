import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './App.css';

function App() {
  const validationsSchema = yup.object().shape({
    name: yup.string().typeError('должно быть строкой').required('Обязательно'),
    secondName: yup.string().typeError('должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('должно быть строкой').required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'паролди не совпадают').required('Обязательно'),
    email: yup.string().email('введите верный email').required('Обязательно'),
    confirmEmail: yup.string().email('введите верный email').oneOf([yup.ref('email')], 'emais не совпадают').required('Обязательно'),
  })

  return (
    <div>
      <Formik initialValues={{
        name: '',
        secondName: '',
        password: '',
        confirmPassword: '',
        email: '',
        confirmEmail: ''
      }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className={`form`}>

            <p>
              <label htmlFor={`name`}>NAME</label><br />
              <input
                className={'input'}
                type={`text`}
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </p>
            {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
        
            <p>
              <label htmlFor={`secondName`}>secondName</label><br />
              <input
                className={'input'}
                type={`text`}
                name={`secondName`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secondName}
              />
            </p>
            {touched.secondName && errors.secondName && <p className={'error'}>{errors.secondName}</p>}

            <p>
              <label htmlFor={`password`}>password</label><br />
              <input
                className={'input'}
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}

            <p>
              <label htmlFor={`confirmPassword`}>confirmPassword</label><br />
              <input
                className={'input'}
                type={`password`}
                name={`confirmPassword`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </p>
            {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}

            <p>
              <label htmlFor={`email`}>email</label><br />
              <input
                className={'input'}
                type={`email`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}

            <p>
              <label htmlFor={`confirmEmail`}>confirmEmail</label><br />
              <input
                className={'input'}
                type={`email`}
                name={`confirmEmail`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmEmail}
              />
            </p>
            {touched.confirmEmail && errors.confirmEmail && <p className={'error'}>{errors.confirmEmail}</p>}
            <button disabled={!isValid && !dirty} onClick={handleSubmit} type={`submit`}>knopka</button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default App;
