//React Components
//Functional component
let props = { name: 'Apple', value: '100' }

const Cart3 = (props) => {

    return (
        <div className="Box">
            <h3>{props.name}</h3>
            <p>Price: {props.value}</p>
            <p>{props.children}</p>
        </div>
    );
};

//Functional component
const Cart = () => {

    return (
        <div className="Box">
            <h3>Apple</h3>
            <p>Price: 100</p>
        </div>
    );
};

//Class component 
class Cart1 extends React.Component {
    render() {
        return (
            <div className="Box">
                <h3>Orange</h3>
                <p>Price: 10</p>
            </div>
        );
    }
}

class Cart4 extends React.Component {
    xyz = 'Orange'
    render() {
        return (
            <div className="Box">
                <h3>{this.xyz}</h3>
                <p>Price: 10</p>
            </div>
        );
    }
}
class Navegador extends React.Component {
    render() {
        return (
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        );
    }
}
const Contenedor = (props) => {
    return (
        <div className="Box2">
            <p>Articulos</p>
            {props.children}
        </div>
    );
};

let app = (
    <div>
        <Navegador />
        <Contenedor >
            <Cart />
            <Cart1 />
            <Cart3 name="Strawberry" price="20">
                Hello!!!
            <Cart3 class="contenido" name="Strawberry2" price="40" width="49" />
            </Cart3>
        </Contenedor>
    </div>
);

ReactDOM.render(app, document.getElementById('root'));