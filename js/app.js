import { initializeApp } from "firebase-app";
import { Nav } from "./components/nav.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlMhAdh6GFiXlAGQcQV8hV4pcJ1J_bjL0",
  authDomain: "basura-limpia.firebaseapp.com",
  projectId: "basura-limpia",
  storageBucket: "basura-limpia.appspot.com",
  messagingSenderId: "1015021949934",
  appId: "1:1015021949934:web:bbc36978a41d356b08f4ff"
};

export const app = initializeApp(firebaseConfig);

import('./auth.js').then(function({login, logout, auth}){
  document.querySelector("#login").addEventListener("click", login);
  document.querySelector("#logout").addEventListener("click", logout);

  auth.onAuthStateChanged(function(user){
    if(user){
      document.querySelector("#login").style.display = "none";
      document.querySelector("#logout").style.display = "inline";
    }else{
      document.querySelector("#logout").style.display = "none";
      document.querySelector("#login").style.display = "inline";
    }  
  });
});

customElements.define('app-nav', Nav);

