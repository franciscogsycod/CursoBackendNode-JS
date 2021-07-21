const fs = require('fs');

fs.copyFile('naranja_song.txt', 'naranja__song_COPY.txt', (err) => {
    if (err) {
        console.error('Error en el copiado', error);
    }
    console.log('El archivo ha sido copiado :)');
})