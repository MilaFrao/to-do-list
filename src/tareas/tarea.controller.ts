import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TareaService } from "./tarea.service";

@Controller({})
export class TareaController {
    constructor(private tareaService: TareaService) {}

    @Get('/tareas')
    getTareas(){
        return this.tareaService.getTareas();
    }

    @Post('/tareas')
    createTarea(){
        return this.tareaService.createTarea();
    }

    @Put('/tareas/:id')
    updateTarea(){
        return this.tareaService.updateTarea();
    }

    @Delete('/tareas/:id')
    deleteTarea(){
        return this.tareaService.deleteTarea();
    }

    @Patch('/tareas/:id')
    patchTareaStatus(){
        return this.tareaService.patchTareaStatus();
    }
}