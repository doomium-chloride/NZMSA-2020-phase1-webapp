import React from 'react';
import { render } from '@testing-library/react';
import {search} from '../common/Search';

const database = [
    {"attack":0,"cardClass":"NEUTRAL","cost":0,"dbfId":52424,"faction":"ALLIANCE","health":0,"id":"ART_BOT_Bundle_001","name":"Golden Legendary","rarity":"LEGENDARY","set":"TB","type":"MINION"},
    {"artist":"Nutthapon Petchthai","cardClass":"MAGE","collectible":true,"cost":5,"dbfId":2539,"flavor":"It's on the rack next to ice lance, acid lance, and English muffin lance.","id":"AT_001","name":"Flame Lance","rarity":"COMMON","set":"TGT","text":"Deal $8 damage to a minion.","type":"SPELL"},
    {"artist":"Tooth","cardClass":"MAGE","collectible":true,"cost":3,"dbfId":2541,"flavor":"Burning man, brah.","id":"AT_002","mechanics":["SECRET"],"name":"Effigy","rarity":"RARE","set":"TGT","text":"<b>Secret:</b> When a friendly minion dies, summon a random minion with the same Cost.","type":"SPELL"},
    {"artist":"Arthur Bozonnet","attack":3,"cardClass":"MAGE","collectible":true,"cost":2,"dbfId":2545,"flavor":"And he can't get up.","health":2,"id":"AT_003","mechanics":["HEROPOWER_DAMAGE"],"name":"Fallen Hero","rarity":"RARE","set":"TGT","text":"Your Hero Power deals 1 extra damage.","type":"MINION"}
]

test('search NEUTRAL', () => {
    const result = search(database, "NEUTRAL");
    const card = result[0];
    expect(card.dbfId).toBe(52424);
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