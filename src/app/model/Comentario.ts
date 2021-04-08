import { Postagem } from './Postagem';
import { User } from './User';

export class Comentario {
  public idComentario: number
  public comentario: string
  public dataComentario: Date
  public usuario: User
  public postagem: Postagem
}