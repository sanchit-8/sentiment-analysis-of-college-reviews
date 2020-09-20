from flask import Flask
from flask import request
from flask import jsonify
from pymongo import MongoClient
from bson.json_util import dumps
import json
from flask_cors import CORS
from pymongo import MongoClient 
import pandas as pd
import import_ipynb

import get_colleges as gl
import add_new_college as dun
import segregate1 as sg


app = Flask(__name__)
CORS(app)

@app.route("/get_all_colleges", methods = ['GET'])
def get_all_colleges():
    result=gl.get_colleges()
    return dumps(result)
    

@app.route("/get_info/<college_name>", methods = ['GET'])
def get_info(college_name):
    print(college_name)
    
    connection = MongoClient('localhost:27017')
    database = connection.score
    college_name=college_name[:-16]
    cursor= database[college_name].find()
    df =  pd.DataFrame(list(cursor))
    print(df)
    data_dict=df.to_dict()
    print(data_dict)
    return dumps(df)

@app.route("/add_college/<college_name>", methods=['GET'])
def add_college(college_name):
    
    dun.dhundo(college_name)

    connection = MongoClient('localhost:27017')
    database = connection.score
    college_name=college_name[:-16]
    cursor= database[college_name].find()
    df =  pd.DataFrame(list(cursor))
    print(df)
    data_dict=df.to_dict()
    print(data_dict)
    return dumps(df)

@app.route("/add_review",methods=['POST'])
def add_review():
    req_data = request.get_json()
    client = MongoClient('localhost:27017')
    db = client.minor

    x=req_data['review']
    seg=sg.segregate1(x)
    name=req_data['college']+' college reviews'
    print(req_data)
    print(seg)

    dict1={"Faculty": seg[1],"Infrastructure": seg[0],"Placement": seg[2],"Rating": req_data['rating'],"Review": req_data['review'],"Social": seg[3],"Website": "collegedhundo"}
    #dict1={'Faculty': "faculty"}

    #data = json.loads(request.data)
   
    status = db[name].insert_one(dict1)
    return dumps({'message' : 'SUCCESS'})


    print(req_data)

    return(req_data['name'])

 

@app.route('/abc/')
def home():
    return "Hello World13!"


if __name__ == '__main__':
    app.run(debug=True)




