export interface Testimonial {
  /** The comment, word for word as written on YouTube. */
  text: string;
  author: string;
  avatar: string;
  color: string;
  course: string;
  /** Direct link to the comment on YouTube. */
  url: string;
  likes?: string;
}

export const featuredTestimonial: Testimonial = {
  text: "انت متخيل انك قدمت الدروس دي من سنين وفيه ناس لحد دلوقتي بتتعلم من اسلوبك الرهيب دا وتدعيلك بظهر الغيب، أسال الله العظيم ان ييسر لك امورك كلها كما يسرت علينا هذا العلم النافع.",
  author: "@sakora4899",
  avatar: "s",
  color: "c1",
  course: "على كورس جافاسكربت",
  url: "https://www.youtube.com/watch?v=aKKIUIcM6sE&lc=UgzV-DaOsUrwmDITBSB4AaABAg",
  likes: "20",
};

export const testimonials: Testimonial[] = [
  {
    text: "كلمة شكر قليلة في حقك يا مبدع فديوهاتك السابقة كانت جدا بيرفكت بس الصراحة الشرح بالاسلوب هذا والطريقة هذي كانت افضل بكثير من الفيديوهات السابقة لانه عملي اكثر من كونه نظري ويربط الأفكار في بعضها مو زي شرح الجامعات اللي عهدناه قبل على الرغم من أن الفيديو كان طويل جدا بس كان ممتع وغير ممل",
    author: "@SS-bg2ut",
    avatar: "S",
    color: "c2",
    course: "على دورة HTML",
    url: "https://www.youtube.com/watch?v=J-pO5UIqkBE&lc=UgwI9EjkGqF06nri14N4AaABAg",
    likes: "55",
  },
  {
    text: "كل ما افتح فيديو ادعيلك بظهر الغيب ، الله يجزاك كل خير ويجعله في ميزان حسناتك",
    author: "@esmathaideria879",
    avatar: "e",
    color: "c3",
    course: "على دورة التأهيل لسوق العمل",
    url: "https://www.youtube.com/watch?v=_rDqhxrkANc&lc=Ugx2QIVjSjeA4UKACgt4AaABAg",
    likes: "88",
  },
  {
    text: "اقسم بالله انك احسن مقدم محتوى البرمجة في العالم العربي وعيب ان تكون المشاهدات هكذا يجب ان تحطم الارقام القياسية واكمل في مسارتك جزاك الله خيرا",
    author: "@abdoomajd7962",
    avatar: "a",
    color: "c4",
    course: "على كورس Next.js",
    url: "https://www.youtube.com/watch?v=1KE0DiWHM5I&lc=Ugxa4aUdj7i3x-jKwVh4AaABAg",
    likes: "13",
  },
  {
    text: "شرح أكثر من رائع ... ما شاء الله اول مرة افهم جافا اسكربت اصلا بسبب حضرتك .. بالتوفيق",
    author: "@mosheraatia9918",
    avatar: "m",
    color: "c5",
    course: "على كورس جافاسكربت",
    url: "https://www.youtube.com/watch?v=aKKIUIcM6sE&lc=UgxtUY_6YWs0eJCxpU54AaABAg",
    likes: "2",
  },
  {
    text: "اول مرة اسمع فيديو ساعة ومملش واستفيد جدا❤️❤️ جزاك الله خيرا",
    author: "@rababmahmoud1508",
    avatar: "r",
    color: "c1",
    course: "على دورة HTML",
    url: "https://www.youtube.com/watch?v=J-pO5UIqkBE&lc=Ugwc3G---CTx4ht3GOx4AaABAg",
    likes: "3",
  },
  {
    text: "أحسن واحد اتعلمت منه ريأكت وفرحت جدا لما لقيت كورس الريديكس نازل على القناة ربنا يزيدك ويجعله فى ميزان حسانتك ياهندسة منتظرين كورس next js من حضرتك ان شاء الله",
    author: "@HossamHossam-r9h",
    avatar: "H",
    color: "c2",
    course: "على كورس Redux",
    url: "https://www.youtube.com/watch?v=XdA3kxOUn3U&lc=UgxTMmOFLCBmrK2MuAN4AaABAg",
  },
  {
    text: "جزاك الله خيرا اربع ايام وانا كل ما اخذ شيء و احس راسي صدع من المعلومات اخذ بريك😂 مره مبتدأه منجد بس المهم النتيجه خلصت الفيديو وفهمت شرحك بصيط وحتى مبتدأه مثلي فهمتو شكرا مره",
    author: "@مريمالكريم-خ9ج",
    avatar: "م",
    color: "c3",
    course: "على دورة HTML",
    url: "https://www.youtube.com/watch?v=J-pO5UIqkBE&lc=UgxruakYX7RVHyyIbut4AaABAg",
    likes: "4",
  },
  {
    text: "الله يعطيك العافية يا رب ، انا من متابعين دورة التاهيل لسوق العمل وكملت واتعلمت نكست ونود , بتمنى تتابع بهالسلسلة كتير متشوق لحتى ارجع تابع السلاسل تعونك الله يقويك ويكثر من امقالك يا رب 😘😘😘",
    author: "@OMARKM",
    avatar: "O",
    color: "c4",
    course: "على كورس Next.js",
    url: "https://www.youtube.com/watch?v=1KE0DiWHM5I&lc=Ugz3hIY5s0rHbrGlRdV4AaABAg",
    likes: "1",
  },
  {
    text: "عظيم عظيم عظيم .. ربنا يباركلك انا شفت ڤيديوهات كتير بس هنا بتشرح كل تفصيلة ومش بتفوت حاجة اللهم بارك من احسن الڤيديوهات عن html ما شاء الله",
    author: "@nourhamada1409",
    avatar: "n",
    color: "c5",
    course: "على دورة HTML",
    url: "https://www.youtube.com/watch?v=J-pO5UIqkBE&lc=UgwQ65GjjHb6cWbxE414AaABAg",
    likes: "2",
  },
];
