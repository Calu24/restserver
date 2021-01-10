// PUERTO:

process.env.PORT = process.env.PORT || 3000;


// ENTORNO:

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// BASE DE DATOS:
let urlDb;

if(process.env.NODE_ENV === 'dev'){
    urlDb = 'mongodb://localhost:27017/cafe';
}else{
    urlDb = 'mongodb+srv://proyect0:VCP7qw3DMBBh8DsH@cluster0.o5aln.mongodb.net/cafe';
}

process.env.URLDB = urlDb;