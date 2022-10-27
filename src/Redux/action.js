// Write the action object creators in this file

export const Request = () =>  {
    return {
        type: {
            GET_PROFILE_DETAILS_REQUEST
        }
    }
}

export const Failure = () => {
 return {
    type : {
        GET_PROFILE_DETAILS_FAILURE
    }
 }   
}

export const Success = (payload) => {
    return {
        type: {GET_PROFILE_DETAILS_SUCCESS}
    }, payload
}