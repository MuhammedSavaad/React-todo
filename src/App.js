import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <main>
      <Header />
      <Todo />
      <Footer />
    </main>
  );
}

export default App;
