import { h, Component } from 'preact';
import Icon from '../icon';
import fire from '../../js/fire';

export default class Header extends Component {
	render({ view }) {
		return (
			<header class="elevated">
				<span class="nav-set">
					<h3
						class={view === 'leads' ? 'grow active' : 'grow'}
						onclick={fire('linkstate', {key: 'view', val: 'leads'})}>
						Leads
					</h3>
				</span>

				<span class="nav-set">
					<h3
						class={view === 'clients' ? 'grow active' : 'grow'}
						onclick={fire('linkstate', {key: 'view', val: 'clients'})}>
						Clients
					</h3>
				</span>

				{/*
				<span class="nav-set">
					{view === '/entries' && showFilterInput &&
						<Icon icon="clear" key="header-clear" onclick={this.clearFilterText} class="grow"/>
				  }
				  {view === '/entries' && !showFilterInput &&
				  	<Icon icon="search" key="header-search" onclick={this.showFilterText} class="grow"/>
				  }
				  {(view === '/entry' || view === '/new') &&
				  	<Icon icon="copy" key="header-copy" onclick={this.copy} class="grow"/>
					}
					{entry && !entry.newEntry && (view === '/entry' || view === '/new') &&
						<Icon icon="delete" key="header-delete" onclick={fire('linkstate', {key: 'toastConfig', val: {type: 'confirm delete', data: entry.id}})} class="grow"/>
					}
				  <Icon icon="menu" key="header-menu" onclick={fire('linkstate', {key: 'toastConfig', val: {type: 'menu', data: dark}})}/>
				</span>
				*/}

				<span class="button button--fab add-entry elevated grow" onclick={fire('linkstate', {key: 'modal', val: 'add'})}>
					<a>
						<Icon icon="clear" key="header-add"/>
					</a>
				</span>
			</header>
		);
	}
}
