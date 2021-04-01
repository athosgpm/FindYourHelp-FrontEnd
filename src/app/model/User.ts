import {Postagem} from './Postagem';

export class User{
    public idUsuario: number
    public nomeUsuario: string
    public tipoUsuario: string
    public emailUsuario: string
    public senhaUsuario: string
    public imagemUsuario: string
    public telefoneUsuario: string
    public postagem: Postagem[]
}

