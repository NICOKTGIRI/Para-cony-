import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [thenPressed, setThenPressed] = useState(false); 
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estás segura?",
      "¿Segura de verdad?",
      "¡Piénsalo de nuevo!",
      "¡Última oportunidad!",
      "¿En serio no?",
      "¡Podrías arrepentirte!",
      "¡Dale otra pensada polfis!",
      "¿Estás absolutamente segura?",
      "¡Esto podría ser un error!",
      "¡Ten corazón!",
      "¡No seas tan fríaa mami!",
      "¿Cambio de opinión?",
      "¿No lo reconsiderarías?",
      "¿Esa es tu respuesta final?",
      "Me estás rompiendo el corazón ;(",
      "¿Esa es tu respuesta final en serio cony?",
      "Me estás rompiendo el corazón ;(",
      "Por faaa :( Me estás rompiendo el corazón"
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          {thenPressed ? ( 

            <>
            <br />
            <br />
            <br />
            <br />  
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg">
  <img src="/src/assets/Corazon.PNG" alt="Corazón" className="w-48 h-48 object-cover rounded-lg" />
  <img src="/src/assets/Cony.jpg" alt="Cony" className="w-48 h-48 object-cover rounded-lg" />
</div>

              <div className="text-4xl md:text-6xl font-bold my-4 text-center">
                TE AMO CONY 💗
              </div>
              <div className="text-3xl md:text-2xl my-4 text-center">
                Te amo constanza de verdad eres lo mejor que me ha pasado en la vida y en los ultimos años de mi vida
                Quiero que seamos felices los dos para siempre y tengamos un futuro juntos donde solo seamos tu y yo.
                <br />
                <br />  
              


                Perdoname si en algun momento me porte mal o te falte el respeto pero yo de verdad te amo demasiado mi amor 🥺💗,
                y se que puedo cometer errores muy tontos a veces, pero quiero dar lo mejor de mi, para ser el mejor hombre para ti y
                Si realmente el tiempo me lo permite, quiero llegar a ser tu esposo y el padre de tus hijos🥺💗.
                <br />
                     
                Feliz 14 De Febrero Amorcito 🥺💗
                
              </div>
            </>

            
            
          ) : (
            <>
              <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
              <div className="text-4xl md:text-6xl font-bold my-4 text-center">
                Graciaaaaas Te amo Mi Bebe Preciosa!!! 🥺💗
              </div>
              <button
                className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setThenPressed(true)} 
              >
                Entonceeees..
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Quieres ser mi San Valentin?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sii
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      {!thenPressed && <Footer />} {/* Footer solo se renderiza si thenPressed es false */}
    </div>
  );
}

const Footer = () => {
  return <div className="mt-4 text-sm text-gray-500">Con mucho amor de tu Pololo Nicolas❤️ ("No de alejo 😡")</div>;
};
