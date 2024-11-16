import { Link } from 'react-router-dom';

// === Alumni.jsx data ===
export const companyListAlumni = [
    {name: "Shopee", link: "https://www.sea.com/products/shopee"},
    {name: "Google", link: "https://about.google/intl/en_id/"},
    {name: "Amazon", link: "https://www.aboutamazon.com/about-us"},
    {name: "Meta", link: "https://about.meta.com/"},
    {name: "Talentium", link: "https://talentium.io/"},
    {name: "Samsung", link: "https://www.samsung.com/id/srin/"},
    {name: "Grab", link: "https://www.grab.com/id/en/about/"},
    {name: "Tiket.com", link: "https://www.tiket.com/info/about-us"},
    {name: "Traveloka", link: "https://www.traveloka.com/en-id/about-us"},
    {name: "Tokopedia", link: "https://www.tokopedia.com/about/"},
    {name: "Sirclo", link: "https://www.sirclo.com/about/company-overview"},
    {name: "Blibli", link: "https://about.blibli.com/en/about"},
];

export const universityList = [
    {name: "National University of Singapore", link: "https://nus.edu.sg/"},
    {name: "University of Tsukuba", link: "https://www.tsukuba.ac.jp/en/"},
    {name: "Binus University", link: "https://binus.ac.id/"}
];

// === Register.jsx data ===

export const pointList = [
    {name: "Registration Deadline", date: "23 October 2024", desc: "The registration form will be closed in 23 October 2024 at 23.59 WIB."},
    {name: "Selection Phase 1", date: "26-27 October 2024", desc: "Consisted of 20 problems (10 basic programming problems and 10 math problems), online (no proctoring), open for 48 hours."},
    {name: "Selection Phase 2", date: "8 December 2024", desc: "Consisted of 6-10 competivive programming problems."},
    {name: "Announcement", date: "January 2025", desc: "Results of registrants that advanced to Jollybee Basic Training are announced."},
    {name: "Jollybee Basic Training", date: "February 2025", desc: "The beginning of the Jollybee Basic Training (even semester)."},
];

export const questionList = [
    {question: "Can non-compsci students join Jollybee?", answer: (
      <>
        Yes! Everyone is welcomed to join Jollybee, read the <a onClick={() => {
            const noticeSection = document.getElementById('notice__section');
            if (noticeSection) {
            noticeSection.scrollIntoView({ behavior: 'smooth' });
            } else {
            console.error("The element with id 'notice__section' was not found.");
            }
        }}>Notice section</a> for more information.
      </>
    )},
    {question: "What's the material for the selection phases?", answer: (
      <>
        Overall, mathematics and basic competitive programming skills. Please join our <a href="https://discord.gg/fSaFuT3PaA" target="_blank" rel="noopener noreferrer">Discord server</a> for further information about the selection phases.
      </>
    )},
    {question: "I don't have any programming background, can I still join Jollybee?", answer: (
      <>
        Yes! You can prepare yourself by learning the basics before the selection phase begins. Check out our <Link to="/learn">Learning Page</Link> for learning recommendations and join our <a href="https://discord.gg/fSaFuT3PaA" target="_blank" rel="noopener noreferrer">Discord server</a> to learn more about how to prepare yourself.
      </>
    )},
    {question: "Do I get SAT points from Jollybee?", answer: "You can get SAT points from participating competitions. Some of Jollybee members even have SAT overflow."},
    {question: "Do I need to pay for the registration?", answer: "No, it's 100% free!"},
    {question: "Can I join Jollybee and still participate in other organizations?", answer: "Yes, as long as you have a good time management and willing to commit in participating Jollybee's events."}
];

// === About.jsx data ===

export const companyListAbout = [
    {name: "Huawei", link: "https://www.huawei.com/minisite/icpc2024/en/"},
    {name: "Google", link: "https://codingcompetitionsonair.withgoogle.com/"},
    {name: "Meta", link: "https://www.facebook.com/codingcompetitions/hacker-cup"},
    {name: "Shopee", link: "https://careers.shopee.sg/codeleague/"},
    {name: "Codegoda", link: "https://codegoda.io/"},
    {name: "Acer", link: "https://news.acer.com/acer-sponsors-the-international-olympiad-in-informatics-2022"},
    {name: "Traveloka", link: "https://competition.binus.ac.id/icpc2018/"},
    {name: "Sirclo", link: "http://ngoding-seru.jonathanirvin.gs/"},
];

