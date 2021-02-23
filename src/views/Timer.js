import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Footer from 'components/organisms/footer/footer';
import { Wrapper, Content } from 'views/Timer-styles';

class Timer extends React.Component {
  state = {
    startValue: 0,
    delay: 1000,
    start: true,
  };
  handleStart = () => {
    this.intervalll = setInterval(this.handleCount, this.state.delay);
    this.setState({
      start: false,
    });
  };
  handleCount = () => {
    this.setState({
      startValue: this.state.startValue + 1,
    });
  };

  handleStop = () => {
    clearInterval(this.intervalll);
    this.setState({
      start: true,
    });
  };
  handleReset = () => {
    this.setState({
      startValue: 0,
    });
  };
  render() {
    const { handleStart, handleStop, handleReset } = this;
    const { startValue } = this.state;
    return (
      <>
        <MainTemplate>
          <Wrapper>
            Stoper
            {this.state.start && <button onClick={handleStart}>start</button>}
            <button onClick={handleStop}>stop</button>
            <button onClick={handleReset}>reset</button>
            <h1>{startValue}</h1>
          </Wrapper>
        </MainTemplate>
        <Content />
        <Footer />
      </>
    );
  }
}

export default Timer;
