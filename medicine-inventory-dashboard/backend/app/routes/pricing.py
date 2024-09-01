from flask import Blueprint, request, jsonify
from app import db
from app.models import Pricing

bp = Blueprint('pricing', __name__, url_prefix='/pricing')

@bp.route('/', methods=['GET'])
def get_pricing():
    pricing = Pricing.query.all()
    result = [{"id": p.id, "product_name": p.product_name, "price": p.price, "effective_date": p.effective_date} for p in pricing]
    return jsonify(result)

@bp.route('/<int:id>', methods=['GET'])
def get_pricing_item(id):
    item = Pricing.query.get_or_404(id)
    return jsonify({"id": item.id, "product_name": item.product_name, "price": item.price, "effective_date": item.effective_date})

@bp.route('/', methods=['POST'])
def add_pricing():
    data = request.get_json()
    new_pricing = Pricing(
        product_name=data['product_name'],
        price=data['price'],
        effective_date=data['effective_date']
    )
    db.session.add(new_pricing)
    db.session.commit()
    return jsonify({"msg": "Pricing added", "id": new_pricing.id}), 201

@bp.route('/<int:id>', methods=['PUT'])
def update_pricing(id):
    data = request.get_json()
    item = Pricing.query.get_or_404(id)
    item.product_name = data['product_name']
    item.price = data['price']
    item.effective_date = data['effective_date']
    db.session.commit()
    return jsonify({"msg": "Pricing updated"})

@bp.route('/<int:id>', methods=['DELETE'])
def delete_pricing(id):
    item = Pricing.query.get_or_404(id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({"msg": "Pricing deleted"})
