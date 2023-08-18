import React from 'react';
import SignUp from '..';

const SignUp3 = props => {
  const onBack = () => {
    props.navigation.goBack();
  };
  const onNext = () => {
    props.navigation.navigate('SignUp4');
  };
  return (
    <SignUp
      onNext={onNext}
      onBack={onBack}
      title={"What's your gender?"}
      content={null}
      visible={true}
    />
  );
};
export default SignUp3;
