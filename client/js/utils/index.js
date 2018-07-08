function findObjectIndexById (id, list) {
  return list.map(function(obj){
    return obj.id;
  }).indexOf(id);
};

function removeObjectByIndex (index, list) {
  list.splice(index, 1);
  return list;
};

function generateHexCode () {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
};

export { findObjectIndexById, removeObjectByIndex, generateHexCode };
