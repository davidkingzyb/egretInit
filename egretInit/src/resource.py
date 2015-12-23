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
# github: https://github.com/davidkingzyb/egretInit

import os
import json



def getPreload():
    fileName=os.listdir('./assets')
    resource=[]
    for x in fileName:
        arr=x.split('.')
        if len(arr)>=2:
            T='image'
            if arr[0][-2:]=='SS' and arr[1]=='json':
                T='sheet'
                arr[0]+='Sheet'
            elif arr[1]=='fnt':
                T='font'
                arr[0]+='Font'
            elif arr[1]=='json':
                T='json'
                arr[0]+='MC'
            elif arr[1]=='mp3':
                T='sound'
            d={'name':arr[0],'type':T,'url':'assets/'+x}
            resource.append(d)
        else:
            groupsName.append(arr[0])        
        
    return resource

def getKeys(resources):
    keys=''
    for x in resources:
        keys+=x['name']+','
    return keys[0:-1]

def getGroup(groupName):
    fileName=os.listdir('./assets/'+groupName)
    resource=[]
    for x in fileName:
        arr=x.split('.')
        if len(arr)>=2:
            T='image'
            if arr[0][-2:]=='SS' and arr[1]=='json':
                T='sheet'
                arr[0]+='Sheet'
            elif arr[1]=='fnt':
                T='font'
                arr[0]+='Font'
            elif arr[1]=='json':
                T='json'
                arr[0]+='MC'
            elif arr[1]=='mp3':
                T='sound'       
        d={'name':arr[0],'type':T,'url':'assets/'+groupName+'/'+x}
        resource.append(d)
    return resource


groupsName=[] 
preload=getPreload()
preloadKeys=getKeys(preload)
resources=[]
groups=[]
resources.extend(preload)
groups.append({'name':'preload','keys':preloadKeys})
for gn in groupsName:
    resource=getGroup(gn)
    key=getKeys(resource)
    resources.extend(resource)
    groups.append({'name':gn,'keys':key})
jsonDict={'resources':resources,'groups':groups} 
with open('resource.json','w') as f:
    f.write(json.dumps(jsonDict))

print ('ok')
