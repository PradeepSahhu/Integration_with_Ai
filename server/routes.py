from flask import Flask,request,jsonify
from flask_cors import CORS
app = Flask(__name__)

CORS(app)

@app.route("/")
def showData():
    return {"name":"Pradeep Sahu"}

@app.route("/post",methods=["POST"])
def getData():
    print(request.get_json())



    return jsonify({"message": "Data received", "data": request.get_json()})
    



if __name__ == "__main__":
    app.run(debug=True)