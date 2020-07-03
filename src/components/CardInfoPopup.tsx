import React from 'react';
import Rodal from 'rodal';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// include styles
import 'rodal/lib/rodal.css';
import './Popup.css';

export default function PopupInfo({card, visible, onClose}: {card: any, visible: boolean, onClose: Function}){
    return(
        <Rodal visible={visible} onClose={onClose} width={50} height={80} measure="%" >
            <InfoContent card={card} />
        </Rodal>
    )
}

function InfoContent({card}: {card: any}){

    return(
        <div className="popup-info-content">
            <h3>{card.name}</h3>
            {card["rarity"] && <p>Rarity: {card.rarity}</p>}
            {card["elite"] && <p>Elite card</p>}
            {card["type"] && <p>Type: {card.type}</p>}
            {card["class"] && <p>Class: {card.cardClass}</p>}
            {card["race"] && <p>Race: {card.race}</p>}
            {card["text"] && <p>Text: {ReactHtmlParser(removeDollar(card.text))}</p>}
            {card["flavor"] && <p>Flavour: {card.flavor}</p>}
            {card["health"] && <p>Health: {card.health}</p>}
            {card["attack"] && <p>Attack: {card.attack}</p>}
            {card["mechanics"] && <p>Mechanics: {card.mechanics.join(", ")}</p>}
            {card["referencedTags"] && <p>Referenced Tags: {card.referencedTags.join(", ")}</p>}
            {card["durability"] && <p>Durability: {card.durability}</p>}
            {card["armor"] && <p>Armour: {card.armor}</p>}
            {card["set"] && <p>Set: {card.set}</p>}
            {card["artist"] && <p>Artist: {card.artist}</p>}
            {card["howToEarn"] && <p>How to earn: {card.howToEarn}</p>}
            {card["howToEarnGolden"] && <p>How to earn golden: {card.howToEarnGolden}</p>}
        </div>
    )
}

function removeDollar(text: string){
    return text.split('$').join('');
}