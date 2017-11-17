import xml.etree.ElementTree as ET
# Import libreria trabajo XML y lo nombra ET


tree = ET.parse('./ficheros/menu_xml.xml')
# 
root = tree.getroot()

for element in root.iter("food"):
    nombre = element.find('name').text
    precio = element.find('price').text
    print ("Nombre plato: {0}, Precio: {1}".format(nombre, precio))


# Codigo Josemi
