import React from 'react'
import Skills from './skills/Skills';
import Teams from './teams/Teams';
import Greeting from './Greeting';

function Main() {
    return (
        <>
            <Greeting />
            <Teams />
            <Skills />
        </>
    )
}

export default Main;