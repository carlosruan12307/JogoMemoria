import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Tabuleiro from './components/Tabuleiro';
import Placar from './components/Placar';
import i1 from './assets/imagem1.jpg'
import i2 from './assets/imagem2.jpg'
import i3 from './assets/imagem3.jpg'
import i4 from './assets/imagem4.jpg'
import i5 from './assets/imagem5.jpg'
import i6 from './assets/imagem6.jpg'
import { useEffect } from 'react';
import { queryAllByAltText } from '@testing-library/react';
function App() {
  useEffect(()=>{
    window.localStorage.clear()
    window.localStorage.setItem('rodadas',0)
    window.localStorage.setItem('placar',0)
  })
  const reset = () => {
    window.localStorage.clear()
    document.querySelectorAll('.active .match').forEach((e) =>{
      e.classList.remove('active')
      e.classList.remove('match')
    })
  }
  const imagens = [
    {url: i1, id: 'primeira'},
    {url: i2, id: 'segunda'},
    {url: i3, id: 'terceira'},
    {url: i4, id: 'quarta'},
    {url: i5, id: 'quinta'},
    {url: i6, id: 'sexta'}
    
]


const random = () => {
    return (Math.round(Math.random())-0.5);

   
}
const cloneImagens = [...imagens];

const imagensTabuleiro = imagens.concat(cloneImagens).sort(random);


  return (
  <Router>
    <Routes>
      <Route path='/' element={<><Placar/><Tabuleiro imagensTabuleiro={imagensTabuleiro}/></>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
