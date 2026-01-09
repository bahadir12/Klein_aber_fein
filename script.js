/**
 * Zinciri Kırma - Mantık & Veri
 */

// --- VERİ: Müfredat (21 Gün - Java Backend) ---
const curriculum = [
    { day: 1, topic: "Merhaba Java & Değişkenler", theory: "Java güçlü tipli (strongly typed) bir dildir. Değişkenler veri taşıyıcılarıdır. Tipler: int, double, boolean, String.", task: "Main adında bir sınıf oluştur. main() metodu içinde ekrana 'Merhaba Java' yazdır ve int `yas` = 25 tanımla." },
    { day: 2, topic: "Akış Kontrolü (If/Else)", theory: "Bilgisayarlar karar vermelidir. Koşullar için if(dosyaVar) { } else { } yapısını kullanırız.", task: "`yas` > 18 kontrolü yapan bir kod yaz. Ekrana 'Yetişkin' veya 'Reşit Değil' yazsın." },
    { day: 3, topic: "Döngüler (For/While)", theory: "Kodu tekrar yazmak yerine döngüleri kullan. For döngüsü sayısı belli işler içindir.", task: "1'den 10'a kadar olan sayıları for döngüsü ile ekrana yazdır." },
    { day: 4, topic: "Diziler (Arrays)", theory: "Aynı türden çoklu veriyi tek değişkende tutar.", task: "3 arkadaşının ismini tutan bir String dizisi (array) oluştur. 2. ismi ekrana yazdır." },
    { day: 5, topic: "Metotlar (Fonksiyonlar)", theory: "Tekrar kullanılabilir kod bloklarıdır. public void metotAdi() { }.", task: "`topla(int a, int b)` adında, toplamı geriye döndüren (return) bir metot yaz." },
    { day: 6, topic: "Sınıflar & Objeler", theory: "Sınıf (Class) bir taslak, Obje (Object) o taslaktan üretilen evdir.", task: "`Araba` sınıfı oluştur, `renk` ve `model` alanları olsun. Main içinde bir tane türet." },
    { day: 7, topic: "Yapıcı Metotlar (Constructors)", theory: "Nesne oluşturulduğunda ilk çalışan özel metottur. Başlangıç ayarları için kullanılır.", task: "`Araba` sınıfına model ve rengi parametre alan bir Constructor ekle." },
    { day: 8, topic: "Kapsülleme (Encapsulation)", theory: "Veriyi koru. Alanları private yap, erişim için public Getter/Setter kullan.", task: "`Araba` alanlarını private yap. getModel() ve setModel() metotlarını ekle." },
    { day: 9, topic: "Kalıtım (Inheritance) - Temel", theory: "Bir sınıf diğerinin özelliklerini miras alır. `class Kopek extends Hayvan`.", task: "`Arac` diye bir sınıf oluştur. `Araba` sınıfını `Arac` sınıfından türet (extends)." },
    { day: 10, topic: "Metot Ezme (Overriding)", theory: "Alt sınıfın, üst sınıftan gelen metodu kendine göre değiştirmesidir.", task: "`Arac` sınıfındaki `calistir()` metodunu `Araba` sınıfında ezerek 'Vroom' sesi çıkart." },
    { day: 11, topic: "Polimorfizm (Çok Biçimlilik)", theory: "Tek bir eylem, farklı nesneler tarafından farklı şekillerde yapılabilir.", task: "Arac a = new Araba(); a.calistir(); // Araba'nın metodu çalışır." },
    { day: 12, topic: "Soyut Sınıflar (Abstract Class)", theory: "New ile türetilemeyen, sadece miras alınmak için var olan yarım taslaklar.", task: "`Arac` sınıfını abstract yap. İçine abstract `hareketEt()` metodu ekle." },
    { day: 13, topic: "Arayüzler (Interfaces)", theory: "Bir sözleşmedir. Ne yapılacağını söyler, nasıl yapılacağını söylemez. `implements`.", task: "`Uchabilir` (Flyable) interface'i oluştur, `uc()` metodu koy. `Kus` sınıfına uygula." },
    { day: 14, topic: "Static Anahtar Kelimesi", theory: "Nesneye değil, sınıfa aittir. Hafızada tek bir yer kaplar.", task: "`Araba` sınıfına `static int sayac` ekle. Her nesne oluştuğunda bu sayacı artır." },
    { day: 15, topic: "Hata Yakalama (Try-Catch)", theory: "Programın çökmesini önler. Riskli kodları try, hataları catch bloğuna koy.", task: "Sıfıra bölme işlemini try-catch bloğu içine al. ArithmeticException yakala." },
    { day: 16, topic: "Koleksiyonlar: ArrayList", theory: "Boyutu dinamik olarak değişebilen gelişmiş diziler.", task: "Bir ArrayList<String> oluştur. 3 eleman ekle, sonra 2. sıradakini sil." },
    { day: 17, topic: "Koleksiyonlar: HashMap", theory: "Anahtar-Değer (Key-Value) ikilileri. Çok hızlı veri bulmayı sağlar.", task: "İsimler ve yaşlar için HashMap<String, Integer> kur. ('Ali', 25) ekle." },
    { day: 18, topic: "Dosya İşlemleri (File I/O)", theory: "Dosyadan okuma ve dosyaya yazma işlemleri.", task: "FileWriter kullanarak 'test.txt' dosyasına 'Merhaba Dosya' yazdır." },
    { day: 19, topic: "Final Anahtar Kelimesi", theory: "Değiştirilemez sabitler. Sınıflar, metotlar veya değişkenler için kullanılır.", task: "`final double PI = 3.14;` tanımla. Değerini değiştirmeyi dene (Hata alacaksın)." },
    { day: 20, topic: "Temiz Kod & İsimlendirme", theory: "Kodun okunabilirliği çalışmasından daha önemlidir.", task: "Eski kodlarını refactor et. Değişken isimlerini camelCase yap, anlamsızları düzelt." },
    { day: 21, topic: "FİNAL PROJESİ", theory: "Öğrendiklerini birleştirme zamanı.", task: "ArrayList, Class ve Döngü kullanarak konsolda çalışan basit bir 'Yapılacaklar Listesi' (Todo App) yap." }
];

