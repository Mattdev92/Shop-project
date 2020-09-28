import React from 'react';
import { withRouter } from 'react-router';
import withContext from 'hoc/withContext';
import UserTemplate from 'templates/UserTemplate/UserTemplate';
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
      <UserTemplate pathname={pathname}/>
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