import { h, Component } from 'preact';
import SwipeableViews from 'react-swipeable-views';
import Header from '../header';
import Contacts from '../contacts';
import Modals from '../modals';
import state from '../../js/app-state';
import actions from '../../js/actions';
import freedux from '../../js/freedux';
import fire from '../../js/fire';

let newIndex;

export default class App extends Component {
  state = state;
  
  componentWillMount() {
    freedux(this, actions);
    window.app = this;
  }

  handleChangeIndex = index => {
    newIndex = index;
  }

  handleTransitionEnd = () => {
    const view = newIndex
      ? 'clients'
      : 'leads';

    fire('linkstate', {key: 'view', val: view})();
  }

  render(props, state) {
    const index = state.view === 'leads' ? 0 : 1;

    return (
      <div>
        <div class={state.modal ? 'blur' : ''}>
          <Header
            view={state.view}
            muted={state.muted}
            history={state.history}/>
            
          <main class="slide-up">
            <SwipeableViews
              class="full-height"
              index={index}
              onChangeIndex={this.handleChangeIndex}
              onTransitionEnd={this.handleTransitionEnd}>

              <Contacts
                contacts={state.leads}
                view="leads"/>
              <Contacts
                contacts={state.clients}
                view="clients"/>

            </SwipeableViews>
          </main>
        </div>
        {state.modal &&
          <Modals
            view={state.view}
            modal={state.modal}
            pendingDeleteId={state.pendingDeleteId}/>
        }
        <audio id="yay" class="invisible" src="yay.mp3" type="audio/mpeg"/>
        <audio id="aww" class="invisible" src="aww.mp3" type="audio/mpeg"/>
      </div>
    );
  }
}