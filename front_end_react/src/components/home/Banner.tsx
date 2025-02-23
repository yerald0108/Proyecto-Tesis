import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="relative bg-red-200 text-white min-h-screen flex flex-col justify-center">

    <div 
        className="absolute inset-0 bg-cover bg-center opacity-80 h-full"
        style={{ backgroundImage: 'url(/images/inicio.jpeg)' }}
    />

    <div className="absolute inset-0 bg-black opacity-50" />

    <div className="relative z-10 flex flex-col items-center justify-center py-10 px-4 text-center lg:py-20 lg:px-8">
    <h1 className="font-extrabold text-6xl md:text-8xl lg:text-9xl leading-tight tracking-wide">SAGC</h1>
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 leading-snug">
            Sistema Automatizado de Gestión y Control
        </h1>
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center py-10 px-4 text-center lg:py-20 lg:px-8">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
            Bienvenido
        </h1>

        <Link
            to='/ilegalidades'
            className="bg-amber-800 hover:bg-amber-950 text-white font-semibold py-3 px-8 rounded-2xl shadow-xl text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
            Comenzar
        </Link>
    </div>

</div>

  );
};
