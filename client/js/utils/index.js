function findObjectIndexById (id, list) {
  return list.map(function(obj){
    return obj.id;
  }).indexOf(id);
};

function removeObjectByIndex (index, list) {
  list.splice(index, 1);
  return list;
};

export { findObjectIndexById, removeObjectByIndex };
