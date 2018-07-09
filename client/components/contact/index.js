import { h, Component } from 'preact';
import dayjs from 'dayjs';
const RelativeTime = require('dayjs/plugin/RelativeTime');
import Icon from '../icon';
import fire from '../../js/fire';

dayjs.extend(RelativeTime);

export default class Contact extends Component {
  render({ id, type, name, date, color, isNew }) {
    const ago = isNew
      ? 'Never'
      : dayjs().to(dayjs(date));

    return (
      <div class="contact-wrapper" key={id}>
        <div class="contact"
          style={"background-color:" + color}
          onclick={fire('updateContact', {id, date: Date.now(), isNew: false})}>
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
