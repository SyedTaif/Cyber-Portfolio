from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# ==========================================
# Home Page
# ==========================================

@app.route("/")
def home():
    return render_template("index.html")


# ==========================================
# Resume Download
# ==========================================

@app.route("/resume")
def resume():

    return send_from_directory(

        os.path.join(app.root_path, "static"),

        "resume.pdf",

        as_attachment=True

    )


# ==========================================
# 404 Error Page
# ==========================================

@app.errorhandler(404)
def page_not_found(error):

    return render_template("index.html"), 404


# ==========================================
# 500 Error Page
# ==========================================

@app.errorhandler(500)
def internal_server_error(error):

    return render_template("index.html"), 500


# ==========================================
# Run Application
# ==========================================

if __name__ == "__main__":

    app.run(

        host="0.0.0.0",

        port=5000,

        debug=True

    )