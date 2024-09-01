import numpy as np
import pandas as pd

# Set random seed for reproducibility
np.random.seed(42)

# Parameters
num_products = 100
days = 30  # Number of days

# Generate synthetic data
product_ids = [f'Product_{i}' for i in range(1, num_products + 1)]
initial_inventory = np.random.randint(50, 200, size=num_products)
daily_demand = np.random.randint(5, 20, size=(num_products, days))
reorder_points = np.random.randint(20, 50, size=num_products)
reorder_quantities = np.random.randint(30, 70, size=num_products)
lead_times = np.random.randint(1, 10, size=num_products)

# Create DataFrame
data = {
    'Product_ID': np.repeat(product_ids, days),
    'Day': np.tile(np.arange(1, days + 1), num_products),
    'Daily_Demand': daily_demand.flatten(),
    'Initial_Inventory': np.repeat(initial_inventory, days),
    'Reorder_Point': np.repeat(reorder_points, days),
    'Reorder_Quantity': np.repeat(reorder_quantities, days),
    'Lead_Time_Days': np.repeat(lead_times, days)
}
df_inventory = pd.DataFrame(data)

# Calculate ending inventory and reorder status
df_inventory['Ending_Inventory'] = df_inventory.groupby('Product_ID').apply(
    lambda group: group['Initial_Inventory'].cumsum() - group['Daily_Demand'].cumsum()
).reset_index(level=0, drop=True)

df_inventory['Reorder_Needed'] = df_inventory['Ending_Inventory'] < df_inventory['Reorder_Point']
df_inventory['Reorder_Quantity'] = np.where(df_inventory['Reorder_Needed'], df_inventory['Reorder_Quantity'], 0)

# Save to CSV
df_inventory.to_csv('synthetic_inventory_data.csv', index=False)
