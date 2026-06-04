// 1. Desteklediğimiz Kültür Bölgeleri
export type CultureType = 'GLOBAL' | 'TR' | 'US' | 'EU' | 'ME'; 
// GLOBAL: Her yerde yer yer, TR: Türkiye, US: Amerika, EU: Avrupa, ME: Orta Doğu

// 2. Her bir dilin karşılığını tutacak sözlük yapısı
export interface LocalizedText {
  tr: string;
  en: string;
  es: string;
  de: string;
  fr: string;
  ar: string;
}

// 3. Modüler parçacıkların (Token) her birinin sahip olacağı standart şablon
export interface MazeretToken {
  id: string;
  culture: CultureType;
  intensity: 1 | 2 | 3; // 1: Hafif (Yeşil), 2: Orta (Turuncu), 3: Ağır (Kırmızı)
  text: LocalizedText;
}

// 4. Ana Veri Havuzunun Yapısı (5 Ayrık Havuz)
export interface MazeretDataStructure {
  giriş: MazeretToken[];
  özne: MazeretToken[];
  kriz: MazeretToken[];
  sonuç: MazeretToken[];
  kapanış: MazeretToken[];
}
