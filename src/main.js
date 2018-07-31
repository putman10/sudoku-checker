import {Board, checkBoard} from './sudoku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#sudoku').submit(function(event){
    event.preventDefault();

    var rowA = [$('#cell-0').val(), $('#cell-1').val(), $('#cell-2').val(), $('#cell-3').val(), $('#cell-4').val(), $('#cell-5').val(), $('#cell-6').val(), $('#cell-7').val(), $('#cell-8').val()];


    var rowB= [$('#cell-9').val(), $('#cell-10').val(), $('#cell-11').val(), $('#cell-12').val(), $('#cell-13').val(), $('#cell-14').val(), $('#cell-15').val(), $('#cell-16').val(), $('#cell-17').val()];


    var rowC= [$('#cell-18').val(), $('#cell-19').val(), $('#cell-20').val(), $('#cell-21').val(), $('#cell-22').val(), $('#cell-23').val(), $('#cell-24').val(), $('#cell-25').val(), $('#cell-26').val()];


    var rowD= [$('#cell-27').val(), $('#cell-28').val(), $('#cell-29').val(), $('#cell-30').val(), $('#cell-31').val(), $('#cell-32').val(), $('#cell-33').val(), $('#cell-34').val(), $('#cell-35').val()];


    var rowE= [$('#cell-36').val(), $('#cell-37').val(), $('#cell-38').val(), $('#cell-39').val(), $('#cell-40').val(), $('#cell-41').val(), $('#cell-42').val(), $('#cell-43').val(), $('#cell-44').val()];


    var rowF= [$('#cell-45').val(), $('#cell-46').val(), $('#cell-47').val(), $('#cell-48').val(), $('#cell-49').val(), $('#cell-50').val(), $('#cell-51').val(), $('#cell-52').val(), $('#cell-53').val()];


    var rowG= [$('#cell-54').val(), $('#cell-55').val(), $('#cell-56').val(), $('#cell-57').val(), $('#cell-58').val(), $('#cell-59').val(), $('#cell-60').val(), $('#cell-61').val(), $('#cell-62').val()];


    var rowH= [$('#cell-63').val(), $('#cell-64').val(), $('#cell-65').val(), $('#cell-66').val(), $('#cell-67').val(), $('#cell-68').val(), $('#cell-69').val(), $('#cell-70').val(), $('#cell-71').val()];


    var rowI= [$('#cell-72').val(), $('#cell-73').val(), $('#cell-74').val(), $('#cell-76').val(), $('#cell-77').val(), $('#cell-78').val(), $('#cell-79').val(), $('#cell-80').val(), $('#cell-71').val()];


    var board = Board(rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH, rowI);
    var results = checkBoard(board);
    $('#results').text(results);
  });
});
