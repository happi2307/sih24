from flask import Blueprint, request, jsonify
from app import db
from app.models import User

bp = Blueprint('users', __name__, url_prefix='/users')

@bp.route('/', methods=['GET'])
def get_users():
    users = User.query.all()
    result = [{"id": u.id, "username": u.username, "email": u.email, "role": u.role} for u in users]
    return jsonify(result)

@bp.route('/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify({"id": user.id, "username": user.username, "email": user.email, "role": user.role})

@bp.route('/', methods=['POST'])
def add_user():
    data = request.get_json()
    new_user = User(
        username=data['username'],
        email=data['email'],
        role=data['role']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "User added", "id": new_user.id}), 201

@bp.route('/<int:id>', methods=['PUT'])
def update_user(id):
    data = request.get_json()
    user = User.query.get_or_404(id)
    user.username = data['username']
    user.email = data['email']
    user.role = data['role']
    db.session.commit()
    return jsonify({"msg": "User updated"})

@bp.route('/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get_or_404(id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"msg": "User deleted"})
    