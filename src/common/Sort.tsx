// sort by name, artist and cost, attack and health
// both ascending and descending

function sortByString(card1: any, card2: any, prop: string, ascending: boolean){
    const string1 = card1[prop] + "";
    const string2 = card2[prop] + "";
    if(ascending){
        return string1.localeCompare(string2);
    } else{
        return string2.localeCompare(string1);
    }
}

function sortByNum(card1: any, card2: any, prop: string, ascending: boolean){
    const int1 = card1[prop] || -1;
    const int2 = card2[prop] || -1;
    if(ascending){
        return int1 - int2;
    } else {
        return int2 - int1;
    }
}

function sort(original: any[], prop: string, propType: string, ascending: boolean){
    let copy = [...original];
    switch(propType){
        case "":
        case "none":
            return copy;
        case "num":
            return copy.sort((a: number, b: number) => sortByNum(a, b, prop, ascending));
        case "string":
            return copy.sort((a: string, b: string) => sortByString(a, b, prop, ascending));
        default:
            console.log("warning: invalid sort by type");
            return copy.sort((a: string, b: string) => sortByString(a, b, prop, ascending));
        
    }
}

export default sort;