from app import db

# Define Inventory model
class Inventory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(120), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    expiry_date = db.Column(db.Date, nullable=False)

# Define Shipments model
class Shipment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    shipment_id = db.Column(db.String(120), unique=True, nullable=False)
    inventory_id = db.Column(db.Integer, db.ForeignKey('inventory.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    shipment_date = db.Column(db.Date, nullable=False)
    delivery_date = db.Column(db.Date, nullable=False)

# Define Pricing model
class Pricing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(120), nullable=False)
    price = db.Column(db.Float, nullable=False)
    effective_date = db.Column(db.Date, nullable=False)

# Define User model (simplified without authentication)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    role = db.Column(db.String(50), nullable=False)
