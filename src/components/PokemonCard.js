import React from 'react';
class PokemonCard extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
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
    )
  }
}
  export default PokemonCard;