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
            label="ingresá los alimentos que tengas, en inglés y separados por comas"
            type="search"
            helperText="presioná buscar para ver tus recetas"
            onChange={(event) => {
              setBusqueda(event.target.value);
            }}
          />
          <Button
            variant="contained"
            className="button-search"
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
