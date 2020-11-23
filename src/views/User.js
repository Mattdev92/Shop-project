import React from 'react';
import { withRouter } from 'react-router';
import withContext from 'hoc/withContext';
import UserSection from 'templates/UserSection/UserSection';
import {connect} from 'react-redux';
import {YourCartClicked} from 'actions';
import PropTypes from 'prop-types';
class User extends React.Component{
  componentDidUpdate(prevProps) {
    if (this.props.cartIconAnim !== prevProps.cartIconAnim) {
      return (setTimeout(()=>this.props.YourCartClicked(),900)
        );
    }
  }
  render(){
    const{ location: { pathname } }=this.props;
    return(
      <UserSection pathname={pathname}/>
    )
  }
}
const mapStateToProps = (state)=>{
 const{cartIconAnim}=state;
  return(
    {cartIconAnim}
  )}
const mapDispatchToProps = (dispatch) => ({
    YourCartClicked: () =>
    dispatch(YourCartClicked()),
});
export default connect(mapStateToProps,mapDispatchToProps)(withContext(withRouter(User)));
User.propTypes={
  loaction: PropTypes.object
}