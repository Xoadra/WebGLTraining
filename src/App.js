import { BrowserRouter, Link } from 'react-router-dom';

import ViewArea from './components/ViewArea';
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">
                    <h1>WebGL Training App</h1>
                </Link>
            </header>
            <section>
                <ViewArea/>
            </section>
            <footer>
                <p>
                    Inspired By:&nbsp;
                    <a
                        href="https://webglfundamentals.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WebGL Fundamentals
                    </a>
                </p>
                <p>
                    Learn more about WebGL at&nbsp;
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MDN Web Docs
                    </a>
                    .
                </p>
            </footer>
        </BrowserRouter>
    );
}


export default App;
