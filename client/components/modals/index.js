import { h, Component } from 'preact';
import Modal from '../modal';
import fire from '../../js/fire';

export default class Modals extends Component {
  componentDidMount() {
    const input = this.base.querySelector('#addName');
    if(input) input.focus();
  }

  componentWillUnmount() {
    const input = this.base.querySelector('#addName');
    if(input) input.value = '';
  }

  handleSubmit = e => {
    e.preventDefault();
    fire('addContact', {
      name: this.base.querySelector('#addName').value,
      view: this.props.view
    })();
  }
  render({ view, modal, pendingDeleteId }) {
    let markup;
    if(modal === 'add') {
      markup = (
        <form onsubmit={this.handleSubmit}>
          <h2>{'Add a ' + view.slice(0, -1)}</h2>
          <input id="addName" placeholder="Name"/>
          <input type="submit" value="Add"/>
        </form>
      );
    } else if(modal === 'remove') {
      markup = (
        <div>
          <h2>Are you sure?</h2>
          <input type="submit" class="destructive" value="Delete" onclick={fire('removeContact', {id: pendingDeleteId})}>{'Delete ' + view.slice(0, -1)}</input>
        </div>
      );
    }

    return (
      <Modal>
        {markup}
      </Modal>
    );
  }
}
