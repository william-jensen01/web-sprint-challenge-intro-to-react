// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 100%;
    margin: auto;
`
const Img = styled.img `
    width: 75%;
    margin-top: 15px;
`
const CharacterData = styled.div `
    width: auto;
    border: 1px solid black;
    background-color: #06F3BA;
    margin: 1rem 1rem;
    box-shadow: 0 10px 20px 2px;

    h2 {
        font-size: 1.5rem;
    }
    p {
        font-size: 1rem;
    }
    &:hover {
        transform: rotate(360deg);
        transition: transform .5s;
      }
`

function Character(props) {
    return (
        <Div>
         {props.characterArray.map((character) => {
             console.log(character.name, character.status, character.species, character.origin.name); 
             return (
                <CharacterData key={character.id} >
                    <Img alt={character.name} src={character.image} />
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.origin.name}</p>
                </CharacterData>
             )
             })}
        </Div>
    )
}

export default Character