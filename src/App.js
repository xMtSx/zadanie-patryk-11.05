import React, { useState, useEffect } from 'react';

const RickAndMortyData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const responseData = await response.json();
      setData(responseData.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {data.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortyData;
