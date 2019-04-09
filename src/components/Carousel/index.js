import React, { Component } from 'react';
import './styles.scss';
import arrow from './assets/arrow.svg';
import ReactResizeDetector from 'react-resize-detector';
import classNames from 'classnames';
import { Swipeable } from 'react-swipeable'


// class component
class Carousel extends Component {

  constructor(props){
    super(props);
    this.state = {
      index: 0,
      height: 0,
      goingForward: true,
      paused: false
    }
    this.onResize = this.onResize.bind(this);
    this.nextProperty = this.nextProperty.bind(this);
    this.prevProperty = this.prevProperty.bind(this);
  }
  nextProperty = () => {
    const { elements } = this.props;
    const nextDisabled = this.state.index === elements.length -1;
    if (nextDisabled) {
      return;
    }
    const newIndex = this.state.index+1;
    
    this.setState({
      index: newIndex
    })
  }

  prevProperty = () => {
    const { index } = this.state;
    const prevDisabled = index === 0;
    if (prevDisabled) {
      return;
    }
    const newIndex = index-1;
    this.setState({
      index: newIndex
    })
  }
  onResize = (width,height) => {
    
    this.setState({
      height
    })
  }
  componentDidMount() {
    const {autoPlay, speed = 2000} = this.props;
    if (autoPlay) {
      const intervalId = setInterval(() => this.updateIndex(), speed);
      this.setState({ intervalId })
    }
  }
  
  componentWillUnmount() {
    const {autoPlay} = this.props;
    // Make sure to clear the interval, on unmount
    if (autoPlay) {
      clearInterval(this.state.intervalId);
    }
  }
  
  updateIndex(){
    
    const {elements} = this.props;
    const {index, goingForward, paused} = this.state;
    if (!paused) {    
      let newIndex = index;
      let newGoingForward = null;
      if (goingForward) {
        newGoingForward = true;
        newIndex = index + 1;
        if (index === elements.length - 1) {
          newGoingForward = false;
          newIndex = index- 1;
        }
      }
      if (!goingForward) {
        newGoingForward = false;
        newIndex = index - 1;
        if (index === 0) {
          newGoingForward = true;
          newIndex = index+ 1;
        }
      }
      this.setState({
        index: newIndex,
        goingForward: newGoingForward
      });
    }
  }

  render() {
    const {index, height} = this.state;
    const {elements} = this.props;
    
    const nextDisabled = index === elements.length -1;
    const prevDisabled = index === 0;
    const { Card } = this.props;
    return (
        <div className="col" onMouseOver={() => this.setState({paused: true})} onMouseOut={() => this.setState({paused: false})}>

            <div className={`cards-slider active-slide-${index}`} style={{height: `${height}px`}}>
                <Swipeable onSwipedLeft={this.nextProperty} onSwipedRight={this.prevProperty}>
                <div className="cards-slider-wrapper" style={{
                    'transform': `translateX(-${index*(100/elements.length)}%)`
                }}>
                    <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
                    {
                    elements.map((element, i) => <Card key={element.id} element={element} active={i === index} onResize={this.onResize} />)
                    }
                </div>
                </Swipeable>
                <button
                className={classNames('next', {disabled: nextDisabled})}
                onClick={() => this.nextProperty()} 
                disabled={index === elements.length-1}>
                <img src={arrow} alt="next"/>
                Next
                </button>
                <button
                className={classNames('prev', {disabled: prevDisabled})}
                onClick={() => this.prevProperty()} 
                disabled={index === 0}>
                <img src={arrow} alt="prev"/>
                Prev
                </button>
            </div>
        </div>
    );
  }
}

export default Carousel;
