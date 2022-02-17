// https://gist.github.com/ezaurum/efa25e0b7882e5320ede24f19d40adf9

const fs = require("fs")
const line = fs.readFileSync("/dev/stdin").toString().split("\n")
const limit = Number(line[0])
console.log(line.slice(1, limit + 1).reduce( (result, l, idx, arr) => {
    const [a, b] = l.split(/\s/).map(Number)
    return result + (a + b) + "\n"
}, ""))
