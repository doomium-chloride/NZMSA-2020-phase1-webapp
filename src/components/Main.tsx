import React, {Component} from 'react';
import {TextField, Button, Select, Checkbox, FormGroup, FormControlLabel} from '@material-ui/core';
import {search} from '../common/Search';
import CardGrid from './CardGrid';
import sort from '../common/Sort';
import './Main.css';

const allCards = "https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json";

const maxView = 12;

type stateTypes = {
    cards: any[],
    searchedCards: any[],
    searchQuery: string,
    sort: string,
    ascending: boolean,
    index: number,
    length: number
}

class Main extends Component<{}, stateTypes>{
    constructor(props: any){
        super(props);
        this.state = {
            cards: [],
            searchedCards: [],
            searchQuery: "",
            sort: "none",
            ascending: false,
            index: 0,
            length: 0
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);

        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
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
        this.setState({
            searchedCards: results,
            length: results.length,
            index: 0
        });
        // reset index
    }

    handleSearchChange(query: string){
        this.setState({searchQuery: query});
    }

    handleSearch(){
        this.searchCards(this.state.searchQuery);
    }

    handleSortChange(sortBy: string){   
        this.setState({sort: sortBy});
    }

    handleCheckChange(checked: boolean){
        this.setState({ascending: checked});
    }

    nextPage(){
        this.setState({index: Math.min(this.state.index + maxView, this.state.length - maxView)});
    }

    prevPage(){
        this.setState({index: Math.max(this.state.index - maxView, 0)});
    }

    render(){
        const type = sortType(this.state.sort);
        const sortedCards = sort(this.state.searchedCards, this.state.sort, type, this.state.ascending);
        const sliced = first(sortedCards, this.state.index);
        return(
            <div>
                <div className="search-bar">
                <FormGroup>
                    <TextField id="search-bar-input" size="small" label="Search for cards" variant="outlined" defaultValue="" onChange={e => this.handleSearchChange(e.target.value)} />
                    <Button id="search-bar-button" variant="contained" onClick={() => this.handleSearch()}>Search</Button>
                    <Select
                        name="Sort By"
                        onChange={e => this.handleSortChange(e.target.value + "")}
                    >
                        <option value="">None</option>
                        <option value="cost">Cost</option>
                        <option value="health">Health</option>
                        <option value="attack">Attack</option>
                        <option value="name">Name</option>
                        <option value="artist">Artist</option>
                    </Select>
                    <FormControlLabel control={
                        <Checkbox
                            onChange={event => this.handleCheckChange(event.target.checked)}
                        />
                    }
                    label="Ascending"
                    />
                </FormGroup>
                </div>
                <div className="Grid">
                    <CardGrid cards={sliced} />
                </div>
                <div className="sliced-navigation">
                    <Button variant="contained" onClick={this.prevPage} >Prev</Button>
                    <Button variant="contained" onClick={this.nextPage} >Next</Button>
                </div>
            </div>
        )
    }
}

function sortType(prop: string){
    switch(prop){
        case "attack":
        case "cost":
        case "health":
            return "num";
        case "artist":
        case "name":
        default:
            return "string";
    }
}

function first(sauce: any[], index: number){
    index = Math.max(0, index);
    const len = sauce.length;
    const newIndex = Math.min(index, len - maxView -1)
    const max = Math.min(newIndex + maxView, len - 1);
    return sauce.slice(newIndex, max);
}



export default Main;