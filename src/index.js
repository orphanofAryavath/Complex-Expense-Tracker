import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from './Context/context'
import App from './App'
import './index.css'
import { SpeechProvider } from '@speechly/react-client';

ReactDom.render(
<SpeechProvider appId="70ea52e1-6afd-4830-812d-c6f9e7b29cba" language="en-US">    
<Provider>   
<App />
</Provider>
</SpeechProvider>
, document.getElementById('root'));