import * as ActionTypes from '../constants/ActionTypes'

let UserData ={}

export default function UserReducer (state = UserData , action) {

   // console.log(action.type)

    switch (action.type) {
        case ActionTypes.USER_DATA :{
            let Udata = action.payload
            UserData={...state,Udata}
            console.log(UserData)
                return UserData
        }
          default : 
          return UserData
           
    }

}