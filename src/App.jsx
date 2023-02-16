import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    setLanguage(() => {
      //SUGERENCIA: Función que cambia de un idioma a otro (haciendo clic en el botón)
    })
  }

  return (
    <div className="App">
      <>{/* SUGERENCIA: Agregue el Provider de LanguageContext */}
        <Navbar />
        <Body />
      </>
    </div>
  )
}

export default App