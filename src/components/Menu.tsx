import Link from "next/link";

export default function Menu() {
    return (
        <nav className="flex">
            <ul className="flex gap-6">
                <li>
                    <Link href={'/'} className="text-[#b56b5f] hover:text-white bg-[#f8f4f1] hover:bg-[#b56b5f] py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/produtos'} className="text-[#b56b5f] hover:text-white bg-[#f8f4f1] hover:bg-[#b56b5f] py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow">
                        Meus cannoli's
                    </Link>
                </li>
                <li>
                    <Link href={'/produtos/cad-produtos'} className="text-[#b56b5f] hover:text-white bg-[#f8f4f1] hover:bg-[#b56b5f] py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow">
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
