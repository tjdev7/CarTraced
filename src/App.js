import "./App.css";
//import * as mobilenet from "@tensorflow-models/mobilenet";


// Build models
//const modelLoading = initialize models - load models

//const imgUpload = upload 400wth x 500hght preview of picture

// const dataParameters 


// const dataReset = turn all variables into 0
// picture gets removed
// classifiers return to 0

function App() {

  return (
    <div className="container">
      <header>
              <h1>CarTraced</h1>
            <h2>Classify car models and details using tensorflow</h2>
      </header>
      <article className="imageSection leftbox">

 <br/>
 <button>Load models</button><br/>
        <button>
        Picture upload<br/>
        <input
          type="file"
          accept="image/*"
          capture="camera"
          // onChange={imgUpload}
        />
        </button>
        <br/>
        <br/>

        <img id="test" src="test" alt="test"
      />
</article>
<article className="dataSection rightbox">
        <p>Make:</p>
        <p>Model:</p>
        <p>Car Type:</p>
        <p>Color:</p>
        <button onClick="">
          <p>Try another car/Reset</p>
        </button>
      </article>



    </div>
  );
}

export default App;
