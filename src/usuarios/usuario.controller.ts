import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller({})
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Get('/usuarios')
    getUsuarios(){
        return this.usuarioService.getUsuarios();
    }
    
    @Post('/usuarios')
    createUsuario(){
        return this.usuarioService.createUsuario();
    }

    @Put('/usuarios/:id')
    updateUsuario(){
        return this.usuarioService.updateUsuario();
    }

    @Delete('/usuarios/:id')
    deleteUsuario(){
        return this.usuarioService.deleteUsuario();
    }

    @Patch('/usuarios/:id')
    patchUsuarioStatus(){
        return this.usuarioService.patchUsuarioStatus();
    }


}

