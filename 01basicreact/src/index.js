import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  
  // </React.StrictMode>
  //agar strict mode hata bhi denge to kaam kare ga yea
);

//--------------notes---------------------------
//reactDOM jo ha wo upna virtual dom banata ha 
//.create root jo ha wo method ha 
  
//app ko hum log tag ke tarha use kar rahe ha jo ki aap naam ka koi tak nahi hota ha 
    
// yea react ke wah se diya gaya ha 


