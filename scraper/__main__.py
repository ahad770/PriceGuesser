import aritzia
import brooksbrothers
import zumiez
from pymongo import MongoClient


def connect_to_db():
    print('connecting to db...')
    return MongoClient('mongodb+srv://ahad770:sarah1@cluster0.lhf8nuj.mongodb.net/?retryWrites=true&w=majority')

def __main__():
    #aritzia.aritzia_scraper(connect_to_db())
    #brooksbrothers.brooksbrothers_scraper(connect_to_db())
    zumiez.zumiez_scraper(connect_to_db())

__main__()