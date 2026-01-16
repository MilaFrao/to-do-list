import { Injectable } from "@nestjs/common";

@Injectable()
export class TareaService {
    getTareas() {
        return [
            { id: 1, titulo: 'Comprar comida', descripcion: 'Comprar frutas y verduras para la semana', completada: false },
            { id: 2, titulo: 'Lavar el auto', descripcion: 'Lavar el auto el sábado por la mañana', completada: true }
        ];
    }

    createTarea() {
        return 'Crear una tarea';
    }

    updateTarea() {
        return 'Actualizar una tarea';
    }

    deleteTarea() {
        return 'Eliminar una tarea';
    }

    patchTareaStatus() {
        return 'Actualizar parcialmente una tarea';
    }
}