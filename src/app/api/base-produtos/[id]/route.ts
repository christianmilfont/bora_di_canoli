import { TipoProduto } from "@/types"; // Importa o tipo TipoProduto definido em outro arquivo
import { promises as fs } from "fs"; // Importa funções de sistema de arquivos (fs) para manipulação de arquivos
import { NextResponse } from "next/server"; // Importa NextResponse para manipulação de respostas em API

// Função para tratar requisições GET
export async function GET(request: Request, { params }: { params: { id: number } }) {
    // Lê o arquivo JSON que contém os produtos
    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
    const produtos: TipoProduto[] = JSON.parse(file); // Converte o conteúdo do arquivo em um array de produtos

    // Busca o produto com o ID correspondente
    const produto = produtos.find(p => p.id === Number(params.id));
    
    // Se o produto não for encontrado, retorna uma resposta 404
    if (!produto) {
        return NextResponse.json({ msg: 'Produto não encontrado' }, { status: 404 });
    }
    
    // Retorna o produto encontrado como resposta JSON
    return NextResponse.json(produto);
}

// Função para tratar requisições PUT
export async function PUT(request: Request, { params }: { params: { id: number } }) {
    try {
        // Lê o arquivo JSON que contém os produtos
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
        const produtos: TipoProduto[] = JSON.parse(file); // Converte o conteúdo do arquivo em um array de produtos
        
        // Encontra o índice do produto que deve ser atualizado
        const index = produtos.findIndex(p => p.id === Number(params.id));

        // Se o produto for encontrado, atualiza suas informações
        if (index !== -1) {
            const body = await request.json(); // Lê o corpo da requisição
            produtos.splice(index, 1, { ...body, id: Number(params.id) }); // Atualiza o produto mantendo seu ID
            await fs.writeFile(process.cwd() + '/src/data/base.json', JSON.stringify(produtos)); // Salva as mudanças no arquivo
            return NextResponse.json({ msg: 'Produto atualizado com sucesso' }); // Retorna mensagem de sucesso
        } else {
            return NextResponse.json({ msg: 'Produto não encontrado' }, { status: 404 }); // Retorna mensagem de erro se não encontrado
        }
    } catch (error) {
        console.error("Erro ao atualizar produto", error); // Log de erro no console
        return NextResponse.json({ msg: 'Erro ao atualizar produto: ' + error }, { status: 500 }); // Retorna erro 500 em caso de falha
    }
}

// Função para tratar requisições DELETE
export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    try {
        // Lê o arquivo JSON que contém os produtos
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
        const produtos: TipoProduto[] = JSON.parse(file); // Converte o conteúdo do arquivo em um array de produtos
        
        // Encontra o índice do produto que deve ser deletado
        const index = produtos.findIndex(p => p.id === Number(params.id));

        // Se o produto for encontrado, remove-o da lista
        if (index !== -1) {
            produtos.splice(index, 1); // Remove o produto do array
            await fs.writeFile(process.cwd() + '/src/data/base.json', JSON.stringify(produtos)); // Salva as mudanças no arquivo
            return NextResponse.json({ msg: "Produto apagado com sucesso" }); // Retorna mensagem de sucesso
        } else {
            return NextResponse.json({ msg: "Produto não encontrado" }, { status: 404 }); // Retorna mensagem de erro se não encontrado
        }
    } catch (error) {
        console.error("Erro ao apagar produto", error); // Log de erro no console
        return NextResponse.json({ msg: "Erro ao apagar o produto: " + error }, { status: 500 }); // Retorna erro 500 em caso de falha
    }
}
