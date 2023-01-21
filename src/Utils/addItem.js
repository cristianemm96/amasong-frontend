export const addItem = (el, setter, p)=>{
    let au = 0
    console.log(el)
    if(el > 0 && el[au].id !== p.products[0].id){
        setter(d=> [...d, p])
    }
}