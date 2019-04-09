import React, { Component } from 'react';
import './App.scss';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Carousel from './components/Carousel'
import { getData } from './request/getData';

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      elements:[]
    }
  }

  async componentDidMount(){
    try {
      const response = await getData()
      let res = await response.json()

      this.setState({
        elements: res.hits
      })
    } catch (error) {
      console.error(error)
    }
  }


  render() {
    const {elements} = this.state;
    
    return (
      <div className="App">
        <div className="page">
            <section>
              <h2>Swipeable Responsive Image Carousel</h2>
            </section>
            {
              elements.length &&
              <Carousel Card={Card1} elements={elements} ></Carousel>
            }

            <section>
              <h2>Configurable autoPlay & speed Parameter</h2>
            </section>
            {
              elements.length &&
              <Carousel Card={Card1} elements={elements} autoPlay speed={2000} ></Carousel>
            }

            <section>
              <h2>Different Cards Can Be Used</h2>
            </section>
            {
              elements.length &&
              <Carousel Card={Card2} elements={elements} ></Carousel>
            }

        </div>
      </div>
    );
  }
}

export default App;
