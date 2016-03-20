/**
 * Created by agnieszkacieslawska on 19.03.16.
 */
function knightVsKing(knightPosition, kingPosition) {

    // Three possible outputs are "Knight", "King" and "None".
    // Happy Coding :)
    function convert(letter){
        var letters=['A','B','C', 'D','E','F','G','H'];
        return letters.indexOf(letter) + 1;
    }
    var knight = {
        x: knightPosition[0],
        y: convert(knightPosition[1])
    }, king = {
        x: kingPosition[0],
        y: convert(kingPosition[1])
    };
    var diff ={
            x:Math.abs(knight.x- king.x),
            y:Math.abs(knight.y- king.y)
        };

    if (diff.x<= 1 && diff.y <= 1){
        return "King";
    }
    if (
    diff.x===2 && diff.y===1||
    diff.x ===1 && diff.y===2
        ){
        return "Knight";
    }
    return "None";

}
