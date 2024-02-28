//Going to try and do this using OOP practices.

interface Chessboard {
  getBoard: () => number[][];
  getSize: () => number;
}

function createChessboard(size) {
  const chessboard = Array(size)
    .fill(0)
    .map(() => Array(size).fill(0));

  return {
    getBoard: () => chessboard,
    getSize: () => size,
  };
}

function createKnight(chessboard, startingPosition) {
  const currentPosition = startingPosition;

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

  const calculateMoves = () => {
    const size = chessboard.getSize();
    let validMoves: number[][] = [];
    possibleMoves.forEach((move) => {
      const newPosition = [
        currentPosition[0] + move[0],
        currentPosition[1] + move[1],
      ];
      if (
        newPosition[0] >= 0 &&
        newPosition[0] < size &&
        newPosition[1] >= 0 &&
        newPosition[1] < size
      ) {
        validMoves.push(newPosition);
      }
    });
    return validMoves;
  };

  return {
    getKnight: () => currentPosition,
    setKnight: (newPosition) => {
      currentPosition[0] = newPosition[0];
      currentPosition[1] = newPosition[1];
    },
    calculateMoves,
  };
}

function createNode() {
  //
}

function createGraph() {
  //
}
