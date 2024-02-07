import React,{useEffect} from "react";
import {useRef} from "react";
import {connect} from "react-redux";
import { tosignin,getUserList } from "../redux/actions";
import {Link,useNavigate} from 'react-router-dom';

import axios from "axios";
import { useDispatch } from 'react-redux';



import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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

export default connect(mapStateToProps)(function Login(props){
    const{contactsList}=props;
    const newNavigate=useNavigate();
    const dispatch=useDispatch();
    let IDNumberRef = useRef('');
    let contactFirstNameRef = useRef('');
    let contactLastNameRef = useRef('');

  
   const checklogin = async () =>{
    console.log("asddfff");
    try{
        const reaspons = await axios.get('http://localhost:5000/users')
        
        if (reaspons.status == 200){
            dispatch(getUserList(reaspons.data));
            console.log(reaspons.data);
            for (var i in reaspons.data){
                console.log(reaspons.data[i]);
                if (reaspons.data[i].firstName == contactFirstNameRef.current.value&&reaspons.data[i].idNumber==IDNumberRef.current.value&&reaspons.data[i].lastName==contactLastNameRef.current.value){
                    alert(`שלום ${contactFirstNameRef.current.value} ${contactLastNameRef.current.value}`);
                    newNavigate('/Showtasks',{state:{idNumber:IDNumberRef.current.value}})
                }
            }
            alert('אינך רשום, יתכן והנתונים לא הוכנסו כראוי, אן אינך רשום לחץ להרשמה');
        }
    }
    catch(error){
        console.log(error);
    }
   }
   const toConSignin=(()=>{
    newNavigate('/Signin');
   })
   
   return(
        <>
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
        לכניסה
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

        <Grid item xs={12}  >
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
        <Grid container spacing={2}>
           <Grid item xs={6}>
    <Button
      fullWidth
      variant="contained"
      sx={{ backgroundColor: "gray", height: "100%" }}
      onClick={checklogin}
    >
      לכניסה
    </Button>
  </Grid>
  <Grid item xs={6}>
    <Button
      fullWidth
      variant="contained"
      sx={{ backgroundColor: "gray", height: "100%" }}
      onClick={toConSignin}
    >
      להרשמה
    </Button>
  </Grid>
        </Grid>
    </Box>
    </Box>
</Container>
       </> )
}
)  // const checklogin=(()=>{
    //    const index=contactsList.findIndex(x=>x.idNumber==IDNumberRef.current.value&&
    //     x.firstName==contactFirstNameRef.current.value&&x.lastName==contactLastNameRef.current.value)
    //     if(index!=-1)
    //     {
    //         alert(`שלום ${contactFirstNameRef.current.value} ${contactLastNameRef.current.value}`);
    //         newNavigate('/Showtasks',{state:{idNumber:IDNumberRef.current.value}})
    //     }
    //     else{
    //         alert('אינך רשום, יתכן והנתונים לא הוכנסו כראוי, אן אינך רשום לחץ להרשמה');
    //     }
    // })
