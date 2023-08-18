import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './SignUpStyle';

const SignUp = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={props.onBack}>
          <Image
            style={styles.image}
            source={require('../../assets/images/chevronLeft.png')}
          />
        </TouchableOpacity>
        <Text style={styles.text1}>Create Account</Text>
        <View style={styles.placeHolder} />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.text2}>{props.title}</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text3}>{props.content}</Text>
      </View>
      {props.visible ? (
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.nextButton} onPress={props.onNext}>
            <Text style={styles.text4}>Next</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.border}></View>
          <View style={styles.bottomTextBox}>
            <Text style={styles.text5}>
              By tapping on “Create account”, you agree to the spotify Terms of
              Use.
            </Text>
            <Text style={styles.text6}>Terms of Use</Text>
            <Text style={styles.text5}>
              To learn more about how Spotify collect, uses, shares and protects
              your personal data, Please see the Spotify Privacy Policy.
            </Text>
            <Text style={styles.text6}>Privacy Policy</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={[styles.text5, {marginRight: 60}]}>
                Please send me news and offers from Spotify.
              </Text>
              <Image source={require('../../assets/images/circle.png')} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.text5, {marginRight: 45}]}>
                Share my registration data with Spotify’s content providers for
                marketing purposes.
              </Text>
              <Image source={require('../../assets/images/circle.png')} />
            </View>
          </View>
          <View style={styles.bottomButton}>
            <TouchableOpacity
              style={styles.bottomButton2}
              onPress={props.onNext}>
              <Text style={styles.text7}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default SignUp;
