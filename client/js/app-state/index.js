let view = localStorage.getItem('view') || 'leads';
let contacts = localStorage.getItem('contacts') || [];

export default {
  get view() { return view; },
  set view(v) {
    view = v;
    localStorage.setItem('view', v);
  },
  get contacts() { return contacts; },
  set contacts(c) {
    contacts = c;
    localStorage.setItem('contacts', JSON.stringify(c));
  },
  get leads() {
    return this.contacts
      .filter(contact => contact.type === 'lead')
      .sort((a, b) => a.date < b.date);
  },
  get clients() {
    return this.contacts
      .filter(contact => contact.type === 'customer')
      .sort((a, b) => a.date < b.date);
  },
  showModal: false
};
