import "./App.css";
//import * as mobilenet from "@tensorflow-models/mobilenet";


// Build models
//const modelLoading

//const imgUpload

// const dataParameters 


function App() {

  return (
    <div className="container">
      <header>
              <h1>CarTraced</h1>
            <h2>Classify car models and details using tensorflow</h2>
      </header>
      <article className="imageSection leftbox">
      <img id="test" src="test" 
      />
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
</article>
<article className="dataSection rightbox">
        <p>Make:</p>
        <p>Model:</p>
        <p>Car Type:</p>
        <p>Color:</p>
        <button>
          <p>Try another car/Reset</p>
        </button>
      </article>



    </div>
  );
}

export default App;
