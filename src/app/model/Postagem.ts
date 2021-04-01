import {User} from './User';
import {Tema} from './Tema';

export class Postagem{
    public idPostagem: number
    public descricaoPostagem: string
    public urlImagemPostagem: string
    public tituloPostagem: string
    public tipoAjudaPostagem: string
    public dataPostagem: Date
    public usuario: User
    public tema: Tema
}
