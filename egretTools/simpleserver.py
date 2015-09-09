
# created by DKZ 2015/6
import SimpleHTTPServer
import SocketServer

PORT = 7654

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print ("serving at port", PORT)
httpd.serve_forever()
