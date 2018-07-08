import { h, Component } from 'preact';
// import Header from '../header';
import Contact from '../contact';
import state from '../../js/app-state';
import actions from '../../js/actions';
import freedux from '../../js/freedux';

export default class App extends Component {
  state = state;
  
  componentWillMount() {
    freedux(this, actions);
  }

  render(props, state) {
    const contacts = state.view === 'leads'
      ? state.leads
      : state.customers;

    return (
      <div>
        <h1>Testing</h1>
        {/* <Header view={ state.view }/> */}
        <main>
          { contacts.map(contact => <Contact {...contact}/>) }
        </main>
        {/* <Footer view={ state.view }/> */}
        {state.showModal &&
          <Modal/>
        }
      </div>
    );
  }
}
