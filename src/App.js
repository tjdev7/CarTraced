import './App.css';
import React from 'react';
import { useState } from "react";
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'

// function imgUpload() {
//   alert('random name set');
// }

class App extends React.Component {
  state = {
    isTfReady: false,
    isModelReady: false,
    classification: null,
    image: null
  }

  async componentDidMount() {
    await tf.ready()
    this.setState({
      isTfReady: true
    })

    this.model = await mobilenet.load()
    this.setState({ isModelReady: true })
  }


// const img = document.getElementById('img');

// const model = async() => {
//   await mobilenet.load();
// }

// const predictions = async() => {
//  await model.classify(img);
// }
//const predictions = "test";
// console.log(predictions);
// console.log('Predictions: ');


// const [imgloc, setimgloc] = useState(null);

// const imgUpload = event => { 
//   const { files } = event.target;

  
// }

render() {
  // const {classification, isTfReady, isModelReady, image} = this.state;
  return (
    <div className="container">
      <header>
              <h1>CarTraced</h1>
            <h2>Classify car models and details using tensorflow</h2>
      </header>
      <br/>
 <article className="imageSection leftbox">


        <button>
            <input
            type="file"
            accept="image/*"
            capture="camera"
            // onChange={imgUpload}
          />
        </button>

        <p>{this.state.isTfReady ? <span>TFJS ready</span> : ''} & {this.state.isModelReady ? <span> TSmodels Ready</span> : <span>loading...</span>}</p>

        <p>Make:</p>
        <p>Model:</p>
        <p>Car Type:</p>
        <p>Color:</p>
        {/* <p>{predictions}</p> */}

      </article>

        <article className="imageSection rightbox">
          <img
              // src={picSrc}
            />
        </article>


    </div>
  )
}
}

export default App
