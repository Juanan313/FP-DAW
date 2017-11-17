# FP-DAW

## Proyectos

Este repertorio contiene proyectos realizados en los distintos modulos 
 del grado superior en *Desarrollo de Aplicaciones Web*.
 
 ### Módulos de este FP:
  * Bases de Datos
  * Entornos de Desarrollo
  * Lenguaje de Marcas
  * Programación
  * Sistemas Informáticos

En este repertorio encontraremos ejercicios de *Python* resueltos de la pagina 
[Codewars](https://www.codewars.com/dashboard) .
Y otros de los videos del curso de *Python* de [Udacity](https://www.udacity.com/course/intro-to-computer-science--cs101).

*Ejemplo codigo Python:
~~~
 Print ("Hello world")
~~~
También encontraremos paginas realizadas con Html y con css.  

*Ejemplo codigo Html:
~~~
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta Description="Este pagina es un blog con el contenido de la futura banda de World of Warcraft">
        <meta charset = "utf-8">
        <link rel="stylesheet" type="text/css" href="Practica 2.3.3_JuananPujals.css">
        <title>Blog Bandas Legion</title>
~~~

## Práctica 2.2.3 Lenguaje de Marcas: Markdown y Github
---
Este fichero contiene los conceptos básicos de Markdown puesto que la práctica 2.2.3 del modulo Lenguaje de marcas consiste en modificar el readme de un repositorio de GitHub con Markdown.
~~~
### Encabezados
---
Las # almohadillas son uno de los métodos utilizados en Markdown para crear encabezados.  
Debes usarlos añadiendo uno por cada nivel.
~~~
## Encabezado 2

### Citas
---
~~~
> El Software Libre es como el sexo, es mejor cuando es gratis”, (en respuesta a alguien preocupado por el futuro de Linux). - Linus Torvalds
 Incluso se pueden concatenar varios >> para crear citas anidadas.
~~~
> El Software Libre es como el sexo, es mejor cuando es gratis”, (en respuesta a alguien preocupado por el futuro de Linux). - Linus Torvalds

### Listas
---
~~~
*Listas desordenadas
Para crear listas desordenadas utiliza * asteriscos, - guiones, o + símbolo de suma.
Para generar listas anidadas dentro de otras, simplemente tendrás que añadir **cuatro espacios en blanco antes del siguiente *, - o +.
*Listas ordenadas
  Para crear listas ordenadas debes utilizar la sintaxis de tipo: “número.” 1.. Al igual que ocurre con las listas desordenadas, también podrás anidarlas o combinarlas.
~~~
* Elemento de lista 1
* Elemento de lista 2
* Elemento de lista 3
* Elemento de lista 4
* Elemento de lista 5
* Elemento de lista 6
### Códigos de bloque
---
Si quieres crear un bloque entero que contenga código. Lo único que tienes que hacer es encerrar dicho párrafo entre dos líneas formadas por tres ~ virgulillas.
~~~
Creando códigos de bloque.
Puedes añadir tantas líneas y párrafos como quieras.  
~~~

### Reglas horizontales
---
Las reglas horizontales se utilizan para separar secciones de una manera visual.
Para crearlas, en una línea en blanco deberás incluir tres de los siguientes elementos: asteriscos, guiones, o guiones bajos.
~~~
***
---
___
~~~
## Elementos de línea
___
### Énfasis (negrita y cursiva)
Markdown utiliza asteriscos o guiones bajos para enfatizar.


| **Markdown**      | __Resultado__  |
|-------------------|----------------|
|  \*Cursiva\*      |    *cursiva*   |
| \_cursiva\_       |     _cursiva_  |
| \*\*Negrita\*\*   | **Negrita**    |
| \_\_Negrita\_\_   | __Negrita__    |

Para usar ambos enfasis:


| **Markdown**      | __Resultado__  |
|-------------------|----------------|
|\*\*\*Ambos\*\*\*|   ***Ambos***  |
|\_\_\_Ambos\_\_\_|   ___Ambos___  |
### Tablas
___
Como se ve en el apartado anterior en Markdown tambien se pueden realizar tablas utilizandos las barras | y los guiones --:
~~~
| **Cabecera tabla**|**Cabecera tabla**|  
|-------------------|------------------|
|    *Celda*        |    *Celda*       |
|    *Celda*        |    *Celda*       |
|    *Celda*        |    *Celda*       |
|    *Celda*        |    *Celda*       |
~~~
Tabla del ejemplo:

| **Cabecera tabla**|**Cabecera tabla**|  
|-------------------|------------------|
|    *Celda*        |    *Celda*       |
|    *Celda*        |    *Celda*       |
|    *Celda*        |    *Celda*       |
|    *Celda*        |    *Celda*       |

### Links
___
Se crean escribiendo la palabra o texto enlazada entre [] corchetes el nombre o texto con el que quieres que aparezca el enlace, y el link en cuestión entre () paréntesis.
~~~
[Git Hub Juanan Pujals](https://github.com/Juanan313/)
~~~~
[Git Hub Juanan Pujals](https://github.com/Juanan313/)

Para insertar imagenes en Markdown se realiza prácticamente de manera idéntica a la de insertar un link. Solo que en este caso se debe poner un ! justo delante de los corchetes del principio y el link de la ubicación de la imagen.
![Meme Navy Rick y Morty](http://i0.kym-cdn.com/photos/images/newsfeed/000/880/005/e61.jpg)
## Omitir Markdown
---
Para omitir cualquiera de los simbolos que Markdown reconoce como sintaxis propia basta con poner un bara invertida \ justo delante de ellos.
  Algunos de los más comunes donde los utilizaremos:
  
~~~
\  barra invertida
`  acento invertido
*  asterisco
_  guión bajo
{} llaves
[] corchetes
() paréntesis
#  almohadilla
+  símbolo de suma
-  guión
.  punto
!  exclamación
~~~
