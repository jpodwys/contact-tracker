import { h, Component } from 'preact';
import Icon from '../icon';
import fire from '../../js/fire';
import fromNow from '../../js/from-now';

export default class Contact extends Component {
  handleUpdateContact = e => {
    fire('updateContact', {
      id: this.props.id,
      date: Date.now(),
      isNew: false
    })();
  }

  render({ id, type, name, date, color, isNew }) {
    const ago = isNew
      ? 'Never'
      : fromNow(date, { max: 1, ago: true });

    return (
      <div class="contact-wrapper" key={id}>
        <div class="contact"
          style={"background-color:" + color}
          onclick={this.handleUpdateContact}>
          <h3>{name}</h3>
          <span>{ago}</span>
        </div>
        <span class="contact--controls">
          <Icon
            icon="delete"
            onclick={fire('requestRemoveContact', {id})}/>
          <Icon
            icon="back"
            class={type === 'lead' ? 'rotate-180' : ''}
            onclick={fire('updateContact', {id, type: type === 'lead' ? 'client' : 'lead'})}/>
        </span>
      </div>
    );
  }
}
