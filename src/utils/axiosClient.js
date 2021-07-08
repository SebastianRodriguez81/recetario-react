import axios from 'axios'
import env from 'react-dotenv'


const urlHeladera = "https://api.spoonacular.com/recipes/findByIngredients"


export const getRecetas = async (alimentos) => {
    try {
        const response = await axios.get(urlHeladera, {
            params: {
                apiKey: env.API_KEY,
                number: 4,
                ingredients: alimentos
            }
        })   
        
        return response.data     
    } catch (error) {
        console.log(error.message)
    }
}

export const getLinkReceta = async (idReceta) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/card`, {
            params: {
                apiKey: env.API_KEY,
                id: idReceta,
                mask: "heartMask"
            }
        })   
        
        return response.data.url     
    } catch (error) {
        console.log(error.message)
    }
}

