import React from 'react';
import context from 'context';
import PropTypes from 'prop-types';
const withContext = (Component)=>{
    return function contextComponent(props){
        return(
            <context.Consumer>
             {
                (context)=>(
                   <Component {...props}context={context}/>
                )
             }   
            </context.Consumer> 
        )
    }
}
export default withContext;
withContext.propTypes={
    Component: PropTypes.element,
}