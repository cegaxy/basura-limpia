import { LitElement, html, css} from 'lit';

export class Nav extends LitElement{

  static get styles(){
    return css`
      h1{
        color: red;
      }
    `;
  }
  constructor(){
    super();
  }
  render(){
    return html`
      <nav>
        <button id="login">Iniciar sesión</button>
        <button id="logout">Cerrar sesión</button>
      </nav>
    `;
  }
}