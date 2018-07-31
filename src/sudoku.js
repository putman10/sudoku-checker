export function Board (){
  var allArrays = [];
  var rowA = [5, 3, 0, 0, 7, 0, 0, 0, 0];
  var rowB = [6, 0, 0, 1, 9, 5, 0, 0, 0];
  var rowC = [ 0, 9, 8, 0, 0, 0, 0, 6, 0];
  var rowD = [8, 0, 0, 0, 6, 0, 0, 0, 3];
  var rowE = [4, 0, 0, 8, 0, 3, 0, 0, 1];
  var rowF = [ 0, 0, 0, 0, 2, 0, 0, 0, 6];
  var rowG = [ 0, 6, 0, 0, 0, 0, 2, 8, 0];
  var rowH = [ 0, 0, 0, 4, 1, 9, 0, 0, 5];
  var rowI = [ 0, 0, 0, 0, 8, 0, 0, 7, 9];

  var col1 = [5, 6, 0, 8, 4, 0, 0, 0, 0];
  var col2 = [3, 0, 9, 0, 0, 0, 6, 0, 0];
  var col3 = [ 0, 0, 8, 0, 0, 0, 0, 0, 0];
  var col4 = [ 0, 1, 0, 0, 8, 0, 0, 4, 0];
  var col5 = [7, 9, 0, 6, 0, 2, 0, 1, 8];
  var col6 = [ 0, 5, 0, 0, 3, 0, 0, 9, 0];
  var col7 = [ 0, 0, 0, 0, 0, 0, 2, 0, 0];
  var col8 = [ 0, 0, 6, 0, 0, 0, 8, 0, 7];
  var col9 = [ 2, 4, 7, 3, 1, 6, 8, 5, 9];

  allArrays.push(rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH, rowI, col1, col2, col3, col4, col5, col6, col7, col8, col9);
  return col9;
}

export function checkRow(array) {
  var col9 = array;
  console.log(array);
  // allArrays.forEach(function(array){
    for(var x = 1; x <= 9; x++){
      array.splice(1, x);
      console.log(x);
    }
    if (array.length != 0) {
      return array;
    }
    else {
      return array;
    }
}