export const socialList = [
    {name: "Instagram", link: "https://www.instagram.com/binusjollybee/"},
    {name: "Linkedin", link: "https://www.linkedin.com/company/jollybee-binus/"}
];

// === Benefits.jsx data ===
export const cpBenefitList = [
    {icon: "fa-solid fa-face-smile", name: "It's fun!"},
    {icon: "fa-solid fa-brain", name: "Learn to think efficiently and effectively"},
    {icon: "fa-solid fa-puzzle-piece", name: "Improve your problem-solving skills"},
    {icon: "fa-solid fa-code", name: "Improve your general coding skills"},
    {icon: "fa-solid fa-circle-nodes", name: "Be proficient at algorithms and data structure."},
    {icon: "fa-solid fa-user-group", name: "Learn to code and solve problems as a team"},
    {icon: "fa-solid fa-briefcase", name: "Get industry recognition"},
    {icon: "fa-solid fa-file", name: "Win achievements for your CV"}
];

export const jbBenefitList = [
    {name: "Fun community", explain: "To have a fun community with shared interest in competitive programming. We learn and grow together. Having community means a lot to your learning journey!"},
    {name: "Exciting experience", explain: "Experience what it’s like to hold CP related events, like becoming a problemsetter for BNPCHS (national CP competition for highs school students)."},
    {name: "Exclusive apprel", explain: "Get your very own exclusive Jollybee jacket."},
    {name: "Contest & materials", explain: "Take part in practice contests and material sessions."},
    {name: "Indonesian CP community", explain: "Involve yourself in Indonesian CP community. For example, by coaching for training camps."},
    {name: "Company visit", explain: "Get the opportunity to visit tech company. In 2022, we visited Ajaib."},
    {name: "Competition information", explain: "Get frequent updates information about available competitions and join it for free (all competition-related expenses are paid by Binus University)."},
    {name: "Routine outings", explain: "Go to various places with other Jollybee member to strengthen our bonding. We love to play badminton, have a tea time session, etc."},
    {name: "Vast connection", explain: "Some of the companies of Jollybee alumni are Shopee, Google, Samsung R&D Institute Indonesia, Traveloka, Tokopedia, Sirclo, etc. Some of Jollybee alumni thrive in education and research field at National University of Singapore, University of Tsukuba, and Binus University."},
];

