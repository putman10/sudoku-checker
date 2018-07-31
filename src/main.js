import {Board, checkRow} from './sudoku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  var board = Board();
  var duplicates = checkRow(board);
  console.log(duplicates);
});
