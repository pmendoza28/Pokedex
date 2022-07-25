import axios from 'axios';
import { useQuery } from 'react-query';

export const useFetchPokemonByUrl = (url) => {
    return useQuery('fetch-pokemon', async () => {
        return await axios.get(url)
    })
}