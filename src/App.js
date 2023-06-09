
import './App.css';
import { HelloReactArrowFunction } from '../src/components/helloReact/HelloReactArrowFunction'
import  HelloReactNormalFunction  from '../src/components/helloReact/HelloReactNormalFunction'
import  { DataBindToView }  from '../src/components/viewData/DataBindToView'
import   DataBindObject   from '../src/components/viewData/DataBindObject'
import   DataViewList   from '../src/components/viewData/DataViewList'
import   UserDetails   from '../src/components/props/UserDetails'
import   UseStateTask   from '../src/components/useState/UseStateTask'
import   ButtonBar   from '../src/components/props-event/ButtonBar'
import   {UseEffectTask}   from '../src/components/useEffect/UseEffectTask'
import   {UseRefTask}   from '../src/components/useRef/UseRefTask'

function App() {
  return (
    <div className="App">
      {/* <HelloReactArrowFunction/>
      <HelloReactNormalFunction/> */}
      {/* <DataBindToView/> */}
      {/* <DataBindObject/> */}
      {/* <DataViewList/> */}
      {/* <UserDetails/> */}
      {/* <UseStateTask/> */}
      {/* <UseEffectTask/> */}
      <UseRefTask/>
      {/* <ButtonBar/> */}
    </div>
  );
}

export default App;
