// Desplegar en Render
const API_BASE_URL = "https://simpleclothing.onrender.com"; // Tu URL en Render

export const fetchProductos = async () => {
    const response = await fetch(`${API_BASE_URL}/productos`);
    return response.json();
};