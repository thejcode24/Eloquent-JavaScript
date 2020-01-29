
let board="";

for(let i=0; i<9; i++) {


    for(let j=0; j<9; j++){


        if((i+j)%2==0) {
            board += " ";
        }
        else {
            board += "#";
        }
    }
    board += "\n";

}
console.log(board);

/*

Output

 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 

 */