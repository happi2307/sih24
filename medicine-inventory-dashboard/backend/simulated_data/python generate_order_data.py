import numpy as np
import pandas as pd

# Set random seed for reproducibility
np.random.seed(42)

# Parameters
num_orders = 200
products = [f'Product_{i}' for i in range(1, 21)]

# Generate synthetic data
order_ids = np.arange(1, num_orders + 1)
product_ids = np.random.choice(products, size=num_orders)
order_dates = pd.date_range(start='2024-01-01', periods=num_orders, freq='D')
order_quantities = np.random.randint(20, 100, size=num_orders)
lead_times = np.random.randint(1, 10, size=num_orders)

# Create DataFrame
df_orders = pd.DataFrame({
    'Order_ID': order_ids,
    'Product_ID': product_ids,
    'Order_Date': order_dates,
    'Order_Quantity': order_quantities,
    'Lead_Time_Days': lead_times
})

# Calculate delivery dates
df_orders['Delivery_Date'] = df_orders['Order_Date'] + pd.to_timedelta(df_orders['Lead_Time_Days'], unit='D')

# Save to CSV
df_orders.to_csv('synthetic_order_data.csv', index=False)
