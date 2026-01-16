import { Injectable } from "@nestjs/common";

@Injectable()
export class ComentariosService {
    getComentarios() {
        return [
            { id: 1, texto: 'Este es un comentario', autor: 'Ana' },
            { id: 2, texto: 'Otro comentario aquí', autor: 'Luis' }
        ];
    }

    createComentario() {
        return 'Crear un comentario';
    }

    updateComentario() {
        return 'Actualizar un comentario';
    }

    deleteComentario() {
        return 'Eliminar un comentario';
    }

    patchComentarioStatus() {
        return 'Actualizar parcialmente un comentario';
    }
}