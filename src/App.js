import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, Mail, Box, ArrowRight, Anchor, MapPin, Send, Phone, MessageCircle, User, Bot } from 'lucide-react';

// --- TRANSLATIONS DATABASE ---
const content = {
  en: {
    nav: { home: "Home", about: "About", products: "Products", contact: "Contact", location: "Location" },
    hero: {
      title: "Nature's Best Substrate",
      subtitle: "Premium Organic Coir Pith & Coco Peat Blocks for Global Export.",
      cta: "Get a Quote"
    },
    about: {
      title: "About PPM",
      desc: "PPM (Precision Plastic Moulders) is a premier exporter of sustainable, organic substrates. We provide high-quality Coir Pith and Coco Peat blocks to nurseries, hydroponic farms, and agricultural distributors worldwide.",
      tagline: "100% Organic • Eco-Friendly • Sustainable"
    },
    products: {
      title: "Our Products",
      items: [
        {
          name: "Washed Coir Pith (Coco Peat)",
          desc: "Standard washed coir pith blocks. High water retention, low EC, and excellent aeration for general gardening and open-field agriculture.",
          use: "Best for: Potting Soil, Landscaping, Soil Conditioning",
          img: "/assets/coco-block.jpeg"
        },
        {
          name: "Buffered Coir Blocks",
          desc: "Chemically treated with Calcium Nitrate to remove sodium and potassium. Super low EC, pH balanced, and stable structure.",
          use: "Best for: Hydroponics, Professional Grow Bags, Sensitive Crops",
          img: "/assets/coco-brick.jpeg"
        }
      ]
    },
    form: {
      title: "Send an Enquiry",
      subtitle: "Fill out the form below and we will get back to you with a CIF/FOB quote.",
      fields: {
        name: "Full Name",
        phone: "Phone Number",
        address: "Your Address",
        country: "Country",
        email: "Email Address",
        message: "Message / Specific Requirements"
      },
      submit: "Send Enquiry via Email"
    },
    location: {
      title: "Visit Us",
      address_title: "Factory Address:",
      address: "Precision Plastic Moulders, Patparganj Industrial Area, Delhi-110092, India"
    }
  },
  es: { // Spanish
    nav: { home: "Inicio", about: "Nosotros", products: "Productos", contact: "Contacto", location: "Ubicación" },
    hero: {
      title: "El Mejor Sustrato de la Naturaleza",
      subtitle: "Bloques de Fibra de Coco y Sustrato Premium para Exportación Global.",
      cta: "Solicitar Cotización"
    },
    about: {
      title: "Sobre PPM",
      desc: "PPM se especializa en la exportación de sustratos orgánicos sostenibles. Suministramos bloques de fibra de coco de alta calidad a viveros y cultivos hidropónicos.",
      tagline: "100% Orgánico • Ecológico • Sostenible"
    },
    products: {
      title: "Nuestros Productos",
      items: [
        { 
          name: "Bloques de Fibra de Coco (Lavado)", 
          desc: "Bloques de coco estándar lavados. Alta retención de agua, baja conductividad eléctrica (EC) y excelente aireación.", 
          use: "Ideal para: Tierra para macetas, Paisajismo", 
          img: "/assets/coco-block.jpeg" 
        },
        { 
          name: "Bloques de Coco Tamponados (Buffered)", 
          desc: "Tratados con Nitrato de Calcio para eliminar sodio. EC muy baja, pH equilibrado.", 
          use: "Ideal para: Hidroponía, Bolsas de cultivo", 
          img: "/assets/coco-brick.jpeg" 
        }
      ]
    },
    form: {
      title: "Envíe una Consulta",
      subtitle: "Complete el formulario para recibir una cotización CIF/FOB.",
      fields: { name: "Nombre Completo", phone: "Teléfono", address: "Dirección", country: "País", email: "Correo Electrónico", message: "Mensaje" },
      submit: "Enviar Consulta"
    },
    location: { title: "Visítenos", address_title: "Dirección de Fábrica:", address: "Precision Plastic Moulders, Patparganj Industrial Area, Delhi-110092, India" }
  },
  nl: { // Dutch
    nav: { home: "Home", about: "Over ons", products: "Producten", contact: "Contact", location: "Locatie" },
    hero: {
      title: "Het Beste Substraat van de Natuur",
      subtitle: "Premium Organische Kokosgruis & Kokosblokken voor Wereldwijde Export.",
      cta: "Offerte Aanvragen"
    },
    about: {
      title: "Over PPM",
      desc: "PPM levert hoogwaardige kokosgruis (cocopeat) en kokossubstraten aan kwekerijen en hydrocultuur bedrijven wereldwijd.",
      tagline: "100% Organisch • Milieuvriendelijk • Duurzaam"
    },
    products: {
      title: "Onze Producten",
      items: [
        { 
          name: "Gewassen Kokosgruis (Coco Peat)", 
          desc: "Standaard gewassen kokosblokken. Hoge waterretentie en uitstekende luchtigheid.", 
          use: "Geschikt voor: Potgrond, Bodemverbetering", 
          img: "/assets/coco-block.jpeg" 
        },
        { 
          name: "Gebufferde Kokosblokken", 
          desc: "Behandeld met Calciumnitraat. Zeer lage EC, pH-gebalanceerd.", 
          use: "Geschikt voor: Hydrocultuur, Kwekerijen", 
          img: "/assets/coco-brick.jpeg" 
        }
      ]
    },
    form: {
      title: "Stuur een Aanvraag",
      subtitle: "Vul het formulier in voor een prijsopgave.",
      fields: { name: "Volledige Naam", phone: "Telefoonnummer", address: "Uw Adres", country: "Land", email: "E-mailadres", message: "Bericht" },
      submit: "Verstuur via E-mail"
    },
    location: { title: "Bezoek Ons", address_title: "Fabrieksadres:", address: "Precision Plastic Moulders, Patparganj Industrial Area, Delhi-110092, India" }
  },
  fr: { // French
    nav: { home: "Accueil", about: "À propos", products: "Produits", contact: "Contact", location: "Lieu" },
    hero: {
      title: "Le Meilleur Substrat Naturel",
      subtitle: "Blocs de Tourbe de Coco (Coco Peat) Premium pour l'Exportation Mondiale.",
      cta: "Demander un Devis"
    },
    about: {
      title: "À propos de PPM",
      desc: "PPM fournit de la tourbe de coco (moelle de coco) de haute qualité aux pépinières et fermes hydroponiques du monde entier.",
      tagline: "100% Biologique • Écologique • Durable"
    },
    products: {
      title: "Nos Produits",
      items: [
        { 
          name: "Tourbe de Coco Lavée (Washed)", 
          desc: "Blocs de moelle de coco lavés standard. Haute rétention d'eau et excellente aération.", 
          use: "Idéal pour : Terreau, Aménagement paysager", 
          img: "/assets/coco-block.jpeg" 
        },
        { 
          name: "Blocs de Coco Tamponnés (Buffered)", 
          desc: "Traités au nitrate de calcium. EC très faible, pH équilibré.", 
          use: "Idéal pour : Hydroponie, Pépinières", 
          img: "/assets/coco-brick.jpeg" 
        }
      ]
    },
    form: {
      title: "Envoyer une Demande",
      subtitle: "Remplissez le formulaire ci-dessous pour obtenir un devis CIF/FOB.",
      fields: { name: "Nom Complet", phone: "Téléphone", address: "Votre Adresse", country: "Pays", email: "Adresse Email", message: "Message" },
      submit: "Envoyer par Email"
    },
    location: { title: "Visitez-nous", address_title: "Adresse de l'usine:", address: "Precision Plastic Moulders, Patparganj Industrial Area, Delhi-110092, India" }
  },
  cn: { // Chinese
    nav: { home: "首页", about: "关于我们", products: "产品", contact: "联系我们", location: "位置" },
    hero: {
      title: "大自然的最佳基质",
      subtitle: "优质有机椰糠 (Coco Peat) 砖，面向全球出口。",
      cta: "获取报价"
    },
    about: {
      title: "关于 PPM",
      desc: "PPM 为世界各地的苗圃和水培农场提供高质量的椰糠和椰壳纤维块。",
      tagline: "100% 有机 • 环保 • 可持续"
    },
    products: {
      title: "我们的产品",
      items: [
        { 
          name: "水洗椰糠砖 (Washed Coco Peat)", 
          desc: "标准水洗椰糠块。高保水性，低EC值，优良的透气性。", 
          use: "适用于：盆栽土，园林绿化", 
          img: "/assets/coco-block.jpeg" 
        },
        { 
          name: "缓冲处理椰糠砖 (Buffered)", 
          desc: "经过硝酸钙缓冲处理。超低EC值，pH平衡。", 
          use: "适用于：水培，专业种植袋", 
          img: "/assets/coco-brick.jpeg" 
        }
      ]
    },
    form: {
      title: "发送询价",
      subtitle: "填写下表，我们将为您提供 CIF/FOB 报价。",
      fields: { name: "全名", phone: "电话号码", address: "您的地址", country: "国家", email: "电子邮件", message: "信息 / 具体规格要求" },
      submit: "通过电子邮件发送"
    },
    location: { title: "访问我们", address_title: "工厂地址:", address: "Precision Plastic Moulders, Patparganj Industrial Area, Delhi-110092, India" }
  }
};

