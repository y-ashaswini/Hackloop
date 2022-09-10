import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Projects from './Components/Projects';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/Projects" exact element = {<Projects/>}></Route>
      </Routes>
    </div>
  );
}
