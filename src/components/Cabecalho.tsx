import Menu from './Menu'

export default function Cabecalho() {
    return (
        <header className='bg-[#f8f4f1] min-h-20 p-5 flex justify-evenly items-center'>
            <h1 className='text-3xl text-[#b56b5f]'>Home</h1>
            <Menu />
        </header>
    )
}
