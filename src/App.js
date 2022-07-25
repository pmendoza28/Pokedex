import './App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import RouterModule from './RouterModule'
import { createContext } from 'react';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const initialValue = {
  name: "",
  type: "",
  abilities: "",
  stats: []
}
export const PokemonDetailsContext = createContext(initialValue)

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} >
        <PokemonDetailsContext.Provider value={initialValue}>
          <RouterModule />
        </PokemonDetailsContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
