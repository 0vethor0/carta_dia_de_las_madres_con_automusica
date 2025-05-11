document.addEventListener('DOMContentLoaded', () => { // Asegúrate que el DOM esté listo
    const btnAbrir = document.querySelector("#Abrir");
    const btnCerrar = document.querySelector("#Cerrar");
    const miAudioElement = document.getElementById('myaudio');
    // const botonReproducir = document.getElementById('botonReproducir'); // Este no se usa en tu código actual

    // --- Botón para reproducir/reanudar el audio ---
    btnAbrir.addEventListener('click', function() {
        // Solo intentar reproducir si está pausado o no ha comenzado
        if (miAudioElement.paused) {
            const playPromise = miAudioElement.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("Audio reproduciéndose (botón Abrir)");
                }).catch(error => {
                    // Si el error es AbortError, es probable que otra acción (como otro clic rápido)
                    // haya causado una nueva llamada a play/pause.
                    // No lo mostramos como un error crítico si es AbortError.
                    if (error.name !== 'AbortError') {
                        console.error("Error al intentar reproducir el audio (botón Abrir):", error);
                    } else {
                        console.log("Intento de reproducción (botón Abrir) interrumpido, posible acción rápida del usuario.");
                    }
                });
            }
        } else {
            console.log("El audio ya se está reproduciendo o intentando reproducir (botón Abrir).");
        }
    });

    // --- Botón para pausar el audio ---
    btnCerrar.addEventListener('click', function() {
        // Solo pausar si se está reproduciendo
        if (!miAudioElement.paused) {
            miAudioElement.pause();
            console.log("Audio pausado (botón Cerrar)");
        } else {
            console.log("El audio ya está pausado (botón Cerrar).");
        }
    });

    // Abrir Carta
    btnAbrir.addEventListener("click", () => {
        const ElementoSuperior = document.querySelector(".superior");
        ElementoSuperior.classList.add("abrir-superior");

        const h1 = document.querySelector("h1");
        const p = document.querySelector("p.psorpresa"); // Más específico
        h1.style.transform = "translateY(-120px)";
        p.style.transform = "translateY(-120px)";
        h1.style.transition = "transform 0.65s ease-in-out";
        p.style.transition = "transform 0.65s ease-in-out";

        const IconoCorazon = document.querySelector(".bx");
        IconoCorazon.classList.add("bx-rotada");

        setTimeout(() => {
            ElementoSuperior.style.zIndex = -1;
            const ElementoMensaje = document.querySelector(".mensaje");
            ElementoMensaje.classList.add("abrir-mensaje");
        }, 700);
    });

    // Cerrar Carta
    btnCerrar.addEventListener("click", () => {
        const ElementoSuperior = document.querySelector(".superior");
        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.remove("abrir-mensaje");

        setTimeout(() => {
            const h1 = document.querySelector("h1");
            const p = document.querySelector("p.psorpresa"); // Más específico
            h1.style.transform = "translateY(0px)";
            p.style.transform = "translateY(0px)";

            ElementoSuperior.style.zIndex = 0;
            ElementoSuperior.classList.remove("abrir-superior");

            const IconoCorazon = document.querySelector(".bx");
            IconoCorazon.classList.remove("bx-rotada");
        }, 700);
    });

    // Con click en la carta (contenedor)
    const contenedor = document.querySelector("#AbrirContenedor");
    // Abrir carta al hacer click en el contenedor
    contenedor.addEventListener("click", () => {
        // Aquí podrías considerar también reproducir el audio si está pausado,
        // para unificar la acción de "abrir"
        if (miAudioElement.paused) {
            const playPromise = miAudioElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    if (error.name !== 'AbortError') {
                        console.error("Error al intentar reproducir el audio (clic contenedor):", error);
                    }
                });
            }
        }

        const ElementoSuperior = document.querySelector(".superior");
        ElementoSuperior.classList.add("abrir-superior");

        const h1 = document.querySelector("h1");
        const p = document.querySelector("p.psorpresa"); // Más específico
        h1.style.transform = "translateY(-120px)";
        p.style.transform = "translateY(-120px)";
        h1.style.transition = "transform 0.65s ease-in-out";
        p.style.transition = "transform 0.65s ease-in-out";

        const IconoCorazon = document.querySelector(".bx");
        IconoCorazon.classList.add("bx-rotada");

        setTimeout(() => {
            ElementoSuperior.style.zIndex = -1;
            const ElementoMensaje = document.querySelector(".mensaje");
            ElementoMensaje.classList.add("abrir-mensaje");
        }, 700);
    });
});