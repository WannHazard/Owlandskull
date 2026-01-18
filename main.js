document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');

    // Sticky Header Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // --- SIDE MENU LOGIC ---
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeMenu = document.getElementById('close-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    function toggleMenu() {
        menuOverlay.classList.toggle('active');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', toggleMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) {
                toggleMenu();
            }
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });
    });

    // --- PRODUCT CARD LOGIC (Unified) ---
    function setupProductCards() {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
            const titleElement = card.querySelector('h3');
            if (!titleElement) return;

            const title = titleElement.innerText.trim();
            // Try to find product in the global products array (loaded from products.js)
            if (typeof products !== 'undefined') {
                const product = products.find(p => p.name === title);

                if (product) {
                    card.style.cursor = 'pointer';

                    // Replace "AGREGAR" button with "VER DETALLE" or update its style
                    const btn = card.querySelector('.btn-sm');
                    if (btn) {
                        // We clone to remove existing specific listeners if any
                        const newBtn = btn.cloneNode(true);
                        newBtn.innerText = "VER DETALLE";
                        newBtn.style.backgroundColor = "var(--accent-color)";
                        newBtn.style.color = "white";
                        newBtn.style.border = "none";
                        newBtn.style.fontWeight = "bold";
                        newBtn.style.letterSpacing = "1px";
                        btn.parentNode.replaceChild(newBtn, btn);
                    }

                    // Make the whole card clickable for mobile ease
                    card.addEventListener('click', (e) => {
                        // Prevent navigation if clicking on specific buttons that might have other logic (though here they all go to detail)
                        window.location.href = `producto.html?id=${product.id}`;
                    });
                }
            }
        });
    }

    setupProductCards();

    // --- SHOPPING CART LOGIC ---
    const cart = {
        items: [],

        init() {
            this.load();
            this.updateBadge();
            this.render();
            this.setupEventListeners();
        },

        setupEventListeners() {
            // Toggle cart modal
            const cartBtn = document.getElementById('cart-btn');
            const cartOverlay = document.getElementById('cart-overlay');
            const closeBtn = document.getElementById('close-cart');

            if (cartBtn) {
                cartBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    cartOverlay.classList.add('active');
                    this.render();
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    cartOverlay.classList.remove('active');
                });
            }

            if (cartOverlay) {
                cartOverlay.addEventListener('click', (e) => {
                    if (e.target === cartOverlay) {
                        cartOverlay.classList.remove('active');
                    }
                });
            }
        },

        addItem(product) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push(product);
            }
            this.save();
            this.updateBadge();
            this.render();

            // Visual feedback
            const cartBtn = document.getElementById('cart-btn');
            cartBtn.classList.add('pulse');
            setTimeout(() => cartBtn.classList.remove('pulse'), 300);
        },

        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id);
            this.save();
            this.updateBadge();
            this.render();
        },

        updateQuantity(id, delta) {
            const item = this.items.find(item => item.id === id);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) {
                    this.removeItem(id);
                } else {
                    this.save();
                    this.updateBadge();
                    this.render();
                }
            }
        },

        save() {
            localStorage.setItem('owlandskull_cart', JSON.stringify(this.items));
        },

        load() {
            const saved = localStorage.getItem('owlandskull_cart');
            if (saved) {
                this.items = JSON.parse(saved);
            }
        },

        updateBadge() {
            const counts = document.querySelectorAll('.cart-count');
            const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
            counts.forEach(c => {
                c.innerText = totalItems;
                c.style.display = totalItems > 0 ? 'inline-block' : 'none';
            });
        },

        formatPrice(price) {
            return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        render() {
            const cartContainer = document.getElementById('cart-items');
            const totalValue = document.getElementById('cart-total-value');

            if (!cartContainer) return;

            if (this.items.length === 0) {
                cartContainer.innerHTML = '<div class="empty-cart-msg">EL CARRITO ESTÁ VACÍO</div>';
                totalValue.innerText = '$0';
                return;
            }

            let html = '';
            let total = 0;

            this.items.forEach(item => {
                const subtotal = item.price * item.quantity;
                total += subtotal;

                html += `
                    <div class="cart-item">
                        <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <div class="cart-item-price">${item.type} | ${this.formatPrice(item.price)}</div>
                            <div class="cart-item-controls">
                                <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                                <button class="remove-item" onclick="removeFromCart('${item.id}')">ELIMINAR</button>
                            </div>
                        </div>
                    </div>
                `;
            });

            cartContainer.innerHTML = html;
            totalValue.innerText = this.formatPrice(total);
        }
    };

    window.cart = cart;
    cart.init();

    // Global functions for inline onclick handlers
    window.updateCartQty = (id, delta) => cart.updateQuantity(id, delta);
    window.removeFromCart = (id) => cart.removeItem(id);
});
