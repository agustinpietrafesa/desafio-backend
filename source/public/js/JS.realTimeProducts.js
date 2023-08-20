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

        
    socket.on('newProductAdded', (newProduct) => {
        console.log('Nuevo producto agregado:', newProduct);
        // Actualiza la vista Handlebars con el nuevo producto
        const productsContainer = document.getElementById('productsContainer');
        // Crea un nuevo elemento HTML y agrega la información del producto
        const newProductElement = document.createElement('div');
        newProductElement.innerHTML = `
        <h4>Title: ${newProduct.title} Product description: ${newProduct.description} Code: ${newProduct.code} Stock: ${newProduct.stock} Id: ${newProduct.id}</h4>
        `;
        productsContainer.appendChild(newProductElement);
        form.reset()
    });
        
        
    })
    
    





