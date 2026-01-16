import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoriaService {
    getCategorias() {
        return [
            { id: 1, nombre: 'Trabajo' },
            { id: 2, nombre: 'Personal' }
        ];
    }

    createCategoria() {
        return 'Crear una categoria';
    }

    updateCategoria() {
        return 'Actualizar una categoria';
    }

    deleteCategoria() {
        return 'Eliminar una categoria';
    }

    patchCategoriaStatus() {
        return 'Actualizar parcialmente una categoria';
    }
}