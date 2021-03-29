import { mount } from 'enzyme';
import React from 'react';
import Login from '../components/Login';
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
        auth: false , 
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
 const historyMock = { push: jest.fn()};
 const onSubmitSpy = jest.fn();
 
 let wrapper;
 let store;

    beforeEach( () => {
      store = mockStore(state)
      
     wrapper = mount(
      <Router>
     <Provider store={store}>
       <Login history={historyMock} onSubmit={onSubmitSpy}/>
     </Provider> </Router>
   ); 
    
    } );
   
    it('should render HomePage', () => {
      let dv = wrapper.find('div')
      expect(dv.length).toEqual(5);
  });
  
  it ( 'should render Form', () => {
    let form = wrapper.find('Form')
    expect(form.length).toEqual(1); }
  )
  it('should render Container', () => {
    expect(wrapper.find('Container')).toBeTruthy()
});
it ('should render correct heading name' , () => {
  expect(wrapper.find('h1').text()).toContain('Sign In');
});
}
)