import React from 'react';
import SignUp from '..';

const SignUp1 = props => {
  const onBack = () => {
    props.navigation.goBack();
  };
  const onNext = () => {
    props.navigation.navigate('SignUp2');
  };
  return (
    <SignUp
      onNext={onNext}
      onBack={onBack}
      title={"What's your email?"}
      content={"You'll need confirm this email later."}
      visible={true}
    />
  );
};
export default SignUp1;
