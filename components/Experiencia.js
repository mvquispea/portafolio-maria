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
          <h3 className="font-bold text-lg">Docente Investigadora</h3>
          <p className="text-blue-600">Universidad Autónoma del Perú</p>
          <p className="text-sm text-gray-500">Marzo 2022 - Actualidad · Presencial · Lima, Perú</p>
          <ul className="list-disc list-inside mt-4 text-justify">
            <li>Diseño de materiales educativos y recursos digitales interactivos.</li>
            <li>Implementación de herramientas de IA para innovar la docencia.</li>
            <li>Investigación educativa con enfoque en tecnologías emergentes.</li>
            <li>Gestora del aula virtual en Moodle y Canvas.</li>
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
          <p className="text-blue-600">Freelance</p>
          <p className="text-sm text-gray-500">2018 - Actualidad · Remoto · Perú</p>
          <ul className="list-disc list-inside mt-4 text-justify">
            <li>Desarrollo de sistemas web en Laravel y CodeIgniter.</li>
            <li>Automatización de procesos administrativos y educativos.</li>
            <li>Integración de APIs, reportes, dashboards y firmas digitales.</li>
            <li>Implementación en servidores VPS con Docker.</li>
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