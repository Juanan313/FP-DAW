import random
# Funcional, a falta de refactorizar, darle cohesión y comentar algo más.
playList = {}
# playList ={ 1: "titulo cancion", 2: "titulo cancion" ... }

libreria = {"California_Uber_Alles.mp3":{"track-number": 3, "artist": "Dead Kennedys", "album": "Dead Kennedys","location": "./biblioteca/California_Uber_Alles.mp3"},
            "Seattle_Party":{"track-number": 1, "artist": "Chastity Belt", "album": "No regrets","location": "./biblioteca/Seattle_Party.flac"},
            "King_Kunta":{"track-number": 3, "artist": "Kendrick Lamar", "album": "To Pimp A Butterfly","location": "./biblioteca/King_Kunta.mp3"}}


def seleccionarCancionRandom (libreria):
    assert isinstance(libreria,dict), "No es un diccionario"
    listaRandom = []
    trackList = list(libreria.keys()) ## cambiar nombre y valor por len(liberia.keys()) (asi no hay que crear una copia)
    while len(listaRandom) <len(trackList):
        randomTrack = random.choice(trackList)
        if randomTrack in listaRandom:
            # print ("esta canción ya esta en lista random")
            pass
        else:
            listaRandom.append(randomTrack)
    assert isinstance(listaRandom,list)
    return  listaRandom

def hacerDictRandom (libreria):
    assert isinstance(libreria,dict)
    listaCancionesRandom = seleccionarCancionRandom(libreria)
    numerosDictRandom = range(1,(len(listaCancionesRandom)+1))
    playList = dict(zip(numerosDictRandom,listaCancionesRandom))
    return playList
    assert isinstance(playList,dict)
print(hacerDictRandom(libreria))


def launchVLC (libreria):
    import subprocess
    import shlex
    import os
    playList = hacerDictRandom(libreria)
    rutaVLC = "C:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe"
    for song in playList:
        track = playList[song]
        trackUbic = libreria[track]["location"]
        rutaVLC += " " + str(trackUbic)    
    lanzadorVLC = subprocess.Popen(rutaVLC)

launchVLC(libreria)





    
    
    
