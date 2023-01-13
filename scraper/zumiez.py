from math import floor
from bs4 import BeautifulSoup
import requests

ZUMIEZ_URL = "https://www.zumiez.com/mens.html?p="

def valid_db_items(collection, items):
    items_to_db = []
    for item in items:
        if (item['price'] == 0): continue
        match = collection.find_one({'name': item['name']})
        if (match == None): items_to_db.append(item)
    print('number of items sending to db ' + str(len(items_to_db)))
    return items_to_db

def save_items_in_db(db, scraped_items):
    items = db.development.items
    items_to_db = valid_db_items(items, scraped_items)
    if(len(items_to_db) > 0): items.insert_many(items_to_db)

def get_HTML_webpage(URL):
    #print('getting html...')
    return requests.get(URL)

def scrap_page(URL, pg):
    #print('scraping page...')
    html = get_HTML_webpage(URL+str(pg))
    return BeautifulSoup(html.content, 'html.parser')

def format_price(price):
    price = str(price)
    price = price.strip('\n')
    price = price.strip('\t')
    price = price.strip('$')
    price = floor(float(price))
    return int(price)

def page_scraper():
    print('scrapping zumiez...')
    for i in range(60):
        soup = scrap_page(ZUMIEZ_URL, i+30)
        products = soup.find_all('div', class_="item")
        
        items = []

        count = 0
        for product in products:
            try:
                prod = product.find('div', class_='bump-top-1 product-info text-center')
                name = prod.find('a').attrs['title']
                link = product.find('a', class_='product-image').attrs['href']
                img = product.find('img').attrs['data-srcset']
                price = product.find('div', class_="price-box")
                price = format_price(price.text)
                items.append({'name': name, 'price': price, 'link': link, 'img': img, 'store': 'Zumiez'})
            except:
                count+=1
    return items

def zumiez_scraper(db):
    save_items_in_db(db, page_scraper())