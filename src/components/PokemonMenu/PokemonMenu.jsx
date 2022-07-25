import React, { useEffect } from 'react'
import "./PokemonMenu.scss"
import { useFetchPokemon, useFetchPokemonDetails } from './PokemonMenuService'
import { useNavigate } from 'react-router-dom'


const PokemonMenu = () => {
    const { isLoading, data } = useFetchPokemon()
    const navigate = useNavigate()
    
    const selectMenu = (result) => {
        localStorage.setItem("selectedMenuUrl", result.url)
        navigate(`/pokedex-detail`);
    }

    return (
        <div className='PokemonMenu'>
            {
                isLoading && "Loading..."
            }
            <div className='pokemon-list'>
                {
                    data && data.data.results?.map((result, i) => {
                        return <div variant='secondary' onClick={() => selectMenu(result)} className='menu unselectable' key={i}>{result.name}</div>
                    })
                }
            </div>
        </div>
    )
}

export default PokemonMenu