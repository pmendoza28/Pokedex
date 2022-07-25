import React from 'react'
import { Routes, Route, Router } from 'react-router'
import PokemonMenu from './components/PokemonMenu/PokemonMenu'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import Layout from './layouts/Layout'
import { PokemonDetailsContext } from './context/PokemonDetailsContext';

const initialValue = {
    name: "",
    type: "",
    abilities: "",
    stats: []
}

const RouterModule = () => {
    return (
        <Routes>
            <Route path='' element={<Layout />}>
                <Route path='' element={<PokemonMenu />}></Route>
                <Route path='pokedex-menus' element={ <PokemonMenu /> }></Route>
                <Route path='pokedex-detail' element={<PokemonDetails />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
            </Route>
        </Routes>

    )
}

export default RouterModule