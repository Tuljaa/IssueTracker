import {  mount } from 'enzyme';
import React from 'react';
import AddIssue from '../components/AddIssue';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });
import configureStore from 'redux-mock-store';

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
      const onSubmit=jest.fn().mockImplementation( (values)=> {
          
      })

     wrapper = mount(
      <Router>
     <Provider store={store}>
       <AddIssue history={historyMock} location={location} onSubmit={onSubmit}/>
     </Provider> </Router>
   ); 
    
    } );

    afterEach(() => { // Runs before each test in the suite
        store.clearActions();
      });

    it('should not be null',()=>{
    expect(wrapper).not.toBeNull()
  })
   
    it ('should render one NavSearch Component ' , () => {
      expect(wrapper.find('NavSearch').length).toEqual(1)
    });
    it('should render HomePage', () => {
      let dv = wrapper.find('div')
      expect(dv.length).toEqual(25);
  });
  it('should render Form element', ()=> {
      expect(wrapper.find('Form')).toBeTruthy()
  });
  it('Should render Bread component',()=>{
    expect(wrapper.find('Bread')).toBeTruthy()
  })
  it('Should render Bread component',()=>{
    expect(wrapper.find('Formik')).toBeTruthy()
  })
 
}
)