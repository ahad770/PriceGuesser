from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from bson import json_util, ObjectId
import json
import os

app = Flask(__name__)
CORS(app)

@app.route('/get_item', methods=["GET"])
def get_item():
   print('getting all items...')
   db = MongoClient(os.getenv('URI'))
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
