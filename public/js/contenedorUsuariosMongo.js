import { mongoDbclient } from "./mongoclient"

export default class ContenedorUsuariosMongo {
    constructor(cliente, nombreColeccion){
        this.colecion = cliente.db().collection(nombreColeccion)
    }
    async read() {
        return await this.coleccion.find().toArray()
    }
    async save(data){
        return await this.coleccion.insertOne(data)
    }
}

