import './App.css';

function App(props) {
  return (
    <div>
      <h1>{props.site}</h1>
      <a href={props.url}>こちら</a>
    </div>
  );
}

export default App;