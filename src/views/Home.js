import React from 'react'
import Logo from '../components/Logo'
import SearchInput from '../components/SearchInput'

export default function Home() {
    return (
        <div className="Home">
            <h1>Recetario React Interactivo</h1> 
            <Logo />
            <h2>Qué tenés en la heladera?</h2>
            <SearchInput />            
        </div>
    )
}
