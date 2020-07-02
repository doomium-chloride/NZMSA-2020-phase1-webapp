export function search(database: Array<any>, query: string) {

    let output: Array<any> = [];

    database.forEach( entry => {
        for (var prop in entry) {
            if (Object.prototype.hasOwnProperty.call(entry, prop)) {
                if(Array.isArray(entry[prop])){
                    let array = entry[prop];
                    let len = array.length;
                    for(let i = 0; i < len; i++){
                        if(contains(array[i], query)){
                            output.push(entry);
                            return null;//go to next entry
                        }
                    }
                } else if(contains(entry[prop], query)){
                    output.push(entry);
                    return null;//go to next entry
                }
            }
        }
    });

    return output;
}

function contains(string1: string, string2: string){
    let arr1 = string1.split(" ");
    arr1 = arr1.filter(removeEmptyString);
    let arr2 = string2.split(" ");
    arr2 = arr2.filter(removeEmptyString);

    const len1 = arr1.length;
    const len2 = arr2.length;

    for(let i = 0; i < len1; i++){
        for(let j = 0; j < len2; j++){
            if(arr1[i] == arr2[j]){
                return true;// one match found
            }
        }
    }
    return false;// no match found
}

function removeEmptyString(word: string){
    return word.length > 0;
}