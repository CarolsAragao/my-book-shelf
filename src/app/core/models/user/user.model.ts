export class User {
    guid = ''
    name = ''
    email = ''
    cpf = ''
    userType = ''

    constructor(tokenDecoded?: any){
        this.guid = tokenDecoded?.Guid,
        this.name = tokenDecoded?.sub,
        this.email = tokenDecoded?.email,
        this.cpf = tokenDecoded?.CPF,
        this.userType = tokenDecoded?.UserType
    }
}