import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuarios/usuario.module';
import { TareaModule } from './tareas/tarea.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { CategoriaModule } from './categorias/categoria.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsuarioModule, TareaModule, ComentariosModule, CategoriaModule, AuthModule]
})
export class AppModule {}