const quotes = [
    "Harika işler başarmanın tek yolu, yaptığın işi sevmektir.",
    "Büyük hayaller kur ve başarısız olmaktan korkma.",
    "Kod yazmak bisiklete binmek gibidir, düştükçe öğrenirsin.",
    "Bugün yaptığın çalışmalar, yarınki zaferlerinin temelidir.",
    "Disiplin, anlık isteklerinle en büyük hedefin arasındaki köprüdür.",
    "Bir zincir, en zayıf halkası kadar güçlüdür. Zinciri kırma.",
    "Başlamak için mükemmel olmak zorunda değilsin, ama mükemmel olmak için başlamak zorundasın.",
    "Yazılım bir maratondur, 100 metre koşusu değil. Sabırlı ol.",
    "Hata yapmak, öğrenmenin en hızlı yoludur. Bug'ları sev.",
    "Sadece kod yazma, çözüm üret.",
    "Gelecek, bugün ne yaptığına bağlıdır.",
    "Zor yollar genellikle güzel yerlere çıkar.",
    "Ustanın bir zamanlar acemi olduğunu unutma.",
    "Kodun senin imzan, onu güzel at.",
    "Pes etmediğin sürece başarısız sayılmazsın.",
    "Her gün %1 daha iyi olsan, yıl sonunda 37 kat daha iyi olursun.",
    "Motivasyon seni başlatır, alışkanlık devam ettirir.",
    "Yarınlar yorgun ve bezgin kimselere değil, rahatını terk edebilenlere aittir.",
    "Java sadece bir dil değil, bir ekosistemdir.",
    "En iyi hata mesajı, hiç yazılmamış olandır.",
    "Kahveni al, klavyenin başına geç ve dünyayı değiştir."
];

// --- STATE YÖNETİMİ ---
const STATE_KEY = 'java_zincir_durumu';

