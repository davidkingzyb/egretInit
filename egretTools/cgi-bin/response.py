#!/usr/bin/python
# -*- coding: UTF-8 -*-

import cgi
import json

def start_response(resp="text/html"):
    return('Content-type: ' + resp + '\n\n')

def set_head(key,value):
	return(key+':'+value+'\n')

form_data = cgi.FieldStorage()
data=form_data['data'].value

print(set_head('Access-Control-Allow-Origin','*'))

# print(start_response())
# print('hello world')

respjson={'resp':data}
print(start_response('application/json'))
print(json.dumps(respjson))
