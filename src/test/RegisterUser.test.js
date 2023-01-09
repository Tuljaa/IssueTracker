import { mount } from 'enzyme';
import React from 'react';
import RegisterUser from '../components/RegisterUser';
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

 const mockStore = configureStore([])
 const historyMock = { push: jest.fn()};
 
 let wrapper;
 let store;

  beforeEach( () => {
    store = mockStore(state)  
     wrapper = mount(
      <Router>
     <Provider store={store}>
       <RegisterUser history={historyMock}/>
     </Provider> </Router>
  ); 
    
  } )
  it('should render HomePage', () => {
      let dv = wrapper.find('ToastContainer')
      expect(dv.length).toEqual(1);
  });
  it ('should render correct heading name' , () => {
    expect(wrapper.find('h1').text()).toContain('Register');
  });
  it('Should render Bread component',()=>{
    expect(wrapper.find('Formik')).toBeTruthy()
  })
  it('Should render Bread component',()=>{
    expect(wrapper.find('label').length).toEqual(6)
  })
 
}
)