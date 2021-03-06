
import React from 'react';
import styled from 'styled-components';
import { auth, provider} from '../firebase';

function Login(props) {
  const signIn = () => {
   auth.signInWithPopup(provider)
   .then((result)=> {
     const newUser = {
       name: result.user.displayName,
       photo: result.user.photoURL,
     }
     localStorage.setItem('user', JSON.stringify(newUser));
     props.setUser(newUser);
   })
   .catch((error)=>{
     alert(error.message)
   })
  }
  return (
    <Container>
        <Content>
            <SlackImg src="data:image/png;base64,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" />
            <h1>Sign in Slack</h1>
            <SignInButton onClick={()  => signIn()}>
              Sign with Google
            </SignInButton>
        </Content>
    </Container>
  );
}

export default Login;


const Container = styled.div`
  width:100%;
  height: 100vh;
^ background-color:#f8f8f8;
  display:flex;
  justify-content:center
  align-items:center;

`

const Content = styled.div`
background-color: white;
padding: 100px;
border-radius: 5px;
display:flex;
flex-direction:column;
justify: content;
align-items:center;

`

const SlackImg = styled.img`
height:100px;
`

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0aa8d48;
  color:white;
  border: none;
  height:40px;
  border-radius: 4px;
  cursor:pointer;
  font-size:15px;

`
