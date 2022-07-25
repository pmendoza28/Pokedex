import { prodDomain } from "../../services/interceptor"
import { useQuery } from 'react-query';

export const useFetchPokemon = () => {
    return useQuery('fetch-pokemon', async () => {
        return await prodDomain.get("pokemon?limit=12&offset=0")
    })
}

// export const useFetchPokemonDetails = (url) => {
//     return useQuery('fetch-pokemon-details', async () => {
//         return await prodDomain.get(url)
//     })
// }