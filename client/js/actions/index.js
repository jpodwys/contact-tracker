import { findObjectIndexById, removeObjectByIndex, generateHexCode } from '../utils';
const tenYearsInMiliseconds = 315569520000;

function linkstate (el, { key, val, cb }) {
  el.setState({ [key]: val }, cb);
};

function addContact(el, { name, view }) {
  const now = Date.now();
  el.state.contacts.push({
    name,
    id: now,
    isNew: true,
    type: view.slice(0, -1),
    color: generateHexCode(),
    date: now - tenYearsInMiliseconds,
  });
  el.setState({ contacts: [].concat(el.state.contacts), showModal: false });
};

function removeContact(el, { id }) {
  const contactIndex = findObjectIndexById(id, el.state.contacts);
  el.state.contacts = removeObjectByIndex(contactIndex, el.state.contacts);
  el.setState({ contacts: [].concat(el.state.contacts) });
};

function updateContact(el, { id, contact }) {
  const contactIndex = findObjectIndexById(id, el.state.contacts);
  const oldContact = el.state.contacts[contactIndex];
  el.state.contacts[contactIndex] = Object.assign(oldContact, contact);
  el.setState({ contacts: [].concat(el.state.contacts) });
};

export default { linkstate, addContact, removeContact, updateContact };
