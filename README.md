mongodb://fm318610_db_user:pvXfNdRmPpiiQey8@ac-mbwslyq-shard-00-00.wcdbovz.mongodb.net:27017,ac-mbwslyq-shard-00-01.wcdbovz.mongodb.net:27017,ac-mbwslyq-shard-00-02.wcdbovz.mongodb.net:27017/?ssl=true&replicaSet=atlas-wvkszs-shard-0&authSource=admin&appName=Cluster0

# Backend crud-servicios

## Pasos para clonar el repo

## Endpoints

- Crear servicios: http://localhost:3000/api/servicios/
- método: POST
- Enviar un objeto con este formato:

```
{
"nombreServicio" : "servicio Web",
    "precio" : 450,
    "categoria" : "Desarrollo Web",
    "descripcion" : "hola buenas noches",
    "imagen" : "https://images.unsplash.com/photo-1515879218367-8466d910aaa4.jpg"
}

```
