import { clone, sortByDate } from '../utils';

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

let state = {
  undo: false,
  modal: false,
  contacts: contacts.sort(sortByDate),
  history: [contacts.map(clone)],
  pendingDeleteId: -1,
  muted: localStorage.getItem('muted') === 'true',
  view: localStorage.getItem('view') || 'leads'
};

const handler = {
  get: function(obj, prop) {
    switch(prop) {
      case 'leads':
        return obj.contacts.filter(contact => contact.type === 'lead');
      case 'clients':
        return obj.contacts.filter(contact => contact.type === 'client');
      default: return obj[prop];
    }
  },

  set: function(obj, prop, value) {
    obj[prop] = value;
    switch(prop) {
      case 'view':    localStorage.setItem(prop, value);     break;
      case 'muted':   localStorage.setItem(prop, !!value);   break;
      case 'contacts': {
        let contacts = value.sort(sortByDate);
        obj[prop] = contacts;
        localStorage.setItem(prop, JSON.stringify(contacts));
        if(obj.undo) obj.undo = false;
        else obj.history.push(contacts.map(clone));
        break;
      }
    }
    return true;
  }
};

export default new Proxy(state, handler);
