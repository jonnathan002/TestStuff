'use strict';

var _ = require('lodash');

var allColumns = [
    {title: 'column1', width: 95},
    {title: 'column2'},
    {title: 'column3'},
    {title: 'column4'},
    {title: 'column5'},
    {title: 'column6'},
    {title: 'column7'},
    {title: 'column8'}
];
var removedColumns = [
    {title: 'column9'},
    {title: 'column10'},
    {title: 'column11'},
    {title: 'column12'},
    {title: 'column13'}
];
var columnas = {
    removeGridColumns: function(){
        debugger;
        if (allColumns) {
            debugger;
            var columnCount = [];
            _.each(allColumns, function (index) {
                if (index && !index.hidden) {
                    if (index.title == "Tasks") {
                        var taskColumns = [];
                        taskColumns = index.columns;
                        console.log("Tasks columns are: " + taskColumns);
                        for (var i = 0; i < taskColumns.length ; i++) {
                            console.log("i= " + taskColumns[i]);
                            if (!taskColumns[i].hidden) {
                                columnCount.push(taskColumns[i]);
                                debugger;
                            }
                        }
                    }
                    else { columnCount.push(index); }

                }
            });

            var indexToRemove = columnCount.length - 2;
            var datatoberemoved = columnCount[indexToRemove];
            debugger;
            if(datatoberemoved){
                while (datatoberemoved.title == "Name" || datatoberemoved.title == "#" || datatoberemoved.title == "Tasks" ||datatoberemoved.title == "Actions") {
                    indexToRemove--;
                    datatoberemoved = columnCount[indexToRemove];
                    if (!datatoberemoved) {
                        datatoberemoved = {};
                    }
                }
            }
            if (datatoberemoved) {
                // var grid = $("#ProjectsGrid").data("kendoGrid");
                var smallerColumnsCount = 0;
                if (columnCount != null || columnCount != undefined) {
                    _.each(columnCount, function (index) {
                        if (index.title == "column9" || index.title == "column10" || index.title == "column11" ||
                        index.title == "column12" || index.title == "column13" || index.title == "column1") {
                            if(index.width < 90) {

                                smallerColumnsCount++;
                                debugger;
                                removeColumn(datatoberemoved);
                                removedColumns.push(datatoberemoved);
                            }
                        }
                        else if (index.title == "Billable" || index.title == "OverdueTasks" || index.title == "Budget") {
                            if ($("th[data-title='" + index.title + "']").width() < 80) {

                                smallerColumnsCount++;
                                removeColumn(datatoberemoved);
                            }
                        }
                        else if (index.title == "#" || index.title == "Owner" || index.title == "Active" || index.title == "Default" ||
                        index.title == "ClosedTasks" || index.title == "OpenTasks" || index.title == "TotalTasks" || index.title == "RoleName") {
                            if ($("th[data-title='" + index.title + "']").width() < 60) {
                                //smallerColumnsCount++;
                                //grid.hideColumn(datatoberemoved);
                            }
                        }
                    });
                }
                console.log(columnCount);
                // console.log(removedColumns);
            }
        }
    },

    addColumns: function(){
        var smallerColumnsCount = 5;
        console.log('antes del pedo');
        console.log(smallerColumnsCount);
        console.log(removedColumns);
        console.log(allColumns);

        if (allColumns != null || allColumns != undefined) {
            _.each(allColumns, function (index) {
                if (index.title == "column9" || index.title == "column10" || index.title == "column11" ||
                index.title == "column12" || index.title == "column13" || index.title == "column1") {
                    if(index.width > 90) {

                        smallerColumnsCount--;

                        removedColumns =removeColumn(removedColumns,[removedColumns.length -1]);
                        allColumns.push(removedColumns[removedColumns.length -1])
                    }
                }
                else if (index.title == "Billable" || index.title == "OverdueTasks" || index.title == "Budget") {
                    if ($("th[data-title='" + index.title + "']").width() < 80) {

                        smallerColumnsCount++;
                        removeColumn(datatoberemoved);
                    }
                }
                else if (index.title == "#" || index.title == "Owner" || index.title == "Active" || index.title == "Default" ||
                index.title == "ClosedTasks" || index.title == "OpenTasks" || index.title == "TotalTasks" || index.title == "RoleName") {
                    if ($("th[data-title='" + index.title + "']").width() < 60) {
                        //smallerColumnsCount++;
                        //grid.hideColumn(datatoberemoved);
                    }
                }
            });
            console.log('despues del pedo');
            console.log(smallerColumnsCount,removedColumns,allColumns);
        }
    }
}

var removeColumn = function(array,column){
    return array.filter(function(el) {
        return el.title !== column.title;
    });
}
module.exports = columnas;
