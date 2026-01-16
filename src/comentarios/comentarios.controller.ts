import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { ComentariosService } from "./comentarios.service";

@Controller({})
export class ComentariosController {
    constructor(private comentariosService: ComentariosService) {}

    @Get('/comentarios')
    getComentarios(){
        return this.comentariosService.getComentarios();
    }

    @Post('/comentarios')
    createComentario(){
        return this.comentariosService.createComentario();
    }

    @Put('/comentarios/:id')
    updateComentario(){
        return this.comentariosService.updateComentario();
    }

    @Delete('/comentarios/:id')
    deleteComentario(){
        return this.comentariosService.deleteComentario();
    }

    @Patch('/comentarios/:id')
    patchComentarioStatus(){
        return this.comentariosService.patchComentarioStatus();
    }
}