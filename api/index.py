from flask import Flask, redirect
from flask_cors import CORS
from .ipassword import generate_password

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return redirect('https://github.com/IK-R-S/IPassword')


@app.route('/status')
def status():
    return {"message": "IPassword API running", "status": 200}, 200


@app.route('/about')
def about():
    return {"name": "IPassword API","about": "Fast and secure password generator API for applications", "demo": "https://ipassword-api.vercel.app/generate/10", "endpoints": {"/": "root", "/about": "this endpoint :)", "/status": "app status", "/generate": "generate passwords"},  "status": 200}, 200


@app.route('/generate')
def generate_info(length):
    return {"message": "pass a number of characters into the endpoint", "demo": "https://ipassword-api.vercel.app/generate/10", "status": 200}, 200


@app.route('/generate/<length>')
def generate(length):
    if int(length) > 10000:
        return {"message": "Wow, try a less number! Are you sure that is a password?", "status": 406}, 406
    else:
        password = generate_password(length)
        return {"password": password, "length":length, "message": "password generated successfully!", "status": 201}, 201
