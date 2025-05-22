/*// Abrir modal al hacer clic en una película
const peliculas = document.querySelectorAll('.pelicula');
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescripcion = document.getElementById('modal-descripcion');
const modalImagen = document.getElementById('modal-imagen-src');
const cerrarModal = document.querySelector('.modal-cerrar');

/*peliculas.forEach(pelicula => {
    pelicula.addEventListener('click', () => {
        const titulo = pelicula.getAttribute('data-titulo');
        const descripcion = pelicula.getAttribute('data-descripcion');
        const imagenSrc = pelicula.querySelector('img').src;
        
        modalTitulo.textContent = titulo;
        modalDescripcion.textContent = descripcion;
        modalImagen.src = imagenSrc;
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

peliculas.forEach(pelicula => {
    pelicula.addEventListener('click', () => {
        const titulo = pelicula.getAttribute('data-titulo');
        const descripcion = pelicula.getAttribute('data-descripcion');
        const imagenSrc = pelicula.querySelector('img').src;
        
        modalTitulo.textContent = titulo;
        modalDescripcion.textContent = descripcion;
        modalImagen.src = imagenSrc;
        
        // Mostrar u ocultar el resumen según la película
        const resumenTexto = document.querySelector('.resumen-texto');
        if (titulo === "TINODADAS ESTREITO") { // Ejemplo para una película específica
            resumenTexto.style.display = 'block';
        } else {
            resumenTexto.style.display = 'none';
        }
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Cerrar modal
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});



document.addEventListener('DOMContentLoaded', function() {
  const bgMusic = document.getElementById('bgMusic');
  
  // Intentar reproducir automáticamente
  const playPromise = bgMusic.play();
  
  // Manejar posibles errores de autoplay
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      // Mostrar botón de reproducción si el autoplay falla
      console.log('Autoplay no permitido, mostrando botón de reproducción');
      const playButton = document.createElement('button');
      playButton.textContent = 'Reproducir música';
      playButton.style.position = 'fixed';
      playButton.style.bottom = '20px';
      playButton.style.right = '20px';
      playButton.style.zIndex = '1000';
      playButton.style.padding = '10px 20px';
      playButton.style.backgroundColor = '#e50914';
      playButton.style.color = 'white';
      playButton.style.border = 'none';
      playButton.style.borderRadius = '5px';
      playButton.style.cursor = 'pointer';
      
      playButton.addEventListener('click', () => {
        bgMusic.play();
        playButton.remove();
      });
      
      document.body.appendChild(playButton);
    });
  }
});*/


document.addEventListener('DOMContentLoaded', function() {
  const bgMusic = document.getElementById('bgMusic');
  // Intentar reproducir automáticamente
  const playPromise = bgMusic.play();
  
  // Manejar posibles errores de autoplay
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      // Mostrar botón de reproducción si el autoplay falla
      console.log('Autoplay no permitido, mostrando botón de reproducción');
      const playButton = document.createElement('button');
      playButton.textContent = 'Reproducir música';
      playButton.style.position = 'fixed';
      playButton.style.bottom = '20px';
      playButton.style.right = '20px';
      playButton.style.zIndex = '1000';
      playButton.style.padding = '10px 20px';
      playButton.style.backgroundColor = '#e50914';
      playButton.style.color = 'yellow';
      playButton.style.border = 'none';
      playButton.style.borderRadius = '5px';
      playButton.style.cursor = 'pointer';
      
      playButton.addEventListener('click', () => {
        bgMusic.play();
        playButton.remove();
      });
      
      document.body.appendChild(playButton);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
    // Configuración de música (tu código existente)
    
    // Modal de películas (tu código existente)
    
    // Modal del autor
    const btnAutor = document.getElementById('btn-autor');
    const modalAutor = document.getElementById('modal-autor');
    const cerrarAutor = modalAutor.querySelector('.modal-boton');
    
    // Abrir modal del autor
    btnAutor.addEventListener('click', function(e) {
        e.preventDefault();
        modalAutor.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    // Cerrar modal del autor
    cerrarAutor.addEventListener('click', function() {
        modalAutor.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar al hacer clic fuera
    modalAutor.addEventListener('click', function(e) {
        if (e.target === modalAutor) {
            modalAutor.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modalAutor.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    /*// Reproducción automática de música
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 10;
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            document.body.addEventListener('click', function() {
                bgMusic.play();
            }, { once: true });
        });
    }*/

    // Configuración del modal
    const peliculas = document.querySelectorAll('.pelicula');
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const modalImagen = document.getElementById('modal-imagen-src');
    const modalContenido = document.getElementById('modal-contenido');
    const cerrarModal = document.querySelector('.modal-cerrar');

    peliculas.forEach(pelicula => {
        pelicula.addEventListener('click', () => {
            const titulo = pelicula.getAttribute('data-titulo');
            const descripcion = pelicula.getAttribute('data-descripcion');
            const imagenSrc = pelicula.querySelector('img').src;
            const contenido = pelicula.getAttribute('data-contenido');
            
            modalTitulo.textContent = titulo;
            modalDescripcion.textContent = descripcion;
            modalImagen.src = imagenSrc;
            modalContenido.innerHTML = contenido;
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});