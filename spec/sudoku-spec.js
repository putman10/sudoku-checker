import { Board, checkBoard, checkRow } from './../src/sudoku.js';

describe('Board', function(){
 it('should test whether a board has 18 arrays', function(){
   var board = Board();
   expect(board.length).toEqual(18);
 });
});

describe('checkRow', function(){
 it('should test whether a row returns false', function(){
   var board = Board();
   var duplicates = checkRow(board[0]);
   expect(duplicates).toEqual(false);
 });
});

describe('checkBoard', function(){
 it('should test whether a board returns false', function(){
   var board = Board();
   var duplicates = checkBoard(board);
   expect(duplicates).toEqual(false);
 });
});
