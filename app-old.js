
const http = require('http');


http.createServer( (req, res) => {

    /*res.writeHead(200, { 'Content-Type': 'application/json' })
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write( 'id, nombre\n');
    res.write( '1, Fernando\n');
    res.write( '2, Pamela\n');
    res.write( '3, Maria\n');
    res.write( '4, Jose\n');
    res.end();
    */

    res.write('Hola Mundo');
    res.end();
    
})
.listen( 8080 );


console.log('Escuchando el puerto', 8080);