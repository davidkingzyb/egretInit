
# created by DKZ 2015/6
from http.server import HTTPServer,CGIHTTPRequestHandler
import socket
localIP = socket.gethostbyname(socket.gethostname()) 
print ("local ip:%s "%localIP)
port =8888
httpd=HTTPServer(('',port),CGIHTTPRequestHandler)
print ('run server at '+str(httpd.server_port))
httpd.serve_forever()