// import React,{useEffect} from "react";
// import {useRef} from "react";
// import {connect} from "react-redux";
// import { saveChange ,deleteTask} from "../redux/actions";
// import { useLocation, useNavigate } from 'react-router-dom';

// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { TableContainer } from "@mui/material";
// import { green } from "@mui/material/colors";
// import { IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { ModeEdit, Sync } from "@mui/icons-material";
// import CheckIcon from '@mui/icons-material/Check';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import axios from "axios";

// function mapStateToProps(state){
//     return{
//         tasksList: state.contacts.tasksList,
//         indexTask:state.contacts.indexTask,
//     };
// }


// export default connect(mapStateToProps)(function Task(props){
//     const{tasksList, dispatch,indexTask}=props;
//     const location = useLocation();
//     const userId= location.state && location.state.userId;
//     const reftaskName = useRef(location.state.taskName);
//     const refdescription = useRef(location.state.description);
//   const taskName= location.state && location.state.taskName;
//     let taskId= location.state && location.state.taskId;
//    const description= location.state && location.state.description;
//     const completed= location.state && location.state.completed;
  
//    const newNavigate=useNavigate();
// const toShowTask=(()=>{
//    newNavigate('/Showtasks',{state:{idNumber:userId}});})
    
// //    const updateTaskInMongo=  async (p) =>{
// //     try{
// //         const reaspons = await axios.put(`http://localhost:5000/task/${taskId}`, p);
       
// //         if (reaspons.status == 200) {

// //            console.log("הצלחתי");
// //             // console.log(taskList);
// //         }


// //     }
// //     catch(error){console.log(error);}
// //    }
//    return(
//         <>
//          <Container component="main" maxWidth="xs">
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
    
//         <Box component="form" noValidate sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//             <Typography component="h1" variant="h5">
//             פרטי המשימה:
//         </Typography>
//             <Grid item xs={12} >
//                 <TextField
//                 required
//                 fullWidth
//                 id="title"        
//                 name="title"
//                 defaultValue={taskName}
//                 autoComplete="taskName"   
//                 inputRef={reftaskName}
//                 />
//             </Grid>
//             <Grid item xs={12}>
//                 <TextField
//                 required
//                 fullWidth
//                 id="description"
//                 defaultValue={description}
//                 name="description"
//                 autoComplete="description"
//                 multiline
//                     rows={4}
//                     inputRef={refdescription}
//                 />
//             </Grid>       
//             </Grid>
//             <Grid container spacing={2}>
//                  <Grid item xs={4}>
//                         <Button
//                           fullWidth
//                           variant="contained"
//                           sx={{ backgroundColor: "gray", height: "100%" }}
//                           onClick={() =>{ 
                            
//                             if((refdescription.current.value!=null&&reftaskName.current.value!=null))
                           
//                            {
//                             const params = { taskName: reftaskName.current.value, taskId: taskId, userId: userId, description: refdescription.current.value, completed: completed };
//                             // updateTaskInMongo(params)
//                             dispatch(saveChange(params))
//                         } 
//                           else{
//                             const params={taskName: taskName, taskId: taskId, userId: userId, description: description, completed: completed}
//                             // updateTaskInMongo(params)
//                             dispatch(saveChange(params))}}
//                         }
//                         >
//                           עדכן <IconButton    onClick={() =>{ 
//                             if((refdescription.current.value!=null&&reftaskName.current.value!=null))
                           
//                             {
//                              const params = { taskName: reftaskName.current.value, taskId: taskId, userId: userId, description: refdescription.current.value, completed: completed };
//                             //  updateTaskInMongo(params)
//                              dispatch(saveChange(params))
//                          } 
//                           else{
//                             const params={taskName: taskName, taskId: taskId, userId: userId, description: description, completed: completed}
//                             // updateTaskInMongo(params)
//                          dispatch(saveChange(params))}}}   aria-label="delete" ><CheckIcon />  </IconButton>
//                         </Button>
//                  </Grid>
//                  <Grid item xs={4}>
//                         <Button
//                           fullWidth
//                           variant="contained"
//                           sx={{ backgroundColor: "gray", height: "100%" }}
//                           onClick={() =>{ 
//                             if((refdescription.current.value!=null&&reftaskName.current.value!=null))
                           
//                             {
//                              const params = { taskName: reftaskName.current.value, taskId: taskId, userId: userId, description: refdescription.current.value, completed: completed };
//                             dispatch(deleteTask(params))
//                          } 
//                           else{
//                           dispatch(deleteTask({taskName: taskName, taskId: taskId, userId: userId, description: description, completed: completed}))}} } >  
                        
//                           מחק    <IconButton  onClick={() =>{ 
//                             if((refdescription.current.value!=null&&reftaskName.current.value!=null))
                           
