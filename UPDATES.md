# Upgrade de v1.0.4-RC2 => v1.0.5-RC1

## DB Upgrade

se agrega mongo db como persistencia de datos
crear base de datos "dwn" en el mongo de cada ambiente 
qa mongodb://10.9.11.141:27017/dwn
hml mongodb://10.9.11.141:27017/dwn?authSource=admin

## Realizar build y deploy desde tags

- dwn/tags: 1.0.5-RC1

### Despliegue (OC)