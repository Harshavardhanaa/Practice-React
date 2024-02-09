function StockTable(props) {
const { products } = props
return (
    <table border = '1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>stock</th>
                        <th>Status</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        products.map((ele)=>{
                            return <tr key = {ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.price}</td>
                                <td>{ele.stock}</td>
                                <td>{ele.stock <= 20 ? 'stock is low' : 'stock is high'}</td>
                                
                            </tr>
                        } )
                    }
                    

                </tbody>
             </table>
            )

    }


export default StockTable