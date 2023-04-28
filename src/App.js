
import './App.css';
import { HelloReactArrowFunction } from '../src/components/helloReact/HelloReactArrowFunction'
import  HelloReactNormalFunction  from '../src/components/helloReact/HelloReactNormalFunction'
import  {DataBindToView}  from '../src/components/viewData/DataBindToView'

function App() {
  return (
    <div className="App">
      {/* <HelloReactArrowFunction/>
      <HelloReactNormalFunction/> */}
      <DataBindToView/>
    </div>
  );
}

export default App;
