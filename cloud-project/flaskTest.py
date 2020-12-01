from flask import Flask
from flask_cors import CORS
from flask import request

import json
import urllib.request
from bs4 import BeautifulSoup

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def helloWorld():
    tmp = request.args.to_dict()
    
    url = tmp['link']
        
    fp = urllib.request.urlopen(url)
    source = fp.read()
    fp.close()
    soup = BeautifulSoup(source, 'html.parser')
    
    '''    
    img = soup.find("img",id = "name-poster")
    result_img = img["src"]
    '''    

    div = soup.find("div", {'class':"filmo-category-section"})
    b= div.find_all("b")
    result_filmo = []
        
    for tmp in b:
        l = tmp.find("a").get_text()
        result_filmo.append(l)
      
    return {
#        'img' : result_img,
        'statusCode' : 200,
        'filmo' : result_filmo
    }


app.run()

