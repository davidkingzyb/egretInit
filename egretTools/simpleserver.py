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
import SimpleHTTPServer
import SocketServer

PORT = 7654

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print ("serving at port", PORT)
httpd.serve_forever()
