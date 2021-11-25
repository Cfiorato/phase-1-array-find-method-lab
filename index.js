
function superbowlWin(array){
    let foundWin = array.find(function(item){
        return item.result === 'W';
    })
    if (foundWin === undefined){
        let year = undefined
        return year
    } else {
        let year = foundWin.year
        return year
    }
    return year
};

