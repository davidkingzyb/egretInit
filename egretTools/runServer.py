#!/usr/bin/python3
# -*- coding: UTF-8 -*-
########################################################################
#   ________                                 ______                      
#  |   _____|                        _      |_    _|           __  _     
#  |  |____    _____  __  __  _____ | \_      |  |    ______  |__|| \_   
#  |   ____|  / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _| 
#  |  |_____ _\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___
#  |________|\______||___|  \______/\_____/ |______| |__| |__||__|\_____/
#########################################################################
#  2015/10/26 by DKZ https://davidkingzyb.github.io

# created by DKZ 2015/6
from http.server import HTTPServer,CGIHTTPRequestHandler
import socket
localIP = socket.gethostbyname(socket.gethostname()) 
print ("local ip:%s "%localIP)
port =8888
httpd=HTTPServer(('',port),CGIHTTPRequestHandler)
print ('run server at '+str(httpd.server_port))
httpd.serve_forever()