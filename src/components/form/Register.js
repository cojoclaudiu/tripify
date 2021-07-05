import './Register.css';
import React from 'react';
import useForm from './useForm';
import validate from './validateForm';

const Register = () => {
  const { handleChange, userData, handleSubmit, listOfCountries, errors } = useForm(validate);

  return (
    <form className="registerForm" onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name">Full name</label>
      <input id="fullName" name="fullName" type="text" placeholder="Your fullname" value={userData.fullName} onChange={handleChange} />
      {errors.fullName && <p>{errors.fullName}</p>}

      <label htmlFor="country">Choose your country:</label>
      <select id="country" name="country" value={userData.country} onChange={handleChange} required>
        <option defaultValue>Choose a country</option>
        {listOfCountries()}
      </select>

      <label htmlFor="email">Email:</label>
      <input name="email" id="email" type="email" placeholder="Your email address" value={userData.email} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input name="password" type="password" placeholder="password" value={userData.password} onChange={handleChange} />
      {errors.password && <p>{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input name="confirmPassword" type="password" placeholder="confirm password" value={userData.confirmPassword} onChange={handleChange} />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;
