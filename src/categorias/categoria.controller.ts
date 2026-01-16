import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { CategoriaService } from "./categoria.service";

@Controller({})
export class CategoriaController {
    constructor(private categoriaService: CategoriaService) {}

    @Get('/categorias')
    getCategorias(){
        return this.categoriaService.getCategorias();
    }

    @Post('/categorias')
    createCategoria(){
        return this.categoriaService.createCategoria();
    }

    @Put('/categorias/:id')
    updateCategoria(){
        return this.categoriaService.updateCategoria();
    }

    @Delete('/categorias/:id')
    deleteCategoria(){
        return this.categoriaService.deleteCategoria();
    }

    @Patch('/categorias/:id')
    patchCategoriaStatus(){
        return this.categoriaService.patchCategoriaStatus();
    }
}