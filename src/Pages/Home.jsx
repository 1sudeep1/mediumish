import React from 'react'
import Block from '../Component/Block'

function Home() {
    return (
        <div>
            <Block Category="Politics" />
            <Block Category="Sports" />
            <Block Category="National" />
            <Block Category="International" />
        </div>
    )
}

export default Home
