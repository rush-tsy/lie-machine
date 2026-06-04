"use client";

import { useState, useEffect } from "react";
import { MAZERET_DATA, CultureType, MazeretToken } from "./mazeretData";

// 1. Sitedeki TÜM Metinlerin 12 Dildeki Küresel Sözlüğü
const LOCALES: Record<string, any> = {
  en: {
    title: "Lie & Excuse Machine",
    subtitle: "Flawless Social Buffer Algorithm",
    step1: "1. Select Category",
    step2: "2. Target Culture / Region",
    step3: "3. Excuse Intensity",
    intensity1: "Light (White Lie)",
    intensity2: "Medium (Serious)",
    intensity3: "Apocalypse (Critical)",
    generateBtn: "Generate Excuse",
    outputTarget: "📱 Message to Send (Copy This)",
    outputUser: "👁️ What It Means (Your Language)",
    copyBtn: "Copy",
    copied: "Copied!",
    categories: { corporate: "Corporate / Job", family: "Family / Relative", social: "Social / Friend", love: "Love / Dating" },
    cultures: { GLOBAL: "Universal / Global", TR: "Turkey", US: "United States", EU: "Europe", ME: "Middle East" }
  },
  tr: {
    title: "Yalan & Bahane Makinası",
    subtitle: "Kusursuz Sosyal Tampon Algoritması",
    step1: "1. Kategoriyi Belirleyin",
    step2: "2. Hedef Kültür / Bölge",
    step3: "3. Bahane Yoğunluğu",
    intensity1: "Hafif (Beyaz Yalan)",
    intensity2: "Orta (Ciddi Durum)",
    intensity3: "Kıyamet Senaryosu (Kritik)",
    generateBtn: "Bahane Üret",
    outputTarget: "📱 Arkadaşına Göndereceğin Mesaj (Kopyala)",
    outputUser: "👁️ Ne Anlama Geliyor? (Senin Dilin)",
    copyBtn: "Kopyala",
    copied: "Kopyalandı!",
    categories: { corporate: "Plaza / İş", family: "Aile / Akraba", social: "Sosyal / Arkadaş", love: "Aşk / Flört" },
    cultures: { GLOBAL: "Evrensel / Küresel", TR: "Türkiye", US: "Amerika Birleşik Devletleri", EU: "Avrupa", ME: "Orta Doğu" }
  },
  es: {
    title: "Máquina de Mentiras y Excusas",
    subtitle: "Algoritmo de Amortiguación Social Perfecto",
    step1: "1. Selecciona la Categoría",
    step2: "2. Cultura / Región de Destino",
    step3: "3. Intensidad de la Excusa",
    intensity1: "Ligera (Mentira Piadosa)",
    intensity2: "Media (Seria)",
    intensity3: "Apocalipsis (Crítica)",
    generateBtn: "Generar Excusa",
    outputTarget: "📱 Mensaje para Enviar (Copiar)",
    outputUser: "👁️ Qué Significa (Tu Idioma)",
    copyBtn: "Copiar",
    copied: "¡Copiado!",
    categories: { corporate: "Corporativo / Trabajo", family: "Familia / Pariente", social: "Social / Amigo", love: "Amor / Citas" },
    cultures: { GLOBAL: "Universal / Global", TR: "Turquía", US: "Estados Unidos", EU: "Europa", ME: "Medio Oriente" }
  },
  de: {
    title: "Lügen- & Ausreden-Maschine",
    subtitle: "Makelloser Sozialer Puffer-Algorithmus",
    step1: "1. Kategorie Auswählen",
    step2: "2. Zielkultur / Region",
    step3: "3. Intensität der Ausrede",
    intensity1: "Leicht (Notlüge)",
    intensity2: "Mittel (Ernst)",
    intensity3: "Apokalypse (Kritisch)",
    generateBtn: "Ausrede Generieren",
    outputTarget: "📱 Nachricht zum Senden (Kopieren)",
    outputUser: "👁️ Was es Bedeutet (Deine Sprache)",
    copyBtn: "Kopieren",
    copied: "Kopiert!",
    categories: { corporate: "Unternehmen / Job", family: "Familie / Verwandte", social: "Soziales / Freund", love: "Liebe / Dating" },
    cultures: { GLOBAL: "Universell / Global", TR: "Türkei", US: "Vereinigte Staaten", EU: "Europa", ME: "Naher Osten" }
  },
  fr: {
    title: "Machine à Mensonges & Excuses",
    subtitle: "Algorithme de Tampon Social Impeccable",
    step1: "1. Sélectionnez la Catégorie",
    step2: "2. Culture / Région Cible",
    step3: "3. Intensité de l'Excuse",
    intensity1: "Léger (Mensonge Blanc)",
    intensity2: "Moyen (Sérieux)",
    intensity3: "Apocalypse (Critique)",
    generateBtn: "Générer l'Excuse",
    outputTarget: "📱 Message à Envoyer (Copier)",
    outputUser: "👁️ Ce que Cela Signifie (Votre Langue)",
    copyBtn: "Copier",
    copied: "Copié!",
    categories: { corporate: "Entreprise / Travail", family: "Famille / Proche", social: "Social / Ami", love: "Amour / Rencontres" },
    cultures: { GLOBAL: "Universel / Global", TR: "Turquie", US: "États-Unis", EU: "Europe", ME: "Moyen-Orient" }
  },
  ar: {
    title: "آلة الكذب والأعذار",
    subtitle: "خوارزمية العازل الاجتماعي المثالية",
    step1: "١. حدد الفئة",
    step2: "٢. الثقافة / المنطقة المستهدفة",
    step3: "٣. شدة العذر",
    intensity1: "خفيف (كذبة بيضاء)",
    intensity2: "متوسط (جدي)",
    intensity3: "نهاية العالم (حرج)",
    generateBtn: "توليد العذر",
    outputTarget: "📱 الرسالة المراد إرسالها (نسخ)",
    outputUser: "👁️ ماذا تعني؟ (لغتك)",
    copyBtn: "نسخ",
    copied: "تم النسخ!",
    categories: { corporate: "الشركة / العمل", family: "العائلة / الأقارب", social: "اجتماعي / أصدقاء", love: "الحب / المواعدة" },
    cultures: { GLOBAL: "عالمي / كوني", TR: "تركيا", US: "الولايات المتحدة", EU: "أوروبا", ME: "الشرق الأوسط" }
  },
  pt: {
    title: "Máquina de Mentiras & Desculpas",
    subtitle: "Algoritmo de Amortecimento Social Impecável",
    step1: "1. Selecionar Categoria",
    step2: "2. Cultura / Região Alvo",
    step3: "3. Intensidade da Desculpa",
    intensity1: "Leve (Mentira Branca)",
    intensity2: "Média (Séria)",
    intensity3: "Apocalipse (Crítica)",
    generateBtn: "Gerar Desculpa",
    outputTarget: "📱 Mensagem para Enviar (Copiar)",
    outputUser: "👁️ O Que Significa (Seu Idioma)",
    copyBtn: "Copiar",
    copied: "Copiado!",
    categories: { corporate: "Corporativo / Trabalho", family: "Família / Parente", social: "Social / Amigo", love: "Amor / Namoro" },
    cultures: { GLOBAL: "Universal / Global", TR: "Turquia", US: "Estados Unidos", EU: "Europa", ME: "Oriente Médio" }
  },
  ru: {
    title: "Машина Лжи и Отговорок",
    subtitle: "Безупречный Алгоритм Социального Буфера",
    step1: "1. Выберите категорию",
    step2: "2. Целевая культура / регион",
    step3: "3. Интенсивность отговорки",
    intensity1: "Легкая (Белая ложь)",
    intensity2: "Средняя (Серьезно)",
    intensity3: "Апокалипсис (Критично)",
    generateBtn: "Создать отговорку",
    outputTarget: "📱 Сообщение для отправки (Копировать)",
    outputUser: "👁️ Что это значит (Ваш язык)",
    copyBtn: "Копировать",
    copied: "Скопировано!",
    categories: { corporate: "Корпоратив / Работа", family: "Семья / Родственники", social: "Социальное / Друг", love: "Любовь / Свидания" },
    cultures: { GLOBAL: "Универсальная / Глобальная", TR: "Турция", US: "США", EU: "Европа", ME: "Ближний Восток" }
  },
  ja: {
    title: "嘘＆言い訳マシーン",
    subtitle: "完璧な社会的バッファーアルゴリズム",
    step1: "1. カテゴリを選択",
    step2: "2. 対象の文化 / 地域",
    step3: "3. 言い訳の強度",
    intensity1: "軽度 (罪のない嘘)",
    intensity2: "中度 (深刻)",
    intensity3: "終末的 (危機的)",
    generateBtn: "言い訳を生成",
    outputTarget: "📱 送信用メッセージ (コピー)",
    outputUser: "👁️ その意味 (あなたの言語)",
    copyBtn: "コピー",
    copied: "コピーしました！",
    categories: { corporate: "コーポレート / 仕事", family: "家族 / 親戚", social: "ソーシャル / 友人", love: "恋愛 / デート" },
    cultures: { GLOBAL: "ユニバーサル / グローバル", TR: "トルコ", US: "アメリカ", EU: "ヨーロッパ", ME: "中東" }
  },
  zh: {
    title: "谎言与借口生成机",
    subtitle: "完美的社交缓冲算法",
    step1: "1. 选择分类",
    step2: "2. 目标文化 / 地区",
    step3: "3. 借口强烈度",
    intensity1: "轻微 (善意的谎言)",
    intensity2: "中等 (严肃)",
    intensity3: "末日级 (关键危机)",
    generateBtn: "生成借口",
    outputTarget: "📱 待发送消息 (点击复制)",
    outputUser: "👁️ 含义解析 (您的语言)",
    copyBtn: "复制",
    copied: "已复制！",
    categories: { corporate: "职场 / 工作", family: "家庭 / 亲戚", social: "社交 / 朋友", love: "恋爱 / 约会" },
    cultures: { GLOBAL: "通用 / 全球", TR: "土耳其", US: "美国", EU: "欧洲", ME: "中东" }
  },
  it: {
    title: "Macchina delle Bugie e Scuse",
    subtitle: "Algoritmo di Tampone Sociale Impeccabile",
    step1: "1. Seleziona la Categoria",
    step2: "2. Cultura / Regione di Destinazione",
    step3: "3. Intensità della Scusa",
    intensity1: "Leggera (Bugia Bianca)",
    intensity2: "Media (Seria)",
    intensity3: "Apocalisse (Critica)",
    generateBtn: "Genera Scusa",
    outputTarget: "📱 Messaggio da Inviare (Copia)",
    outputUser: "👁️ Cosa Significa (La tua Lingua)",
    copyBtn: "Copia",
    copied: "Copiato!",
    categories: { corporate: "Aziendale / Lavoro", family: "Famiglia / Parente", social: "Sociale / Amico", love: "Amore / Appuntamenti" },
    cultures: { GLOBAL: "Universale / Globale", TR: "Turchia", US: "Stati Uniti", EU: "Europa", ME: "Medio Oriente" }
  },
  hi: {
    title: "झूठ और बहाना मशीन",
    subtitle: "सटीक सामाजिक बफर एल्गोरिदम",
    step1: "1. श्रेणी चुनें",
    step2: "2. लक्षित संस्कृति / क्षेत्र",
    step3: "3. बहाने की तीव्रता",
    intensity1: "हल्का (सफेद झूठ)",
    intensity2: "मध्यम (गंभीर)",
    intensity3: "महाप्रलय (गंभीर संकट)",
    generateBtn: "बहाना उत्पन्न करें",
    outputTarget: "📱 भेजने के लिए संदेश (कॉपी करें)",
    outputUser: "👁️ इसका क्या मतलब है (आपकी भाषा)",
    copyBtn: "कॉपी",
    copied: "कॉपी हो गया!",
    categories: { corporate: "कॉर्पोरेट / नौकरी", family: "परिवार / रिश्तेदार", social: "सामाजिक / मित्र", love: "प्यार / डेटिंग" },
    cultures: { GLOBAL: "सार्वभौमिक / वैश्विक", TR: "तुर्की", US: "संयुक्त राज्य अमेरिका", EU: "यूरोप", ME: "मध्य पूर्व" }
  }
};

