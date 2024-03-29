# KnightsTravail-Graphs

This project is a solution to the Knights Travail problem, implemented using Object-Oriented Programming (OOP) practices in TypeScript. The Knights Travail problem involves finding the shortest path for a knight on a chessboard from one point to another.

## Installation

Before you begin, ensure you have Node.js and npm installed. If not, you can download and install them from [Node.js website](https://nodejs.org/).

Once you have Node.js and npm installed, clone the repository and install the dependencies:

```sh
git clone https://github.com/yourusername/KnightsTravail-Graphs.git
cd KnightsTravail-Graphs
npm install
```

## Usage

The project includes a `Knight` interface and a `Chessboard` interface, which are used to create a knight and a chessboard respectively.

Here's a basic example of how to use these interfaces:

```typescript
let board = createChessboard(8);
let knight = createKnight(board, [0, 0]);
console.log(knight.findShortestPath([0, 0], [7, 7])); //returns an array with 7 entries(including start position)
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
