import { h, Component } from 'preact';
// import Icon from '../icon';
import fire from '../../js/fire';

export default class Modal extends Component {
  componentWillUnmount() {
    this.base.querySelector('#addName').value = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    const detail = {
      name: this.base.querySelector('#addName').value,
      view: this.props.view
    };
    fire('addContact', detail)();
  }

  render({ view }) {
    return (
      <div>
        <form onsubmit={handleSubmit}>
          <input id="addName" placeholder="Name"/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
}
