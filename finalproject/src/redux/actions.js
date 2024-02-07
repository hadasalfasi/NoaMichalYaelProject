export function addcontact(newClass){
    return {type:'ADD_CONTACT', payLoad: newClass}
}

export function tosignin(newClass){
    return {type:'TO_SIGNIN', payLoad: newClass}
}

export function saveChange(newClass){
    return {type:'SAVE_CHANGE', payLoad: newClass}
}

export function deleteTask(newClass){
    return{type:'DELETE_TASK',payLoad:newClass}
}

export function getUserList(newClass){
    return{type:'GET_USER_LIST',payLoad:newClass}
}


export function getTaskList(newClass){
    return{type:'GET_TASK_LIST',payLoad:newClass}
}
