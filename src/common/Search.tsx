export function search(database: Array<any>, query: string) {

    if(query.length <= 0){
        return database;
    }

    let output: Array<any> = [];

    database.forEach( entry => {
        let allStrings = [];
        for (var prop in entry) {
            if (Object.prototype.hasOwnProperty.call(entry, prop)) {
                if(Array.isArray(entry[prop])){
                    let array = entry[prop];
                    let len = array.length;
                    allStrings.push(array.join(' '));
                    // for(let i = 0; i < len; i++){
                    //     // if(contains(array[i], query)){
                    //     //     output.push(entry);
                    //     //     return null;//go to next entry
                    //     // }
                    // }
                } else {
                    allStrings.push(entry[prop] + "")
                    // output.push(entry);
                    // return null;//go to next entry
                }
            }
        }
        const megaString = allStrings.join(' ');
        if(contains(megaString, query)){
            output.push(entry);// if the entry mentions all of the query words somewhere: include
        }
    });

    return output;
}
// string 2 is the query
// string 1 should contain ALL that is in string2
export function contains(string1: string, string2: string){
    string1 = string1 + "";
    string2 = string2 + "";
    string1 = string1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string2 = string2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let arr1 = string1.split(" ");
    arr1 = arr1.filter(removeEmptyString);//super set
    let arr2 = string2.split(" ");
    arr2 = arr2.filter(removeEmptyString);//sub set

    const len1 = arr1.length;
    const len2 = arr2.length;

    // for(let i = 0; i < len1; i++){
    //     for(let j = 0; j < len2; j++){
    //         if(arr1[i].toLowerCase() == arr2[j].toLowerCase()){
    //             return true;// one match found
    //         }
    //     }
    // }
    for(let i = 0; i < len1; i++){
        arr1[i] = arr1[i].toLowerCase();
    }
    for(let i = 0; i < len2; i++){
        arr2[i] = arr2[i].toLowerCase();
    }

    return setChecker(arr1, arr2);

    // false = not all queries matched
    // true = all queries matched
}

function removeEmptyString(word: string){
    return word.length > 0;
}

function setChecker(superArr: string[], subArr: string[]){
    const superSet = new Set(superArr);
    for(let word of subArr){
        if(!superSet.has(word)){
            return false;
        }
    }
    return true;
}