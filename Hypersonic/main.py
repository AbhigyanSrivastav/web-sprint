from flask import Flask, render_template, request, redirect, url_for, session, flash

app = Flask(__name__)
app.secret_key = "supersecretkey"

# Product Data
products = [
    {"id": 1, "name": "Smartphone X", "price": 699, "image": "https://source.unsplash.com/400x300/?smartphone", "description": "A high-end smartphone with an excellent camera and display.", "rating": 4.5},
    {"id": 2, "name": "Laptop Pro", "price": 1299, "image": "https://source.unsplash.com/400x300/?laptop", "description": "A powerful laptop designed for professionals and gamers.", "rating": 4.8},
    {"id": 3, "name": "Smart Watch", "price": 299, "image": "https://source.unsplash.com/400x300/?watch", "description": "A sleek smartwatch with health tracking features.", "rating": 4.3},
    {"id": 4, "name": "Wireless Headphones", "price": 199, "image": "https://source.unsplash.com/400x300/?headphones", "description": "Noise-canceling wireless headphones for immersive sound.", "rating": 4.6},
    {"id": 5, "name": "Gaming Console", "price": 499, "image": "https://source.unsplash.com/400x300/?gaming", "description": "Next-gen gaming console with powerful hardware.", "rating": 4.9},
]

@app.route('/')
def home():
    return render_template('base.html', products=products)

@app.route('/product/<int:product_id>')
def product_details(product_id):
    product = next((p for p in products if p["id"] == product_id), None)
    if product:
        return render_template('product_details.html', product=product)
    return "Product not found", 404

@app.route('/cart')
def cart():
    cart_items = session.get("cart", {})
    return render_template('cart.html', cart_items=cart_items)

@app.route('/buy_now', methods=['POST'])
def buy_now():
    name = request.form.get('name')
    address = request.form.get('address')

    if not name or not address:
        flash("Please enter all details!", "error")
        return redirect(url_for('cart'))

    # Clear the cart after purchase
    session["cart"] = {}
    session.modified = True  # Ensure session updates
    flash(f"Thank you, {name}! Your order will be shipped to {address}.", "success")
    return redirect(url_for('home'))

@app.route('/add_to_cart/<int:product_id>')
def add_to_cart(product_id):
    cart = session.get("cart", {})

    product = next((p for p in products if p["id"] == product_id), None)
    
    if product:
        product_id_str = str(product_id)  # Ensure the key is a string
        if product_id_str in cart:
            cart[product_id_str]["quantity"] += 1
        else:
            cart[product_id_str] = {
                "name": product["name"], 
                "price": product["price"], 
                "quantity": 1
            }

    session["cart"] = cart
    session.modified = True  # Ensure session updates
    flash(f"{product['name']} added to cart!", "success")
    return redirect(url_for('cart'))

@app.route('/update_cart/<int:product_id>/<action>')
def update_cart(product_id, action):
    cart = session.get("cart", {})
    product_id_str = str(product_id)  # Convert to string for consistency

    if product_id_str in cart:
        if action == "increase":
            cart[product_id_str]["quantity"] += 1
        elif action == "decrease" and cart[product_id_str]["quantity"] > 1:
            cart[product_id_str]["quantity"] -= 1
        elif action == "remove":
            del cart[product_id_str]

    session["cart"] = cart
    session.modified = True  # Ensure session updates
    return redirect(url_for('cart'))

if __name__ == '__main__':
    app.run(debug=True)
