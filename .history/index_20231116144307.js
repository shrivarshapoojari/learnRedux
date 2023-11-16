import { compose  from "redux";

function removeSpace(string)
{
    return string.split(" ").join("");
}

function repeatString(string)
{
    return string+string

}
function toUpper(string)
{
    return string.toUpperCase();
}


const threefn=compose(removeSpace,repeatString,toUpper)

console.log(threefn('hi hlo'))