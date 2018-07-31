export function Board (rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH, rowI){
  var allArrays = [];

  var col1 = [5, 6, 1, 8, 4, 7, 9, 2, 3];
  var col2 = [3, 7, 9, 5, 2, 1, 6, 8, 4];
  var col3 = [ 4, 2, 8, 9, 6, 3, 1, 7, 5];
  var col4 = [ 6, 1, 3, 7, 8, 9, 5, 4, 2];
  var col5 = [7, 9, 4, 6, 5, 2, 3, 1, 8];
  var col6 = [ 8, 5, 2, 1, 3, 4, 7, 9, 6];
  var col7 = [ 9, 3, 5, 4, 7, 8, 2, 6, 1];
  var col8 = [ 1, 4, 6, 2, 9, 5, 8, 3, 7];
  var col9 = [ 2, 8, 7, 3, 1, 6, 4, 5, 9];

  var sq1 = [1,2,3,4,5,6,7,8,9];
  var sq2 = [1,2,3,4,5,6,7,8,9];
  var sq3 = [1,2,3,4,5,6,7,8,9];
  var sq4 = [1,2,3,4,5,6,7,8,9];
  var sq5 = [1,2,3,4,5,6,7,8,9];
  var sq6 = [1,2,3,4,5,6,7,8,9];
  var sq7 = [1,2,3,4,5,6,7,8,9];
  var sq8 = [1,2,3,4,5,6,7,8,9];
  var sq9 = [1,2,3,4,5,6,7,8,9];

  allArrays.push(rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH, rowI, col1, col2, col3, col4, col5, col6, col7, col8, col9, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  return allArrays;
}

export function checkBoard(allArrays) {
var allResults = [];
  allArrays.forEach(array => {
    var result = checkRow(array);
    allResults.push(result);
  });
if(allResults.includes(false)){
  return false;
}
  return true;
}

export function checkRow(array) {
  // allArrays.forEach(function(array){
    for(var x = 1; x <= 9; x++){
      var index = array.indexOf(x);
      if(index != -1){
      array.splice(index, 1);
      }
    }
    if (array.length != 0) {
      return false;
    }
    else {
      return true;
    }
}
