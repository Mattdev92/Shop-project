import React from 'react';
import { BallSpinLoader } from 'react-pure-loaders';
class AwesomeComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      }
    }
    render() {
      return (
          <BallSpinLoader
            color={'#123abc'}
            loading={this.state.loading}
          />
      )
    }
  }
  export default AwesomeComponent;