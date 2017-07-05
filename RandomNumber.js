/**
 * Created on 05/07/2017 by Dominic Colson.
 */

function randomNumber(low, high){
    return Math.floor(Math.random() * (high - low ) + low);
}

console.log(randomNumber(2,10));

