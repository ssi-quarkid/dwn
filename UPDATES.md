# Upgrade from v1.0.4-RC2 to v1.0.5-RC1

## DB Upgrade

FerretDB is added as data persistence.  
Create the "dwn" database in the DB for each environment:  
QA: `mongodb://10.9.11.141:27017/dwn`  
HML: `mongodb://10.9.11.141:27017/dwn?authSource=admin`

## Perform build and deploy from tags

- dwn/tags: 1.0.5-RC1

### Deployment (OC)
