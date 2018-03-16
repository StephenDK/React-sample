import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
    <nav>
        <h3>Welcome to React </h3>
    </nav>,
    document.getElementById('root')
);

ReactDOM.render(
    <main>
        <div>
            <p>My name is Stephen and this is a React application </p>
        </div>
    </main>,
    document.getElementById('second')
);