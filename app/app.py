from flask import * 
app = Flask(__name__)

@app.route('/Gerichte')
def meals():
  return render_template('meals.html', title='Gerichte')

@app.route('/Info')
def info():
  return render_template('info.html', title='Info')

@app.route('/Impressum')
def impressum():
  return render_template('impressum.html', title='Impressum')

@app.route('/')
def index():
  return render_template('index.html', title='Spatzennest am Fahlt')


