import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';
import {search} from '../common/Search';

const allCards = "https://api.hearthstonejson.com/v1/latest/enUS/cards.json";


type stateTypes = {
    cards: any
}

class Main extends Component<{}, stateTypes>{
    constructor(props: any){
        super(props);
        this.state = {
            cards: []
        }
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

    render(){
        return(
            <div>
                <TextField id="search-bar-input" label="Search for cards" variant="outlined" />
                <Button variant="contained">Search</Button>
            </div>
        )
    }
}



export default Main;