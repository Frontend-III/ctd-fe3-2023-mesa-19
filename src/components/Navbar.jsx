import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {
    /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    COnsejo: Descomentar este bloque de código, cuando "App.jsx" ya tenga un proveedor
    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language
    
    */
    return (
        <div className="navbar">
            {/* CONSEJO: Renderizar la información traida del contexto de forma dinamica */}
            <p>Início</p> 
            <p>Idioma atual: PTBR</p>
            <button>Alterar idioma</button>
        </div>
    )
}

export default Navbar