# Aplicación de registro de tareas realizada en Ángular.

Esta apliación sirve para tomar nota de las tareas que debemos realizar en nuestro día, así como también para tener un trackeo de la completitud de las mismas.

## ¿De donde surge la iniciativa para crear la aplicación?

La iniciativa toma origen en un concurso que se realizaba de este tipo de aplicaciones, en una suerte de "competencia" donde desarrolladores compartían su visión sobre una app del estilo 
**todolist app** y las herramientas que consideraba adecuadas para el desarrollo del mismo.

## Contexto sobre mi conocimiento al momento de desarrollar esta aplicación.

Al momento de desarrollar esta aplicación yo llevaba 8 meses de pasantía en mi primer trabajo como desarrollador, por lo que mis conocimientos no eran avanzados ni estaban a la altura de los que poseo hoy en día, por lo que era de mis primeras aplicaciones creadas y diseñadas íntegramente por mi.

### ¿Por qué utilicé Angular para este desarrollo?

Utilicé Angular sencillamente porque era el framework que utilizaba en el trabajo y creo que tiene un potencial increible para el desarrollo de aplicaciones web. Ángular es una tecnología con la que me siento muy cómodo ya que la he utilizado a lo largo de mucho tiempo y conozco sus debilidades y fortalezas.

## Screenshots de la app

![todo-list-angular](https://i.ibb.co/frvRMYP/todo-list-angular-01.png)![todo-list-angular](https://i.ibb.co/197HyfT/todo-list-angular-02.png)![todo-list-angular](https://i.ibb.co/ZVw1K6y/todo-list-angular-03.png)![todo-list-angular](https://i.ibb.co/X3KxYhD/todo-list-angular-04.png)

## Características de la app

Esta app nos permite:
- Crear tareas
- Marcar tareas como "completas"
- Marcar tareas como "incompletas"
- Eliminar tareas
- Crear categorías
- Eliminar categorías
- Modificar categorías
- Asignar una categoría a una tarea.
- Desasignar una categoría a una tarea.

## Demo

Pueden probar una demo de la app desde aquí:
[Enlace a la demo de la app "Lista de tareas en ángular"](https://todoappbygastonalt.netlify.app/) .

## Actualizaciones

No creo que este proyecto tenga o requiera de actualizaciones ya que estaba pensado para el concurso que mencioné en la [Introducción](#Aplicaci%C3%B3n-de-registro-de-tareas-realizada-en-%C3%81ngular.).

## Bugs

Hay un bug con el tamaño de los íconos. Esto se debe a una propiedad en algún archivo .css que establece la siguiente regla:

> < i _ngcontent-sci-c80="" mattooltip="Editar TODO"
> class="mat-tooltip-trigger fa-solid fa-pencil fa-xl" style="cursor:
> pointer; position: absolute; right: 2em; top: 1em; **scale: 300%**;"
> aria-describedby="cdk-describedby-message-10"
> cdk-describedby-host="0"></ i>

A la espera de una solución.

## Conclusiones

El desarrollo de esta app estuvo pensado para entrenar mis habilidades y permitirme aprender mas sobre las tecnologías que utilicé. Cualquier consejo y retroalimentación sobre la misma será coordialmente recibida.
