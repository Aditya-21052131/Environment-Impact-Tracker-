from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = '8f1e1f8cb5msh29d982366a4c1a5p1cdc35jsnb326f272243a'
BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

@app.route('/weather/<city>', methods=['GET'])
def get_weather(city):
    try:
        response = requests.get(f'{BASE_URL}?q={city}&appid={API_KEY}')
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
