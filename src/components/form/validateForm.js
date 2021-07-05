export default function validateInfo(userData) {
  let errors = {};

  if (!userData.fullName) {
    errors.fullName = 'Full name is required';
  }

  if (!userData.email) errors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(userData.email)) errors.email = 'Invalid email address';

  //PASSWORD
  if (!userData.password) errors.password = 'Password is required';
  else if (userData.password.length < 8) errors.password = 'Password needs to be 6 characters or more';
  else if (!userData.confirmPassword) errors.password = 'Please confirm your password';
  else if (userData.password !== userData.confirmPassword) errors.password = 'Passwords do not match';

  return errors;
}
