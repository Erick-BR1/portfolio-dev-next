import '../globals.css';

export default function Homepage() {
    return (
        <div className="pt-28 flex flex-col items-center w-screen h-screen">
            <div className="flex flex-col items-center">
                <h1 className="pt-28 text-gray-200/100 font-inter text-lg">Olá, sou o Erick Rodrigues</h1>
                <h3 className="pb-[118px] font-inter text-gray-200/100 text-lg">Front End & Back End Developer</h3>
                <div className="bg-slate-900 hover:scale-110 duration-300 block px-7 py-3 border rounded-md border-white">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-400/100"></div>
                        <p className='font-goldman font-bold text-gray-200/100 text-lg'>Disponível para projetos</p>
                    </div>
                </div>
                <div className="text-center pt-[118px]">
                    <span>
                        <p className='font-inter text-base text-gray-100/70'>Estudante de Análise e Desenvolvimento de Sistemas. Entusiasta de tecnologia e curiosos nato!</p>
                    </span>
                </div>
            </div>
        </div>
    )
}