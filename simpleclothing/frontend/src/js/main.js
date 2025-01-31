document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const productList = document.getElementById('product-list');
    const productDetail = document.getElementById('product-detail');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Register Form Submission
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;

            try {
                const res = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                const data = await res.json();
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    alert('Registro exitoso');
                } else {
                    alert(data.msg);
                }
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            try {
                const res = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await res.json();
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    alert('Inicio de sesión exitoso');
                } else {
                    alert(data.msg);
                }
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Fetch and Display Products
    if (productList) {
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/products');
                const products = await res.json();
                products.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.classList.add('product-item');
                    productItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                        <a href="producto.html?id=${product._id}" class="btn">Ver más</a>
                    `;
                    productList.appendChild(productItem);
                });
            } catch (err) {
                console.error(err);
            }
        };
        fetchProducts();
    }

    // Fetch and Display Product Details
    if (productDetail) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        const fetchProductDetail = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/products/${productId}`);
                const product = await res.json();
                productDetail.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                    <button class="btn" onclick="addToCart('${product._id}')">Añadir al Carrito</button>
                `;
            } catch (err) {
                console.error(err);
            }
        };
        fetchProductDetail();
    }

    // Add to Cart
    window.addToCart = (productId) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Producto añadido al carrito');
    };

    // Fetch and Display Cart Items
    if (cartItems) {
        const fetchCartItems = async () => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let total = 0;

            for (let productId of cart) {
                try {
                    const res = await fetch(`http://localhost:5000/api/products/${productId}`);
                    const product = await res.json();
                    const cartItem = document.createElement('div');
                    cartItem.classList.add('cart-item');
                    cartItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                    `;
                    cartItems.appendChild(cartItem);
                    total += product.price;
                } catch (err) {
                    console.error(err);
                }
            }
            cartTotal.textContent = `$${total.toFixed(2)}`;
        };
        fetchCartItems();
    }
});