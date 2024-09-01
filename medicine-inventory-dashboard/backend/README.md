# Medicine Inventory Dashboard - Backend

## Overview

The backend of the Medicine Inventory Dashboard is built using Flask, SQLAlchemy, and Marshmallow. This backend is responsible for managing and processing data related to medicine inventory, shipments, pricing, and user management. It also integrates with AI models for demand forecasting, inventory optimization, and anomaly detection.

## Project Structure

Here’s an overview of the project's directory structure and the purpose of each file:

medicine-inventory-dashboard/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── routes/
│   │   │   ├── __init__.py
│   │   │   ├── inventory.py
│   │   │   ├── shipments.py
│   │   │   ├── pricing.py
│   │   │   └── users.py
│   │   ├── ai/
│   │   │   ├── demand_forecasting.py
│   │   │   ├── inventory_optimization.py
│   │   │   └── anomaly_detection.py
│   │   └── utils/
│   │       ├── database.py
│   │       └── auth.py
│   ├── tests/
│   ├── requirements.txt
│   └── config.py


## File Descriptions

### `app/__init__.py`

- **Purpose**: Initializes the Flask application, sets up the database and Marshmallow extensions, and registers blueprints for different routes.
- **Key Components**:
  - Initializes Flask, SQLAlchemy, and Marshmallow.
  - Registers routes from `routes/`.
  - Imports the `Config` class from `config.py` for application configuration.

### `app/models.py`

- **Purpose**: Defines SQLAlchemy models for the database. These models represent the database schema for various entities such as inventory items, shipments, pricing, and users.
- **Key Components**:
  - Defines SQLAlchemy ORM models and relationships.

### `app/routes/`

- **Purpose**: Contains route definitions for different functionalities of the backend. Each file defines a set of API endpoints related to a specific domain.
- **Key Files**:
  - **`inventory.py`**: Manages routes for inventory management.
  - **`shipments.py`**: Handles routes related to shipments and logistics.
  - **`pricing.py`**: Contains routes for pricing information and updates.
  - **`users.py`**: Manages user-related routes, including authentication and user management.

### `app/ai/`

- **Purpose**: Contains AI/ML scripts for analyzing and optimizing inventory data.
- **Key Files**:
  - **`demand_forecasting.py`**: Implements algorithms for forecasting medicine demand.
  - **`inventory_optimization.py`**: Provides methods for optimizing inventory levels and minimizing stockouts.
  - **`anomaly_detection.py`**: Detects anomalies in inventory data to identify potential issues.

### `app/utils/`

- **Purpose**: Contains utility functions and helper modules.
- **Key Files**:
  - **`database.py`**: Provides database-related utility functions.
  - **`auth.py`**: Contains functions for user authentication and authorization.

### `tests/`

- **Purpose**: Contains test cases for the backend functionality. Ensures that the routes, models, and AI components are working correctly.
- **Key Files**:
  - Includes unit tests and integration tests.

### `requirements.txt`

- **Purpose**: Lists the Python packages required for the backend. Use this file to install dependencies.
- **Usage**: Run `pip install -r requirements.txt` to install all required packages.

### `config.py`

- **Purpose**: Contains configuration settings for the Flask application.
- **Key Components**:
  - Defines the `Config` class with settings such as database URI and other configuration parameters.

## Setup and Running the Backend

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/medicine-inventory-dashboard.git
   cd medicine-inventory-dashboard/backend
   ```

2. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run Migrations** (if using Flask-Migrate):
   ```bash
   flask db init
   flask db migrate
   flask db upgrade
   ```

5. **Run the Flask Application**:
   ```bash
   flask run
   ```

6. **Access the Application**:
   - The backend server will be available at `http://localhost:5000`.

## Notes

- Ensure that MySQL or SQLite is properly configured based on your `config.py` settings.
- Update the database URI in `config.py` according to your database setup.

---

This `README.md` provides a detailed overview of the backend structure and instructions on how to set up and run the backend server. 