import React from 'react';
import PokemonCard from './PokemonCard'
class Pokemons extends React.Component {
  handleVoice(pokemonName) {
    if (pokemonName === 'pikachu') pokemonName = 'pika pika';
    if (pokemonName === 'squirtle') pokemonName = 'squirtle squirtle';
    const msg = new SpeechSynthesisUtterance(pokemonName);
    msg.pitch = 10;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }
  render() {
    const { handleFilterPokemon, pokemons, searchPokemon } = this.props;
    return (
      <div className='main-pokemon-wrapper'>
        <img src='./static/images/pokemon_png.png' alt='pokemon title' className='pokemon-title'></img>
        <label htmlFor='search'>
        </label>
        <input type='text' placeholder="Filtra Pokemons por nombre..." id='search' onChange={handleFilterPokemon}></input>
        <ul className="pokemon-cards">
          {pokemons
            .filter((pokemon) => pokemon.species.name.toLowerCase().includes(searchPokemon.toLowerCase()))
            .sort(function (pokemonA, pokemonB) {
              return pokemonA.id - pokemonB.id;
            })
            .map((pokemon) => {
              return (
                <li className='pokemon-card' key={pokemon.id} onClick={() => this.handleVoice(pokemon.name)}>
                  <PokemonCard
                    pokemon={pokemon}
                  />
                </li>
              )
            })}
        </ul>
      </div >
    )
  }
}
export default Pokemons;

