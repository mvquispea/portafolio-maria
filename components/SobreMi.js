import Image from "next/image";

export default function SobreMi() {
  return (
    <section className="py-16 px-8 bg-white text-gray-800" id="sobre-mi">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        {/* Foto */}
        <div className="flex flex-col items-center">
          <Image
            src="/maria-quispe.jpeg"
            alt="María Quispe"
            width={200}
            height={200}
            className="rounded-full shadow-lg border-4 border-blue-400"
          />
          <div className="flex justify-center space-x-4 mt-4 text-gray-600">
            <a href="https://github.com/mvquispea" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.6-1.4-1.5-1.8-1.5-1.8-1.3-.9.1-.9.1-.9 1.5.1 2.3 1.6 2.3 1.6 1.3 2.3 3.4 1.6 4.2 1.2.1-1 .5-1.6.9-2-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.2 0 0 1.1-.3 3.4 1.3a11.7 11.7 0 0 1 6.2 0c2.3-1.6 3.4-1.3 3.4-1.3.7 1.7.2 2.9.1 3.2.8.9 1.3 2 1.3 3.2 0 4.6-2.7 5.6-5.3 5.9.5.5 1 .3 1.5 1.7 0 0 .5 2.2-3.8 1.5v2.2c0 .3.2.7.8.6A10.7 10.7 0 0 0 23.5 12C23.5 5.6 18.4.5 12 .5z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mvquispea/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 hover:text-blue-700 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 11.01 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h4v12H3v-12zm7.75 0h3.81v1.64h.05c.53-.96 1.84-1.97 3.79-1.97 4.05 0 4.8 2.67 4.8 6.14v7.19h-4v-6.37c0-1.52-.03-3.49-2.13-3.49-2.13 0-2.46 1.66-2.46 3.38v6.48h-4v-12z"/>
              </svg>
            </a>
            <a href="mailto:mvquispea@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Correo">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 hover:text-red-600 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 4.89A2 2 0 0 1 4 3h16a2 2 0 0 1 2 1.89L12 13.5 2.01 4.89zM2 6.58V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.58l-9.4 7.45a1.5 1.5 0 0 1-1.8 0L2 6.58z"/>
              </svg>
            </a>
            <a href="https://wa.me/51996336287" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 hover:text-green-500 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3.5a11.64 11.64 0 0 0-16.44 0A11.55 11.55 0 0 0 3.5 12a11.39 11.39 0 0 0 1.61 5.87L3 21l3.26-.86A11.66 11.66 0 1 0 20.5 3.5zm-8.48 17a9.46 9.46 0 0 1-4.83-1.33l-.35-.2-2.32.61.62-2.26-.22-.37a9.47 9.47 0 1 1 7.1 3.55zm5.2-6.7c-.28-.14-1.66-.82-1.91-.92s-.45-.14-.64.14-.74.92-.91 1.1-.34.21-.62.07a7.7 7.7 0 0 1-2.26-1.4 8.3 8.3 0 0 1-1.54-1.93c-.16-.27 0-.42.12-.55s.28-.34.42-.52a1.82 1.82 0 0 0 .28-.47.49.49 0 0 0 0-.47c-.14-.13-.64-1.55-.88-2.12s-.48-.49-.65-.5H8.3a1 1 0 0 0-.73.34 3.07 3.07 0 0 0-.97 2.3 5.34 5.34 0 0 0 1.14 2.52A12.3 12.3 0 0 0 14 16.26a5.4 5.4 0 0 0 2.55.67 3 3 0 0 0 2-.89 2.32 2.32 0 0 0 .48-1.62c-.07-.13-.25-.2-.53-.34z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Texto */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
            Acerca de Mí
          </h2>
          <p className="mb-4 text-justify">
            <strong>Ingeniera en Sistemas</strong> con experiencia en automatización educativa,
            manejo de plataformas como Canvas LMS y Moodle, así como desarrollo backend y frontend. Apasionada por la <strong>inteligencia artificial aplicada a la educación</strong> y la mejora de procesos mediante tecnologías emergentes.
          </p>
          <p className="text-justify">
            Poseo habilidades de comunicación efectiva, pensamiento crítico, y creatividad para el
            diseño de soluciones en entornos colaborativos e interdisciplinarios.
          </p>
        </div>
      </div>

      {/* Habilidades */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="font-semibold text-blue-600 mb-2">Backend</h3>
          <p>PHP · Laravel · Node.js</p>
        </div>
        <div>
          <h3 className="font-semibold text-blue-600 mb-2">Frontend</h3>
          <p>HTML5 · CSS · Tailwind · React</p>
        </div>
        <div>
          <h3 className="font-semibold text-blue-600 mb-2">Datos / Automatización</h3>
          <p>MySQL · Python · Make · Looker Studio</p>
        </div>
      </div>
    </section>
  );
}