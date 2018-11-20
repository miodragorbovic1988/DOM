const App = () => {
    return (
        <div>
            <OurHeader />
            <Title />
            <ProductList productList={Products} />
        </div>
    )
}
const ProductList = (props) => {
    const myProducts = props.productList.map((product) => {
        return <ProductItem productName={product} />
    })
    return (
        <div>
            <Title></Title>
            {myProducts}
        </div>
    )
}

const Products = ["apple", "banana", "orange", "kiwi", "pineapple"];

const ProductItem = (props) => {
    return (<h4> {props.productName}</h4>)
}
const Title = () => {
    return (<h3>My Products</h3>)
}
const OurHeader = () => {
    return (
        <div>
            <h1>This is app name</h1>
            <p> This is simple plist app</p>
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector('.root'));


