import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Listarticle from './components/Listarticle';
import Createarticle from './components/Createarticle';
import Editarticle from './components/Editarticle';
import Detailarticle from './components/Detailarticle';
import { GlobalContextProvider } from './context/GlobalState';
function App() {
  return (
    <div className="App">
     <header className="text-center"><h5>React CRUD with Hooks and Context API</h5></header>
       <Routes>
        <Route path="/" element={<Listarticle/>} exact/>
        <Route path="/create" element={<Createarticle/>} exact/>
        <Route path="/edit/:id" element={<Editarticle/>} exact/>
        <Route path="/detail/:id" element={<Detailarticle/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
