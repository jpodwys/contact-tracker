import { h, Component } from 'preact';
import Header from '../header';
import Contacts from '../contacts';
import Modals from '../modals';
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
        <div class={state.modal ? 'blur' : ''}>
          <Header
            view={state.view}
            muted={state.muted}
            history={state.history}/>
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
        <audio id="audio" class="invisible" src="yaay.mp3" type="audio/mpeg"/>
      </div>
    );
  }
}