// === Slider.jsx in Benefits folder ===
export const testimonialList= [
    {name: "Owmicron", year: "B23", src: process.env.PUBLIC_URL + "/assets/bebekdengklek.png", desc: "Overall JB (Jollybee) experience: <br> - Improved my cp skills exponentially. Would never reach this point without JB <br> - I met some amazing and awesome people through JB <br> - Arcade and culinary sessions are my favorites <br> - JB actually changed my life path, I could have live the normal internship life, but competitive enrichment track allows me to train for a full year <br> - I would never have the chance to compete in ICPC world finals, thanks JB."},
    {name: "SunShine", year: "B24", src: process.env.PUBLIC_URL + "/assets/bebekdengklek.png", desc: "Sejak join Jollybee, aku jadi tahu soal apa itu Competitive Programming (CP) dan orang-orang CP di Indonesia (dan Jollybee). <br><br> Ada yang jago, ada yang jago banget, ada yang si paling sepuh. Mereka semua super friendly dan suportif terhadap satu sama lain. <br><br> Gak cuma skill CP aja yang aku dapetin dari ikut Jollybee, tapi juga banyak soft skill dari kegiatan Jollybee lainnya yang bisa aku peroleh."},
    {name: "vioalbert", year: "B24", src: process.env.PUBLIC_URL + "/assets/bebekdengklek.png", desc: "Bagi kalian yang suka problem solving dan programming, Jollybee adalah komunitas yang pas buat kalian. <br><br> Selain bisa pergi ke lomba2 dan juara, kalian juga bisa bersosialisasi dan have fun dengan sesama anggota yang punya interest yang sama. Terkadang member-member Jollybee suka ngajak jalan-jalan, main arcade, dan makan-makan bareng. <br><br> Jadi kalian ga cuma bisa berprestasi, tapi juga have fun sepanjang perjalanan Competitive Programming kalian!"},
    {name: "Feli", year: "B23", src: process.env.PUBLIC_URL + "/assets/bebekdengklek.png", desc: "Jollybee komunitasnya seru. Kamu bebas nge-cp (Competitive Programming) sesuka kamu. Kamu suka ngerjain soal? Kamu suka ngebuat soal? Kamu suka ngajar? Ayo sini. <br><br> Di Jollybee kamu bener\" bisa fokus dengan apa pun yang kamu mau kerjain. Buat lomba, kamu tinggal daftar dan lomba aja karena lomba udh dicariin, perjalanan ke venue lomba udah diurusin semua, biaya direimburse semua, dan kalo menang ada bonus tambahan dari Binus. Dan ini semua adalah default priviledgemu sebagai anggota tanpa harus bayar sepeser pun. <br><br> Terlebih, kamu juga sangat bebas berekspresi di sini. Nggak ada yang namanya hirarki, Jollybee itu benar-benar komunitas yang positif dan saling support."},
    {name: "Blankts", year: "B25", src: process.env.PUBLIC_URL + "/assets/bebekdengklek.png", desc: "Jollybee itu komunitas yang ngubah rutinitas kuliahku yang awalnya cuman kupu-kupu (kuliah pulang-kuliah pulang) sekarang jadi ada tujuan selama berkuliah. Di Jollybee, kita benar-benar dibina untuk dapat meningkatkan kemampuan ebrpikir, berkomunikasi, dan kerja sama kita. Materi-materi dan latihan yang diberikan juga kualitasnya TOP deh. <br><br> Selain itu, di Jollybee kita juga bisa have fun bersama. Sesi board game, company visit, dan makan-makan bersama merupakan sesi paling menyenangkan buatku. Gak bakal nyesel deh join Jollybee."},
    {name: "Naga-Unyu", year: "B26", src: process.env.PUBLIC_URL + "/assets/bebekdengklek.png", desc: "Jollybee komunitasnya sangat asik, seru, dan relaxing. Tapi pada saat yang sama training dan komunitas ini sangat membangun dan memfasilitasi para anggotanya untuk berkembang ^_^"},
    {name: "Shiba", year: "B18", src: process.env.PUBLIC_URL + "/assets/bebekdengklek.png", desc: "I asked myself a lot of \"What if ...\" questions. One of them is \"What if I didn't join Jollybee back then?\"<br><br> 1. I don't think I'll have the foundations necessary to pass the coding interview for working abroad. I wasn't a confident person as well and being surrounded by suppportive and amazing people boosted my confidence which helped me to better unlock my potentials. <br><br> 2. I wouldn't have traveled to many different places both abroad and cities within Indonesia. Jollybee was very generous in their funding for competitions. <br><br> And lastly, I wouldn't meet all my friends."},
];

// === Resources.jsx data ===
export const materialList = [
    {name: "USACO Guide — by the USA Computing Olympiad", src: process.env.PUBLIC_URL + "/assets/usaco.png", link: "https://usaco.guide/"},
    {name: "Pemrograman Kompetitif Dasar — book by TOKI", src: process.env.PUBLIC_URL + "/assets/pkd.jpg", link: "https://osn.toki.id/data/pemrograman-kompetitif-dasar.pdf"},
    {name: "Competitive Programming 2 — book by Steven Halim and Felix Halim", src: process.env.PUBLIC_URL + "/assets/cp2.jpg", link: "https://www.comp.nus.edu.sg/~stevenha/myteaching/competitive_programming/cp2.pdf"},
    {name: "Competitive Programming 4 — book by Steven Halim, Felix Halim, and Suhendry Effendy", src: process.env.PUBLIC_URL + "/assets/cp4.jpg", link: "https://www.amazon.com/Competitive-Programming-4-Book-2/dp/B093K67NVN"},
    {name: "CP Algorithms — Jakob Kogler, Oleksandr Kulkov, and Rodion Gorkovenko", src: process.env.PUBLIC_URL + "/assets/cp_algo.png", link: "https://cp-algorithms.com/index.html"},
];

// === Learn.jsx data ===
export const ojList = [
    {name: "Codeforces", src: process.env.PUBLIC_URL + "/assets/cf_logo.png", link: "https://codeforces.com/"},
    {name: "Atcoder", src: process.env.PUBLIC_URL + "/assets/atcoder_logo.png", link: "https://atcoder.jp/"},
    {name: "TLX", src: process.env.PUBLIC_URL + "/assets/tlx_logo.png", link: "https://tlx.toki.id/"}
];