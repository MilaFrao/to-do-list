-- Active: 1768314161089@@127.0.0.1@5432@base_de_datos_todo@public
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "SCHEMA";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "contrasena" VARCHAR(250) NOT NULL,
    "fecha_de_registro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "descripcion" VARCHAR(250),
    "color" VARCHAR(50) NOT NULL,
    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tareas" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(150) NOT NULL,
    "descripcion" TEXT,
    "story_points" INTEGER,
    "fecha_entrega" DATE,
    "estado" VARCHAR(30) DEFAULT 'pendiente',
    "id_creador" INTEGER NOT NULL,
    "id_asignado" INTEGER,
    "id_categorias" INTEGER,
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "tareas_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "fk_creador" FOREIGN KEY ("id_creador") REFERENCES "usuarios"("id"),
    CONSTRAINT "fk_asignado" FOREIGN KEY ("id_asignado") REFERENCES "usuarios"("id"),
    CONSTRAINT "fk_categorias" FOREIGN KEY ("id_categorias") REFERENCES "categorias"("id"),
    CONSTRAINT "tareas_story_points_check" CHECK ("story_points" >= 0)
);

-- CreateTable
CREATE TABLE "comentarios" (
    "id" SERIAL NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha_comentario" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" INTEGER NOT NULL,
    "id_tarea" INTEGER NOT NULL,
    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "fk_comentario_de_usuario" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id"),
    CONSTRAINT "fk_tarea_comentada" FOREIGN KEY ("id_tarea") REFERENCES "tareas"("id")
);
