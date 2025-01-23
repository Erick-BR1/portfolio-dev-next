export default function Navegacao() {
    return (
    <div className="flex justify-center py-3 items-center top-[44px] backdrop-blur antialiased">
        <nav className="space-x-[1px] font-goldman flex justify-around bg-slate-800 rounded-full border ">
            <a href="#home" className="rounded-full text-lg p-[5px] px-5 text-white hover:bg-slate-700 transition duration-300 ">Home</a>
            <a href="#expertise" className="rounded-full text-lg p-[5px] px-5 text-white hover:bg-slate-700 transition duration-300 ">Expertise</a>
            <a href="#certificados" className="rounded-full text-lg p-[5px] px-5 text-white hover:bg-slate-700 transition duration-300 ">Certificados</a>
            <a href="#contato" className="rounded-full text-lg p-[5px] px-5 text-white hover:bg-slate-700 transition duration-300 ">Contato</a>
        </nav>
    </div>
    )
}