import { compose } from "redux";

function removeSpace(string)
{
    return string.split(" ").join("");
}

function repeatString(string)
{
    return string+string

}
function toUpper(sring)
{
    return string.toUpperCase();
}


const threefn=compose()