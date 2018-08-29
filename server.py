from flask import Flask, render_template, request, json, session
import json
import logic

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')
    
@app.route("/register", methods = ['GET', 'POST'])
def register_new_user():
    return ""

if __name__ == '__main__':
    app.run(debug=True,
            port = 5000)