let view = localStorage.getItem('view') || 'leads';
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
let muted = !!localStorage.getItem('muted');

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
    contacts = c.sort((a, b) => a.date > b.date);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },

  get leads() {
    return contacts.filter(contact => contact.type === 'lead');
  },

  get clients() {
    return contacts.filter(contact => contact.type === 'client');
  },
  
  modal: false,
  pendingDeleteId: -1
};
