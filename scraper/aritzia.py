from bs4 import BeautifulSoup
import requests

ARITZIA_URL = 'https://www.aritzia.com/us/en/clothing?lastViewed=1500'

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
    print('getting html...')
    return requests.get(URL)

def scrap_page():
    print('scraping page...')
    html = get_HTML_webpage(ARITZIA_URL)
    return BeautifulSoup(html.content, 'html.parser')

def format_price(raw_price):
    price = raw_price.rstrip('\n')
    price = price.lstrip('\n')
    price = price.lstrip('$')
    try:
        return int(price)
    except:
        return 0

def format_name(raw_name):
    name = raw_name.rstrip('\n')
    name = name.lstrip('\n')
    return name.title()

def page_scraper():
    print('scrapping aritzia...')
    soup = scrap_page()
    results = soup.find(class_="ar-product-grid__container js-product-grid__container list flex flex-wrap justify-between justify-start-ns")
    products = results.find_all('li')
    items = []
    for product in products:
        item = product.find('div', class_="product-name ar-product-name js-product-plp-name pr4-ns")
        if(item):
            name = format_name(item.text)
            price = format_price(product.find('div', class_="product-pricing").text)
            img = product.find('a', class_="relative db js-plp-hash").find('img').attrs['data-original']
            items.append({'name': str(name), 'price': int(price), 'img': str(img), 'store': 'Aritzia', 'link': ""})
    print('number of items scraped ' + str(len(items)))
    return items

def aritzia_scraper(db):
    save_items_in_db(db, page_scraper())
