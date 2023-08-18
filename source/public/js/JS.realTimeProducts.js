/********CLIENTE**********/

const socket = io()

socket.on('mensaje', data => console.log(data))

const form = document.getElementById('addProductForm')

form.addEventListener('submit',  (evt) => {
    evt.preventDefault()
    
    
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const code = document.getElementById('code').value
    const price = Number(document.getElementById('price').value)
    const stock = Number(document.getElementById('stock').value)
    const category = document.getElementById('category').value
    
    const newProduct = {
        title,
        description,
        code,
        price,
        category,
        state: true,
        stock,
        thumbnails: 'No image'
    }
    
    
    socket.emit('newProductAdded', newProduct)
})

const deleteProductForm = document.getElementById('deleteProduct')

deleteProductForm.addEventListener('submit',  (evt) => {
    evt.preventDefault()
            
    const id = Number(document.getElementById('id').value)
    
    socket.emit('deleteProduct', id)
})

