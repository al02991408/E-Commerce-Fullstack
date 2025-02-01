document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');

    // Función para obtener y mostrar productos destacados
    const fetchFeaturedProducts = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/products');
            const products = await res.json();
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <a href="producto.html?id=${product._id}" class="btn">Ver más</a>
                `;
                productGrid.appendChild(productCard);
            });
        } catch (err) {
            console.error('Error al obtener productos:', err);
        }
    };

    // Llamar a la función para obtener productos destacados
    if (productGrid) {
        fetchFeaturedProducts();
    }
});