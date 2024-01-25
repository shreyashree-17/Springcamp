
import Joke from '../components/jokes';
import {jokes} from '../data/data'

function PropsPage() {
  return (
    <div className="App">
      <div>
        <h1>Understanding props</h1>
        {jokes.map((joke, index) => (
          <Joke key={index} number={joke.number} setup={joke.setup} punchline={joke.punchline} />
        ))}
      </div>
    </div>
  );
}

export default PropsPage;
