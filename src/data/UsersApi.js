import axios from 'axios';

let userStatus = { authStatus: 'false' }
export let userDetails= {}


export default class UserApi {

    static async checkUser(logindetails){

      let data =  await axios.get('http://localhost:3002/Users')
       .then ( (response) => {
            (response.data).filter( (value,index) => {
                //console.log(logindetails.emailId,value.emailId,value.pwd,logindetails.pwd)
                if (logindetails.emailId===value.emailId && logindetails.pwd=== value.pwd){
                    userDetails={...value}
                    userStatus={authStatus: true}
                }
                console.log(userDetails)
                return userStatus
            }) 
        })
        .catch(error => {throw error});       
        return userStatus;
    }

    static getUserDetails(){
      //  console.log(userDetails)
        return userDetails
    }
   
    static async registerUser(details){
        
        let regStatus = true,
    
        data =  await axios.get('http://localhost:3002/Users')
        .then ( (response) => {
            (response.data).filter( (value,index) => {
               
                if (details.emailId === value.emailId){
                 regStatus = false
                }
                return regStatus
            }) 
        })
        .catch(error => {throw error});  

        if(regStatus===true){
           await axios.post(`http://localhost:3002/Users`,details)
           .catch(error => { throw error})
        }

        console.log(regStatus)
        return regStatus
    }
}