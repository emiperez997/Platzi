// Para setear la variable de entorno hay que poner el nombre de la variable al ejecutarlo 
// NOMBRE=Emi node <programa>
let saludo = process.env.NOMBRE || 'Usuario'; // env -> Variable de entorno
let web = process.env.MI_WEB || 'Sin web';
console.log(`Hola ${saludo}!`);
console.log(`Mi Web: ${web}`);

// PM2: Sirve para ejecutar un servidor en segundo plano
// pm2 start <archivo> -> Inicializar
// pm2 status -> Para ver el estado de mis servidores
// pm2 stop <id> || <name> -> Detener