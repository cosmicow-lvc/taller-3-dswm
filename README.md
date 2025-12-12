# Taller 3 - Desarrollo de soluciones Web/Movil
**Grupo 4**
1. Máximo Jofré, 21675371-2
2. Sofía Contreras, 21702328-9
3. Diego Adaos, 21535504-7
4. Antonio Tabilo, 21668377-3

Este proyecto es una aplicación web, desarrollada con el framework Next.js, Redux y Prisma, con el objetivo de crear un dashboard con graficos dinamicos que se vean afectados por los filtros aplicados a los datos.

## Instrucciones para ejecutar la aplicación localmente

Requerimientos: Node.js ^22.20 y PostgreSQL

Cambiar al directorio /datamobile
```
cd datamobile
```
Instalar todos los modulos necesarios para ejecutar la aplicación
```
npm install
```
Crear un archivo .env en el directorio /datamobile con el siguiente contenido, reemplazando todos los campos <> con los parametros locales de PostgreSQL
```
DATABASE_URL = "postgresql://<USUARIO>:<CONTRASEÑA>@<HOST>:<PUERTO>/<BASE_DE_DATOS>?schema=public"
```
Creamos el cliente de prisma
```
npx prisma generate
```
Iniciamos la aplicacion
```
npm run dev
```

