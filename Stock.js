import StockTable from "./StockTable";
function Stock(props){
    const products = [
        {
            id: 1,
            name: "Laptop",
            stock: 10,
            price: 70000
        },
        {
            id: 2,
            name: "Smartphone",
            stock: 15,
            price: 15000
        },
        {
            id: 3,
            name: "Headphones",
            stock: 50,
            price: 2000
        },
        {
            id: 4,
            name: "Keyboard",
            stock: 25,
            price: 1000
        },
        {
            id: 5,
            name: "Mouse",
            stock: 30,
            price: 500
        }
    ];
    
        const lowStockProducts = products.filter((ele) => {
            return ele.stock <= 20
        })
        const inStockProducts = products.filter((ele)=>{
            return ele.stock > 20
        })

        const productByPrice = products.filter((ele) => {
            return ele.price >= 70000
        })
        return (
        <div>
            <h2>Listing Products</h2>
            <h2>Low stock products-{lowStockProducts.length}</h2>
            <StockTable products = {lowStockProducts}/>
            <h2>In Stock products - {inStockProducts.length}</h2>
            <StockTable products = {inStockProducts}/>

            <h2>products by price - {productByPrice.length}</h2>
            <StockTable products = {productByPrice} />

            
        
        </div>
    )
}
export default Stock