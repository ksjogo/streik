#!/usr/bin/env node
function swap(string, first, second) {
    return (first == second) ? string :
        string.substring(0, first)
        + string.charAt(second)
        + string.substring(first+1, second)
        + string.charAt(first)
        + string.substring(second+1);
}

function permute(string, index) {
    for (let j = 1; j < string.length; ++j) {
        string = swap(string, index % (j + 1), j);
        index = Math.floor(index / (j + 1));
    }
    return string;
}

for (var i = 0; i <= 10000; ++i) {
    console.log("\\url{"
                + permute(
                    "Des Autors Streik",
                    Math.floor(
                        Math.random()
                            * 355687428096000
                            + 1))
                +"}");
    if (i % 3 == 0)
        console.log('\\\\');
}
