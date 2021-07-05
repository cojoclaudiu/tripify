import { useState } from 'react';
import { db } from '../../apis/firebase';

const countryList = require('country-list');

const useForm = validate => {
  const [userData, setUserData] = useState({ fullName: '', country: '', email: '', password: '', confirmPassword: '' });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(userData));

    //CHECK IF THE IF WE HAVE ERRORS OR NOT
    //IF THE OBJECT IS EMPTY, IT MEANS WE HAVE NO ERRORS
    if (Object.keys(validate(userData)).length === 0 && validate(userData).constructor === Object) {
      db.collection('/register')
        .add({
          fullName: userData.fullName,
          country: userData.country,
          email: userData.email,
          password: userData.password
        })
        .then(() => alert('Your form has been submitted'))
        .catch(err => alert(`You've got an error`));
    }
  };

  const listOfCountries = () => {
    const countries = countryList.getNames();
    return countries.map(country => (
      <option value={country} key={country}>
        {country}
      </option>
    ));
  };

  return { handleChange, userData, handleSubmit, listOfCountries, errors };
};

export default useForm;
