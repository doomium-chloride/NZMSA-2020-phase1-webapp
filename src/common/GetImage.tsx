import React from 'react';
import './CardImage.css';

const baseURL = "https://art.hearthstonejson.com/v1/512x/";
const imgFormat = ".jpg";

const cardFormat = ".png";
const baseCardURL = "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/";

export function getURLFromID(id: string){
    return baseURL + id + imgFormat;
}

export function getImageFromID(id: string){
    const url = getURLFromID(id);
    return <img className="card-pic" src={url}/>
}

export function getCard(id: string){
    const url = baseCardURL + id + cardFormat;
    return <img className="card-pic" src={url}/>
}

export default function Card({id} : {id: string}){
    return getCard(id);
}