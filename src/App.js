import React, { Component } from 'react';
import Joke from './components/Joke';
import axios from 'axios';

export default class App extends Component {

    state = {
        joke: undefined,
        favorite: undefined
    }

    

    render () {
        let { joke, favorite } = this.state
        return (
            <main className="container">
                <h1> Chuck Norris Jokes </h1>
                <Joke joke={joke} />
                <div className="buttons">
                    <form onSubmit={this.handleSubmit}>
                        <input
                        type="submit"
                        value="New Joke"
                        name="joke" />
                    </form>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        type="submit"
                        value="Favorite"
                        name="favorite" />
                    </form>
                </div>
            </main>
        )
    }

}