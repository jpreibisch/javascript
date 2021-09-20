const items = document.getElementById("tarjeta").content
const fragment = document.createDocumentFragment()


document.addEventListener ("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async() => {
    try{
        const res = await fetch ("api.json")
        const data = await res.json()
        //console.log(data)
        pintarCards (data)
    } catch (error) {
        console.log (error)
    }
}

const pintarCards = data => {
    data.forEach(producto=>{
       items.getElementById("tituloTarjeta").content = producto.title
       const clone = items.cloneNode(true)
       fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}

