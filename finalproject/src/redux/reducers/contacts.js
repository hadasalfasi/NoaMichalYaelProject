import produce from 'immer';
import axios from "axios";

const initialState={
    contactsList:[
       
    ],
    tasksList:[
       ],
   indexTask:3,
};

export default produce((state, action) => {

const addT=async()=>{
  console.log(" החל מבדיקה הזאת אין לי יורת מה לבדוק");
  try{
    const reaspons = await axios.post('http://localhost:5000/task',action.payLoad)
    if(reaspons.status==200){
      console.log("הצלחתי לעזאזל");
    }

  }catch(error){}
}
const addU=async()=>{
  console.log(" 2החל מבדיקה הזאת אין לי יורת מה לבדוק");
  try{
    const reaspons = await axios.post('http://localhost:5000/users',action.payLoad)
    if(reaspons.status==200){
      console.log("2הצלחתי לעזאזל");
    }

  }catch(error){}
}
const updateT=async()=>{
  console.log("3החל מבדיקה הזאת אין לי יורת מה לבדוק");
  console.log(action.payLoad.taskId);
  console.log(action.payLoad);
  try{
    
    const reaspons = await axios.put(`http://localhost:5000/task`,action.payLoad);
    if(reaspons.status==200){
      console.log("3הצלחתי לעזאזל");
    }

  }catch(error){}
}


    switch (action.type) {
      case 'TO_SIGNIN':
        state.contactsList.push(action.payLoad);
        addU();
        break;
      case 'SAVE_CHANGE': {
        console.log("completed: "+ action.payLoad.completed);
        const indexToRemove = state.tasksList.findIndex(x => x.taskId == action.payLoad.taskId);
        console.log(indexToRemove);
                if (indexToRemove !== -1) {
                    updateT();
                    state.tasksList[indexToRemove] = action.payLoad;
                  }
                  else{
                    action.payLoad.taskId= state.indexTask++;
                    addT();
                    state.tasksList.push(action.payLoad);       
                  }
        break;
      }
      case 'DELETE_TASK':
        console.log(action.payLoad.taskId);
        const indexToRemove = state.tasksList.findIndex(x => x.taskId == action.payLoad.taskId);
        if (indexToRemove !== -1) {
            state.tasksList.splice(indexToRemove,1);
          }
      break;

      case 'GET_USER_LIST':
            {
                 state.contactsList = action.payload }
            break;
        case 'GET_TASK_LIST':
            {
                state.tasksList=action.payLoad
            }
            break;
      default:
        break;
    }
  }, initialState);

