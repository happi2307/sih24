from flask import Blueprint, request, jsonify
from app import db
from app.models import Inventory

bp = Blueprint('inventory', __name__, url_prefix='/inventory')

@bp.route('/', methods=['GET'])
def get_inventory():
    inventories = Inventory.query.all()
    result = [{"id": i.id, "product_name": i.product_name, "quantity": i.quantity, "price": i.price, "expiry_date": i.expiry_date} for i in inventories]
    return jsonify(result)

@bp.route('/<int:id>', methods=['GET'])
def get_inventory_item(id):
    item = Inventory.query.get_or_404(id)
    return jsonify({"id": item.id, "product_name": item.product_name, "quantity": item.quantity, "price": item.price, "expiry_date": item.expiry_date})

@bp.route('/', methods=['POST'])
def add_inventory():
    data = request.get_json()
    new_item = Inventory(
        product_name=data['product_name'],
        quantity=data['quantity'],
        price=data['price'],
        expiry_date=data['expiry_date']
    )
    db.session.add(new_item)
    db.session.commit()
    return jsonify({"msg": "Inventory item added", "id": new_item.id}), 201

@bp.route('/<int:id>', methods=['PUT'])
def update_inventory(id):
    data = request.get_json()
    item = Inventory.query.get_or_404(id)
    item.product_name = data['product_name']
    item.quantity = data['quantity']
    item.price = data['price']
    item.expiry_date = data['expiry_date']
    db.session.commit()
    return jsonify({"msg": "Inventory item updated"})

@bp.route('/<int:id>', methods=['DELETE'])
def delete_inventory(id):
    item = Inventory.query.get_or_404(id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({"msg": "Inventory item deleted"})
