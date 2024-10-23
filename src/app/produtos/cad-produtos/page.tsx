"use client"
import { TipoProduto } from "../../../types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastroProdutos() {
    const navigate = useRouter()

    const [produto, setProduto] = useState<TipoProduto>({
        id: 0,
        nome: "",
        preco: 0,
        estoque: 0
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProduto({ ...produto, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cabecalho = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto)
        }

        try {
            const response = await fetch("http://localhost:3000/api/base-produtos", cabecalho)

            if (response.ok) {
                alert(`${produto.nome} cadastrado com sucesso!`)
                setProduto({ id: 0, nome: "", preco: 0, estoque: 0 })
                navigate.push('/produtos')
            } else {
                alert("Erro ao cadastrar!")
            }
        } catch (error) {
            console.error("Erro ao cadastrar o produto", error);
        }
    }

    return (
        <main className="grow">
            <h1 className="text-3xl text-center font-bold mb-2 text-[#b56b5f]">RECLAMACOES</h1>
            <p className="text-xl text-center font-semibold mb-4 text-gray-700">Aqui inserimos um novo produto assim que chega na loja.</p>
            <form className="w-1/3 m-auto p-2 border border-[#b56b5f] rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idnome">Me informe sua reclamação</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="nome" value={produto.nome} id="idnome"
                        onChange={handleChange} />
                </div>

                <button className="bg-[#b56b5f] text-white text-xl p-2 ms-auto me-2 block rounded-md hover:bg-[#f8f4f1] hover:text-[#b56b5f] transition-all duration-300 ease-in-out" type="submit">
                    Enviar Reclamação!
                </button>
            </form>
        </main>
    )
}
