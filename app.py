from flask import Flask, request, jsonify
from asteval import Interpreter

app = Flask(__name__)
aeval = Interpreter()

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    expression = data.get('expression')

    try:
        # Вычисляем выражение с помощью aeval
        result = aeval(expression)
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
