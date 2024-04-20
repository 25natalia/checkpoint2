import styles from './text.css'

export enum Attributes {
    'image'='image'
}

 class catsphtos extends HTMLElement{
image?:string;

constructor() {
    super ()
    this.attachShadow({mode:'open'})
}

static get observedAttributes(
const attrs Record<>
image:null;
)

attributeChangedCallback()

connectedCallback(){
    this.render()
}

render(){
if (this.shadowRoot){this.shadowRoot.innerHTML=
}

const cssPhotos = this.Ownerdocument innerHTML
}

export default Attributes
customElements.define('my-catsphotos', catsphotos)