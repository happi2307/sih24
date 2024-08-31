from flask_sqlalchemy import SQLAlchemy

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///medicine_inventory.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False