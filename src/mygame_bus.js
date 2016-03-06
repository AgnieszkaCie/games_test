//// Cache DOM search results for future use
//var $clock = $('#clock');
//var $board = $('#board');
//var $p1Score = $('#p1Score');
//var $p2Score = $('#p2Score');
//
//// Create initial game state
//var state = {
//    playerName: 'Janusz',
//    time: 20,
//    score: {
//        player: 0,
//        cpu: 0
//    }
//};
//
//$('#startGameButton').click(function () {
//    startGame(state);
//});
//
//// Display initial data from state on screen
//displayClock($clock, state);
//displayPlayerScore($p1Score, state);
//displayCpuScore($p2Score, state);
//
//
//
//// Add interaction to given table
//function makeInteractive(table) {
//    return $(table).on('click', 'td', function (event, isCPU) {
//
//        if (isCPU === true) {
//            state.score.cpu += $(this).hasClass('black') ? -1 : 1;
//        } else {
//            state.score.player += $(this).hasClass('black') ? 1 : -1;
//        }
//
//        displayPlayerScore($p1Score, state);
//        displayCpuScore($p2Score, state);
//
//        $(this).toggleClass('black');
//    });
//}
//
//
//// Create new table
//function createTable(width, height) {
//    var $table = $('<table>');
//    var $row, $cell;
//
//    for (var x = 0; x < height; x++) {
//        $row = $('<tr>');
//        for (var y = 0; y < width; y++) {
//            $cell = $('<td>');
//            $row.append($cell);
//        }
//        $table.append($row);
//    }
//
//    return $table;
//}
//
//$board.append(
//    convertToCheckboard(
//        createTable(4, 4)
//    )
//);
//
//
////****************************
//
//
//// Display player score
//function displayPlayerScore(node, state) {
//    $(node).text(state.playerName + ': ' + state.score.player);
//}
//
//// Display CPU score
//function displayCpuScore(node, state) {
//    $(node).text('CPU: ' + state.score.cpu);
//}
//
//// Display clock
//function displayClock(node, state) {
//    $(node).text('Time: ' + state.time);
//}
//
//// Convert table to checkboard
//function convertToCheckboard(table) {
//    $(table).find('tr').each(function (rowIndex) {
//        $(this).find('td').each(function (cellIndex) {
//            $(this).addClass( (rowIndex + cellIndex) % 2 === 0 ? 'black' : '');
//        });
//    });
//    return table;
//}
//
//function updateView(state) {
//
//}
//
//
////***************************************
//function startGame(initialState) {
//
//    makeInteractive($('table'));
//
//    // Group intervals to handle time management
//    var cpuActionIntervalId = setInterval(function () {
//        var numberOfCells = $('td').length;
//        $('td').eq(parseInt(Math.random() * numberOfCells)).trigger('click', true);
//    }, 1000);
//
//    var clockIntervalId = setInterval(function () {
//        state.time -= 1;
//        displayClock($clock, state);
//    }, 1000);
//
//    setTimeout(function () {
//        clearInterval(cpuActionIntervalId);
//        clearInterval(clockIntervalId);
//        $('table').off('click');
//    }, state.time * 1000);
//}
//
//<link rel="stylesheet" href="main.css">
//    <div id="app">
//    <div id="nav">
//    <button id="startGameButton">Start game</button>
//</div>
//<div id="clock"></div>
//    <div id="board"></div>
//    <div id="p1Score" class="score"></div>
//    <div id="p2Score" class="score"></div>
//    </div>
//    <script src="../vendor/jquery-2.1.4.js"></script>
//    <script src="./js/view.js"></script>
//    <script src="./js/model.js"></script>
//    <script src="main.js"></script>
//
//    td {
//    width: 50px;
//    height: 50px;
//    border: 1px solid #000;
//}
//
//.black {
//    background: #000;
//}
//
//#p1Score {
//    margin: 50px;
//    color: #0c0;
//}
//
//#p2Score {
//    margin: 50px;
//    color: #c00;
//}
//
//.score {
//    font-size: 25px;
//    font-weight: bold;
//}
//#timer{
//    border: 1px dotted red;
//    height: 20px;
//}
//
