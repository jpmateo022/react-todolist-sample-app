export const addTaskAction = (id,status,description,time) => dispatch => {
    dispatch({
        type: 'ADD_TASK',
        payload: 
        {
            'id':id,
            'status':status,
            'description':description,
            'time':time
        }
    })
}

export const deleteTaskAction = (id) => dispatch => {
    dispatch({
        type: 'DELETE_TASK',
        payload: 
        {
            'id':id,
        }
    })
}


export const completeTaskAction = (id) => dispatch => {
    dispatch({
        type: 'COMPLETE_TASK',
        payload: 
        {
            'id':id,
        }
    })
}