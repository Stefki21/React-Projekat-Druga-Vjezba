import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { DataProvider } from './store/data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataProvider><App /></DataProvider>);
