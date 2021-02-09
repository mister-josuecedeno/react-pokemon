import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div className='pokemon-list'>
      {pokemon.map((p) => (
        <div key={p.name} className='pokemon'>
          <a rel='noopener noreferrer' target='_blank' href='{p.url}'>
            {p.name}
          </a>
        </div>
      ))}
    </div>
  );
}
