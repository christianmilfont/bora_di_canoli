import Carrossel from "../components/Carrosel";  // Certifique-se de que o caminho esteja correto

export default function Home() {
  return (
    <main className="grow flex flex-col justify-center items-center bg-[#f8f4f1] py-10">
      <h1 className="text-center text-4xl text-[#b56b5f] font-bold mx-5 mb-8 transition-all duration-500 ease-in-out transform hover:scale-105">
        BoraDiCannoli!
      </h1>
      <Carrossel />
    </main>
  );
}
