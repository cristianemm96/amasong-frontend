
const getProducts = (a, item, products)=>{
    products.map(d => {
        let actualW = d.name.toLowerCase()
        if(actualW.match(item.toLowerCase())){
            a.push(d)
            
        }
    })
}
export const getProductsFromSearch = (item, products)=>{
    let a = []
    getProducts(a, item, products)
    return  a
}