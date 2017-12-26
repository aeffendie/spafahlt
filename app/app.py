from flask import * 
app = Flask(__name__)

@app.route('/Gerichte')
def meals():
  return render_template('meals.html')

@app.route('/Info')
def info():
  return render_template('info.html')

@app.route('/Impressum')
def impressum():
  return render_template('impressum.html')

@app.route('/')
def index():
  return render_template('index.html')


