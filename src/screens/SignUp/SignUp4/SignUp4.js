import React from 'react';
import SignUp from '..';

const SignUp4 = props => {
  const onBack = () => {
    props.navigation.goBack();
  };
  const onNext = () => {
    props.navigation.navigate('ChooseArtist');
  };

  return (
    <SignUp
      onNext={onNext}
      onBack={onBack}
      title={"What's your name?"}
      content={'This appears on your spotify profile'}
    />
  );
};
export default SignUp4;