const defaultState = {
    currentDay: 1,
    lives: 3,
    lastCompletedDate: null // ISO String YYYY-MM-DD
};

// --- DOM ELEMENTLERİ ---
const elLivesCount = document.getElementById('lives-count');
const elProgressFill = document.getElementById('progress-fill');
const elCurrentDay = document.getElementById('current-day');
const elTopicTitle = document.getElementById('topic-title');
const elDayBadge = document.getElementById('day-badge');
const elTheoryText = document.getElementById('theory-text');
const elTaskText = document.getElementById('task-text');
const elQuoteBox = document.getElementById('quote-box');
const elQuoteText = document.getElementById('quote-text');
const elCompleteBtn = document.getElementById('complete-btn');
const elMessageArea = document.getElementById('message-area');
const elLivesContainer = document.querySelector('.lives-container');
const elWarpLayer = document.getElementById('warp-layer');
const elDailyCard = document.getElementById('daily-card');

const modalGameOver = document.getElementById('game-over-modal');
const modalMilestone = document.getElementById('milestone-modal');
const elMilestoneTitle = document.getElementById('milestone-title');
const elMilestoneText = document.getElementById('milestone-text');

// --- DATE UTILS (UTC STRICT) ---
function getTodayUTC() {
    return new Date().toISOString().split('T')[0];
}

