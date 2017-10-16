console.log('App.js is running!')

// JSX - Javascript XML

const app = {
  title: 'Indecision',
  subtitle: 'Let me make up your mind for you',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';

    renderApp();
  }
};

const onButtonClick = () => {
  app.options = [];
  renderApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const renderApp = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>Subtitle: {app.subtitle} </p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No options!'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onButtonClick}>Remove All</button>
      <ol>
        {
          app.options.map((item) => <li key={item}>{item}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

};


const user = {

  name: 'Saj',
  age: 26,
  location: 'Toronto'

};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

// var userName = 'Mike';
// var userAge = 27;
// var userLocation = 'New York';

// const templateTwo = (
//     <div>
//       <h1>{user.name ? user.name : 'Anonymous'}</h1>
//       {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//       {getLocation(user.location)}
//     </div>

// );

const appRoot = document.getElementById('app');

renderApp();
