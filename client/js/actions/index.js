import { findObjectIndexById, removeObjectByIndex, generateHexCode } from '../utils';

function linkstate (el, { key, val, cb }) {
  el.setState({ [key]: val }, cb);
};

function addContact(el, { name, view }) {
  const contact = {
    name,
    id: Date.now(),
    type: view.slice(0, -1),
    color: generateHexCode()
  };
  el.state.contacts.push(contact);
  el.setState({ contacts: [].concat(el.state.contacts) });
};

function removeContact(el, { id }) {
  const contactIndex = findObjectIndexById(id, el.state.contacts);
  el.state.contacts = removeObjectByIndex(contactIndex, el.state.contacts);
  el.setState({ contacts: [].concat(el.state.contacts) });
};

function updateContact(el, { contact }) {
  const contactIndex = findObjectIndexById(id, el.state.contacts);
  const oldContact = el.state.contacts[contactIndex];
  el.state.contacts[contactIndex] = Object.assign(oldContact, contact);
  el.setState({ contacts: [].concat(el.state.contacts) });
};

export default { linkstate, addContact, removeContact, updateContact };
