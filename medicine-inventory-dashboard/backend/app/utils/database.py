from app import db

def reset_database():
    db.drop_all()
    db.create_all()
