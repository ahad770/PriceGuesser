from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from bson import json_util, ObjectId
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
   return 'Hello World'

@app.route('/get_item', methods=["GET"])
def get_item():
   print('getting all items...')
   db = MongoClient('mongodb+srv://ahad770:ahad1@cluster0.lhf8nuj.mongodb.net/?retryWrites=true&w=majority')
   items = db.development.items
   items_to_game = []
   cursor = items.find()
   for doc in cursor:
      items_to_game.append(doc)

   response = []

   for document in items_to_game:
      page_sanitized = json.loads(json_util.dumps(document))
      response.append(page_sanitized)
   return jsonify(response)

app.run(host='0.0.0.0', port=5001)
