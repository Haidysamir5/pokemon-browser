import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PokemonCard({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  const navigate = useNavigate();
  const id = url.split('/').filter(Boolean).pop();
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <button
      className="bg-white rounded-xl p-4 shadow hover:shadow-xl transition text-center"
      onClick={() => navigate(`/pokemon/${id}`)}
    >
      <img src={image} alt={name} className="w-24 h-24 mx-auto mb-2" />
      <h2 className="capitalize font-bold text-lg">{name}</h2>
      <p className="text-gray-500">#{id}</p>
    </button>
  );
}
