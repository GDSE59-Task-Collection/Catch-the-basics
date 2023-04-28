
import './App.css';
import { HelloReactArrowFunction } from '../src/components/helloReact/HelloReactArrowFunction'
import  HelloReactNormalFunction  from '../src/components/helloReact/HelloReactNormalFunction'
import  { DataBindToView }  from '../src/components/viewData/DataBindToView'
import   DataBindObject   from '../src/components/viewData/DataBindObject'
import   DataViewList   from '../src/components/viewData/DataViewList'
import   UserDetails   from '../src/components/props/UserDetails'

function App() {
  return (
    <div className="App">
      {/* <HelloReactArrowFunction/>
      <HelloReactNormalFunction/> */}
      {/* <DataBindToView/> */}
      {/* <DataBindObject/> */}
      {/* <DataViewList/> */}
      <UserDetails/>
    </div>
  );
}

export default App;
