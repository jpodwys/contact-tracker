import { h, Component } from 'preact';
import Header from '../header';
import Contacts from '../contacts';
import Modals from '../modals';
import state from '../../js/app-state';
import actions from '../../js/actions';
import freedux from '../../js/freedux';
import fire from '../../js/fire';

export default class App extends Component {
  state = state;
  
  componentWillMount() {
    freedux(this, actions);
    // window.state = this.state;
  }

  render(props, state) {
    const contacts = state.view === 'leads'
      ? state.leads
      : state.clients;

    return (
      <div>
        <div class={state.modal ? 'blur' : ''}>
          <h1>Testing</h1>
          <Header view={state.view}/>
          <main class="slide-up">
            <Contacts
              contacts={contacts}
              view={state.view}/>
          </main>
        </div>
        {state.modal &&
          <Modals
            view={state.view}
            modal={state.modal}
            pendingDeleteId={state.pendingDeleteId}/>
        }
      </div>
    );
  }
}
