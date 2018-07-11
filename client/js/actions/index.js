import { findObjectIndexById, removeObjectByIndex, generateHexCode } from '../utils';
const tenYearsInMiliseconds = 315569520000;

function undo(el) {
  if(!el.state.history.length) return;
  const contacts = el.state.history.pop();
  el.setState({ undo: true, history: [].concat(el.state.history), contacts });
};

function playAudio(muted, oldType, newType, audio) {
  if(muted || oldType === 'client' || newType !== 'client') return;
  audio.pause();
  audio.currentTime = 0;
  audio.play();
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
  el.state.contacts = removeObjectByIndex(contactIndex, el.state.contacts);
  el.setState({ contacts: [].concat(el.state.contacts), pendingDeleteId: -1, modal: false });
};

function updateContact(el, contact) {
  const contactIndex = findObjectIndexById(contact.id, el.state.contacts);
  const oldContact = el.state.contacts[contactIndex];
  playAudio(el.state.muted, oldContact.type, contact.type, el.base.querySelector('#audio'));
  el.state.contacts[contactIndex] = Object.assign(oldContact, contact);
  el.setState({ contacts: [].concat(el.state.contacts), modal: false });
};

export default { linkstate, addContact, requestRemoveContact, removeContact, updateContact };
