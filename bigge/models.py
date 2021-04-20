from .database import Base
from sqlalchemy import Boolean, DateTime, Date, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, backref

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    ip_address = Column(String(100), unique=True)
    country = Column(String(255))
    region = Column(String(255))
    city = Column(String(255))
    postal = Column(String(255))
    long_lat = Column(String(255))
    visits = relationship('Visit', backref=__tablename__)

    def __init__(self, ip_address, country, region, city, postal, long_lat):
        self.ip_address = ip_address
        self.country = country
        self.region = region
        self.city = city
        self.postal = postal
        self.long_lat = long_lat

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