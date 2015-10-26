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
import os
import json

fileName=os.listdir('./assets')

def getResources(fileName):
	resources=[]
	for x in fileName:
		arr=x.split('.')
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
		resources.append(d)
	return resources

def getKeys(resources):
	keys=''
	for x in resources:
		keys+=x['name']+','
	return keys[0:-1]


jsonDict={'resources':getResources(fileName),'groups':[{'name':'preload','keys':getKeys(getResources(fileName))}]}
with open('resource.json','w') as f:
	f.write(json.dumps(jsonDict))

print ('ok')
