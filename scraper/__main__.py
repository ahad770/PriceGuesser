import aritzia
import brooksbrothers
import zumiez
from pymongo import MongoClient
import os

def connect_to_db():
    print('connecting to db...')
    return MongoClient(os.environ('URI'))

def __main__():
    #aritzia.aritzia_scraper(connect_to_db())
    #brooksbrothers.brooksbrothers_scraper(connect_to_db())
    zumiez.zumiez_scraper(connect_to_db())

__main__()