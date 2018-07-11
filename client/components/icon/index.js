import { h, Component } from 'preact';

export default class Icon extends Component {
  getSVG(icon) {
    switch(icon) {
      case 'back':
        return <g>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"/>
              </g>
      case 'clear':
        return <g>
                <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </g>
      case 'delete':
        return <g>
                <path d="M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </g>
      case 'sound-on':
        return <g>
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.8-1-3.3-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2a7 7 0 0 1 0 13.5v2a9 9 0 0 0 0-17.5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </g>
      case 'sound-off':
        return <g>
                <path d="M16.5 12c0-1.8-1-3.3-2.5-4v2.2l2.5 2.4V12zm2.5 0c0 1-.2 1.8-.5 2.6l1.5 1.6a9 9 0 0 0-6-13v2a7 7 0 0 1 5 6.8zM4.3 3L3 4.3 7.7 9H3v6h4l5 5v-6.7l4.3 4.2a7 7 0 0 1-2.3 1.2v2a9 9 0 0 0 3.7-1.8l2 2.1 1.3-1.3-9-9L4.3 3zM12 4l-2 2 2 2.2V4z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </g>
      // case 'search':
      //   return <g>
      //           <path d="M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2a6.5 6.5 0 1 0-2.3 5l.3.2v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
      //           <path d="M0 0h24v24H0z" fill="none"/>
      //         </g>
      // case 'copy':
      //   return <g>
      //           <path d="M0 0h24v24H0z" fill="none"/>
      //           <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/>
      //         </g>
      // case 'menu':
      //   return <g>
      //           <path d="M0 0h24v24H0z" fill="none"/>
      //           <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      //         </g>
      // case 'right':
      //   return <g>
      //           <path d="M10 6L8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z"/>
      //           <path d="M0 0h24v24H0z" fill="none"/>
      //         </g>
      // case 'undo':
      //   return <g>
      //           <path d="M0 0h24v24H0z" fill="none"/>
      //           <path d="M12.5 8c-2.6 0-5 1-6.9 2.6L2 7v9h9l-3.6-3.6A8 8 0 0 1 20 16l2.4-.8a10.5 10.5 0 0 0-10-7.2z"/>
      //         </g>
    }
  }

  render(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...props}>
        { this.getSVG(props.icon) }
      </svg>
    );
  }
}
