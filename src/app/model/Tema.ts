import {Postagem} from './Postagem';

export class Tema {
    public idTema: number
    public descricaoTema: string
    public categoriaTema: string
    public postagem: Postagem[]
}