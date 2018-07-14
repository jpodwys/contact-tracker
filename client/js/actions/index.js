import { findObjectIndexById, removeObjectByIndex, generateHexCode } from '../utils';
const tenYearsInMiliseconds = 315569520000;

function undo(el) {
  if(!el.state.history.length > 0) return;
  el.state.history.pop();
  const index = el.state.history.length - 1;
  const contacts = el.state.history[index];
  el.setState({ undo: true, contacts: [].concat(contacts) });
};

function play(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

function playAudio(base, muted, oldType, newType) {
  if(muted) return;
  if(oldType === 'lead' && newType === 'client'){
    play(base.querySelector('#yay'));
  } else if(oldType === 'client' && newType === 'lead'){
    play(base.querySelector('#aww'));
  }
};

function linkstate (el, { key, val, cb }) {
  el.setState({ [key]: val }, cb);
};

function addContact(el, { name, view }) {
  if(!name || !view) return;
  const now = Date.now();
  el.state.contacts.push({
    name,
    id: now,
    isNew: true,
    type: view.slice(0, -1),
    color: generateHexCode(),
    date: now - tenYearsInMiliseconds,
  });
  el.setState({ contacts: [].concat(el.state.contacts), modal: false });
};

function requestRemoveContact(el, { id }) {
  el.setState({ pendingDeleteId: id, modal: 'remove' });
};

function removeContact(el, { id }) {
  if(typeof id !== 'number' || id === -1) return;
  const contactIndex = findObjectIndexById(id, el.state.contacts);
  const contacts = removeObjectByIndex(contactIndex, el.state.contacts);
  el.setState({ contacts: [].concat(el.state.contacts), pendingDeleteId: -1, modal: false });
};

function updateContact(el, contact) {
  const contactIndex = findObjectIndexById(contact.id, el.state.contacts);
  const oldContact = el.state.contacts[contactIndex];
  playAudio(el.base, el.state.muted, oldContact.type, contact.type);
  el.state.contacts[contactIndex] = Object.assign({}, oldContact, contact);
  el.setState({ contacts: [].concat(el.state.contacts), modal: false });
};

export default { linkstate, addContact, requestRemoveContact, removeContact, updateContact, undo };
