import '/style.css';
import '@/layout/header.js';
import pb from './src/api/pocketbase';
import { deleteButtonOn, resetInput } from './src/lib/deleteButton';
import { getNode } from './src/lib/getNode';
import { emailValidation, pwValidation } from './src/lib/validation';

if (pb.authStore.isValid) {
  location.href = '/src/pages/kanban/kanban.html';
};


// email 이벤트
const userEmail = getNode('#userEmail');
const emailDeleteButton = getNode('.button_delete_email');

const handleEmail = (e) => {
  const isEmailValid = emailValidation(e);
  const errorMessage = getNode('#userEmailError');

  if(isEmailValid) {
    errorMessage.classList.remove('is-invalid');
  } else {
    errorMessage.classList.add('is-invalid');
  }

  deleteButtonOn(e);
}

userEmail.addEventListener('input', handleEmail);
emailDeleteButton.addEventListener('click', resetInput);


// password 이벤트
const userPassword = getNode('#userPassword');
const pwDeleteButton = getNode('.button_delete_password');

const handlePassword = (e) => {
  const isPwValid = pwValidation(e);
  const errorMessage = getNode('#userPasswordError');

  if(isPwValid) {
    errorMessage.classList.remove('is-invalid');
  } else {
    errorMessage.classList.add('is-invalid');
  }

  deleteButtonOn(e);
};

userPassword.addEventListener('input', handlePassword);
pwDeleteButton.addEventListener('click', resetInput);


// login 이벤트
const loginButton = getNode('#loginButton');

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const authData = await pb.collection('users').authWithPassword(userEmail.value, userPassword.value)
    
    location.reload();
    // if(pb.authStore.isValid) {
    //   location.href = '/src/pages/kanban/kanban.html';
    // }
  } catch (error) {
    console.error('로그인 오류', error);
    alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요')
  }
};

loginButton.addEventListener('click', handleLogin);

