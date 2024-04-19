
from flask import Flask, jsonify
from scanproduct import scan_qr_code

app = Flask(__name__)

@app.route('/')
def hello_linkware():
    return 'Hello, This is LinkWare!'

@app.route('/scanproduct', methods=['GET'])
def scan_product():
    qr_code_data = scan_qr_code()
    
    if qr_code_data:
        print("QR Code scanned successfully:", qr_code_data)
        return jsonify({'data': qr_code_data}), 200
    else:
        return jsonify({'error': 'No QR code found.'}), 404

if __name__ == '__main__':
    app.run(debug=True)
