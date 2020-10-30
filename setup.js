// import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
 var firebaseConfig = {
   apiKey: 'AIzaSyBPKiBE8RAUATlDEELn6BCLArJ3C8uFXeU',
   authDomain: 'otp-generate-f3185.firebaseapp.com',
   databaseURL: 'https://otp-generate-f3185.firebaseio.com',
   projectId: 'otp-generate-f3185',
   storageBucket: 'otp-generate-f3185.appspot.com',
   messagingSenderId: '868070498067',
   appId: '1:868070498067:web:0947a95885f937bd2584e6',
 };
 // Initialize Firebase
 if(firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
 }
 export default()=>{
          return {firebase,auth}
 }
 
