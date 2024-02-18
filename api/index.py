from flask import Flask, redirect
from api.ipassword import generate_password

app = Flask(__name__)

@app.route('/')
def home():
    return redirect('https://github.com/IK-R-S/IPassword')


@app.route('/status')
def home():
    return {"message": "IPassword API running", "status": 200}, 200


@app.route('/about')
def about():
    return {"IPassword API": "Fast and secure password generator API for applications"}


@app.route('/generate/<length>')
def generate(length):
    if length > 10000:
        return {"message": "Wow, try a less number! Are you sure that is a password?", "status": 406}, 406
    else:
        password = generate_password(length)
        return {"password": password, "length":length, "message": "password generated successfully!", "status": 200}


@app.route('/generate/<length>')
def generate_info(length):
    return {"message": "pass a number of characters into the endpoint", "demo": "https://ipassword.vercel.app/generate/8"}

@app.route('/generate/<length>')
def generate(length):
    if length > 10000:
        return {"message": "Wow, try a less number! Are you sure that is a password?", "status": 406}, 406
    else:
        password = generate_password(length)
        return {"password": password, "length":length, "message": "password generated successfully!", "status": 200}
