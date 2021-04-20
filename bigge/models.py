from .database import Base
from sqlalchemy import Boolean, DateTime, Numeric, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    ip = Column(String(100), unique=True)
    vpn = Column(Boolean())
    continent = Column(String(255))
    country = Column(String(255))
    region = Column(String(255))
    city = Column(String(255))
    postal = Column(String(255))
    latitude = Column(Numeric(5))
    longitude = Column(Numeric(5))
    visits = relationship('Visit', backref=__tablename__)

    def __init__(self, ip, vpn, continent, country, region, city, postal, latitude, longitude):
        self.ip = ip
        self.vpn = vpn
        self.continent = continent
        self.country = country
        self.region = region
        self.city = city
        self.postal = postal
        self.latitude = latitude
        self.longitude = longitude

class Visit(Base):
    __tablename__ = 'visit'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id', ondelete='CASCADE'))
    user_agent = Column(String(512))
    timestamp = Column(DateTime(timezone=True))

    def __init__(self, user_id, user_agent, timestamp):
        self.user_id = user_id
        self.user_agent = user_agent
        self.timestamp = timestamp