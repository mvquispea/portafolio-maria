import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>María Quispe – IA Educativa</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center px-8 bg-gray-100">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
          <div>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hola, soy
            </motion.p>
            <motion.h1
              className="text-5xl font-bold text-gray-900 leading-tight mt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              María Quispe
              <br />
              <span className="text-blue-600">Especialista en IA Educativa</span>
            </motion.h1>
            <p className="mt-4 text-gray-700 text-lg">
              Python | Canvas LMS | Looker Studio | Make | Laravel | CodeIgniter
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="/CV2_Maria_Victoria_Quispe_Altamirano.pdf"
                download
                className="bg-white border-2 border-gray-400 px-4 py-2 rounded hover:bg-gray-200"
              >
                📄 Descargar CV
              </a>
              <a
                href="#experiencia"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                🚀 Ver experiencia
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/reallex/image-assets@main/ai-desk.png"
              alt="Ilustración desarrolladora"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </main>
    </>
  );
}