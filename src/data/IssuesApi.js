import axios from 'axios';

var data

export default class IssueApi {

    static async getIssueData(){
        data =  await axios.get(`http://localhost:3002/Issues`)
        .then(response => {
            return {
                data : response.data ,
            }
        } )
        .catch(error => {throw error});
       return data;
    }

    static async addIssue(issue){
        
        data = await axios.post(`http://localhost:3002/Issues`,issue)
        .then(response => {
            console.log(response.data);
            return {
              
                data : response.data ,
            }
        } )
        .catch(error => {throw error});
    }

    static async deleteIssue(index) {
        data= await axios.delete(`http://localhost:3002/Issues/${index}`)
        .then(response => {
               
                console.log(response.data);
        } )
        .catch(error => {throw error});
    }

    static async Visited(value) {
       data=await axios.put(`http://localhost:3002/Issues/${value.id}`, value)
       .catch(error => {throw error})
      // console.log(data)
    }
    static async UpdateIssue(index,issue) {
        data = await axios.put(`http://localhost:3002/Issues/${index}`,issue)
        .then(response => {
            console.log(response.data);
    } )
    .catch(error => {throw error});
    }
}