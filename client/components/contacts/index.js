import { h, Component } from 'preact';
import Contact from '../contact';

export default class Contacts extends Component {
  render({ contacts, view }) {
    return contacts.length
      ? <div> {contacts.map(contact => <Contact {...contact}/>)} </div>
      : <h2 class="no-data center-text">{'No ' + view + ' yet. Let\'s get started!'}</h2>;
  }
}
