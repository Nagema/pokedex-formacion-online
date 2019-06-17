import React from 'react';
import { fetchPokemonList } from './services/FetchAllData';
import Pokemons from './components/Pokemons'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      searchPokemon: '',
    };
    this.handleFilterPokemon = this.handleFilterPokemon.bind(this);
  }
  componentDidMount() {
    this.FetchAllData();
  }
  FetchAllData() {
    fetchPokemonList()
      .then(response => response.results)
      .then(pokemons => {
        pokemons.forEach(pokemon => {
          fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemon => {
              this.setState({
                pokemons: [...this.state.pokemons, pokemon],
              })
            })
        })

      });
  }
  handleFilterPokemon(event) {
    const filterPokemon = event.currentTarget.value;
    this.setState({
      searchPokemon: filterPokemon
    })
  }
  render() {
    const { pokemons, searchPokemon } = this.state;
    return (
      <div className="App">
        <header>
          <div className='head-corner top-left'></div>
          <div className='head-corner top-right'></div>
        </header>
        <Pokemons
          pokemons={pokemons}
          searchPokemon={searchPokemon}
          handleFilterPokemon={this.handleFilterPokemon}
        />
        <footer>
          <div className='footer-corner bottom-left'></div>
          <div className='footer-corner bottom-right'></div>
        </footer>
      </div>
    )

  }

}

export default App;
