from http.server import HTTPServer,CGIHTTPRequestHandler
port =8080
httpd=HTTPServer(('',port),CGIHTTPRequestHandler)
print ('run server at '+str(httpd.server_port))
httpd.serve_forever()