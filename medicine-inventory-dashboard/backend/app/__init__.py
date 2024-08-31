from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

# Initialize app
app = Flask(__name__)

# Configurations
class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///MedicineData.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

app.config.from_object(Config)
# Initialize extensions
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Register blueprints
from app.routes.inventory import bp as inventory_bp
from app.routes.shipments import bp as shipments_bp
from app.routes.pricing import bp as pricing_bp
from app.routes.users import bp as users_bp

app.register_blueprint(inventory_bp)
app.register_blueprint(shipments_bp)
app.register_blueprint(pricing_bp)
app.register_blueprint(users_bp)

# Import models
from app import models
