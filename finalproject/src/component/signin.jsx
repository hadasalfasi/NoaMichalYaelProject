import React from "react";
import {useRef,useState,useEffect} from "react";
import {connect} from "react-redux";
import { addcontact, tosignin } from "../redux/actions";
import {useNavigate} from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TableContainer } from "@mui/material";
import { green } from "@mui/material/colors";

function mapStateToProps(state){
    return{
        contactsList: state.contacts.contactsList,
    };
}

export default connect(mapStateToProps)(function Signin(props){
    const{contactsList, dispatch}=props;
    let IDNumberRef =useRef('');
    let contactFirstNameRef = useRef('');
    let contactLastNameRef =useRef('');
    let contactEmailAddressRef =useRef('');
    const signin=(()=>{
        if(contactFirstNameRef.current.value==='' || contactLastNameRef.current.value==='' || contactEmailAddressRef.current.value==='' || IDNumberRef.current.value==='')
        {    
            alert("נתון אחד  או יותר חסר ")
        }
        else
        { 
            dispatch(tosignin({idNumber: IDNumberRef.current.value, firstName: contactFirstNameRef.current.value, lastName: contactLastNameRef.current.value, enailAddress: contactEmailAddressRef.current.value}))
            toShowTask();
            alert(`שלום ${contactFirstNameRef.current.value} ${contactLastNameRef.current.value}`);
        }
     
})
const newNavigate=useNavigate();
const toShowTask=(()=>{
   newNavigate('/Showtasks',{state:{idNumber:IDNumberRef.current.value}});})

return(
    
    <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
        <Avatar sx={{ m:1, bgcolor: 'secondary.main' ,backgroundColor:'grey'}}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            להרשמה
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="שם פרטי"
                autoFocus
                inputRef={contactFirstNameRef}
              
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                id="lastName"
                label="שם משפחה"
                name="lastName"
                autoComplete="family-name"
                inputRef={contactLastNameRef}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="email"
                label="Email כתובת"
                name="email"
                autoComplete="email"
                inputRef={contactEmailAddressRef}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                name="password"
                label="סיסמה"
                type="password"
                id="password"
                autoComplete="new-password"
                inputRef={IDNumberRef}
                />
            </Grid>
            </Grid>
            <Button
            //type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 ,backgroundColor:"gray"}}
            // disabled={isDisable}
            onClick={signin}
            >
            אשר הרשמה
            </Button>
            <Grid container justifyContent="flex-end">
            <Grid item>
                <Link href="/Login" variant="body2">
                Already have an account? login
                </Link>
            </Grid>
            </Grid>
        </Box>
        </Box>
    </Container>
     )
   
// return(
//          <>
//             <label>שם פרטי</label>
//             <input ref={contactFirstNameRef}></input>
//             <br></br>
//             <label> שם משפחה</label>
//             <input ref={contactLastNameRef}></input>
//             <br></br>
//             <label>תעודת זהות</label>
//             <input ref={IDNumberRef}></input>
//             <br></br>
//             <label>מייל </label>
//             <input ref={contactEmailAddressRef}></input>
//             <br></br>
//             <label>טלפון </label>
//             <input ref={contactPhoneRef}></input>
//             <br></br>
//             <button onClick={signin}>להרשמה</button>
//          </>
// )
}
)