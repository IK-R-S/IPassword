from flask import Flask
from .pypass import generate_password

app = Flask(__name__)

@app.route('/')
def home():
    return {"message": "Pypass API running 🚀", "status": 200}

@app.route('/about')
def about():
    return {"PyPass API": "Password generator API for applications"}

@app.route('/generate/')
def generate_info():
    return {"message": "insert a number of characters to generate your password", "demo": "https://pypass-api.vercel.app/generate/8"}

@app.route('/generate/<length>')
def generate(length):
    password = generate_password(length)
    return {"password": password, "length":length, "message": "password generated successfully!", "status": 200}
