from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

app = Flask(__name__) # local python file you are working with
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///market.db'
app.config['SECRET_KEY'] = '4c0f91066c80baf1b608e816'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
from market import routes
