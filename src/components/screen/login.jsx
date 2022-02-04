import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import logo from 'assets/logo.png';


const signup = () =>
{
    return( 
    <React.Fragment>
        
    <HeaderImg />
    <Maindiv>
        
        <TextField variant="outlined" label="ID" sx={{mt: 2, mb:2}}/>
        <TextField variant="outlined" label="비밀번호" type="password" sx={{mt:2, mb:2}}/>
        
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="ID 저장하기" />
        </FormGroup>
        <Button variant="contained" sx={{mt:10}}>로그인</Button>

        <ResetPwdLbl>비밀번호 재설정</ResetPwdLbl>
    <SignUpLbl>회원가입</SignUpLbl>
    </Maindiv>
    
    <Copyright>Copyright @ GDSC Hackathon Team</Copyright>
    </React.Fragment>
    );
}
const HeaderImg = styled.img.attrs({
    src: `${logo}`
})`
position: absolute;
width:560px;
height: 190px;
left: 50%;

transform: translate(-50%, 0%);
text-align: center;
`

const Maindiv = styled.div`
position: absolute;
display: inline-flex;
flex-row: row wrap;

align-content: space-around;
flex-direction: column;

top: 30%;
left: 50%;
margin: 0 auto;
width: 400px;
margin-left: -200px;

`


const Copyright = styled.div`
text-align: center;
position: absolute;
left:50%;
top:95%;
transform: translate(-50%, -50%);
margin: 0 auto;
display: flex;
justify-content: center;

font-size:small;
color: rgba(0,0,0,0.54);
`
const ResetPwdLbl = styled.div`

text-align: left;
float: left;
color: #1976D2;
font-size: small;

`

const SignUpLbl = styled.div`
text-align: right;

float: right;
color: #1976D2;
font-size: small;
margin-top: -17px;
`

export default signup;