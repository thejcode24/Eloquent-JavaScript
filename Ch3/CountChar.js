
function countB(string){
    let count = 0;

    for(let i=0; i < string.length; i++) {
        if(string[i] == "B" || string[i]=="b") {
            count += 1;
        }
    } 
    return count;
}

function countChar(string, ch) {
    let count = 0;
    for(let i=0; i < string.length; i++) {
        if(string[i] == ch) {
            count += 1;
        }
    }
    return count;
}

function newCountB(string) {
    return countChar(string, "B") || countChar(string, "b");
}