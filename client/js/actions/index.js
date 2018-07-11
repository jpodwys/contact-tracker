import { findObjectIndexById, removeObjectByIndex, generateHexCode } from '../utils';
const tenYearsInMiliseconds = 315569520000;

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
  if(oldContact.type !== 'client' && contact.type === 'client') el.base.querySelector('#audio').play();
  el.state.contacts[contactIndex] = Object.assign(oldContact, contact);
  el.setState({ contacts: [].concat(el.state.contacts), modal: false });
};

export default { linkstate, addContact, requestRemoveContact, removeContact, updateContact };
