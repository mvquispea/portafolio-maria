// components/Experiencia.js
export default function Experiencia() {
  return (
    <section className="py-16 px-8 bg-gray-50 text-gray-800" id="experiencia">
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-12 border-b-2 border-blue-500 inline-block">
      Mi Experiencia
    </h2>
  </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Experiencia 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold text-lg">Desarrollador Web — Área de Educación Virtual</h3>
          <p className="text-blue-600">Universidad San Ignacio de Loyola – USIL</p>
          <p className="text-sm text-gray-500">Marzo 2022 - Actualidad · Presencial · Lima, Perú</p>

          <ul className="list-disc list-inside mt-4 text-justify">
            <li>Diseño y desarrollo de una aplicación para la integración de Canvas con sistemas externos.</li>
            <li>Creación de un sistema de informes automatizados mediante Power BI.</li>
            <li>Implementación de reportes personalizados por periodo en Canvas LMS.</li>
            <li>Automatización del proceso de creación de cursos, usuarios y matriculación en Canvas.</li>
            <li>Administración avanzada de Moodle: gestión de cursos, usuarios, plugins y actualizaciones.</li>
            <li>Desarrollo de informes personalizados y soluciones a medida en Moodle.</li>
            <li>Gestión y mantenimiento de sitios web en WordPress, incluyendo desarrollo de plugins personalizados.</li>
            <li>Soporte técnico e incidencias mediante Servicedesk.</li>
            <li>Programación y manejo de bases de datos MySQL y Oracle.</li>
            <li>Integración de sistemas ERP-LMS para procesos educativos escalables.</li>
            <li>Consumo de APIs para análisis y generación de informes inteligentes.</li>
            <li>Amplia experiencia con AWS, especialmente en almacenamiento con S3.</li>
            <li>Automatización de procesos educativos mediante scripts y herramientas digitales.</li>
          </ul>


          <div className="flex flex-wrap gap-2 mt-4">
            <img src="/icons/moodle.png" className="h-6" />
            <img src="/icons/canvas.png" className="h-6" />
            <img src="/icons/chatgpt.png" className="h-6" />
            <img src="/icons/python.png" className="h-6" />
            <img src="/icons/mysql.png" className="h-6" />
          </div>
        </div>

        {/* Experiencia 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold text-lg">Desarrolladora Web</h3>
          <p className="text-blue-600">Universidad de San Martín de Porres</p>
          <p className="text-sm text-gray-500">2018 - Actualidad · Remoto · Perú</p>
          <ul className="list-disc list-inside mt-4 text-justify">
            <li>Desarrollo de sistemas web utilizando Laravel y CodeIgniter.</li>
            <li>Automatización de procesos administrativos y académicos con scripts personalizados.</li>
            <li>Integración de APIs externas, generación de reportes, dashboards interactivos y firmas digitales.</li>
            <li>Implementación y despliegue de soluciones en servidores VPS utilizando Docker.</li>
            <li>
              <strong>Dashboard interactivo con actualización automatizada:</strong> Desarrollo de un panel en Looker Studio sincronizado automáticamente mediante un script en Python. El sistema ejecuta un cron job que extrae, procesa e inserta datos en BigQuery para una visualización en tiempo real.
            </li>
            <li>
              <strong>Integración de encuestas Canvas con SIGAV:</strong> Implementación de un sistema que extrae respuestas de encuestas desde Canvas por periodos específicos y las sincroniza con la base de datos de SIGAV, generando reportes en Excel con métricas clave (porcentaje de participación, aprobados, etc.).
            </li>
            <li>
              <strong>Integración de SIGAV con WooCommerce:</strong> Sincronización automática de productos creados en SIGAV con la tienda en línea en WordPress. Incluye configuración de descuentos, categorías y visibilidad en tiempo real.
            </li>
            <li>
              <strong>Visualización de notas de Moodle en SIGAV:</strong> Desarrollo de integración que permite a los docentes ver calificaciones por curso directamente desde SIGAV, optimizando la gestión académica y facilitando la generación de reportes de rendimiento estudiantil.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <img src="/icons/php.png" className="h-6" />
            <img src="/icons/laravel.png" className="h-6" />
            <img src="/icons/codeigniter.png" className="h-6" />
            <img src="/icons/docker.png" className="h-6" />
            <img src="/icons/mysql.png" className="h-6" />
          </div>
        </div>

        {/* Experiencia 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md col-span-2">
          <h3 className="font-bold text-lg">Consultora Educativa</h3>
          <p className="text-blue-600">Universidades y Colegios Profesionales</p>
          <p className="text-sm text-gray-500">2020 - Actualidad · Freelance · Lima, Perú</p>
          <ul className="list-disc list-inside mt-4 text-justify">
            <li>Asesoramiento en uso de tecnologías y capacitación docente.</li>
            <li>Elaboración de instrumentos y análisis de encuestas educativas.</li>
            <li>Diseño de dashboards en Looker Studio y Google Sheets.</li>
            <li>Automatización con Make y Google Apps Script.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <img src="/icons/lookerstudio.png" className="h-6" />
            <img src="/icons/google.png" className="h-6" />
            <img src="/icons/make.png" className="h-6" />
            <img src="/icons/sheets.png" className="h-6" />
            <img src="/icons/chatgpt.png" className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}