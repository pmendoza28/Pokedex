import React, { useEffect } from 'react'
import { useFetchPokemonByUrl } from './PokemonDetailsService'
import "./PokemonDetails.scss";
import { useContext } from 'react';
import { PokemonDetailsContext } from '../../App';
const PokemonDetails = () => {
  // const pokemonDetails = useContext(PokemonDetailsContext)
  const { isLoading, data } = useFetchPokemonByUrl(localStorage.getItem("selectedMenuUrl"))
  return (
    <div className='pokemon-details-wrapper'>
      {
        isLoading && "Loading..."
      }

      {
        data && (
          <>
            <div className='first-row-details'>
              <div className='image'>
                <img src={data.data.sprites?.front_default} alt="" />
              </div>
              <div className='fields'>
                <div className='key'>
                  <label className='name'>Name</label>
                  <label className='type'>Type</label>
                  <label className='type'>Abilities</label>
                </div>
                <div className='value'>
                  <div className='answer'>{data.data?.name}</div>
                  <div className='answer'>
                    {data.data.types?.map((type, index) => {
                      return <label key={index}>{type.type?.name}, </label>
                    })}
                  </div>
                  <div className='answer'>
                    {data.data.abilities?.map((ability, index) => {
                      return <label key={index}>{ability.ability?.name}, </label>
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className='stats'>
              <label className='stats-title'>Stats</label>
              {
                data.data.stats?.map((stat, index) => {
                  return <div key={index} className='fields'>{stat.stat?.name} - {stat?.base_stat}</div>
                })
              }
            </div>
          </>
        )

      }

    </div>
  )
}

export default PokemonDetails