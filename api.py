import flask
from flask import jsonify, request
from data import words

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return "<h1>Lishan Didan API</h1><p>This is a prototype API for the Lishan Didan language.</p>"

@app.route('/api/v1/resources/words/all', methods=['GET'])
def api_all():
    return jsonify(words)

@app.route('/api/v1/resources/words', methods=['GET'])
def api_refine():
   q0 = q1 = q2 = q3 = False

   if 'firstletter' in request.args:
      firstletter = request.args['firstletter'][0]
      q0 = True
   if 'partofspeech' in request.args:
      partofspeech = request.args['partofspeech']
      q1 = True
   if 'contains' in request.args:
      contains = request.args['contains']
      q2 = True
   if 'origin' in request.args:
      origin = request.args['origin']
      q3 = True

   results0 = []
   results1 = []
   results2 = []
   results = []

   if q0:
      for word in words:
         if word['word'][0] == firstletter:
            results0.append(word)
   else:
      results0 = words
   
   if q1:
      for word in results0:
         if word['part_of_speech'] == partofspeech:
            results1.append(word)
   else:
      results1 = results0
   
   if q2: 
      for word in results1:
         if contains in word['word']:
            results2.append(word)
   else:
      results2 = results1

   if q3: 
      for word in results2:
         if word['ultimate_origin'] == origin or origin in word['origin']:
            results.append(word)
   else:
      results = results2

   return jsonify(results)

app.run()