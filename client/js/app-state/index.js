let state = {
  history: [],
  undo: false,
  modal: false,
  pendingDeleteId: -1,
  view localStorage.getItem('view') || 'leads',
  muted: !!localStorage.getItem('muted'),
  contacts: JSON.parse(localStorage.getItem('contacts')) || []
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
      case 'view':     localStorage.setItem(prop, value);     break;
      case 'muted':    localStorage.setItem(prop, !!value);   break;
      case 'contacts': {
        localStorage.setItem(prop, JSON.stringify(value));
        if(obj.undo){
          obj.history.push(obj);
          obj.undo = false;
        }
        break;
      }
    }
  }
};

export default new Proxy(state, handler);
