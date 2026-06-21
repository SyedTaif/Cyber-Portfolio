from flask import Flask, render_template, request
import re

app = Flask(__name__)

# Home Page
@app.route("/")
def home():
    return render_template("index.html")


# Password Strength Checker
@app.route("/password", methods=["GET", "POST"])
def password():

    result = ""
    score = 0
    suggestions = []

    if request.method == "POST":

        password = request.form["password"]

        # Length check
        if len(password) >= 8:
            score += 1
        else:
            suggestions.append("Increase password length")

        # Uppercase check
        if re.search(r"[A-Z]", password):
            score += 1
        else:
            suggestions.append("Add uppercase letter")

        # Number check
        if re.search(r"[0-9]", password):
            score += 1
        else:
            suggestions.append("Add numbers")

        # Special character check
        if re.search(r"[!@#$%^&*]", password):
            score += 1
        else:
            suggestions.append("Add special character")

        # Result generation
        if score <= 1:
            result = "Weak Password"

        elif score <= 3:
            result = "Medium Password"

        else:
            result = "Strong Password"


    return render_template(
        "password.html",
        result=result,
        score=score,
        suggestions=suggestions)

@app.route("/phishing", methods=["GET","POST"])
def phishing():

    result=""
    found=[]
    score=0
    links=[]

    suspicious_words=[
        "urgent",
        "click here",
        "verify",
        "password",
        "bank",
        "winner",
        "free",
        "account suspended"
    ]

    if request.method=="POST":

        email=request.form["email"].lower()

        # suspicious keywords check

        for word in suspicious_words:

            if word in email:

                found.append(word)
                score += 15


        # links detect

        links = re.findall(
            r'https?://\S+',
            email
        )

        if len(links)>0:

            score += 30


        # score limit

        if score>100:
            score=100


        # risk result

        if score<=30:
            result="Low Risk"

        elif score<=70:
            result="Medium Risk"

        else:
            result="High Risk"



    return render_template(

        "phishing.html",

        result=result,
        found=found,
        score=score,
        links=links
    )



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
