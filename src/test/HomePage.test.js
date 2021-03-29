import { shallow , mount } from 'enzyme';
import React from 'react';
import HomePage from '../components/HomePage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';

describe ( 'Home Page Component', () => {
    const state = { Reducer :{ 
        IData : [ 
      {"issuedesc": "The Heading add is wrongly displayed as Edit BY TULJA adding resolved and created date as well",
        "severity": "Major",
        "status": "Closed",
        "created": "2021-02-02",
        "resolved": "2021-03-09",
        "id": 1,
        "visited": 3 }        ] ,
        auth:true , 
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

 const mockStore = configureStore([])
 const historyMock = { push: jest.fn(), location : {pathname : '/login'} };
 const location = {
  state : {
    selectedIssue :{
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


 let wrapper;
 let store;

    beforeEach( () => {
      store = mockStore(state)
      
     wrapper = mount(
      <Router>
     <Provider store={store}>
       <HomePage history={historyMock} location={location}/>
     </Provider> </Router>
   ); 
    
    } );
   
    it ('should render one NavSearch Component ' , () => {
      expect(wrapper.find('NavSearch').length).toEqual(1)
    });
    it('should render HomePage', () => {
      let dv = wrapper.find('div')
      expect(dv.length).toEqual(26);
  });
  it('should render Pie graph', () => {
    let dv = wrapper.find('Pie')
    expect(dv.length).toEqual(1);
  });

}
)