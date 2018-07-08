import { h, Component } from 'preact';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/RelativeTime'
// import Icon from '../icon';
import fire from '../../js/fire';

dayjs.extend(RelativeTime);

export default class Contact extends Component {
  render({ id, type, name, date, color, isNew }) {
    const ago = isNew
      ? 'Never'
      : dayjs().to(dayjs(date));
    return (
      <div
        key={id}
        class="contact"
        style={"background-color:" + color}
        onclick={fire('updateContact', {id, contact: {date: Date.now(), isNew: false}})}>
        <h3>{name}</h3>
        <span>{ago}</span>
      </div>
    );
  }
}
