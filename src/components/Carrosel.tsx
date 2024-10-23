"use client"

import Image from 'next/image'
import produto1 from './../image/produto1.jpg'
import produto2 from './../image/produto2.jpg'
import produto3 from './../image/produto3.jpg'

import { useState } from 'react'

const slides = [produto1, produto2, produto3]

export default function Carrossel() {
    const [atual, setAtual] = useState(0)

    const prev = () => setAtual(atual === 0 ? slides.length - 1 : atual - 1)
    const next = () => setAtual(atual === slides.length - 1 ? 0 : atual + 1)

    return (
        <div className='max-w-2xl mx-auto'>
            <div className='overflow-hidden relative rounded-lg shadow-lg'>
                <div className='flex transition-transform ease-out duration-[1.2s] transform-gpu' style={{ transform: `translateX(-${atual * 100}%)` }}>
                    {slides.map((s, i) => (
                        <Image
                            key={i}
                            src={s}
                            alt=''
                            className='rounded-lg transition-transform duration-700 ease-in-out transform scale-95 hover:scale-100'
                            width={900} // Aumentar o tamanho da imagem
                            height={600}
                        />
                    ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button
                        className='text-3xl font-black p-2 rounded-full shadow bg-[#f8f4f1]/90 text-[#b56b5f] hover:bg-[#b56b5f] hover:text-white transition-all duration-300 ease-in-out'
                        onClick={prev}
                    >
                        {'<'}
                    </button>
                    <button
                        className='text-3xl font-black p-2 rounded-full shadow bg-[#f8f4f1]/90 text-[#b56b5f] hover:bg-[#b56b5f] hover:text-white transition-all duration-300 ease-in-out'
                        onClick={next}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    )
}
