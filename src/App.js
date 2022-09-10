import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Projects from './Components/Projects';
import Projects2019 from './Components/Projects2019';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/Projects" exact element = {<Projects/>}></Route>
        <Route path="/Projects/Projects2019" exact element = {<Projects2019/>}></Route>
      </Routes>
    </div>
  );
}
