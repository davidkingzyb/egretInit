#!/usr/bin/python3
# -*- coding: UTF-8 -*-
##########################################################################
#                                          ______                        #  
#                                  _      |_    _|           __  _       #  
#    _____   _____  __  __  _____ | \_      |  |    ______  |__|| \_     #  
#   /  _  \ / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _|   #  
#  /  ____/_\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___  #  
#  \______/\______||___|  \______/\_____/ |______| |__| |__||__|\_____/  #  
##########################################################################
#  2015/11/25 by DKZ https://davidkingzyb.github.io
#  github: https://github.com/davidkingzyb/egretInit
#  guide: http://davidkingzyb.github.io/blogmd/4.html
# update egretInit
#created by dkz 2015/10/23
#updata list: tool.ts,debug.ts,loading.ts,animation.ts,component.ts
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

updatelist=['tool.ts','debug.ts','loading.ts','animation.ts','component.ts']#getUpdateList('updatelist.txt')
doUpdata(updatelist)

