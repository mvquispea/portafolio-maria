import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <Head>
        <title>María Quispe - Ingeniera en IA Educativa</title>
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-blue-100">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-blue-900 text-center"
        >
          María Quispe
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 text-center text-blue-700">
          Ingeniera de sistemas especialista en IA educativa
        </p>
      </main>
    </div>
  )
}
