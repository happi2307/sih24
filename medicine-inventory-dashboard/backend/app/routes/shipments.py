from flask import Blueprint, request, jsonify
from app import db
from app.models import Shipment

bp = Blueprint('shipments', __name__, url_prefix='/shipments')

@bp.route('/', methods=['GET'])
def get_shipments():
    shipments = Shipment.query.all()
    result = [{"id": s.id, "shipment_id": s.shipment_id, "inventory_id": s.inventory_id, "quantity": s.quantity, "shipment_date": s.shipment_date, "delivery_date": s.delivery_date} for s in shipments]
    return jsonify(result)

@bp.route('/<int:id>', methods=['GET'])
def get_shipment(id):
    shipment = Shipment.query.get_or_404(id)
    return jsonify({"id": shipment.id, "shipment_id": shipment.shipment_id, "inventory_id": shipment.inventory_id, "quantity": shipment.quantity, "shipment_date": shipment.shipment_date, "delivery_date": shipment.delivery_date})

@bp.route('/', methods=['POST'])
def add_shipment():
    data = request.get_json()
    new_shipment = Shipment(
        shipment_id=data['shipment_id'],
        inventory_id=data['inventory_id'],
        quantity=data['quantity'],
        shipment_date=data['shipment_date'],
        delivery_date=data['delivery_date']
    )
    db.session.add(new_shipment)
    db.session.commit()
    return jsonify({"msg": "Shipment added", "id": new_shipment.id}), 201

@bp.route('/<int:id>', methods=['PUT'])
def update_shipment(id):
    data = request.get_json()
    shipment = Shipment.query.get_or_404(id)
    shipment.shipment_id = data['shipment_id']
    shipment.inventory_id = data['inventory_id']
    shipment.quantity = data['quantity']
    shipment.shipment_date = data['shipment_date']
    shipment.delivery_date = data['delivery_date']
    db.session.commit()
    return jsonify({"msg": "Shipment updated"})

@bp.route('/<int:id>', methods=['DELETE'])
def delete_shipment(id):
    shipment = Shipment.query.get_or_404(id)
    db.session.delete(shipment)
    db.session.commit()
    return jsonify({"msg": "Shipment deleted"})
