import pickle
import sys
import json


# Load the pickled model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Get the input data from Node.js
input_data = json.loads(sys.argv[1])

# Make predictions
predictions = model.predict(input_data)

# Return the predictions to Node.js
print(predictions.tolist())

