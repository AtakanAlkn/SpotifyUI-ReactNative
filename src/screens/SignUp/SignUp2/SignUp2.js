import React from 'react';
import SignUp from '..';

const SignUp2 = props => {
  const onBack = () => {
    props.navigation.goBack();
  };
  const onNext = () => {
    props.navigation.navigate('SignUp3');
  };
  return (
    <SignUp
      onNext={onNext}
      onBack={onBack}
      title={'Create a password'}
      content={'Use atleast 8 characters'}
      visible={true}
    />
  );
};
export default SignUp2;
