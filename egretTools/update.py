#created by dkz 2015/10/23
#updata list: tool.ts,debug.ts,loading.ts,animation.ts,component.ts,Render.ts
import urllib.request

HOST='https://raw.githubusercontent.com/davidkingzyb/egretInit/master/egretTools/'

def getUpdateList(filename):
    with open(filename,'r') as f:
        arr=f.read().split(',')
    return arr

def doUpdata(updatelist):
    for x in updatelist:
        con=spider(HOST+x)
        save(x,con)
        print(x+' ok')

def spider(url):
    con=urllib.request.urlopen(url).read()
    return con

def save(filename,con):
    with open(filename,'wb') as f:
        f.write(con)

updatelist=getUpdateList('updatelist.txt')
doUpdata(updatelist)

