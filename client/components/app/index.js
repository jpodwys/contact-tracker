import { h, Component } from 'preact';
import Header from '../header';
import Contacts from '../contacts';
import Modal from '../modal';
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
      : state.clients;

    return (
      <div>
        <div class={state.showModal ? 'blur' : ''}>
          <h1>Testing</h1>
          <Header view={state.view}/>
          <main>
            <Contacts contacts={contacts} view={state.view}/>
          </main>
          {/* <Footer view={ state.view }/> */}
        </div>
        {state.showModal &&
          <Modal view={state.view}/>
        }
      </div>
    );
  }
}
