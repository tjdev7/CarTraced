import './App.css';
import React from 'react';
// import red from './red.jpeg';
// import { useState } from "react";
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'

class imgTraceModel extends React.Component {
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

// const classifierCateg = async() => {
//  await model.classify(img);
// }
//const classifierCateg = "test";
// console.log(classifierCateg);
// console.log('classifierCateg: ');

// const [imgloc, setimgloc] = useState(null);
// const imgUpload = event => { 
//   const { files } = event.target;
// }
render() {
  return (
    <div className="container">
      <header>
            <h1>CarTraced</h1>
            <h2>Classify car models and details using tensorflow</h2>
      </header>
      <br/>
 <article className="dataSection ">
 <aside>
 <button>Models loaded </button>
        <button>
            <input
            type="file"
            accept="image/*"
            capture="camera"
            // onChange={imgUpload}
          />
        </button>
        <button>Make:  </button>
        <button>Model: </button>
        <button>Car Type: </button>
        <button>Color: </button>
        
</aside>
        {/* <img
              src={picupload}
            /> */}
            <aside>
                    {/* <img
              src={red}
            /> */}
            </aside>
        {/* <p>{Classifier category: Make:}</p> */}
        {/* <p>{Classifier category: Model:}</p> */}
        {/* <p>{Classifier category: CarType:}</p> */}
        {/* <p>{Classifier category: Color}</p> */}

        </article>

      </div>
      )
    }
}

export default imgTraceModel
