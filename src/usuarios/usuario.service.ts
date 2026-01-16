import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioService {
    getUsuarios() {
        return [
            { id: 1, nombre: 'Juan Perez', email: 'lolo'}];
    }

    createUsuario() {
        return 'Crear un usuario';
    }

    updateUsuario() {
        return 'Actualizar un usuario';
    }

    deleteUsuario() {
        return 'Eliminar un usuario';
    }

    patchUsuarioStatus() {
        return 'Actualizar parcialmente un usuario';
    }    
}