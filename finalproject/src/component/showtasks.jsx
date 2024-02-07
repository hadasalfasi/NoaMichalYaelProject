import React, { useEffect } from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteTask,saveChange,getTaskList} from "../redux/actions";
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ModeEdit } from "@mui/icons-material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Container from '@mui/material/Container';
 
import axios from "axios";


// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';

function mapStateToProps(state) {
    return {
        tasksList: state.contacts.tasksList,
    };
}

export default connect(mapStateToProps)(function Showtasks(props) {
    useEffect(() => {
        getYourTask()
    }, [])

    let { tasksList } = props;
    const location = useLocation();
    const userId = location.state && location.state.idNumber;
    const newNavigate=useNavigate();
    const dispatch = useDispatch();

    const getYourTask = async () =>{
            try{
                const reaspons = await axios.get(`http://localhost:5000/task/${userId}`);
                if (reaspons.status == 200) {

                    dispatch(getTaskList(reaspons.data));
                    // console.log(taskList);
                }
            }
            catch(error){
                console.log(error);
            }

    }
    

    const toTask = (a) => {
      newNavigate('/Task', { state: a });}

      return (
        <>
        <Typography gutterBottom variant="h5" component="div">
         <Grid item xs={4}>
        הוספת משימה חדשה    <IconButton onClick={() => toTask({taskName:"",taskId:0,userId:userId,description:"",completed:false})} aria-label="delete" ><AddTaskIcon />  </IconButton>
      </Grid></Typography>
           
      {
  tasksList.length === 0 ? (
    <Typography gutterBottom variant="h5" component="div">
      לא נמצאו משימות זמינות, לאחר שתוסיף משימה היא תופיעה  כאן
    </Typography>
  ) : (
    <>
      {tasksList.map((task, index) => (

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          <Card sx={{ mr: 10, maxWidth: 270 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                שם המשימה: {task.taskName}
              </Typography>
                     
                        {/* <Checkbox  onClick={()=>{ dispatch(saveChange({taskName: task.taskName, taskId:  task.taskId, userId:  task.userId, description:  task.description, completed:  !task.completed}))}} color="default"/>  */}
                        {/* <IconButton onClick={()=>{dispatch(deleteTask(task))}} aria-label="delete" ><DeleteIcon />  </IconButton> */}
                        <IconButton onClick={() => toTask(task)} aria-label="delete">   <ModeEdit  /></IconButton>
                        <IconButton aria-label="delete"></IconButton>
                    </CardContent>
                  </Card>
                  </Box>
                       ))}
        
        {/* <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
        
         */}
        
        
        
        </>
  

  )
}</>)})
