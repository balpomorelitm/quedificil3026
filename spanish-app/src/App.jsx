import React, { useState } from 'react';
import { BookOpen, MapPin, Music, HelpCircle, Info, Globe, Award } from 'lucide-react';

// --- DATA & CONTENT ---

const glossaryData = {
  "plata": {
    definition: "Dinero vs. Metal.",
    variations: [
      { country: "Latinoamérica", flag: "🌎", meaning: "Dinero (Money). 'No tengo plata'." },
      { country: "General", flag: "🔬", meaning: "El metal precioso (Silver)." }
    ]
  },
  "pana": {
    definition: "Palabra con doble sentido muy común.",
    variations: [
      { country: "Venezuela", flag: "🇻🇪", meaning: "Amigo, compañero, 'buddy'." },
      { country: "España/General", flag: "🇪🇸", meaning: "Tipo de tela gruesa (corduroy)." }
    ]
  },
  "porro": {
    definition: "¿Por qué lo miran mal? Confusión peligrosa.",
    variations: [
      { country: "Colombia", flag: "🇨🇴", meaning: "Ritmo musical folclórico y alegre (parecido a la cumbia)." },
      { country: "España/Otros", flag: "🚬", meaning: "Cigarrillo de marihuana. Si dices 'me encanta el porro', la gente piensa que te encantan las drogas, no la música." }
    ]
  },
  "axilas": {
    definition: "Anatomía.",
    variations: [
      { country: "General", flag: "🏥", meaning: "Parte del cuerpo debajo del brazo (Armpits)." }
    ]
  },
  "chucha": {
    definition: "Una de las palabras más polisémicas y peligrosas.",
    variations: [
      { country: "Chile", flag: "🇨🇱", meaning: "'A la chucha' = muy lejos. (Vulgar)" },
      { country: "Colombia", flag: "🇨🇴", meaning: "Mal olor de las axilas." },
      { country: "Argentina/Uruguay", flag: "🇦🇷", meaning: "Frío. También se usa para 'cárcel' en algunos contextos." }
    ]
  },
  "chivo": {
    definition: "Animal vs. Olor.",
    variations: [
      { country: "Uruguay", flag: "🇺🇾", meaning: "Mal olor corporal (axilas)." },
      { country: "General", flag: "🐐", meaning: "Cabra macho (Goat)." }
    ]
  },
  "barbuchas": {
    definition: "Pelo facial.",
    variations: [
      { country: "General", flag: "🧔", meaning: "Barba pequeña, desaliñada o de chivo (Goatee/Whiskers)." }
    ]
  },
  "chucho": {
    definition: "La palabra que cambia con una vocal.",
    variations: [
      { country: "El Salvador/Guatemala", flag: "🇸🇻", meaning: "Perro (dog)." },
      { country: "Honduras", flag: "🇭🇳", meaning: "Tacaño (stingy)." },
      { country: "Argentina", flag: "🇦🇷", meaning: "Frío." },
      { country: "Chile", flag: "🇨🇱", meaning: "Cárcel." },
      { country: "México", flag: "🇲🇽", meaning: "Alguien muy hábil/astuto." }
    ]
  },
  "tacaño": {
    definition: "Personalidad.",
    variations: [
      { country: "General", flag: "💸", meaning: "Persona que no le gusta gastar dinero (Stingy/Cheap)." }
    ]
  },
  "frijol": {
    definition: "Legumbres con muchos nombres.",
    variations: [
      { country: "México/Centroamérica", flag: "🇲🇽", meaning: "Frijol (Bean)." },
      { country: "Cono Sur (Arg/Chi)", flag: "🇦🇷", meaning: "Poroto." },
      { country: "España/Caribe", flag: "🇪🇸", meaning: "Judía o Habichuela." }
    ]
  },
  "fresa": {
    definition: "Fruta vs. Clase Social.",
    variations: [
      { country: "México/Colombia", flag: "🇲🇽", meaning: "Persona esnob, pija, de clase alta y presumida." },
      { country: "España/General", flag: "🇪🇸", meaning: "La fruta roja (Strawberry)." }
    ]
  },
  "cheto": {
    definition: "Equivalente a 'Fresa' en el Cono Sur.",
    variations: [
      { country: "Argentina", flag: "🇦🇷", meaning: "Persona adinerada, esnob (Pijo/Fresa)." }
    ]
  },
  "chetas": {
    definition: "El gran malentendido del mercado.",
    variations: [
      { country: "Contexto de la canción", flag: "😳", meaning: "Él pregunta '¿Están buenas las chetas?' pensando en la fruta. La cajera entiende: '¿Están sexys/calientes las chicas ricas?'. Por eso se ofende." }
    ]
  },
  "parce": {
    definition: "Amistad informal.",
    variations: [
      { country: "Colombia", flag: "🇨🇴", meaning: "Amigo cercano, 'mate', 'dude'. Abreviación de 'parcero'." }
    ]
  },
  "frutilla": {
    definition: "Nombre botánico regional.",
    variations: [
      { country: "Argentina/Chile", flag: "🇦🇷", meaning: "La fruta que otros llaman 'fresa' (Strawberry)." }
    ]
  },
  "panqué": {
    definition: "Repostería.",
    variations: [
      { country: "México", flag: "🇲🇽", meaning: "Bizcocho o pan dulce (Muffin/Pound cake)." },
      { country: "España/General", flag: "🍰", meaning: "No se usa comúnmente; se diría magdalena o bizcocho." }
    ]
  },
  "torta": {
    definition: "Comida vs. Golpe.",
    variations: [
      { country: "España", flag: "🇪🇸", meaning: "Un golpe, una bofetada o un accidente." },
      { country: "México", flag: "🇲🇽", meaning: "Sándwich hecho con pan bolillo." },
      { country: "Colombia/Venezuela", flag: "🇨🇴", meaning: "Pastel dulce de cumpleaños (Cake)." }
    ]
  },
  "puñetazo": {
    definition: "Violencia física.",
    variations: [
      { country: "General", flag: "👊", meaning: "Golpe fuerte dado con el puño cerrado (Punch)." }
    ]
  },
  "piropo": {
    definition: "Cortejo.",
    variations: [
      { country: "Hispanoamérica/España", flag: "❤️", meaning: "Frase de admiración o halago que se dice a alguien que te gusta (Compliment/Pick-up line)." }
    ]
  },
  "capullo": {
    definition: "Naturaleza vs. Insulto.",
    variations: [
      { country: "España", flag: "🇪🇸", meaning: "Insulto: idiota, imbécil." },
      { country: "General", flag: "🌹", meaning: "Flor antes de abrirse (Bud)." }
    ]
  },
  "alelí": {
    definition: "Botánica poética.",
    variations: [
      { country: "General", flag: "🌸", meaning: "Tipo de flor muy usada en canciones románticas antiguas." }
    ]
  },
  "concha": {
    definition: "El falso amigo más famoso.",
    variations: [
      { country: "Argentina/Cono Sur", flag: "🇦🇷", meaning: "Vulgar: Vagina. NUNCA usar como nombre propio aquí." },
      { country: "España", flag: "🇪🇸", meaning: "Diminutivo del nombre Concepción o caparazón de marisco." }
    ]
  },
  "polla": {
    definition: "Apuesta vs. Anatomía.",
    variations: [
      { country: "Chile", flag: "🇨🇱", meaning: "Apuesta colectiva (lotería deportiva)." },
      { country: "España", flag: "🇪🇸", meaning: "Vulgar: Pene." }
    ]
  },
  "pitillo": {
    definition: "Fumar vs. Beber.",
    variations: [
      { country: "España", flag: "🇪🇸", meaning: "Cigarrillo." },
      { country: "Colombia/Venezuela", flag: "🇨🇴", meaning: "Tubo plástico para beber (Straw)." },
      { country: "México", flag: "🇲🇽", meaning: "Término vulgar para pene (diminutivo)." }
    ]
  },
  "pajita": {
    definition: "Diminutivo peligroso.",
    variations: [
      { country: "Bolivia/España", flag: "🥤", meaning: "Tubo para beber (Straw)." },
      { country: "Latinoamérica (Varios)", flag: "🔞", meaning: "Diminutivo de 'paja' (Masturbación)." }
    ]
  },
  "chaqueta": {
    definition: "Ropa vs. Acción.",
    variations: [
      { country: "México", flag: "🇲🇽", meaning: "Vulgar: Masturbación." },
      { country: "España/Colombia", flag: "🇪🇸", meaning: "Prenda de vestir (Jacket)." }
    ]
  },
  "coger": {
    definition: "El verbo prohibido (mencionado implícitamente en variantes).",
    variations: [
      { country: "España", flag: "🇪🇸", meaning: "Tomar, agarrar (To take/grab)." },
      { country: "Latinoamérica (Mx/Arg)", flag: "🌎", meaning: "Vulgar: Tener sexo." }
    ]
  }
};

