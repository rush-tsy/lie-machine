// 1. Desteklediğimiz Kültür Bölgeleri
export type CultureType = 'GLOBAL' | 'TR' | 'US' | 'EU' | 'ME';

// 2. 12 Dili Kapsayan Küresel Sözlük Yapısı
export interface LocalizedText {
  tr: string; // Türkçe
  en: string; // English
  es: string; // Español
  de: string; // Deutsch
  fr: string; // Français
  ar: string; // العربية
  pt: string; // Português
  ru: string; // Русский
  ja: string; // 日本語
  zh: string; // 中文
  it: string; // Italiano
  hi: string; // हिन्दी
}

// 3. Modüler Parçacık (Token) Şablonu
export interface MazeretToken {
  id: string;
  culture: CultureType;
  intensity: 1 | 2 | 3; // 1: Hafif, 2: Orta, 3: Ağır
  text: LocalizedText;
}

// 4. Ana Veri Havuzunun Yapısı
export interface MazeretDataStructure {
  giriş: MazeretToken[];
  özne: MazeretToken[];
  kriz: MazeretToken[];
  sonuç: MazeretToken[];
  kapanış: MazeretToken[];
}

// 5. 12 Dilde Eksiksiz Doldurulmuş İlk Örnek Havuzu
export const MAZERET_DATA: MazeretDataStructure = {
  giriş: [
    {
      id: "g_1",
      culture: "GLOBAL",
      intensity: 1,
      text: {
        tr: "Gerçekten çok üzgünüm ama...",
        en: "I'm really sorry, but...",
        es: "Lo siento mucho, pero...",
        de: "Es tut mir wirklich leid, aber...",
        fr: "Je suis vraiment désolé, mais...",
        ar: "أنا آسف حقاً، ولكن...",
        pt: "Sinto muito mesmo, mas...",
        ru: "Мне очень жаль, но...",
        ja: "本当に申し訳ありませんが、...",
        zh: "真的很抱歉，但是...",
        it: "Mi dispiace davvero molto, ma...",
        hi: "मुझे वास्तव में खेद है, लेकिन..."
      }
    },
    {
      id: "g_2",
      culture: "TR",
      intensity: 2,
      text: {
        tr: "İnanın hiç hesapta yoktu, tam çıkıyordum ki...",
        en: "Believe me, it wasn't planned at all, I was just about to leave when...",
        es: "Créeme, no estaba planeado en absoluto, estaba a punto de salir cuando...",
        de: "Glaub mir, das war überhaupt nicht geplant, ich wollte gerade gehen, als...",
        fr: "Croyez-moi, ce n'était pas du tout prévu, j'étais sur le point de partir quand...",
        ar: "صدقني، لم يكن الأمر مخططاً له على الإطلاق، كنت على وشك المغادرة عندما...",
        pt: "Acredite em mim, não foi planejado, eu estava prestes a sair quando...",
        ru: "Поверьте, это совсем не планировалось, я уже собирался выходить, как...",
        ja: "信じてください、まったく予定外でした。ちょうど出かけようとした時に...",
        zh: "请相信我，这完全不在计划之中，我正准备出门，结果...",
        it: "Credimi, no era affatto pianificato, stavo proprio per uscire quando...",
        hi: "विश्वास करें, यह बिल्कुल तय नहीं था, मैं बस निकलने ही वाला था कि..."
      }
    }
  ],
  özne: [
    {
      id: "o_1",
      culture: "GLOBAL",
      intensity: 1,
      text: {
        tr: "bizim evin",
        en: "our house's",
        es: "de nuestra casa",
        de: "unseres Hauses",
        fr: "de notre maison",
        ar: "الخاص بمنزلنا",
        pt: "da nossa casa",
        ru: "в нашем доме",
        ja: "うちの家の",
        zh: "我们家的",
        it: "di casa nostra",
        hi: "हमारे घर का"
      }
    },
    {
      id: "o_2",
      culture: "US",
      intensity: 2,
      text: {
        tr: "şirketin internet sağlayıcısı",
        en: "the company's internet provider",
        es: "el proveedor de internet de la empresa",
        de: "der Internetanbieter des Unternehmens",
        fr: "le fournisseur d'accès internet de l'entreprise",
        ar: "مزود الإنترنت الخاص بالشركة",
        pt: "o provedor de internet da empresa",
        ru: "интернет-провайдер компании",
        ja: "会社のインターネットプロバイダーが",
        zh: "公司的网络运营商",
        it: "il fornitore internet dell'azienda",
        hi: "कंपनी का इंटरनेट प्रदाता"
      }
    }
  ],
  kriz: [
    {
      id: "kr_1",
      culture: "GLOBAL",
      intensity: 2,
      text: {
        tr: "ana su borusu aniden patladı",
        en: "main water pipe suddenly burst",
        es: "la tubería principal de agua estalló de repente",
        de: "die Hauptwasserleitung ist plötzlich geplatzt",
        fr: "la conduite d'eau principale a soudainement éclaté",
        ar: "انفجر أنبوب المياه الرئيسي فجأة",
        pt: "o cano principal de água estourou de repente",
        ru: "главную водопроводную трубу внезапно прорвало",
        ja: "水道の本管が突然破裂しました",
        zh: "主水管突然 burst 了",
        it: "la tubatura principale dell'acqua è improvvisamente scoppiata",
        hi: "मुख्य पानी का पाइप अचानक फट गया"
      }
    },
    {
      id: "kr_2",
      culture: "TR",
      intensity: 1,
      text: {
        tr: "bölgedeki trafo patlamış, elektrikler tamamen kesildi",
        en: "the transformer in the area blew up, power is completely out",
        es: "el transformador de la zona explotó, el apagón es total",
        de: "der Transformator in der Gegend ist explodiert, der Strom ist komplett weg",
        fr: "le transformateur du quartier a explosé, l'électricité est complètement coupée",
        ar: "انفجر المحول في المنطقة، وانقطع التيار الكهربائي تماماً",
        pt: "o transformador da região estourou, a energia acabou completamente",
        ru: "в районе взорвался трансформатор, свет полностью отключили",
        ja: "地域の変圧器が爆発し、完全に停電しました",
        zh: "该区域的变压器 silk 掉了，电力完全中断",
        it: "il trasformatore della zona è esploso, la corrente è completamente via",
        hi: "इलाके का ट्रांसफार्मर फट गया, बिजली पूरी तरह से गुल है"
      }
    }
  ],
  sonuç: [
    {
      id: "s_1",
      culture: "GLOBAL",
      intensity: 2,
      text: {
        tr: "ve her yeri su bastığı için acil usta bekliyorum,",
        en: "and everywhere is flooded so I'm urgently waiting for a repairman,",
        es: "y todo está inundado, así que estoy esperando urgentemente a un técnico,",
        de: "und alles steht unter Wasser, sodass ich dringend auf einen Handwerker warte,",
        fr: "et tout est inondé, j'attends donc de toute urgence un dépanneur,",
        ar: "والمكان غارق في المياه لذا أنا بانتظار الفني بشكل عاجل،",
        pt: "e tudo está inundado, então estou esperando urgentemente por um técnico,",
        ru: "и всё затопило, поэтому я срочно жду мастера,",
        ja: "あちこち水浸しなので、急いで修理業者を待っています、",
        zh: "到处都被淹了，所以我正紧急等待修理工，",
        it: "e tutto è allagato, quindi sto aspettando urgentemente un tecnico,",
        hi: "और हर तरफ बाढ़ आ गई है इसलिए मैं तत्काल एक मिस्त्री का इंतजार कर रहा हूँ,"
      }
    },
    {
      id: "s_2",
      culture: "US",
      intensity: 1,
      text: {
        tr: "bağlantım koptuğu için sisteme hiçbir şekilde erişemiyorum,",
        en: "since my connection is lost, I cannot access the system in any way,",
        es: "como se perdió mi conexión, no puedo acceder al sistema de ninguna manera,",
        de: "da meine Verbindung getrennt ist, kann ich in keiner Weise auf das System zugreifen,",
        fr: "ma connexion étant coupée, je ne peux accéder au système d'aucune manière,",
        ar: "نظراً لانقطاع الاتصال لدي، لا يمكنني الدخول إلى النظام بأي شكل من الأشكال،",
        pt: "como minha conexão caiu, não consigo acessar o sistema de forma alguma,",
        ru: "так как соединение потеряно, я вообще не могу получить доступ к системе,",
        ja: "接続が切れたため、システムにまったくアクセスできません、",
        zh: "由于连接断开， architectural 我无法以任何方式访问系统，",
        it: "poiché la mia connessione è persa, non posso accedere al sistema in alcun modo,",
        hi: "चूंकि मेरा कनेक्शन टूट गया है, मैं किसी भी तरह से सिस्टम तक नहीं पहुंच पा रहा हूँ,"
      }
    }
  ],
  kapanış: [
    {
      id: "kp_1",
      culture: "GLOBAL",
      intensity: 1,
      text: {
        tr: "durumu çözer çözmez sana haber vereceğim.",
        en: "I will let you know as soon as I resolve the situation.",
        es: "Te avisará tan pronto como resuelva la situación.",
        de: "Ich gebe dir Bescheid, sobald ich die Situation gelöst habe.",
        fr: "Je vous tiendrai au courant dès que j'aurai résolu la situation.",
        ar: "سأخبرك بمجرد حل المشكلة.",
        pt: "Avisarei você assim que resolver a situação.",
        ru: "Я дам знать, как только разберусь с ситуацией.",
        ja: "状況が解決次第、すぐにお知らせします。",
        zh: "事情一解决我就会通知你。",
        it: "Ti farò sapere non appena avrò risolto la situazione.",
        hi: "जैसे ही मैं स्थिति को संभाल लूंगा, आपको सूचित करूँगा।"
      }
    },
    {
      id: "kp_2",
      culture: "TR",
      intensity: 2,
      text: {
        tr: "şarjım da bitmek üzere, telefon kapanırsa merak etme lütfen.",
        en: "my battery is about to die too, please don't worry if my phone turns off.",
        es: "mi batería también está a punto de agotarse, por favor no te preocupes si mi teléfono se apaga.",
        de: "mein Akku ist auch gleich leer, bitte mach dir keine Sorgen, wenn mein Handy ausgeht.",
        fr: "ma batterie est aussi sur le point de lâcher, s'il vous plaît ne vous inquiétez pas si mon téléphone s'éteint.",
        ar: "بطارية هاتفي على وشك النفاد أيضاً، يرجى عدم القلق إذا أغلق الهاتف.",
        pt: "minha bateria também está acabando, por favor não se preocupe se meu telefone desligar.",
        ru: "у меня еще и батарея садится, пожалуйста, не волнуйся, если телефон выключится.",
        ja: "バッテリーも切れそうなので、携帯が切れても心配しないでください。",
        zh: "我的电量也快用完了，如果手机关机请不要担心。",
        it: "anche la mia batteria sta per scaricarsi, per favore non preoccuparti se il telefono si spegne.",
        hi: "मेरी बैटरी भी खत्म होने वाली है, अगर मेरा फोन बंद हो जाए तो कृपया चिंता न करें।"
      }
    }
  ]
};
