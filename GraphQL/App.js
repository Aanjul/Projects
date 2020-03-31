import { useQuery } from '@apollo/react-hooks';
import gpl from 'graphql-tag';

function App(){
    const { data, loading,error} = useQuery(GET_POKEMON_INFO);

    if(loading) return <p> Loading...</p>
    if(error) return <p>Error</p> 
}


const GET_POKEMON_INFO = gql `
{
    pokemons(first: 150){
        id
        number
        name,
        image,
        evolutions{
            id,
            number,
            name,
            image
        }
    }
}
return (
    <React.Fragment>
    <h1>
    Pokemons
    </h1>

    <p>
    <a href="https:/link.com">
    </a>{""} 
    revolves around 832 fictional species of collectible monsters, each having
    unique designs and skills.Conceived by Satoshi Tajiri in early 1989,
        Pokémon are creatures that inhabit the fictional Pokémon World.This is
    the list of the first 150 Pokémon as they appear in Pokémon Stadium,
        starting with Bulbasaur in the top left corner and ending with Mewtwo in
        the bottom right corner.
    </p>
    <div className="container">
    {
        data && data.pokemons && data.pokemons.map((pokemon, index)) => (
            <div key={index}  className="card">
            <img src={pokemon.image}/>
            <div class="card-body">
            <h3>{pokemon.name}</h3>
            <p>
            {pokemon.evolutions && pokemon.evolutions.length !== 0 &&(
                <p>
                {""}
                Evolutions:
                {pokemon.evolutions.map((e,indx) => {
                    return <p key={indx}> {e.name}</p>;
                })}</p>
            )}
            </p>
            </div>
            </div>
        )
    }
        </div>
    </React.Fragment>

)
