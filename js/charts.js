google.load('visualization', '1', {
  packages: ['corechart']
});

google.setOnLoadCallback(function() {
  angular.bootstrap(document.body, ['demoGraph']);
});

var app = angular.module('demoGraph', []);
var controller = app.controller('graphCtrl', graphController);

function graphController($scope) {

var wrap = new google.visualization.ChartWrapper({
       'chartType':'LineChart',

       'dataSourceUrl':'https://docs.google.com/spreadsheets/d/12Lb0njSQUsb_Wxte7DYR-ZkdJhrl9_jYYGsQyQPUhjw/edit?usp=sharing',

       'containerId':'spectrum',
       'query':'SELECT A,D WHERE F >= 0 and F < 50 ORDER BY F',
       
       'options': {'title':'Índice de Angular en Latinoamérica', 'legend':'none', curveType: 'function',
          pointSize: 15,  hAxis: { 'title': 'Países' },
          vAxis: { 'title': 'Porcentaje de uso (%.)' }}
       });
      
     wrap.setRefreshInterval(9); //Actualiza los datos de la spreadsheet
     wrap.draw();
    

}