// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';
import renderToDOM from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Joke Generator</h1>
    <button class="btn btn-danger" id="get-joke">Get a Joke!</button><br />
    <div id="joke-setup"></div>
    <div id="joke-punchline"></div>
    <hr />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document.querySelector('#get-joke').addEventListener('click', () => {
    getRequest().then((joke) => {
      renderToDOM('#joke-setup', joke.setup);
      renderToDOM('#joke-punchline', joke.delivery);
    });
  });
  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};
init();
