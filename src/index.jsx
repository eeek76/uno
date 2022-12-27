import { render } from 'solid-js/web';
import "uno.css";

function App() {
  return (
    <div bg-violet p-5 class="[&_*]:bg-red">
      <p>abc</p>
      <p>abc</p>
    </div>
  );
}

render(() => <App />, document.getElementById('root'));
