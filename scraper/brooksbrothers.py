from math import floor
from bs4 import BeautifulSoup
import requests

#BB_URL = 'https://www.brooksbrothers.com/clothing/men-apparel?page=25'
#BB_URL = 'https://www.brooksbrothers.com/clothing/women-apparel?page=25'
#BB_URL = 'https://www.brooksbrothers.com/boys?page=15'
#BB_URL = 'https://www.brooksbrothers.com/shirts?page=20'
#BB_URL = 'https://www.brooksbrothers.com/mens/suits?page=15'
BB_URL = 'https://www.brooksbrothers.com/mens/polos-rugby?page=10'

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
    html = get_HTML_webpage(BB_URL)
    return BeautifulSoup(html.content, 'html.parser')

def page_scraper():
    print('scrapping brooks brothers...')
    soup = scrap_page()
    results = soup.find('div', class_="row product-grid")
    products = results.find_all('div', class_='product-grid__item col-6 col-md-3')
    items = []

    count = 0
    for product in products:
        prod = product.find('div', class_='product')
        img = prod.find('div', class_='product-tile__media-container component-overlay component-overlay--center')
        try:
            img = img.find_all('img')[0].attrs['data-src']
            link = product.find('a', class_='product-tile__anchor').attrs['href']
            prod = prod.find('div', class_='product-tile product-tile--default')
            name = format_text(product.find('a', 'product-tile__name').find('span').text)
            price = prod.find('span', class_="price__sales sales")
            price = price.find('span').attrs['content']
            price = floor(float(price))
            items.append({'name': name, 'price': price, 'link': 'https://www.brooksbrothers.com/'+link, 'img': img, 'store': 'Brooks Brothers'})
        except:
            count+=1
    return items

def format_text(str):
    name = str.strip('\n')
    name = name.strip('\t')
    return name.title().strip('\n')

def brooksbrothers_scraper(db):
    save_items_in_db(db, page_scraper())