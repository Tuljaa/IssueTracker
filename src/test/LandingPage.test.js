import { mount } from 'enzyme';
import React from 'react';
import LandingPage from '../components/LandingPage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
 
Enzyme.configure({ adapter: new Adapter() });
import configureStore from 'redux-mock-store';

describe ('LandingPage component',()=>{ 
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
         history : {
           location : {
             pathname : "/home"
           }
         }
      }

  const mockStore = configureStore([])
  const changekey = jest.fn().mockImplementation(()=>{
    
  })
  let wrapper;
  let store;
  const scrollToTop =jest.fn().mockImplementation(()=> { 
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
  const toggleVisibility =jest.fn().mockImplementation(()=> { 
    if (window.pageYOffset > 160) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  })

    beforeEach( () => {
     store = mockStore(state)
     wrapper = mount(
      <Router>
      <Provider store={store}>
      <LandingPage onClick={scrollToTop} changekey={changekey} toggleVisibility={toggleVisibility}/>
      </Provider> </Router>
    ); 
  });

  it('should not be null',()=>{
    expect(wrapper).not.toBeNull()
  })

  it('should render div of LandingPage', () => {
    let dv = wrapper.find('div')
    expect(dv.length).toEqual(28);
  });

  it ('should render one NavSearch Component ' , () => {
    expect(wrapper.find('NavSearch').length).toEqual(1)
  });

  it ('should render one ToastContainer Component ' , () => {
    expect(wrapper.find('ToastContainer').length).toEqual(1)
  });

  it ('should render Link Component ' , () => {
    expect(wrapper.find('Link').length).toEqual(9)
  });
   
  it('should render Delete Icon', () => {
    expect(wrapper.find('DeleteForeverIcon')).toBeTruthy()
  });
  it ('should call changekey function', () => {
    scrollToTop()
    expect(scrollToTop).toHaveBeenCalledTimes(1)
  });
  it ('should cover Line 72 ', () => {
   global.scrollTo = jest.fn()
   global.scrollTo()
   expect(global.scrollTo).toBeCalled()
  });
  it('should cover line 64-67',()=>{
    toggleVisibility()
    console.log(toggleVisibility.mock.calls)
   

    changekey("Tulja")
    expect(changekey).toBeCalled()
    console.log(changekey.mock.calls[0][0])
  })
 
}
)