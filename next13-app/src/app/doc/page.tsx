import React from 'react'
import Movie from '../movie';

type Props = {
  params:any
}

export default async function page({params}: Props) {

  // const res = await fetch('https://pokeapi.co/api/v2/ability/');
  // const data = await res.json();

  const { id } = params;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const data = await fetch(url,
    { next: { revalidate: 10 } }
  );
  const res = await data.json();

  const listItems = res.results.map((movie:any) =>
    <li key={movie.id}>
      {movie.title}
    </li>
  );

  return (
    <div className='grid gap-2 grid-cols-fluid'>
       {res.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
    </div>
  )
}