import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { getRecetas } from '../utils/axiosClient'
import Card from '../components/Card'
import '../App.css'

export default function SearchInput() {
    const [busqueda, setBusqueda] = useState('')
    const [recetas, setRecetas] = useState([])
    
    return (
      <div>
        <form className="search-form" noValidate autoComplete="off">
          <TextField
            id="outlined-search"
            color="secondary"
            variant="outlined"
            fullWidth
            label="ingresa los alimentos que tengas"
            type="search"
            helperText="Qué tenés en la heladera?"
            onChange={(event) => {
              setBusqueda(event.target.value);
            }}
          />
          <Button
            variant="contained"
            color="primary"           
            onClick={async () => setRecetas(await getRecetas(busqueda))}
          >
            Buscar
          </Button>
        </form>
        
        <div className="contenedor-cards">
            {recetas.map(function (receta, index) {
                return (
                <Card key={index} title={receta.title} image={receta.image} id={receta.id}/>                    
                
                )
          })}
        </div>
      </div>
    );
}
