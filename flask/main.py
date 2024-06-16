from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    countries_with_cities = data.get('countriesWithCities', {})
    product = data.get('product', '')

    print('Received countries and cities:', countries_with_cities)
    print('Received product:', product)

    return jsonify({'status': 'success', 'message': 'Data received successfully'})

if __name__ == '__main__':
    app.run(debug=True)