//                             {
//                              const params = { taskName: reftaskName.current.value, taskId: taskId, userId: userId, description: refdescription.current.value, completed: completed };
//                             dispatch(deleteTask(params))
//                          } 
//                           else
//                           dispatch(deleteTask({taskName: taskName, taskId: taskId, userId: userId, description: description, completed: completed}))}}   aria-label="delete" ><CheckIcon />  </IconButton> 
//                            </Button>
//                  </Grid>
//                  <Grid item xs={4}>
//                       <Button
//                           fullWidth
//                           variant="contained"
//                           sx={{ backgroundColor: "gray", height: "100%" }}
//                           onClick={toShowTask}
//                         >
//                         חזור <IconButton onClick={toShowTask} aria-label="delete" ><ArrowForwardIosIcon />  </IconButton>
//                         </Button>
//                  </Grid>
//                      </Grid>
//         </Box>
//         </Box>
//     </Container>
//         </>
//     )
// })

import React,{useEffect} from "react";
import {useRef} from "react";
import {connect} from "react-redux";
import {deleteTask, saveChange } from "../redux/actions";
import { useLocation, useNavigate } from 'react-router-dom';

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
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ModeEdit } from "@mui/icons-material";
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import axios from "axios";

function mapStateToProps(state){
    return{
        tasksList: state.contacts.tasksList,
    };
}


export default connect(mapStateToProps)(function Task(props){
    const{tasksList, dispatch}=props;
    const location = useLocation();
    const reftaskName = useRef(location.state.taskName);
    // const taskId = useRef(location.state.taskId);
    // const userId = useRef(location.state.userId);
    const refdescription = useRef(location.state.description);
    //const completed = useRef(location.state.completed);
  const taskName= location.state && location.state.taskName;
    const taskId= location.state && location.state.taskId;
   const userId= location.state && location.state.userId;
   const description= location.state && location.state.description;
    const completed= location.state && location.state.completed;
   console.log(userId);
   const newNavigate=useNavigate();
const toShowTask=(()=>{
   newNavigate('/Showtasks',{state:userId});})
   const del = async () =>{
    try{
        const reaspons = await axios.delete(`http://localhost:5000/task/${taskId}`);
        if (reaspons.status == 200){
            alert("its remoove succsesfully...")
            dispatch(deleteTask({taskId:taskId}));
        }
    }
    catch(error){}
   }

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
    
        <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Typography component="h1" variant="h5">
            פרטי המשימה:
        </Typography>
            <Grid item xs={12} >
                <TextField
                required
                fullWidth
                id="title"        
                name="title"
                defaultValue={taskName}
                autoComplete="taskName"   
                inputRef={reftaskName}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="description"
                defaultValue={description}
                name="description"
                autoComplete="description"
                multiline
                    rows={4}
                    inputRef={refdescription}
                />
            </Grid>       
            </Grid>
            <Grid container spacing={2}>
                 <Grid item xs={4}>
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{ backgroundColor: "gray", height: "100%" }}
                          onClick={() =>{ 
                            
                            if((refdescription.current.value!=null&&reftaskName.current.value!=null))
                           
                           {
                            const params = { taskName: reftaskName.current.value, taskId: taskId, userId: userId, description: refdescription.current.value, completed: completed };
                           dispatch(saveChange(params))
                        } 
                          else
                          dispatch(saveChange({taskName: taskName, taskId: taskId, userId: userId, description: description, completed: completed}))}}
                          
                        >
                          עדכן <IconButton    onClick={() =>{ 
                            if((refdescription.current.value!=null&&reftaskName.current.value!=null))
                           
                            {
                             const params = { taskName: reftaskName.current.value, taskId: taskId, userId: userId, description: refdescription.current.value, completed: completed };
                            dispatch(saveChange(params))
                         } 
                          else
                          dispatch(saveChange({taskName: taskName, taskId: taskId, userId: userId, description: description, completed: completed}))}}   aria-label="delete" ><CheckIcon />  </IconButton>
                        </Button>
                 </Grid>
                 <Grid item xs={4}>
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{ backgroundColor: "gray", height: "100%" }}
                        
                        >
                          מחק    <IconButton onClick={del}  aria-label="delete" ><DeleteIcon />  </IconButton>
                        </Button>
                 </Grid>
                 <Grid item xs={4}>
                      <Button
                          fullWidth
                          variant="contained"
                          sx={{ backgroundColor: "gray", height: "100%" }}
                          onClick={toShowTask}
                        >
                        חזור <IconButton onClick={toShowTask} aria-label="delete" ><ArrowForwardIosIcon />  </IconButton>
                        </Button>
                 </Grid>
                     </Grid>
        </Box>
        </Box>
    </Container>
        </>
    )
})