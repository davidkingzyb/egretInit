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

updatelist=['tool.ts','debug.ts','loading.ts']#getUpdateList('updatelist.txt')
doUpdata(updatelist)

