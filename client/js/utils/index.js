function clone(obj) {
  return Object.assign({}, obj);
};

function sortByDate(a, b) {
  return a.date > b.date;
};

function findObjectIndexById (id, list) {
  return list.map(obj => obj.id).indexOf(id);
};

function removeObjectByIndex (index, list) {
  list.splice(index, 1);
  return list;
};

function rgb(string){
  return string.match(/\w\w/g).map(b => parseInt(b, 16));
};

// Generate a randomized hex code within a restricted range
function generateHexCode () {
  // https://stackoverflow.com/questions/23277585/javascript-pick-a-random-hex-color-between-a-start-and-end-color
  const rgb1 = rgb('#77adff');
  const rgb2 = rgb('#ff8300');

  let rgb3 = [];
  for (var i = 0; i < 3; i++) rgb3[i] = rgb1[i] + Math.random() * (rgb2[i] - rgb1[i])|0;

  return '#' + rgb3
    .map(n => n.toString(16))
    .map(s => "00".slice(s.length) + s).join('');
};

export { findObjectIndexById, removeObjectByIndex, generateHexCode, clone, sortByDate };
