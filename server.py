from flask import Flask, render_template, request, json, session
import json
import logic

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')
    
@app.route("/register", methods = ['GET', 'POST'])
def register_new_user():
    register_input = request.get_json()
    if logic.check_if_user_in_database(register_input) == True:
        return json.dumps(False)
    logic.register_new_user(register_input)
    return json.dumps(True)
    

if __name__ == '__main__':
    app.run(debug=True,
            port = 5000)