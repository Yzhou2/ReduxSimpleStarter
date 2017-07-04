import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCuEXQR9gMiHK4VeUsHzxbMQuYiYz60B6I';

class App extends Component {
  constructor(props) {
    super(props);

    render {
      return (
        <div><SearchBar /></div>
      )
    }

  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
