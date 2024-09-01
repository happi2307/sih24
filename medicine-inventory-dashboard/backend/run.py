import sys
import os

# Add the backend directory to the system path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'app')))

from app import app

if __name__ == "__main__":
    app.run(debug=True)
