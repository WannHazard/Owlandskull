document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('checkout-items-list');
    const totalDisplay = document.getElementById('checkout-total-value');
    const form = document.getElementById('checkout-form');

    // WhatsApp Number (format: +56938998082 -> 56938998082)
    const OWLANDSKULL_WA = "56938998082";

    function loadCart() {
        const cartData = localStorage.getItem('owlandskull_cart');
        return cartData ? JSON.parse(cartData) : [];
    }

    function formatPrice(price) {
        return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function renderSummary() {
        const items = loadCart();

        if (items.length === 0) {
            listContainer.innerHTML = '<p class="empty-cart-msg">No hay productos en el carrito.</p>';
            // Redirect back to shop if cart is empty
            setTimeout(() => {
                window.location.href = 'tienda.html';
            }, 3000);
            return;
        }

        let html = '';
        let total = 0;

        items.forEach(item => {
            total += item.price * item.quantity;
            html += `
                <div class="summary-item">
                    <span><span class="item-qty">${item.quantity}x</span> ${item.name} (${item.type})</span>
                    <span>${formatPrice(item.price * item.quantity)}</span>
                </div>
            `;
        });

        listContainer.innerHTML = html;
        totalDisplay.innerText = formatPrice(total);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const items = loadCart();
        if (items.length === 0) return;

        const nombre = document.getElementById('nombre').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const direccion = document.getElementById('direccion').value;
        const notas = document.getElementById('notas').value;
        const total = totalDisplay.innerText;

        // Build product list string
        let productList = items.map(item => `- ${item.quantity}x ${item.name} | ${item.type} | ${formatPrice(item.price * item.quantity)}`).join('\n');

        // Create the message
        let message = `¡Hola Owlandskull! Mi nombre es *${nombre}*. Quiero realizar un pedido:\n\n`;
        message += `*PRODUCTOS:*\n${productList}\n\n`;
        message += `*TOTAL:* ${total}\n\n`;
        message += `*DATOS DE ENVÍO:*\n`;
        message += `📍 Dirección: ${direccion}\n`;
        message += `📞 WhatsApp: ${whatsapp}\n`;

        if (notas) {
            message += `📝 Notas: ${notas}\n`;
        }

        message += `\n_Quedo atento a la confirmación de stock y métodos de pago._`;

        // Encode and open WhatsApp
        const url = `https://wa.me/${OWLANDSKULL_WA}?text=${encodeURIComponent(message)}`;

        // Optional: Clear cart after sending? 
        // localStorage.removeItem('cart');

        window.open(url, '_blank');
    });

    renderSummary();
});
