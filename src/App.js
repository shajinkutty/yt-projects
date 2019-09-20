import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MenuLinks from './components/MenuLinks';
import PaginationApp from './components/projects/Pagination/PaginationApp';
import DragDropApp from './components/projects/DragAndDrop/DragDropApp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={MenuLinks}></Route>
        <Route exact path="/pagination" component={PaginationApp}></Route>
        <Route exact path="/draganddrop" component={DragDropApp}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
