import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';
import {search} from '../common/Search';
import CardGrid from './CardGrid';
import './Main.css';

const allCards = "https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json";


type stateTypes = {
    cards: any[],
    searchedCards: any[],
    searchQuery: string
}

class Main extends Component<{}, stateTypes>{
    constructor(props: any){
        super(props);
        this.state = {
            cards: [],
            searchedCards: [],
            searchQuery: ""
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){
        this.loadCards();
    }

    loadCards(){
        const that = this;
        fetch(allCards)
            .then(res => res.json())
            .then(data => that.setState({cards: data}));
    }

    searchCards(query: string){
        const database = this.state.cards;
        const results = search(database, query);
        this.setState({searchedCards: results});
    }

    handleSearchChange(query: string){
        this.setState({searchQuery: query});
    }

    handleSearch(){
        this.searchCards(this.state.searchQuery);
    }

    render(){
        return(
            <div>
                <div className="search-bar">
                    <TextField id="search-bar-input" size="small" label="Search for cards" variant="outlined" defaultValue="" onChange={e => this.handleSearchChange(e.target.value)} />
                    <Button id="search-bar-button" variant="contained" onClick={() => this.handleSearch()}>Search</Button>
                </div>
                <div className="Grid">
                    <CardGrid cards={this.state.searchedCards} />
                </div>
            </div>
        )
    }
}



export default Main;