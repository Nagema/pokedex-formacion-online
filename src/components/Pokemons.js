import React from 'react';
class Pokemons extends React.Component {
  handleVoice(pokemonName) {
    if (pokemonName === 'pikachu') pokemonName = 'pika pika';
    if (pokemonName === 'squirtle') pokemonName = 'squirtle squirtle';
    const msg = new SpeechSynthesisUtterance(pokemonName);
    msg.pitch = 10;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }
  paintData() {
    const { pokemons, searchPokemon } = this.props;
    return pokemons
      .filter((pokemon) => pokemon.species.name.toLowerCase().includes(searchPokemon.toLowerCase()))
      .sort((pokemonA, pokemonB) => pokemonA.id - pokemonB.id)
      .map((pokemon) => {
        return (
          <li className='pokemon-card' key={pokemon.id} onClick={() => this.handleVoice(pokemon.name)}>
            <div className='wrapper-pokemon-info'>
              <div className='wrapper-image'>
                <div className='name-played'><i className="fas fa-volume-up"></i></div>
                <img src={pokemon.sprites.front_default} alt='pokemon' className='pokemon-image'></img>
                <div className='id-wrapper'>
                  <div className='pokemon-id'>ID / {pokemon.id}</div>
                </div>
              </div>
              <div className='wrapper-name'>
                <p className='pokemon-name'>{pokemon.species.name}</p>
                <div className='tag-wrapper'>
                  {pokemon.types.map((pokemonType) => {
                    return (
                      <p className='tag' key={pokemonType.type.name}>{pokemonType.type.name}</p>
                    )
                  })}
                </div>
              </div>
            </div>
          </li>
        )
      });
  }
  render() {
    const { handleFilterPokemon } = this.props;
    return (
      <div className='main-pokemon-wrapper'>
        <img src='./static/images/pokemon_png.png' alt='pokemon title' className='pokemon-title'></img>
        <label htmlFor='search'>
        </label>
        <input type='text' placeholder="Filtra Pokemons por nombre..." id='search' onChange={handleFilterPokemon}></input>
        <ul className="pokemon-cards">
          {this.paintData()}
        </ul>
      </div >
    )
  }
}
export default Pokemons;

