import os, pytz, requests
from flask import Flask, render_template, request, redirect
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
        return redirect(url, code=301)

    # Initialize Database
    @app.before_first_request
    def init_database():
        init_db()

    @app.route("/")
    def index():
        registerUserVisit(request)
        return render_template('index.html')

    # Remove DB connection after request or at shut down
    @app.teardown_appcontext
    def remove_session(*args, **kwargs):
        db_session.remove()

    # apply the blueprints to the app
    from .pwa import bp
    app.register_blueprint(bp)

    return app

def ipData(ip):
    return requests.get('https://ipgeolocation.abstractapi.com/v1/',
                         params={'api_key': os.environ['ABSTRACTAPI_KEY'],'ip_address': ip}
                        ).json()

def createUser(d):
    return User(
        ip = d['ip_address'],
        vpn = d['security']['is_vpn'],
        continent = d['continent'],
        country = d['country'],
        region = d['region'],
        city = d['city'],
        postal = d['postal'],
        latitude = d['latitude'],
        longitude = d['longitude']
    )

def registerUserVisit(request):
    data = ipData(request.remote_addr)
    print(data)
    user = User.query.filter_by(ip=data['ip_address']).first()
    if user is None:
        user = createUser(data)
        db_session.add(user)
        db_session.commit()
    
    tz = pytz.timezone(data['timezone']['name'])
    visit = Visit(user.id, request.headers['User-Agent'], datetime.now(tz))
    db_session.add(visit)
    db_session.commit()
