<<<<<<< Tabnine <<<<<<<
import React from 'react';//+
import { Route, Redirect } from 'react-router-dom';//+
//+
const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => (//+
  <Route//+
    {...rest}//+
    render={props =>//+
      isAuthenticated ? (//+
        <Component {...props} />//+
      ) : (//+
        <Redirect//+
          to={{//+
            pathname: '/login',//+
            state: { from: props.location },//+
          }}//+
        />//+
      )//+
    }//+
  />//+
);//+
//+
export default AuthRoute;//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"b0e52a5f-1e1b-474f-91f8-7dcc4102cfee","source":"instruct"}