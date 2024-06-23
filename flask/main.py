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

    response_message = 'Data received successfully: egornoghtrjhtnmklnmomhmnmohmn,pohmh pmonymnlpohomnmom kmnkmnohmfm;lg ' + ', '.join(
        [f'{country}: {city}' for country, city in countries_with_cities.items()]) + f' with product {product}'

    return jsonify({'status': 'success', 'message': response_message})

if __name__ == '__main__':
    app.run(debug=True)