const songLyrics = [
  {
    stanza: 1,
    lines: [
      "Yo viajé por distintos países",
      "Conocí las más lindas mujeres",
      "Yo probé deliciosa comida",
      "Yo baile ritmos muy diferentes"
    ]
  },
  {
    stanza: 2,
    lines: [
      "Desde México fui a Patagonia",
      "Y en España unos años viví",
      "Me esforcé por hablar el idioma",
      "Pero yo nunca lo conseguí"
    ]
  },
  {
    stanza: "Coro",
    type: "chorus",
    lines: [
      "Qué difícil es hablar el español",
      "Porque todo lo que dices tiene otra definición",
      "Que difícil entender el español",
      "Si lo aprendes no te muevas de región"
    ]
  },
  {
    stanza: 3,
    lines: [
      "En Venezuela compré con mi {plata} una camisa de {pana}",
      "Y mis amigos me decían ese es mi {pana}, ese es mi {pana}",
      "Y en Colombia el {porro} es un ritmo alegre que se canta",
      "Pero todos me miran mal cuando yo digo que me encanta."
    ]
  },
  {
    stanza: 4,
    lines: [
      "Los Chilenos dicen cuando hay algo lejos que está a la {chucha}",
      "Y en Colombia el mal olor de las {axilas} es la {chucha}",
      "Mientras tanto en Uruguay a ese olor le dicen {chivo}",
      "Y el diccionario define al {chivo} como una cabra con {barbuchas}"
    ]
  },
  {
    stanza: 5,
    lines: [
      "Y cambiando una vocal la palabra queda {chucho}",
      "Y {chucho} es un perrito en El Salvador y Guatemala",
      "Y en Honduras es {tacaño}, y a Jesús le dicen {chucho}",
      "Con tantas definiciones, ¿Cómo se usa esa puta palabra?"
    ]
  },
  {
    stanza: 6,
    lines: [
      "{Chucho} es frío en Argentina, {chucho} en Chile es una cárcel",
      "{Chucho} en México si hay alguien con el don de ser muy hábil",
      "El {chucho} de {chucho} es un {chucho} ladrando",
      "Y por {chucho} a {chucho} lo echaron a {chucho}"
    ]
  },
  {
    stanza: "Coro",
    type: "chorus",
    lines: [
      "Qué difícil es hablar el español",
      "Porque todo lo que dices tiene otra definición",
      "Que difícil entender el español",
      "Yo ya me doy por vencido para mi país me voy"
    ]
  },
  {
    stanza: 7,
    lines: [
      "Comencé por aprender los nombres de los alimentos",
      "Pero {frijol} es poroto y habichuela al mismo tiempo",
      "De algo yo estaba seguro un strawberry es una {fresa} y",
      "Que sorpresa cuando en México a mí me dijeron {fresa}",
      "Por tener ropa de Armani y pedir un buen vino en la mesa"
    ]
  },
  {
    stanza: 8,
    lines: [
      "Con la misma ropa me dijeron {cheto} en Argentina",
      "{Cheto} es {fresa} —, yo pensé y pregunté en el mercado en la esquina",
      "¿Están buenas las {chetas}? — Y la cajera se enojó",
      "Y {fresas}, {parce}. Me dijo un colombiano...",
      "En Buenos Aires a la {fresa} le dicen {frutilla}"
    ]
  },
  {
    stanza: 9,
    lines: [
      "Un {pastel} es un {panqué}. Y un {panqué} es una {torta}",
      "Y una {torta} el {puñetazo}, que me dio un español en la boca"
    ]
  },
  {
    stanza: 10,
    lines: [
      "Ella se veía muy linda... quería decirle algún {piropo}",
      "{Capullo}, yo le dije, porque estaba muy bonita",
      "Si {capullo} es un insulto, ¿Quién me explica la maldita cancioncita?",
      "Lindo {capullo} de {alelí}..."
    ]
  },
  {
    stanza: "Coro",
    type: "chorus",
    lines: [
      "Qué difícil es hablar el español",
      "Porque todo lo que dices tiene otra definición",
      "Que difícil entender el español",
      "Yo ya me doy por vencido para mi planeta me voy"
    ]
  },
  {
    stanza: 11,
    lines: [
      "En España al líquido que suelta la carne la gente le dice jugo",
      "Por otro lado en España al jugo de frutas la gente le dice zumo",
      "Conocí a una andaluza, se llamaba Concepción",
      "Su marido le decía {concha} de mi corazón",
      "Vámonos para Argentina... si me dicen {concha} creo que allá mejor no voy"
    ]
  },
  {
    stanza: 12,
    lines: [
      "En chile {polla} es una apuesta colectiva",
      "En cambio en España es el pene",
      "Alguna gente en Méjico al pene le dice {pitillo}",
      "Y {pitillo} en España es un cigarrillo",
      "Y en Venezuela un cilindro de plástico para tomar bebidas",
      "Es mismo cilindro en Bolivia se conoce como {pajita}"
    ]
  },
  {
    stanza: 13,
    lines: [
      "Pero {pajita} en algunos países significa masturbacioncita",
      "Y masturbación en Méjico puede decirse {chaqueta}",
      "Que a la vez es una especie de abrigo en Colombia",
      "País en el que apropósito una gorra con visera es una cachucha",
      "Cuando cachucha en argentina es una vagina"
    ]
  },
  {
    stanza: "Coro",
    type: "chorus",
    lines: [
      "Qué difícil es hablar el español",
      "Porque todo lo que dices tiene otra definición",
      "Que difícil entender el español",
      "Yo ya me doy por vencido, para mi país me voy"
    ]
  }
];

