from flask import Flask, request,jsonify, render_template, flash, redirect, url_for, session
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt
from objective import ObjectiveTest
from subjective import SubjectiveTest

app = Flask(__name__)
app.secret_key = 'aica2'

# MongoDB Connection
client = MongoClient('mongodb://localhost:27017/')
db = client['my_question_generator']
users_collection = db['users']

@app.route('/')
def index():
    # Redirect to signup page on the root URL
    return render_template('index.html')
# api 

app = Flask(__name__)
CORS(app, resources={r"/api_generate_question": {"origins": "*"}})

@app.route('/api_generate_question', methods=["POST"])
def api_generate_question():
    if request.method == "POST":
        # Ensure the request has JSON content
        if request.is_json:
            data = request.get_json()  # Properly fetch JSON data
            inputText = data.get("itext")
            testType = data.get("test_type")
            noOfQues = data.get("noq")
            print(inputText+ testType + noOfQues)
            # Validate required fields
            if not inputText or not testType or not noOfQues:
                return jsonify({"error": "Missing required fields"}), 400

            try:
                if testType == "objective":
                    # Generate objective questions
                    objective_generator = ObjectiveTest(inputText, noOfQues)
                    question_list, answer_list = objective_generator.generate_test()
                    
                elif testType == "subjective":
                    # Generate subjective questions
                    subjective_generator = SubjectiveTest(inputText, noOfQues)
                    question_list, answer_list = subjective_generator.generate_test()
                
                else:
                    return jsonify({"error": "Invalid test type"}), 400

                # Prepare the response
                response_data = [{"question": q, "answer": a} for q, a in zip(question_list, answer_list)]
                return jsonify({"questions": response_data}), 200

            except Exception as e:
                return jsonify({"error": str(e)}), 500
        
        else:
            return jsonify({"error": "Invalid Content-Type. Expected 'application/json'"}), 415

# api 
@app.route('/signup', methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']
        mobile = request.form['mobile']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        # Check if passwords match
        if password != confirm_password:
            flash('Passwords do not match!')
            return redirect(url_for('signup'))

        # Check if user already exists
        existing_user = users_collection.find_one({'email': email})
        if existing_user:
            flash('User already exists. Please login.')
            return redirect(url_for('login'))

        # Hash the password
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        # Insert new user into MongoDB
        users_collection.insert_one({
            'name': name,
            'email': email,
            'mobile': mobile,
            'password': hashed_password
        })

        flash('Registration successful! Please login.')
        return redirect(url_for('login'))

    return render_template('signup.html')

@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form['email']
        password = request.form['password']

        # Find user in MongoDB
        user = users_collection.find_one({'email': email})

        if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
            session['email'] = user['email']
            flash('Login successful!')
            return redirect(url_for('new'))
        else:
            flash('Invalid email or password.')
            return redirect(url_for('login'))

    return render_template('login.html')

@app.route('/new', methods=["GET"])
def new():    
    return render_template('new.html')

@app.route('/logout')
def logout():
    session.clear()
    flash('You have been logged out.')
    return redirect(url_for('login'))

@app.route('/generate_test', methods=["POST"])
def generate_test():
    inputText = request.form["itext"]
    testType = request.form["test_type"]
    noOfQues = request.form["noq"]

    if testType == "objective":
        objective_generator = ObjectiveTest(inputText, noOfQues)
        question_list, answer_list = objective_generator.generate_test()
    elif testType == "subjective":
        subjective_generator = SubjectiveTest(inputText, noOfQues)
        question_list, answer_list = subjective_generator.generate_test()
    else:
        flash('Error Occurred!')
        return redirect(url_for('new'))
    
    testgenerate = zip(question_list, answer_list)
    return render_template('newdata.html', cresults=testgenerate)
@app.route('/test_generate', methods=["POST"])
def test_generate():
	if request.method == "POST":
		inputText = request.form["itext"]
		testType = request.form["test_type"]
		noOfQues = request.form["noq"]
		if testType == "objective":
			objective_generator = ObjectiveTest(inputText,noOfQues)
			question_list, answer_list = objective_generator.generate_test()
			testgenerate = zip(question_list, answer_list)
			return render_template('generatedtestdata.html', cresults = testgenerate)
		elif testType == "subjective":
			subjective_generator = SubjectiveTest(inputText,noOfQues)
			question_list, answer_list = subjective_generator.generate_test()
			testgenerate = zip(question_list, answer_list)
			return render_template('generatedtestdata.html', cresults = testgenerate)
		else:
			flash('Error Ocuured!')
			return redirect(url_for('/'))

if __name__ == '__main__':
    app.run(debug=True, port=5001)

