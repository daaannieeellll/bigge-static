import os

from flask import Flask, render_template


def create_app(test_config=None):
    """Create and configure an instance of the Flask application."""
    app = Flask(__name__, instance_relative_config=True)

    @app.route("/")
    def index():
        return render_template('index.html')

    # apply the blueprints to the app
    from . import pwa
    app.register_blueprint(pwa.bp)

    return app