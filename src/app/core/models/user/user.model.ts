export class User {
    id = ''
    name = ''
    email = ''
    cpf = ''
    userType = ''

    constructor(tokenDecoded?: any){
        this.id = tokenDecoded?.Guid,
        this.name = tokenDecoded?.sub,
        this.email = tokenDecoded?.email,
        this.cpf = tokenDecoded?.CPF,
        this.userType = tokenDecoded?.UserType
    }
}

export interface UserCreate {
    name: string
    email: string
    password: string
    cpf: string
}