const quizQuestions = [
  {
    id: 1,
    question: "Estás en España y quieres beber un jugo de naranja. ¿Qué debes pedir?",
    options: ["Un jugo", "Un zumo", "Un caldo", "Un chucho"],
    correct: 1,
    explanation: "En España, el líquido de las frutas se llama 'zumo'. 'Jugo' suele referirse al de la carne."
  },
  {
    id: 2,
    question: "Estás en México y alguien te llama 'fresa'. ¿Qué significa?",
    options: ["Que eres dulce", "Que eres un esnob/presumido", "Que tienes la cara roja", "Que te gusta el campo"],
    correct: 1,
    explanation: "En México, 'fresa' es una persona de clase alta, presumida o 'pija' (España)."
  },
  {
    id: 3,
    question: "¡Cuidado! En Argentina nunca debes usar esta palabra para llamar a una mujer llamada Concepción:",
    options: ["Conchi", "Concha", "Cami", "Cata"],
    correct: 1,
    explanation: "'Concha' en Argentina (y el Cono Sur) es una forma muy vulgar de referirse a la vagina."
  },
  {
    id: 4,
    question: "Un amigo venezolano te presenta a su 'pana'. ¿A quién te presenta?",
    options: ["A su amigo", "A su padre", "A su perro", "A su jefe"],
    correct: 0,
    explanation: "En Venezuela, 'pana' significa amigo o compañero."
  },
  {
    id: 5,
    question: "En España pides una 'torta' y te pegan. ¿Qué debiste pedir para comer?",
    options: ["Un puñetazo", "Una tarta o pastel", "Un bocadillo", "Una ensalada"],
    correct: 1,
    explanation: "En España 'torta' puede ser un golpe. Para el dulce de cumpleaños se usa 'tarta' o 'pastel'."
  },
  {
    id: 6,
    question: "En el mercado preguntas '¿Están buenas las chetas?'. ¿Por qué se enfada la cajera?",
    options: ["Porque 'chetas' significa fruta podrida", "Porque suena a que preguntas si las chicas ricas son sexys", "Porque 'cheta' es un insulto a la madre", "Porque odia las frutas"],
    correct: 1,
    explanation: "Confusión cómica: Preguntabas por la fruta (fresa/frutilla), pero 'cheta' es 'chica rica'. Preguntar si 'está buena' tiene connotación sexual."
  }
];

