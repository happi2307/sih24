import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Set random seed for reproducibility
np.random.seed(42)

# Parameters
days = 365  # Simulate for a year

# Generate synthetic demand data
time = np.arange(0, days)
base_demand = 100 + 20 * np.sin(2 * np.pi * time / 365)  # Seasonal demand
random_noise = np.random.normal(0, 10, size=time.shape)
demand = base_demand + random_noise

# Create DataFrame
df_demand = pd.DataFrame({'Day': time, 'Demand': demand})

# Plot the generated data
df_demand.plot(x='Day', y='Demand', title='Synthetic Drug Demand Over a Year', figsize=(10, 6))
plt.xlabel('Day')
plt.ylabel('Demand')
plt.grid(True)
plt.show()

# Save to CSV
df_demand.to_csv('synthetic_demand_data.csv', index=False)
