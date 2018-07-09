import { h, Component } from 'preact';
// import Icon from '../icon';
import fire from '../../js/fire';

export default class Modal extends Component {
  handleOverlayClick = e => {
    if(!this || !this.base || !this.base.querySelector) return;
    const dialog = this.base.querySelector('.dialog');
    if(e.target === dialog || dialog.contains(e.target)) return;
    fire('linkstate', {key: 'modal', val: false})();
  }

  render({ view, children }) {
    return (
      <div class="modal overlay grow" onclick={this.handleOverlayClick}>
        <div class="dialog">
          {children[0]}
        </div>
      </div>
    );
  }
}
