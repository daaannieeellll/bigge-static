import os

from flask import Flask, render_template, request, redirect
import json, pytz
from datetime import datetime
from .database import db_session, init_db
from .models import User, Visit

def create_app(test_config=None):
    """Create and configure an instance of the Flask application."""
    app = Flask(__name__, instance_relative_config=True)

    @app.before_request
    def before_request():
        if app.env == "development":
            return
        if request.is_secure:
            return

        url = request.url.replace("http://", "https://", 1)
        code = 301
        return redirect(url, code=code)

    # Initialize Database
    @app.before_first_request
    def init_database():
        init_db()

    @app.route("/")
    def index():
        return render_template('index.html')

    @app.route('/metrics', methods=['POST'])
    def metrics():
        data = request.json
        try:
            tz = pytz.timezone(data['timezone'])
            user = User.query.filter_by(ip_address=data['ip']).first()
            if user is None:
                user = createUser(data)
                db_session.add(user)
                db_session.commit()
            
            visit = Visit(user.id, request.headers['User-Agent'], datetime.now(tz))
            db_session.add(visit)
            db_session.commit()
            return '200'
        except:
            pass
        return '500'

    # Remove DB connection after request or at shut down
    @app.teardown_appcontext
    def remove_session(*args, **kwargs):
        db_session.remove()

    # apply the blueprints to the app
    from .pwa import bp
    app.register_blueprint(bp)

    return app

def createUser(data):
    return User(
        data['ip'],
        data['country'],
        data['region'],
        data['city'],
        data['postal'],
        data['loc']
    )
