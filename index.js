
  function superbowlWin(record) {
    let winningSeason = record.find(function(game){
        return game['result'] === "W";
    })
    if (winningSeason){
        return winningSeason['year'];
    }
  }
