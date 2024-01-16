# Project: DWN Client
# Introduction
This API porpouse is to Mock the process of inbox messaging using 
Descentralized Web Node and their intefaces 

# Overview
The most important thing that any developer should know is only one endpoint is required to use but depending the method or interface used the body must be changed according with DIF standars

## End-point: Thread Create
### Method: POST
>```
>localhost:1337/
>```
### Body (**raw**)

```json
{
    "target": "did:modena:matic:EiAWXbyhJMNLoVAkA-SFT7TUBqcDh35
    vJqOFavcYiHr9eQ",
    "messages": [
        {
            "data": {
                "@context":["https://w3id.org/vaccination/v1","https://www.w3.org/2018/credentials/v1"],"type":["VaccinationCertificate","VerifiableCredential"],"identifier":"2a386c53-5a0c-47ae-90f8-6e7dff8963cc","credentialStatus":{"id":"https://credentials.extrimian.com/credentials/status/2a386c53-5a0c-47ae-90f8-6e7dff8963cc","type":"CredentialStatusList2017"},"credentialSubject":{"type":"VaccinationEvent","https://w3id.org/vaccination#VaccineEventVaccine":{"type":"Vaccine","atcCode":"J07BX03","disease":"COVID-19","marketingAuthorizationHolder":"Moderna Biotech","medicinalProductName":"COVID-19 Vaccine Moderna"},"administeringCentre":"MoH","batchNumber":"1183738569","countryOfVaccination":"NZ","healthProfessional":"MoH","https://w3id.org/vaccination#recipient":{"type":"VaccineRecipient","birthDate":"2021-01-01","familyName":"luna","gender":"Male","givenName":"pablo"}},"expirationDate":"05/05/2026","issuanceDate":"13/07/2022","issuer":"did:key:z6MkiY62766b1LJkExWMsM3QG4WtX7QpY823dxoYzr9qZvJ3","proof":{"type":"sec:BbsBlsSignature2020","http://purl.org/dc/terms/created":{"type":"http://www.w3.org/2001/XMLSchema#dateTime","@value":"2022-07-13T15:45:14Z"},"https://w3id.org/security#proofPurpose":{"id":"https://w3id.org/security#assertionMethod"},"https://w3id.org/security#proofValue":"odxGhVeCKc6XwKh+dLQFW11sJnD/+fYdMpicMeI/6w/jci5erOfuks6LlHlZtihCI38HfhfkN1jW3itpYmHd05CJHOsvbS5h+WMM1uUJQH1GPtWhKhNo7Fy75RLMdaC/odS/oJIeHiHMhX6sS7s+Ig==","https://w3id.org/security#verificationMethod":{"id":"did:modena:matic:EiBJrYsmcJK48HZmHCu8z6huHADe6I2E5y0eLdkb2-MJ_w#bbs2020"}}
            },
            "descriptor": {
                "objectId": null,
                "dateCreated": null,
                "method": "ThreadsCreate",
                "schema": "https://schema.org/LikeAction",
                "dataFormat": "application/JSON-LD"
            }
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Thread Reply
### Method: POST
>```
>localhost:1337/
>```
### Body (**raw**)

```json
{
    "target": "did:ion:extrimian",
    "messages": [
        {
            "data": {
                "did": "did:ion:agent"
            },
            "descriptor": {
                "objectId": null,
                "root": "b6464162-84af-4aab-aff5-f1f8438dfr15",
                "parent": "b6464162-84af-4aab-aff5-f1f8438dfr15",
                "dateCreated": null,
                "method": "ThreadsReply",
                "schema": "https://schema.org/LikeAction",
                "dataFormat": "application/JSON-LD"
            }
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Thread Query
### Method: POST
>```
>localhost:1337/
>```
### Body (**raw**)

```json
{
    "target": "did:modena:matic:EiCAm5Dfd3pwy5aYvk1LcSKt_skP0B4-_dEnbd_YRYfXjg",
    "messages": [
        {
            "descriptor": {
                "method": "ThreadsQuery"
            }
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
