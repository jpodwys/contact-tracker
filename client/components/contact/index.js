import { h, Component } from 'preact';
// import Icon from '../icon';
import fire from '../../js/fire';

export default class Contact extends Component {
  // clearFilterText = () => {
  //   this.base.querySelector('#filterTextInput').focus();
  //   fire('filterByText', '')();
  // }

  // showFilterText = () => {
  //   fire('linkstate', {key: 'showFilterInput', val: true, cb: function(){
  //     this.base.querySelector('#filterTextInput').focus();
  //   }})();
  // }

  // cancelAndBlur = (e) => {
  //   e.preventDefault();
  //   this.base.querySelector('#filterTextInput').blur();
  // }

  // copy = () => {
  //   let date = document.getElementById('entryDate').innerText;
  //   let text = document.getElementById('entryText').innerText;
  //   copyText(date + ' ' + text);
  // }

  render({ id, type, name, date, color }) {
    return (
      <div style={"background-color:" + color}>
        <h3>{name}</h3>
      </div>
    );
  }
}