const LANGUAGE_LIST = [
  { code: "en", label: "English" }, { code: "tr", label: "Türkçe" }, { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" }, { code: "fr", label: "Français" }, { code: "ar", label: "العربية" },
  { code: "pt", label: "Português" }, { code: "ru", label: "Русский" }, { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" }, { code: "it", label: "Italiano" }, { code: "hi", label: "हिन्दी" }
];

export default function Home() {
  const [lang, setLang] = useState("en"); 
  const [activeCategory, setActiveCategory] = useState("corporate");
  const [targetCulture, setTargetCulture] = useState<CultureType>("GLOBAL");
  const [intensity, setIntensity] = useState<number>(1);
  
  // Çift Yönlü Çıktı Hafızası
  const [targetMessage, setTargetMessage] = useState("");
  const [userExplanation, setUserExplanation] = useState("");
  const [copied, setCopied] = useState(false);

  // Tarayıcı dilini otomatik yakalama (PC ve Mobil uyumlu)
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    if (LOCALES[browserLang]) {
      setLang(browserLang);
    }
  }, []);

  const t = LOCALES[lang] || LOCALES["en"];

  // Dinamik Yoğunluk Renk Atamaları (Slider için neon parlamalar)
  const getIntensityColor = () => {
    if (intensity === 1) return "text-emerald-400 accent-emerald-500";
    if (intensity === 2) return "text-orange-400 accent-orange-500";
    return "text-red-500 accent-red-500";
  };

  // 🎲 MATEMATİKSEL KOMBİNASYON MOTORU (Token Assembler)
  const generateExcuse = () => {
    setCopied(false);
    
    // Her havuzdan kullanıcının seçtiği kültür/global ve yoğunluğa göre filtreleme yapıyoruz
    const filterTokens = (pool: MazeretToken[]) => {
      const matched = pool.filter(t => (t.culture === targetCulture || t.culture === "GLOBAL") && t.intensity === intensity);
      return matched.length > 0 ? matched : pool.filter(t => t.culture === "GLOBAL"); // Fallback
    };

    const gSelected = filterTokens(MAZERET_DATA.giriş)[Math.floor(Math.random() * filterTokens(MAZERET_DATA.giriş).length)];
    const oSelected = filterTokens(MAZERET_DATA.özne)[Math.floor(Math.random() * filterTokens(MAZERET_DATA.özne).length)];
    const krSelected = filterTokens(MAZERET_DATA.kriz)[Math.floor(Math.random() * filterTokens(MAZERET_DATA.kriz).length)];
    const sSelected = filterTokens(MAZERET_DATA.sonuç)[Math.floor(Math.random() * filterTokens(MAZERET_DATA.sonuç).length)];
    const kpSelected = filterTokens(MAZERET_DATA.kapanış)[Math.floor(Math.random() * filterTokens(MAZERET_DATA.kapanış).length)];

    // Seçilen parçaları birleştir (Biri hedef dile, diğeri kullanıcının anladığı dile gidecek)
    const targetLangKey = lang as keyof typeof gSelected.text;
    
    // Arkadaşa gönderilecek nihai çıktı mesajı (Örn: Arapça veya İngilizce)
    const finalTarget = `${gSelected.text[targetLangKey]} ${oSelected.text[targetLangKey]} ${krSelected.text[targetLangKey]} ${sSelected.text[targetLangKey]} ${kpSelected.text[targetLangKey]}`;
    
    // Kullanıcının ne gönderdiğini tam okuyabilmesi için kendi ana dilindeki karşılığı
    const userLangKey = lang as keyof typeof gSelected.text;
    const finalUser = `${gSelected.text[userLangKey]} ${oSelected.text[userLangKey]} ${krSelected.text[userLangKey]} ${sSelected.text[userLangKey]} ${kpSelected.text[userLangKey]}`;

    setTargetMessage(finalTarget);
    setUserExplanation(finalUser);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(targetMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 bg-zinc-950 antialiased text-zinc-100">
      
      {/* Üst Sağ: Küresel Dil Seçim Dropdown'u */}
      <div className="w-full max-w-2xl flex justify-end pt-2">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-zinc-600 cursor-pointer"
        >
          {LANGUAGE_LIST.map((l) => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
      </div>

      {/* Dinamik Başlık Banner Alanı */}
      <div className="w-full max-w-2xl text-center py-8">
        <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-zinc-200 to-emerald-400 bg-clip-text text-transparent transition-all duration-300">
          {t.title}
        </h1>
        <p className="text-zinc-500 text-xs mt-3 uppercase tracking-widest transition-all duration-300">
          {t.subtitle}
        </p>
      </div>

      {/* Ana Kontrol Paneli Kartı */}
      <div className="w-full max-w-xl bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl space-y-6">
        
        {/* Adım 1: Kategori Seçimi */}
        <div>
          <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3">{t.step1}</label>
          <div className="grid grid-cols-2 gap-3">
            {["corporate", "family", "social", "love"].map((catId) => {
              const isActive = activeCategory === catId;
              return (
                <button
                  key={catId}
                  onClick={() => setActiveCategory(catId)}
                  className={`py-2.5 px-4 rounded-xl text-xs font-medium border transition-all duration-200 cursor-pointer text-center ${
                    isActive
                      ? "border-purple-500 text-purple-400 bg-purple-500/10 shadow-lg scale-[1.01]"
                      : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  {t.categories[catId]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Adım 2: Hedef Kültür / Bölge Seçimi */}
        <div>
          <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3">{t.step2}</label>
          <select
            value={targetCulture}
            onChange={(e) => setTargetCulture(e.target.value as CultureType)}
            className="w-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-700 cursor-pointer"
          >
            {["GLOBAL", "TR", "US", "EU", "ME"].map((culId) => (
              <option key={culId} value={culId}>{t.cultures[culId]}</option>
            ))}
          </select>
        </div>

        {/* Adım 3: Yoğunluk Sürgüsü */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">{t.step3}</label>
            <span className={`text-xs font-bold transition-colors duration-200 ${getIntensityColor().split(" ")[0]}`}>
              {intensity === 1 ? t.intensity1 : intensity === 2 ? t.intensity2 : t.intensity3}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="3"
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
            className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer transition-all duration-200 ${getIntensityColor().split(" ")[1]}`}
          />
        </div>

        {/* TETİKLEYİCİ BUTON: Bahane Üret */}
        <button
          onClick={generateExcuse}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer"
        >
          {t.generateBtn}
        </button>

      </div>

      {/* ÇİFT YÖNLÜ ÇIKTI ALANI (Yalnızca bir mazeret üretildiğinde görünür) */}
      {targetMessage && (
        <div className="w-full max-w-xl mt-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4 animate-fade-in">
          
          {/* Kutucuk A: Arkadaşa Gönderilecek Mesaj (Kopyalanabilir) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{t.outputTarget}</span>
              <button
                onClick={handleCopy}
                className="text-xs bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-md text-emerald-400 hover:bg-zinc-700 transition cursor-pointer"
              >
                {copied ? t.copied : t.copyBtn}
              </button>
            </div>
            <div className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm font-mono text-zinc-200 break-words whitespace-pre-wrap select-all">
              {targetMessage}
            </div>
          </div>

          <hr className="border-zinc-800" />

          {/* Kutucuk B: Kullanıcının Ne Gönderdiğini Okuduğu Kısım (Sadece Okunabilir) */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{u => t.outputUser}</span>
            <div className="w-full bg-zinc-950/50 border border-zinc-900 rounded-xl p-4 text-sm text-zinc-400 italic break-words">
              {userExplanation}
            </div>
          </div>

        </div>
      )}

    </main>
  );
}
