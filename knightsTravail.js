"use strict";
//Going to try and do this using OOP practices.
//Generates a chessboard 2D array with zeros at each co-odinate
function createChessboard(size) {
    const chessboard = Array(size)
        .fill(0)
        .map(() => Array(size).fill(0));
    return {
        getBoard: () => chessboard,
        getSize: () => size,
    };
}
//Takes the chessboard objet and a starting co-ordinate to generate a Knight object
function createKnight(chessboard, initialPosition) {
    const currentPosition = initialPosition;
    const possibleMoves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];
    //Uses knight Moveset and generates an array of valid moves based on current co-ordinates
    const calculateMoves = (currentPosition) => {
        const size = chessboard.getSize();
        let validMoves = [];
        possibleMoves.forEach((move) => {
            const newPosition = [
                currentPosition[0] + move[0],
                currentPosition[1] + move[1],
            ];
            if (newPosition[0] >= 0 &&
                newPosition[0] < size &&
                newPosition[1] >= 0 &&
                newPosition[1] < size) {
                validMoves.push(newPosition);
            }
        });
        return validMoves;
    };
    const findShortestPath = (startingPosition, targetPosition) => {
        let previousPosition = new Array(chessboard.getSize())
            .fill(null)
            .map(() => new Array(chessboard.getSize()).fill(null));
        //push() and shift() to create queue behaviour with this array
        //to implement breadth-first-traversal
        let queue = [startingPosition];
        previousPosition[startingPosition[0]][startingPosition[1]] =
            startingPosition;
        while (queue.length > 0) {
            let currentPosition = queue.shift();
            //if(currentPosition) conditional check to keep TypeScript happy
            if (currentPosition) {
                if (currentPosition[0] === targetPosition[0] &&
                    currentPosition[1] === targetPosition[1]) {
                    break;
                }
                let possibleMoves = calculateMoves(currentPosition);
                for (let move of possibleMoves) {
                    if (!previousPosition[move[0]][move[1]]) {
                        queue.push(move);
                        previousPosition[move[0]][move[1]] = currentPosition;
                    }
                }
            }
        }
        let shortestPath = [];
        let current = targetPosition;
        while (JSON.stringify(current) !== JSON.stringify(startingPosition)) {
            shortestPath.push(current);
            current = previousPosition[current[0]][current[1]];
        }
        shortestPath.push(startingPosition);
        shortestPath.reverse();
        if (shortestPath.length === 0) {
            return null;
        }
        console.log(`This is the shortest path : ${shortestPath}`);
        return shortestPath;
    };
    return {
        getKnight: () => currentPosition,
        setKnight: (newPosition) => {
            currentPosition[0] = newPosition[0];
            currentPosition[1] = newPosition[1];
        },
        calculateMoves,
        findShortestPath,
    };
}
let board = createChessboard(8);
let knight = createKnight(board, [0, 0]);
console.log(knight.findShortestPath([0, 0], [7, 7]));
console.log(knight.findShortestPath([0, 0], [0, 7]));
console.log(knight.findShortestPath([0, 0], [7, 0]));
console.log(knight.findShortestPath([0, 0], [0, 0]));
