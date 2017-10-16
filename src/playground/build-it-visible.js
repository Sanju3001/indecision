
class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Visibility Toggle</h2>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Here are some details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//   buttonText: 'Show details',
//   text: ''
// };

// const toggle = () => {
//   if (app.buttonText === 'Show details') {
//     app.text = 'Here are some details';
//     app.buttonText = 'Hide details';
//     renderApp();
//   } else {
//     app.text = '';
//     app.buttonText = 'Show details';
//     renderApp();
//   }
// };

// const renderApp = () => {

//   const template = (
//     <div>
//       <h3>Visibility Toggle</h3>
//       <button onClick={toggle}>{app.buttonText}</button>
//       <p>{app.text}</p>
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));

// };

// renderApp();