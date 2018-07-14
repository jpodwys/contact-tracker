import { h, Component } from 'preact';
import Contact from '../contact';

export default class Contacts extends Component {
  render({ contacts, view }) {
    return contacts.length
      ? <div>{contacts.map(contact => <Contact {...contact}/>)}</div>
      : (
        <div class="center-text no-data">
          <h2>{'No ' + view + ' yet.'}</h2>
          <h2>Let's get started!</h2>
        </div>
      );
  }
}
