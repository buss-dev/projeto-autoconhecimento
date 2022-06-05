import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/home/Header'
import Quiz from './components/quiz/Quiz'
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <div className='d-flex justify-content-center'>
      <div className='d-flex justify-content-center bgMonica sizeQuizMonica'>
        <Quiz />
      </div>
    </div>
  </React.StrictMode>
);