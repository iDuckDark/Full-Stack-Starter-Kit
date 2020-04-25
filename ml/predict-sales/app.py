import numpy as np
from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
model = pickle.load(open('model.pkl', 'rb'))


@app.route('/')
def home():
    return "Hello World"


@app.route('/results', methods=['POST'])
def results():
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])
    output = prediction[0]
    return jsonify(output)


if __name__ == "__main__":
    app.run(host='localhost', debug=True)
