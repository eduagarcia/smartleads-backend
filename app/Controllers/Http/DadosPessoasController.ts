import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DadosPessoasController {
    
    public async hello({ request, response }: HttpContextContract) {
        const name = request.input('name', 'Guess')
        return response.send({ message: 'Hello ' + name })
    }
}
