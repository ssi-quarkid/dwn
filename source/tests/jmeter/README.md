# Load Testing con JMeter

## Requisitos
- JMeter
- Python

## Pasos a seguir

### Generar datos random
Ejecutar el script `data_generator.py` especificando la cantidad de datos que se quieren generar. Por ejemplo, para generar 100 datos:

```sh
python data_generator.py 100
```

Esto generara un archivo llamado `params.csv`

### Importar y configurar JMETER

Abrir el archivo `DWN_TEST.jmx` con **JMeter**

Dentro de JMeter, Acceder al menu `Call Params` y en campo `Filename` seleccionar el archivo `params.csv` creado por el script de python.

Luego, en el Thread Group **Http URL/API Test** configurar segun se desee:
 - Number of Threads: Usuarios simultaneos
 - Ramp-up Period: Tiempo para correr los request de todos los usuarios
 - Loop Count: Cantidad de veces que se repite la iteracion

### Ejecutar los tests

Darle al play y esperar.
En las pestañas de `View Result Tree` pueden verse los resultados individuales de cada request, en `Summary Report` se pueden ver los datos generales del test y en `Graph Results` puede verse una representacion grafica de los resultados.