function getDaysDiff(date1Str, date2Str) {
    if (!date1Str || !date2Str) return 0;
    const d1 = new Date(date1Str);
    const d2 = new Date(date2Str);
    const diffTime = Math.abs(d2 - d1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// --- TEMEL MANTIK ---
function loadState() {
    const raw = localStorage.getItem(STATE_KEY);
    return raw ? JSON.parse(raw) : { ...defaultState };
}

function saveState(state) {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
    renderUI(state);
}

function checkStatus() {
    let state = loadState();
    const today = getTodayUTC();

    if (!state.lastCompletedDate) {
        renderUI(state);
        return;
    }

    if (state.lastCompletedDate === today) {
        renderUI(state);
        disableButton("Yarın Görüşürüz!");
        showRandomQuote(); // Gün tamamlandıysa sözü göster
        return;
    }

    const diff = getDaysDiff(state.lastCompletedDate, today);

    if (diff > 1) {
        const daysMissed = diff - 1;
        const newLives = state.lives - daysMissed;

        if (newLives < 0) {
            // GAME OVER
            showGameOver();
            return;
        } else {
            // CAN KAYBI
            state.lives = newLives;

            // Bugünü kurtarmak için tarihi dün yapalım (Cezayı ödedi)
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            state.lastCompletedDate = yesterday.toISOString().split('T')[0];

            saveState(state);
            notifyUser(`${daysMissed} gün kaçırdın! ${daysMissed} canın gitti.`);
        }
    }

    renderUI(state);
}

function renderUI(state) {
    elLivesCount.textContent = state.lives;
    elCurrentDay.textContent = state.currentDay;

    const pct = ((state.currentDay - 1) / 21) * 100;
    elProgressFill.style.width = `${pct}%`;

    if (state.lives <= 1) {
        elLivesContainer.classList.add('danger');
    } else {
        elLivesContainer.classList.remove('danger');
    }

    if (state.currentDay > 21) {
        elTopicTitle.textContent = "Yolculuk Tamamlandı!";
        elTheoryText.textContent = "21 günlük seriyi başarıyla bitirdin.";
        elTaskText.textContent = "Artık gerçek projeler geliştirme zamanı!";
        elDayBadge.textContent = "FİNAL";
        elCompleteBtn.style.display = 'none';
        return;
    }

    const todayContent = curriculum[state.currentDay - 1];
    elTopicTitle.textContent = todayContent.topic;
    elDayBadge.textContent = `GÜN ${todayContent.day}`;
    elTheoryText.textContent = todayContent.theory;
    elTaskText.textContent = todayContent.task;

    if (state.lastCompletedDate === getTodayUTC()) {
        disableButton("Bugünlük Bu Kadar!");
    } else {
        enableButton();
    }
}

// --- WARP ANIMATION & COMPLETION ---
function handleComplete() {
    // 1. Start Warp Effect
    elWarpLayer.classList.add('active');
    elDailyCard.style.opacity = '0'; // Kartı gizle

    // 2. Wait for animation (simulated processing)
    setTimeout(() => {
        finishCompletionProcess();

        // Stop Warp Effect
        setTimeout(() => {
            elWarpLayer.classList.remove('active');
            elDailyCard.style.opacity = '1';
            elDailyCard.classList.add('shake'); // Landing impact
            setTimeout(() => elDailyCard.classList.remove('shake'), 500);
        }, 500);

    }, 1500); // 1.5 saniye warp süresi
}

function finishCompletionProcess() {
    let state = loadState();

    // Logic Update
    state.lastCompletedDate = getTodayUTC();

    const finishedDay = state.currentDay;
    state.currentDay++;

    // Save
    saveState(state);

    // Effects
    triggerConfetti();
    showRandomQuote();
    disableButton("Harika İş!");
    checkMilestones(finishedDay);
}

function showRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    elQuoteText.textContent = randomQuote;
    elQuoteBox.classList.remove('hidden');
}

function checkMilestones(day) {
    const milestones = [7, 9, 11, 21];
    if (milestones.includes(day)) {
        setTimeout(() => {
            showMilestone(day);
        }, 1000);
    }
}

function showMilestone(day) {
    let msg = "";
    if (day === 7) msg = "1 Haftalık Seri! Beynin bu düzene alıştı.";
    if (day === 9) msg = "Sınırları zorluyorsun! Pes etme.";
    if (day === 11) msg = "Yolu yarıladın! Backend dünyasına giriyorsun.";
    if (day === 21) msg = "ZİNCİR TAMAMLANDI! Sen durdurulamazsın.";

    elMilestoneTitle.textContent = `Gün ${day} Devrildi!`;
    elMilestoneText.textContent = msg;
    modalMilestone.classList.remove('hidden');
    triggerConfetti();
}

function showGameOver() {
    modalGameOver.classList.remove('hidden');
    document.getElementById('app').classList.add('shake');
}

function resetGame() {
    localStorage.removeItem(STATE_KEY);
    location.reload();
}

function disableButton(text) {
    elCompleteBtn.disabled = true;
    elCompleteBtn.textContent = text;
}

function enableButton() {
    elCompleteBtn.disabled = false;
    elCompleteBtn.textContent = "GÖREVİ TAMAMLA";
    elQuoteBox.classList.add('hidden');
}

function notifyUser(msg) {
    elMessageArea.textContent = msg;
    document.querySelector('.lives-container').classList.add('shake');
    setTimeout(() => {
        document.querySelector('.lives-container').classList.remove('shake');
    }, 1000);
}

// --- EVENTS ---
elCompleteBtn.addEventListener('click', handleComplete);
document.getElementById('restart-btn').addEventListener('click', resetGame);
document.getElementById('continue-btn').addEventListener('click', () => {
    modalMilestone.classList.add('hidden');
});

// --- INIT ---
checkStatus();

// --- CONFETTI ENGINE (Enhanced) ---
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function triggerConfetti() {
    // Create more particles for bigger effect (300 particles)
    for (let i = 0; i < 300; i++) {
        particles.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            vw: (Math.random() - 0.5) * 30, // Faster spread
            vh: (Math.random() - 1) * 30 - 10,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`,
            life: 200, // Longer life (approx 3-4 seconds)
            size: Math.random() * 10 + 4
        });
    }
    requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
    if (particles.length === 0) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        p.x += p.vw;
        p.y += p.vh;
        p.vh += 0.4; // Gravity
        p.vw *= 0.96; // Air resistance
        p.life--;

        ctx.fillStyle = p.color;

        // Rotate simulation (simple square rotation)
        ctx.fillRect(p.x, p.y, p.size, p.size);

        if (p.life <= 0 || p.y > canvas.height + 20) {
            particles.splice(index, 1);
        }
    });

    if (particles.length > 0) {
        requestAnimationFrame(updateConfetti);
    }
}

// Resize canvas handling
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
