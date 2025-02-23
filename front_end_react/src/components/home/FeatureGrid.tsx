export const FeatureGrid = () => {

    const features = [
        { img: '/images/grid/pcc.png', link: 'https://www.pcc.cu/' },
        { img: '/images/grid/fidel.png', link: 'http://www.fidelcastro.cu/es' },
        { img: '/images/grid/gaceta.png', link: 'https://www.gacetaoficial.gob.cu/es' },
        { img: '/images/grid/cubadebate.png', link: 'http://www.cubadebate.cu/' },
        { img: '/images/grid/asamblea.png', link: 'https://www.parlamentocubano.gob.cu/' },
        { img: '/images/grid/granma.PNG', link: 'https://www.granma.cu/' },
        { img: '/images/grid/juventud.png', link: 'https://www.juventudrebelde.cu/' },
        { img: '/images/grid/onei.png', link: 'http://www.onei.gob.cu/' },
        { img: '/images/grid/presidencia.png', link: 'https://www.presidencia.gob.cu/es/' }
      ];

  return (
    <div className="flex flex-col gap-5 mt-1 -mb-10">
      <div className="flex justify-center gap-10">
        {features.slice(0, 7).map((feature, index) => (
          <a key={index} href={feature.link}  target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <img src={feature.img} className="h-20 w-20 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
          </a>
        ))}
      </div>
      <div className="flex justify-center gap-20">
        {features.slice(7).map((feature, index) => (
          <a key={index} href={feature.link}  target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <img src={feature.img} className="h-20 w-20 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
          </a>
        ))}
      </div>
    </div>
  );
};
