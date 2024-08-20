import React, { useState } from 'react';
import { Users, Lock, Zap, MessageSquare, ChevronRight, Shield, Bot, ArrowRight, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-extrabold text-blue-600">PrivatAI</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              <li><a href="#fordele" className="text-gray-600 hover:text-blue-600 transition duration-300">Fordele</a></li>
              <li><a href="#funktioner" className="text-gray-600 hover:text-blue-600 transition duration-300">Funktioner</a></li>
              <li><a href="#saadan-virker-det" className="text-gray-600 hover:text-blue-600 transition duration-300">Sådan virker det</a></li>
              <li>
                <a
                  href="https://calendly.com/syv-ai/llm-generativ-ai-med-mads-henrichsen"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book et møde
                </a>
              </li>
            </ul>
          </nav>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><a href="#fordele" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>Fordele</a></li>
              <li><a href="#funktioner" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>Funktioner</a></li>
              <li><a href="#saadan-virker-det" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>Sådan virker det</a></li>
              <li>
                <a
                  href="https://calendly.com/syv-ai/llm-generativ-ai-med-mads-henrichsen"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book et møde
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                Boost dit team med <br />
                <span className="text-yellow-300">AI-superkræfter</span>
              </h1>
              <p className="text-xl mb-10 max-w-xl animate-fade-in-up animation-delay-300">
                Giv dine medarbejdere adgang til deres egen sikre AI-assistent, skræddersyet til deres workflow og med 100% datasikkerhed.
              </p>
              <a 
                href="https://calendly.com/syv-ai/llm-generativ-ai-med-mads-henrichsen"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-blue-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fade-in-up animation-delay-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start din AI-rejse nu <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="md:w-1/2 animate-fade-in-up animation-delay-900">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform rotate-6 scale-105"></div>
                <img src="/images/hero.png" alt="AI Assistant Dashboard" className="relative rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="fordele" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Fordele ved PrivatAI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Users className="text-blue-600 mb-6 mx-auto" size={64} />
              <h3 className="text-2xl font-semibold mb-4 text-center">Personlig AI til alle</h3>
              <p className="text-gray-600 text-center">Hver medarbejder får deres egen chatbot, skræddersyet til deres specifikke arbejdsopgaver og workflow. Boost produktiviteten med personlige AI-assistenter.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Lock className="text-blue-600 mb-6 mx-auto" size={64} />
              <h3 className="text-2xl font-semibold mb-4 text-center">Fuldstændig datasikkerhed</h3>
              <p className="text-gray-600 text-center">Jeres data forbliver private og sikre. Vi deler eller gemmer intet af jeres fortrolige information. Nyd godt af AI uden at gå på kompromis med sikkerheden.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Zap className="text-blue-600 mb-6 mx-auto" size={64} />
              <h3 className="text-2xl font-semibold mb-4 text-center">Øget produktivitet</h3>
              <p className="text-gray-600 text-center">Boost effektiviteten med AI-assistenter, der er specialiseret i hver medarbejders unikke arbejdsområde. Spar tid og ressourcer med intelligent automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funktioner" className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Nøglefunktioner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg flex items-start space-x-4">
              <Shield className="text-blue-600 flex-shrink-0" size={40} />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Avanceret Kryptering</h3>
                <p className="text-gray-600">Alle interaktioner og data er beskyttet med state-of-the-art kryptering for maksimal sikkerhed.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg flex items-start space-x-4">
              <Bot className="text-blue-600 flex-shrink-0" size={40} />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Tilpasset AI-model</h3>
                <p className="text-gray-600">Vores AI-model kan tilpasses til din virksomheds specifikke behov og branche.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg flex items-start space-x-4">
              <MessageSquare className="text-blue-600 flex-shrink-0" size={40} />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Flersproget Support</h3>
                <p className="text-gray-600">Kommuniker med AI'en på flere sprog, perfekt til internationale teams.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg flex items-start space-x-4">
              <Users className="text-blue-600 flex-shrink-0" size={40} />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Administratorkontrol</h3>
                <p className="text-gray-600">Giv ledere mulighed for at overvåge chats, styre brugeradgang og sætte grænser for AI-interaktioner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="saadan-virker-det" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Sådan virker PrivatAI</h2>
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl">
            <p className="text-xl leading-relaxed mb-8">
              PrivatAI giver dine medarbejdere adgang til deres helt egen og private AI-chat. Her kan de nemt og sikkert interagere med avancerede sprogmodeller, uden at deres data bliver delt eller kompromitteret.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-blue-600">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MessageSquare size={32} />
                </div>
                <p className="text-lg font-semibold">Sikker chat med dine dokumenter og data</p>
              </div>
              <div className="flex items-center space-x-4 text-blue-600">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users size={32} />
                </div>
                <p className="text-lg font-semibold">Tilpassede prompts til hver medarbejders workflow</p>
              </div>
              <div className="flex items-center space-x-4 text-blue-600">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Lock size={32} />
                </div>
                <p className="text-lg font-semibold">End-to-end kryptering sikrer dine datas fortrolighed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Klar til at revolutionere jeres arbejdsgang?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Lad os vise dig, hvordan PrivatAI kan transformere din virksomheds produktivitet og sikkerhed. Book en personlig demo og oplev kraften af sikker AI.</p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-xl hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
            Book en demo <ChevronRight className="ml-3" size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h3 className="text-3xl font-bold mb-4">PrivatAI</h3>
              <p className="text-gray-400 mb-4">Sikker og personlig AI-løsning til din virksomhed. Vi revolutionerer måden, virksomheder arbejder på, med avanceret AI-teknologi og uovertruffen datasikkerhed.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontakt os</h3>
              <p className="text-gray-400 mb-2">Email: mads@syv.ai</p>
              <p className="text-gray-400 mb-2">Telefon: +45 27 22 08 04</p>
              <p className="text-gray-400">Adresse: Rosenvængets Allé  11, 1. sal</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 PrivatAI.dk - Alle rettigheder forbeholdes.</p>
            <ul>
              <li className="inline-block mx-2"><a href="https://syv.ai" className="hover:text-white transition duration-300">PrivatAI.dk er en del af syv.ai</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;