import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../common/GetImage';
import './CardGrid.css';

function GridCard({card, onClick}: {card: any, onClick: Function}){
    // all cards should have an id attribute
    // I'm just too lazy to define the card object so I use any
    // Also different cards have different attributes
    return(
        <Grid key={"card_"+card.id} xs={3} item className="MediaGridCard">
            <Card id={card.id} onClick={() => onClick(card)} />
        </Grid>
    );
}

export default function CardGrid({cards, onClick}: {cards: any[], onClick: Function}){
    return(
        <Grid container xs={12} className="MediaGridContainer">
                {cards.map( x => <GridCard card={x} onClick={onClick} />)}
        </Grid>
    );
}