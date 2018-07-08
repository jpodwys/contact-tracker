import { h, Component } from 'preact';
// import Icon from '../icon';
import fire from '../../js/fire';

export default class Modal extends Component {
  componentDidMount() {
    this.base.querySelector('#addName').focus();
  }

  componentWillUnmount() {
    this.base.querySelector('#addName').value = '';
  }

  handleSubmit = e => {
    e.preventDefault();
    fire('addContact', {
      name: this.base.querySelector('#addName').value,
      view: this.props.view
    })();
  }

  handleOverlayClick = e => {
    const dialog = this.base.querySelector('.dialog');
    if(e.target === dialog || dialog.contains(e.target)) return;
    fire('linkstate', {key: 'showModal', val: false})();
  }

  render({ view }) {
    return (
      <div class="modal overlay grow" onclick={this.handleOverlayClick}>
        <div class="dialog">
          <form onsubmit={this.handleSubmit}>
            <input id="addName" placeholder="Name"/>
            <input type="submit" value="Add"/>
          </form>
        </div>
      </div>
    );
  }
}
