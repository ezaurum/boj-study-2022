// https://www.acmicpc.net/problem/2798

function solution(input) {
    const first = input[0].split(/\s/)
    const n = parseInt(first[0])
    const m = parseInt(first[1])
 
    const cardArray = input[1].split(/\s/).map(l=>parseInt(l))
    let max = 0, sum = 0
    for (let i = 0; i < n - 2 ; i++) {
        for (let ii = i + 1; ii < n - 1; ii++) {
            for ( let iii = ii + 1; iii < n ; iii++) {
                sum = cardArray[i] + cardArray[ii] + cardArray[iii]
                if ( sum <= m && max < sum ) {
                    max = sum
                }
            }
        }
    }
    return max
}

const fs = require('fs')
const lines = fs.readFileSync('/dev/stdin').toString().trim().split("\n")
console.log(solution(lines))
