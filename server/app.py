# from flask import Flask,request,jsonify
# from flask_cors import CORS
# app = Flask(__name__)

# CORS(app)

# @app.route("/")
# def showData():
#     return {"name":"Pradeep Sahu"}

# @app.route("/post",methods=["POST"])
# def getData():
#     print(request.get_json())
#     return jsonify({"message": "Data received", "data": request.get_json()})
    


# if __name__ == "__main__":
#     app.run(debug=True)



from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from urllib.parse import quote_plus

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
def connectToMongo():
    database_name = "pythonDB"
    collection_name = "Flask"
    username = "Pradeep"
    password = "Pradeep@2002"
    
    # Create the MongoDB connection string
    connection_string = f"mongodb+srv://{quote_plus(username)}:{quote_plus(password)}@maincluster.0wasxyo.mongodb.net/{database_name}?retryWrites=true&w=majority&appName=mainCluster"
    
    # Connect to MongoDB
    client = MongoClient(connection_string)
    db = client[database_name]
    collection = db[collection_name]
    return collection

@app.route("/")
def showData():
    return {"name": "Pradeep Sahu"}

@app.route("/post", methods=["POST"])
def postData():
    # Get JSON data from request
    data = request.get_json()

    # Print the received data for debugging
    print(data)
    collection = connectToMongo()

    # Insert the data into MongoDB
    result = collection.insert_one(data)

    # Convert ObjectId to string before returning
    
    
    return {"data":"Data inserted successfully"}

@app.route("/get", methods=["POST"])
def getData():
    # Get JSON data from request
    data = request.get_json()

    # Print the received data for debugging
    print(data)
    collection = connectToMongo()

    # Insert the data into MongoDB
    result = collection.insert_one(data)

    # Convert ObjectId to string before returning
    response_data = {
        "message": "Data received and stored",
        "data": {
            **data,
            "id": str(result.inserted_id)  # Convert ObjectId to string
        }
    }

    return jsonify(response_data)

if __name__ == "__main__":
    app.run(debug=True)
