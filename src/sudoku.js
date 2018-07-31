export function Board (rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH, rowI){
  var allArrays = [];

  var col1 = [rowA[0], rowB[0], rowC[0], rowD[0], rowE[0], rowF[0], rowG[0], rowH[0], rowI[0]];
  var col2 = [rowA[1], rowB[1], rowC[1], rowD[1], rowE[1], rowF[1], rowG[1], rowH[1], rowI[1]];
  var col3 = [rowA[2], rowB[2], rowC[2], rowD[2], rowE[2], rowF[2], rowG[2], rowH[2], rowI[2]];
  var col4 = [rowA[3], rowB[3], rowC[3], rowD[3], rowE[3], rowF[3], rowG[3], rowH[3], rowI[3]];
  var col5 = [rowA[4], rowB[4], rowC[4], rowD[4], rowE[4], rowF[4], rowG[4], rowH[4], rowI[4]];
  var col6 = [rowA[5], rowB[5], rowC[5], rowD[5], rowE[5], rowF[5], rowG[5], rowH[5], rowI[5]];
  var col7 = [rowA[6], rowB[6], rowC[6], rowD[6], rowE[6], rowF[6], rowG[6], rowH[6], rowI[6]];
  var col8 = [rowA[7], rowB[7], rowC[7], rowD[7], rowE[7], rowF[7], rowG[7], rowH[7], rowI[7]];
  var col9 = [rowA[8], rowB[8], rowC[8], rowD[8], rowE[8], rowF[8], rowG[8], rowH[8], rowI[8]];

  var sq1 = [rowA[0],rowA[1],rowA[2],rowB[0],rowB[1],rowB[2],rowC[0],rowC[1],rowC[2]];
  var sq2 = [rowA[3],rowA[4],rowA[5],rowB[3],rowB[4],rowB[5],rowC[3],rowC[4],rowC[5]];
  var sq3 = [rowA[6],rowA[7],rowA[8],rowB[6],rowB[7],rowB[8],rowC[6],rowC[7],rowC[8]];
  var sq4 = [rowD[0],rowD[1],rowD[2],rowE[0],rowE[1],rowE[2],rowF[0],rowF[1],rowF[2]];
  var sq5 = [rowD[3],rowD[4],rowD[5],rowE[3],rowE[4],rowE[5],rowF[3],rowF[4],rowF[5]];
  var sq6 = [rowD[6],rowD[7],rowD[8],rowE[6],rowE[7],rowE[8],rowF[6],rowF[7],rowF[8]];
  var sq7 = [rowG[0],rowG[1],rowG[2],rowH[0],rowH[1],rowH[2],rowI[0],rowI[1],rowI[2]];
  var sq8 = [rowG[3],rowG[4],rowG[5],rowH[3],rowH[4],rowH[5],rowI[3],rowI[4],rowI[5]];
  var sq9 = [rowG[6],rowG[7],rowG[8],rowH[6],rowH[7],rowH[8],rowI[6],rowI[7],rowI[8]];

  allArrays.push(rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH, rowI, col1, col2, col3, col4, col5, col6, col7, col8, col9, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9);
  return allArrays;
}

export function checkBoard(allArrays) {
  var allResults = [];

  allArrays.forEach(function(array){

    var result = checkRow(array);
    allResults.push(result);
  });

  if(allResults.includes(false)){
    return false;
  }
  return true;
}

export function checkRow(array) {

  for(var x = 1; x <= 9; x++){
    debugger;
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
