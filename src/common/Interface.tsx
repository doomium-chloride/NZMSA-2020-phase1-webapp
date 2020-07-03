export default interface HCard {
    artist: string,
    attack?: number,
    cardClass: string,
    collectable: boolean,
    cost: number,
    dbfid: number,
    durability?: number,
    flavor: string,
    health?: number,
    id: string,
    mechanics?: string[],
    name: string,
    race?: string
    rarity: string,
    referencedTags?: string[],
    set: string,
    text: string,
    type: string
}

//I'm not sure what happens if there is an extra attribute. there are too many attributes