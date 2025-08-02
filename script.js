//Closure = function defined inside another function
//.        inner fn has access to variable and scope
//          of outer function
//          allow for private variable and state maintenance
//          used in react, vue, angular

function outer(){ //now its private cant be accessed

    let msg = "hello";
        function inner(){
            console.log(msg);
        }

        inner();
}

outer();
function outerIncrement(){

    let count = 0;

    function innerIncrement(){
    count++
    console.log(`Count increased ${count}`)
}
    function getCount(){
        return count
    }
    return {innerIncrement,getCount};
}
const counter = outerIncrement();

// counter.innerIncrement();
// counter.innerIncrement();
// counter.innerIncrement();
// counter.innerIncrement();

// console.log(`Count is ${counter.getCount()}`)

function outer(){
    let score = 0;

function incScore(points){
    score += points;
    console.log(`+${points}pts`)
}
function decScore(points){
    score -= points;
    console.log(`-${points}pts`)
}
function getScore(){
    return score ;
}

return {incScore,decScore,getScore}

}

const game = outer();

game.incScore(53);
game.decScore(5);
console.log(`Your Total score is ${game.getScore()}`);