// --- COMPONENTS ---

const DefinitionCard = ({ word, data, onClose }) => {
  if (!data) return null;
  return (
    <div className="bg-white border-l-4 border-yellow-500 p-4 rounded shadow-lg mb-4 animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold capitalize text-indigo-900">{word}</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
      </div>
      <p className="text-sm text-gray-600 italic mb-3">{data.definition}</p>
      <div className="space-y-2">
        {data.variations.map((v, idx) => (
          <div key={idx} className="flex items-start p-2 bg-yellow-50 rounded">
            <span className="text-2xl mr-3" role="img" aria-label={v.country}>{v.flag}</span>
            <div>
              <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block">{v.country}</span>
              <span className="text-gray-800">{v.meaning}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InteractiveLine = ({ text, onWordClick }) => {
  // Regex to find words wrapped in {}
  const parts = text.split(/(\{.*?\})/g);

  return (
    <p className="mb-2 leading-relaxed text-lg">
      {parts.map((part, i) => {
        if (part.startsWith("{") && part.endsWith("}")) {
          const word = part.slice(1, -1);
          // Check if word exists in glossary (clean punctuation if needed)
          const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
          const isInteractive = glossaryData[cleanWord];

          return (
            <span 
              key={i}
              onClick={() => isInteractive && onWordClick(cleanWord)}
              className={`
                px-1 rounded cursor-pointer transition-colors font-medium
                ${isInteractive 
                  ? 'bg-yellow-200 text-yellow-900 hover:bg-yellow-400 border-b-2 border-yellow-500' 
                  : 'text-gray-800'}
              `}
              title={isInteractive ? "Haz clic para ver definición" : ""}
            >
              {word}
            </span>
          );
        }
        return <span key={i} className="text-gray-700">{part}</span>;
      })}
    </p>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('lyrics'); // lyrics, quiz, glossary
  const [selectedWord, setSelectedWord] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleWordClick = (word) => {
    setSelectedWord(word.toLowerCase());
  };

  const handleQuizOption = (qId, optionIdx) => {
    setQuizAnswers(prev => ({...prev, [qId]: optionIdx}));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      
      {/* Header */}
      <header className="bg-indigo-700 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <Globe className="w-8 h-8 text-yellow-400" />
            <div>
              <h1 className="text-2xl font-bold leading-none">Qué difícil es hablar el español</h1>
              <p className="text-indigo-200 text-sm">Actividad Interactiva SPAN3026</p>
            </div>
          </div>
          
          <nav className="flex space-x-1 bg-indigo-800 rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('lyrics')}
              className={`px-4 py-2 rounded-md flex items-center space-x-2 ${activeTab === 'lyrics' ? 'bg-white text-indigo-800 shadow' : 'text-indigo-200 hover:bg-indigo-600'}`}
            >
              <Music size={18} /> <span>Canción</span>
            </button>
            <button 
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2 rounded-md flex items-center space-x-2 ${activeTab === 'quiz' ? 'bg-white text-indigo-800 shadow' : 'text-indigo-200 hover:bg-indigo-600'}`}
            >
              <HelpCircle size={18} /> <span>Práctica</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full p-4 grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Content Area */}
        <div className={`md:col-span-8 space-y-6 ${activeTab === 'lyrics' ? 'block' : 'hidden'}`}>
          
          {/* Video Embed Placeholder */}
          <div className="bg-black rounded-lg overflow-hidden shadow-xl aspect-video relative group">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Xyp7xt-ygy0" 
              title="Qué difícil es hablar el español"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Lyrics Container */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-10">
            <div className="flex items-center justify-between mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">Letra de la canción</h2>
              <div className="flex items-center text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                <Info size={16} className="mr-2" />
                <span>Haz clic en las palabras <span className="bg-yellow-200 text-yellow-900 px-1 rounded border-b border-yellow-500">resaltadas</span></span>
              </div>
            </div>

            <div className="space-y-8">
              {songLyrics.map((stanza, idx) => (
                <div key={idx} className={`relative ${stanza.type === 'chorus' ? 'pl-6 border-l-4 border-indigo-300 bg-indigo-50 p-4 rounded-r-lg' : ''}`}>
                  {stanza.type === 'chorus' && (
                    <span className="absolute -left-3 top-0 bg-indigo-500 text-white text-xs px-2 py-0.5 rounded transform -translate-y-1/2">CORO</span>
                  )}
                  {stanza.lines.map((line, lIdx) => (
                    <InteractiveLine key={lIdx} text={line} onWordClick={handleWordClick} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QUIZ TAB */}
        <div className={`md:col-span-8 ${activeTab === 'quiz' ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-indigo-800">
              <Award className="mr-2" /> ¿Cuánto has aprendido?
            </h2>
            
            <div className="space-y-8">
              {quizQuestions.map((q) => (
                <div key={q.id} className="border-b border-gray-100 pb-6 last:border-0">
                  <p className="font-medium text-lg mb-3 text-gray-800">{q.id}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, idx) => {
                      const isSelected = quizAnswers[q.id] === idx;
                      const isCorrect = q.correct === idx;
                      let btnClass = "w-full text-left p-3 rounded border transition-all ";
                      
                      if (showResults) {
                        if (isCorrect) btnClass += "bg-green-100 border-green-500 text-green-800";
                        else if (isSelected && !isCorrect) btnClass += "bg-red-100 border-red-500 text-red-800";
                        else btnClass += "bg-gray-50 border-gray-200 opacity-50";
                      } else {
                        btnClass += isSelected 
                          ? "bg-indigo-100 border-indigo-500 text-indigo-900" 
                          : "bg-white border-gray-300 hover:bg-gray-50";
                      }

                      return (
                        <button
                          key={idx}
                          disabled={showResults}
                          onClick={() => handleQuizOption(q.id, idx)}
                          className={btnClass}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {showResults && (
                    <div className={`mt-3 text-sm p-3 rounded ${quizAnswers[q.id] === q.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      <strong>Explicación:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              {!showResults ? (
                <button 
                  onClick={() => setShowResults(true)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition shadow"
                >
                  Verificar Respuestas
                </button>
              ) : (
                <div className="w-full flex justify-between items-center">
                  <div className="text-xl">
                    Tu nota: <span className="font-bold text-indigo-700">{calculateScore()}</span> / {quizQuestions.length}
                  </div>
                  <button 
                    onClick={() => { setShowResults(false); setQuizAnswers({}); }}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Interactive Panel */}
        <div className="md:col-span-4">
          <div className="sticky top-24 space-y-4">
            
            {/* Dynamic Definition Card */}
            {selectedWord ? (
              <DefinitionCard 
                word={selectedWord} 
                data={glossaryData[selectedWord]} 
                onClose={() => setSelectedWord(null)}
              />
            ) : (
              <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl text-center text-indigo-800 shadow-sm">
                <MapPin className="mx-auto h-12 w-12 mb-2 opacity-50" />
                <h3 className="font-bold text-lg mb-2">Explorador de Dialectos</h3>
                <p className="text-sm opacity-80">
                  Haz clic en cualquier palabra <span className="bg-yellow-200 px-1 rounded border-b border-yellow-500 text-yellow-900 font-medium">resaltada</span> en la letra para ver cómo cambia su significado según el país.
                </p>
              </div>
            )}

            {/* Legend / Quick Guide */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-700 mb-3 flex items-center">
                <BookOpen size={18} className="mr-2" /> Guía Rápida
              </h3>
              <ul className="text-sm space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">⚠️</span>
                  <span><strong>Polisemia:</strong> Una misma palabra tiene múltiples significados.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌎</span>
                  <span><strong>Variación Dialectal:</strong> El español cambia drásticamente entre España y América (y entre países americanos).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⛔</span>
                  <span><strong>Tabúes:</strong> Palabras inocentes en un país pueden ser insultos graves en otro (ej. <em>Coger, Concha</em>).</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </main>

      <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-8">
        <p className="text-sm">SPAN3026 - Material Didáctico</p>
        <p className="text-xs mt-1 opacity-60">Basado en la canción "Qué difícil es hablar el español"</p>
      </footer>
    </div>
  );
};

export default App;
