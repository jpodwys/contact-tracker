import { clone, sortByDate } from '../utils';

let muted = !!localStorage.getItem('muted');
let view = localStorage.getItem('view') || 'leads';
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

export default {
  get view() { return view; },
  set view(v) {
    view = v;
    localStorage.setItem('view', v);
  },

  get muted() { return muted; },
  set muted(m) {
    muted = m;
    if(m) localStorage.setItem('muted', 'true');
    else localStorage.removeItem('muted');
  },

  get contacts() { return contacts; },
  set contacts(c) {
    contacts = c.sort(sortByDate);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if(this.undo) this.undo = false;
    else this.history.push(contacts.map(clone));
  },

  get leads() {
    return contacts.filter(contact => contact.type === 'lead');
  },

  get clients() {
    return contacts.filter(contact => contact.type === 'client');
  },

  undo: false,
  modal: false,
  pendingDeleteId: -1,
  history: [contacts.map(clone)]
};
