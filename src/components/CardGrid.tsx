import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../common/GetImage';
import './CardGrid.css';

function GridCard({card}: {card: any}){
    // all cards should have an id attribute
    // I'm just too lazy to define the card object so I use any
    // Also different cards have different attributes
    return(
        <Grid key={"card_"+card.id} xs={4} item className="MediaGridCard">
            <Card id={card.id} />
        </Grid>
    );
}

export default function CardGrid({cards}: {cards: any[]}){
    return(
        <Grid container xs={12} className="MediaGridContainer">
                {cards.map( x => <GridCard card={x} />)}
        </Grid>
    );
}