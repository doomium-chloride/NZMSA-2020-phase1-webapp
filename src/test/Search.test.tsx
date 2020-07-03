import React from 'react';
import { render } from '@testing-library/react';
import {search} from '../common/Search';

const database = [
    {"artist":"Slawomir Maniak","attack":2,"cardClass":"NEUTRAL","collectible":true,"cost":4,"dbfId":2569,"flavor":"A result of magical experiments carried out by the Black Dragonflight, it's not his fault that he's a vicious killer.","health":6,"id":"AT_017","mechanics":["BATTLECRY"],"name":"Twilight Guardian","race":"DRAGON","rarity":"EPIC","referencedTags":["TAUNT"],"set":"TGT","text":"<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Taunt</b>.","type":"MINION"},
    {"artist":"Nutthapon Petchthai","cardClass":"MAGE","collectible":true,"cost":5,"dbfId":2539,"flavor":"It's on the rack next to ice lance, acid lance, and English muffin lance.","id":"AT_001","name":"Flame Lance","rarity":"COMMON","set":"TGT","text":"Deal $8 damage to a minion.","type":"SPELL"},
    {"artist":"Tooth","cardClass":"MAGE","collectible":true,"cost":3,"dbfId":2541,"flavor":"Burning man, brah.","id":"AT_002","mechanics":["SECRET"],"name":"Effigy","rarity":"RARE","set":"TGT","text":"<b>Secret:</b> When a friendly minion dies, summon a random minion with the same Cost.","type":"SPELL"},
    {"artist":"Arthur Bozonnet","attack":3,"cardClass":"MAGE","collectible":true,"cost":2,"dbfId":2545,"flavor":"And he can't get up.","health":2,"id":"AT_003","mechanics":["HEROPOWER_DAMAGE"],"name":"Fallen Hero","rarity":"RARE","set":"TGT","text":"Your Hero Power deals 1 extra damage.","type":"MINION"}
]

test('search NEUTRAL', () => {
    const result = search(database, "NEUTRAL");
    const card = result[0];
    expect(card.dbfId).toBe(2569);
});

test('search burning', () => {
    const result = search(database, "burning");
    const card = result[0];
    expect(card.dbfId).toBe(2541);
});

test('return nothing', () => {
    const result = search(database, "penis");
    expect(result.length).toBe(0);
});