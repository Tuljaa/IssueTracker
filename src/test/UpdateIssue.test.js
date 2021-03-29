import { mount } from 'enzyme';
import React from 'react';
import UpdateIssue from '../components/UpdateIssue';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });
import configureStore from 'redux-mock-store';

describe ( 'RegisterUser Component', () => {
    const state = { Reducer :{ 
        IData : [ 
      {"issuedesc": "The Heading add is wrongly displayed as Edit BY TULJA adding resolved and created date as well",
        "severity": "Major",
        "status": "Closed",
        "created": "2021-02-02",
        "resolved": "2021-03-09",
        "id": 1,
        "visited": 3 }        ] ,
        auth: true , 
       },
        UserReducer: { 
         Udata : 
           {
             "emailId": "sndp@p.com",
             "pwd": "sndp",
             "fname": "sndp",
             "lname": "ks",
             "location": "Visakhapatnam",
             "number": 7382766906,
             "id": 2
           }   
        },
        
     }

     const location = {
        state : {
          updateIssue :{
            "issuedesc": "The Heading add is wrongly displayed as Edit BY TULJA adding resolved and created date as well",
            "severity": "Major",
            "status": "Closed",
            "created": "2021-02-02",
            "resolved": "2021-03-09",
            "id": 1,
            "visited": 3
          }
        }
      } 

 const mockStore = configureStore([])
 const historyMock = { push: jest.fn() , location : {pathname : '/update'}};
 
 let wrapper;
 let store;

    beforeEach( () => {
      store = mockStore(state)
      
     wrapper = mount(
      <Router>
     <Provider store={store}>
       <UpdateIssue history={historyMock} location={location}/>
     </Provider> </Router>
   ); 
    
    } );
   
    it('should render NavSeacrch Component', () => {
      let dv = wrapper.find('NavSearch')
      expect(dv.length).toEqual(1);
  });
  it('should render Form Component ', () => {
    let dv = wrapper.find('Form')
    expect(dv.length).toEqual(1);
});
it ('should render correct Heading name' , () => {
  expect(wrapper.find('h1').text()).toContain('Update Issue ');
});
it('Should render Formik component',()=>{
  expect(wrapper.find('Formik')).toBeTruthy()
})
  
it('Should render Confirmation component',()=>{
  expect(wrapper.find('Confirmation').length).toEqual(1)
})
}
)