// --- CHATBOT COMPONENT ---
const PPMChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! Welcome to PPM Impex. How can I help you today?' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const quickActions = [
    "Get a Quote",
    "Product Details",
    "Shipping Info",
    "Factory Location"
  ];

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    // 1. Add User Message
    const userMsg = { type: 'user', text: text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // 2. Determine Response (Rule-based)
    setTimeout(() => {
      let botResponse = "I'm not sure about that. Please email us at inquiry@ppm.com for specific details.";
      const lowerText = text.toLowerCase();

      // Logic Rules
      if (lowerText.includes("quote") || lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("buy")) {
        botResponse = "To get a quote, please fill out the enquiry form in the 'Contact' section. We offer CIF/FOB pricing.";
        document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
      } else if (lowerText.includes("product") || lowerText.includes("coco") || lowerText.includes("peat") || lowerText.includes("block")) {
        botResponse = "We offer 5KG Washed Coir Pith blocks and Buffered Coir blocks suitable for hydroponics and gardening. I've scrolled to the products section for you.";
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      } else if (lowerText.includes("shipping") || lowerText.includes("export") || lowerText.includes("delivery")) {
        botResponse = "We export globally! We can arrange shipping to your nearest port. Standard container loads are available.";
      } else if (lowerText.includes("location") || lowerText.includes("where") || lowerText.includes("address") || lowerText.includes("factory")) {
        botResponse = "We are located in the Patparganj Industrial Area, Delhi, India.";
        document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
      } else if (lowerText.includes("hello") || lowerText.includes("hi")) {
        botResponse = "Hi there! Looking for premium coco peat?";
      }

      // 3. Add Bot Message
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
        {/* Greeting Bubble - Only shows when chat is CLOSED */}
        {!isOpen && (
          <div className="bg-white px-4 py-3 rounded-2xl rounded-br-none shadow-xl border border-stone-100 animate-in slide-in-from-right-4 fade-in duration-500 mb-1 max-w-[200px]">
             <p className="text-sm font-semibold text-stone-800 leading-tight">Hi! How may I help you?</p>
          </div>
        )}

        {/* Bigger Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-600 hover:bg-green-700 text-white p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
        >
          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-green-700 p-4 text-white flex items-center gap-3 flex-shrink-0">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold">PPM Assistant</h3>
              <p className="text-xs text-green-100 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>

          {/* Messages Area - With SCROLL CONTAINMENT */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 bg-stone-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-green-600 text-white rounded-tr-none' : 'bg-white border border-stone-200 text-stone-700 rounded-tl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions (Recommendation Boxes) */}
          <div className="px-4 py-2 bg-stone-50 overflow-x-auto whitespace-nowrap scrollbar-hide border-t border-stone-200 flex-shrink-0">
            {quickActions.map((action, i) => (
              <button 
                key={i} 
                onClick={() => handleSend(action)}
                className="inline-block mr-2 px-3 py-1 bg-white border border-green-200 text-green-700 text-xs rounded-full hover:bg-green-50 transition"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-stone-200 flex-shrink-0">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-stone-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                onClick={() => handleSend()}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- MAIN COMPONENT ---
const PPMWebsite = () => {
  const [lang, setLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Form States
  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', country: '', email: '', message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang && ['en', 'nl', 'fr', 'cn', 'es'].includes(urlLang)) {
      setLang(urlLang);
    }
  }, []);

  const switchLang = (newLang) => {
    setLang(newLang);
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
  };

  // --- SMOOTH SCROLLING FUNCTION ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New Inquiry from ${formData.name} - PPM Website`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AAddress: ${formData.address}%0D%0ACountry: ${formData.country}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:inquiry@ppm.com?subject=${subject}&body=${body}`;
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src="/logo.png" alt="PPM Logo" className="h-16 w-auto" />
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {/* Updated to use scrollToSection for smooth scrolling */}
              <button onClick={() => scrollToSection('home')} className="text-stone-600 hover:text-green-700 transition font-medium">{t.nav.home}</button>
              <button onClick={() => scrollToSection('products')} className="text-stone-600 hover:text-green-700 transition font-medium">{t.nav.products}</button>
              <button onClick={() => scrollToSection('enquiry')} className="text-stone-600 hover:text-green-700 transition font-medium">{t.nav.contact}</button>
              <button onClick={() => scrollToSection('location')} className="text-stone-600 hover:text-green-700 transition font-medium">{t.nav.location}</button>
              
              <div className="flex items-center gap-2 border-l pl-4 border-stone-300">
                <Globe className="h-4 w-4 text-stone-400" />
                {['en', 'es', 'nl', 'fr', 'cn'].map((l) => (
                  <button 
                    key={l} 
                    onClick={() => switchLang(l)} 
                    className={`text-sm uppercase ${lang === l ? 'font-bold text-green-700' : 'text-stone-500 hover:text-stone-800'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Updated mobile links too */}
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-stone-600">{t.nav.home}</button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-2 text-stone-600">{t.nav.products}</button>
              <button onClick={() => scrollToSection('enquiry')} className="block w-full text-left px-3 py-2 text-stone-600">{t.nav.contact}</button>
              <div className="flex gap-4 px-3 py-2 flex-wrap">
                {['en', 'es', 'nl', 'fr', 'cn'].map((l) => (
                  <button key={l} onClick={() => {switchLang(l); setIsMenuOpen(false);}} className={`uppercase ${lang === l ? 'font-bold text-green-700' : ''}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-bg.jpg"
            alt="Coco Peat Farm" 
            className="w-full h-[600px] object-cover opacity-90"
            onError={(e) => {e.target.src='https://images.unsplash.com/photo-1599598425947-32c04085732a?auto=format&fit=crop&q=80&w=2000'}}
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply h-[600px]"></div>
          
          {/* --- HIDDEN SEO KEYWORDS BLOCK --- */}
          <div className="absolute top-0 left-0 opacity-0 -z-20 w-px h-px overflow-hidden">
            <h1>Global Coco Peat Exporter / Suppliers</h1>
            <ul>
              <li>Spanish: Fibra de Coco, Sustrato de Coco, Turba de Coco, Bloques de Coco</li>
              <li>French: Tourbe de Coco, Moelle de Coco, Fibre de Coco, Substrat de Coco</li>
              <li>Dutch: Kokosgruis, Kokosbriketten, Kokospeat, Kokosvezel</li>
              <li>German: Kokosblumenerde, Kokosfasern, Kokosziegel, Kokossubstrat</li>
              <li>Italian: Fibra di Cocco, Torba di Cocco, Substrato di Cocco</li>
              <li>Portuguese: Pó de Coco, Turfa de Coco, Substrato de Coco</li>
              <li>Russian: Кокосовый торф (Kokosoviy torf), Кокосовый субстрат, Кокосовый брикет</li>
              <li>Chinese: 椰糠 (Yē kāng), 椰糠砖, 椰壳纤维</li>
              <li>Japanese: ココピート (Kokopīto), ココヤシ</li>
              <li>Korean: 코코피트 (Kokopiteu)</li>
              <li>Arabic: بيتموس جوز الهند (Peatmoss), تربة جوز الهند</li>
              <li>Turkish: Hindistan Cevizi Torfu, Kokopit</li>
              <li>Polish: Torf kokosowy, Włókno kokosowe</li>
              <li>Vietnamese: Mụn dừa, Xơ dừa</li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[600px] flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <span className="bg-green-600/90 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest text-white backdrop-blur-sm mb-4 inline-block">
              Export Quality
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-stone-100 font-light">
              {t.hero.subtitle}
            </p>
            <button 
              onClick={() => scrollToSection('enquiry')}
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              {t.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                <Anchor className="text-green-700" /> {t.about.title}
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                {t.about.desc}
              </p>
              <div className="p-4 bg-white border-l-4 border-green-600 shadow-sm rounded-r-lg">
                <p className="font-semibold text-green-800 tracking-wide">
                  {t.about.tagline}
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/about-img.jpg"
                alt="Factory or Coconut"
                className="w-full h-full object-cover"
                onError={(e) => {e.target.src='https://plus.unsplash.com/premium_photo-1678116562551-789311003460?auto=format&fit=crop&q=80&w=1000'}} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">{t.products.title}</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {t.products.items.map((item, index) => (
              <div key={index} className="group bg-stone-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-stone-100 flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-green-800 z-10">
                    5KG / 650g
                  </div>
                  <img 
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {e.target.src='https://images.unsplash.com/photo-1622383563227-044011358d20?auto=format&fit=crop&q=80&w=800'}}
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Box className="w-6 h-6 text-amber-700" />
                    <h3 className="text-2xl font-bold text-stone-800">{item.name}</h3>
                  </div>
                  <p className="text-stone-600 mb-6 text-lg leading-relaxed flex-1">{item.desc}</p>
                  <div className="text-sm font-semibold text-green-700 bg-green-50 px-4 py-3 rounded-lg border border-green-100">
                    {item.use}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM SECTION */}
      <section id="enquiry" className="py-20 bg-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800 flex justify-center items-center gap-2">
              <Mail className="text-green-700" /> {t.form.title}
            </h2>
            <p className="text-stone-600 mt-2">{t.form.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">{t.form.fields.name}</label>
                <input 
                  type="text" name="name" required 
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">{t.form.fields.phone}</label>
                <input 
                  type="text" name="phone" required 
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none transition"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">{t.form.fields.address}</label>
                <input 
                  type="text" name="address" required 
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none transition"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">{t.form.fields.country}</label>
                <input 
                  type="text" name="country" required 
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none transition"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-700 mb-2">{t.form.fields.email}</label>
              <input 
                type="email" name="email" required 
                className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none transition"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-stone-700 mb-2">{t.form.fields.message}</label>
              <textarea 
                name="message" rows="4" required 
                className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 outline-none transition"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition shadow-md hover:shadow-lg flex justify-center items-center gap-2"
            >
              <Send className="w-5 h-5" /> {t.form.submit}
            </button>
          </form>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">{t.location.title}</h2>
            <div className="flex items-center justify-center gap-2 text-stone-600">
              <MapPin className="text-red-600" />
              <p className="font-medium text-lg">{t.location.address}</p>
            </div>
          </div>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-stone-200">
            <iframe 
              title="Factory Location Map" 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.719023914465!2d77.30987707617233!3d28.638182075661618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzE3LjYiTiA3N8KwMTgnNDUuNCJF!5e0!3m2!1sen!2sin!4v1769325176732!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="PPM Impex Logo" className="h-12 w-auto" />
                <span className="text-stone-200 font-bold text-2xl tracking-wider">PPM</span>
              </div>
              <p className="text-sm opacity-60 text-center md:text-left max-w-xs">
                Premium quality Coir Pith and Coco Peat substrates for global agriculture.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3 className="text-stone-100 font-semibold text-lg border-b border-stone-700 pb-2 mb-2 w-full text-center md:text-left">
                Contact Us
              </h3>
              
              <div className="flex items-center gap-3 text-stone-300">
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Precision Plastic Moulders, Patparganj Industrial Area, Delhi-110092</span>
              </div>

              <div className="flex items-center gap-3 text-stone-300">
                <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                <a href="mailto:inquiry@ppm.com" className="text-sm hover:text-white transition">inquiry@ppm.com</a>
              </div>

              <div className="flex items-center gap-3 text-stone-300">
                <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                <a href="tel:+919818572757" className="text-sm hover:text-white transition">+91 9818572757</a>
                <a href="tel:+919899187493" className="text-sm hover:text-white transition">+91 9899187493</a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 mt-10 pt-8 text-center text-sm opacity-50">
            <p>© 2026 PPM. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* CHATBOT INTEGRATION */}
      <PPMChatbot />
    </div>
  );
};

export default PPMWebsite;