import {Board, checkBoard} from './sudoku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#sudoku').submit(function(event){
    event.preventDefault();

    var rowA = [parseInt($('#cell-0').val()), parseInt($('#cell-1').val()), parseInt($('#cell-2').val()), parseInt($('#cell-3').val()), parseInt($('#cell-4').val()), parseInt($('#cell-5').val()), parseInt($('#cell-6').val()), parseInt($('#cell-7').val()), parseInt($('#cell-8').val())];


    var rowB= [parseInt($('#cell-9').val()), parseInt($('#cell-10').val()), parseInt($('#cell-11').val()), parseInt($('#cell-12').val()), parseInt($('#cell-13').val()), parseInt($('#cell-14').val()), parseInt($('#cell-15').val()), parseInt($('#cell-16').val()), parseInt($('#cell-17').val())];


    var rowC= [parseInt($('#cell-18').val()), parseInt($('#cell-19').val()), parseInt($('#cell-20').val()), parseInt($('#cell-21').val()), parseInt($('#cell-22').val()), parseInt($('#cell-23').val()), parseInt($('#cell-24').val()), parseInt($('#cell-25').val()), parseInt($('#cell-26').val())];


    var rowD= [parseInt($('#cell-27').val()), parseInt($('#cell-28').val()), parseInt($('#cell-29').val()), parseInt($('#cell-30').val()), parseInt($('#cell-31').val()), parseInt($('#cell-32').val()), parseInt($('#cell-33').val()), parseInt($('#cell-34').val()), parseInt($('#cell-35').val())];


    var rowE= [parseInt($('#cell-36').val()), parseInt($('#cell-37').val()), parseInt($('#cell-38').val()), parseInt($('#cell-39').val()), parseInt($('#cell-40').val()), parseInt($('#cell-41').val()), parseInt($('#cell-42').val()), parseInt($('#cell-43').val()), parseInt($('#cell-44').val())];


    var rowF= [parseInt($('#cell-45').val()), parseInt($('#cell-46').val()), parseInt($('#cell-47').val()), parseInt($('#cell-48').val()), parseInt($('#cell-49').val()), parseInt($('#cell-50').val()), parseInt($('#cell-51').val()), parseInt($('#cell-52').val()), parseInt($('#cell-53').val())];


    var rowG= [parseInt($('#cell-54').val()), parseInt($('#cell-55').val()), parseInt($('#cell-56').val()), parseInt($('#cell-57').val()), parseInt($('#cell-58').val()), parseInt($('#cell-59').val()), parseInt($('#cell-60').val()), parseInt($('#cell-61').val()), parseInt($('#cell-62').val())];


    var rowH= [parseInt($('#cell-63').val()), parseInt($('#cell-64').val()), parseInt($('#cell-65').val()), parseInt($('#cell-66').val()), parseInt($('#cell-67').val()), parseInt($('#cell-68').val()), parseInt($('#cell-69').val()), parseInt($('#cell-70').val()), parseInt($('#cell-71').val())];


    var rowI= [parseInt($('#cell-72').val()), parseInt($('#cell-73').val()), parseInt($('#cell-74').val()), parseInt($('#cell-76').val()), parseInt($('#cell-77').val()), parseInt($('#cell-78').val()), parseInt($('#cell-79').val()), parseInt($('#cell-80').val()), parseInt($('#cell-81').val())];


    var board = Board(rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH, rowI);
    var results = checkBoard(board);
    $('#results').text(results);
  });
});
