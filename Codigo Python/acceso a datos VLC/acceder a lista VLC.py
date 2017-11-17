import xml.etree.ElementTree as ET

tree = ET.parse("./ficheros/Extremoduro.xspf")
root = tree.getroot()
tracklist = root.iter("tracklist")
for element in tracklist:
    Canción = element.find('title').text
    Ubicación = element.find('location').text
    print ("Track: {0}, Ubicación: {1}".format(Canción, Ubicación))