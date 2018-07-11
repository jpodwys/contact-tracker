import { h, Component } from 'preact';
import Icon from '../icon';
import fire from '../../js/fire';

export default class Header extends Component {
	render({ view, muted, history }) {
		return (
			<header class="elevated">
				<span class="nav-set flex-grow">
					{!muted &&
						<Icon icon="sound-on" key="header-sound-on" onclick={fire('linkstate', {key: 'muted', val: !muted})} class="grow"/>
				  }
				  {muted &&
				  	<Icon icon="sound-off" key="header-sound-off" onclick={fire('linkstate', {key: 'muted', val: !muted})} class="grow"/>
				  }
				</span>

				<span class="nav-set">
					<h3
						class={view === 'leads' ? 'grow active' : 'grow'}
						onclick={fire('linkstate', {key: 'view', val: 'leads'})}>
						Leads
					</h3>
					<h3
						class={view === 'clients' ? 'grow active' : 'grow'}
						onclick={fire('linkstate', {key: 'view', val: 'clients'})}>
						Clients
					</h3>
				</span>

				<span class="button button--fab add-entry elevated grow" onclick={fire('linkstate', {key: 'modal', val: 'add'})}>
					<a>
						<Icon icon="clear" key="header-add"/>
					</a>
				</span>
			</header>
		);
	}
}
