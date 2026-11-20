export const PROJECT_CATEGORIES = [
  {
    id: "web-apps",
    name: "Web Apps",
    fullName: "Web Applications & Platforms",
    description:
      "Production-ready web applications built with modern frontend and backend technologies.",
    image:
      "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135545/jclothing_iow31y.webp",
    color: "#6366f1",
    projects: [
      {
        id: 1,
        name: "Jobright",
        fullName: "Production Job Application Tracker",
        description:
          "Jobright is a high-performance, full-stack job application tracker and career pipeline manager built to streamline the job search with an interactive drag-and-drop Kanban interface, secure authentication, and cloud-native document vaulting.",
        tech: [
          "Next Js",
          "Mongo DB",
          "Better-Auth",
          "Tailwind css",
          "Cloudinary",
          "Vercell",
        ],
        githubLink:
          "https://github.com/janithwijethunga/Job-Application-Tracker",
        image:
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1791716654/jobright_w0zjvn.png",
        liveLink: "https://jobright.janithwijethunga.me/",
      },
      {
        id: 2,
        name: "Courier Service Management System",
        fullName: "Logistics Management System",
        description:
          "Enterprise-grade admin dashboard with real-time driver tracking and automated reporting.",
        tech: ["MongoDB", "Express", "React", "Node"],
        githubLink:
          "https://github.com/SulanaPeiris/polyTunnel_management_system",
        image:
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135528/oepm_f4ft2g.webp",
      },
      {
        id: 2,
        name: "Jclothing Ecommerce Platform",
        fullName: "Ecommerce Web Application Frontend",
        description:
          "User-friendly interface for browsing products, managing cart, and seamless checkout experience.",
        tech: ["React Js"],
        githubLink: "https://github.com/janithwijethunga/JClothing",
        image:
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135545/jclothing_iow31y.webp",
      },
      {
        id: 2,
        text1: "Final year Research project",
        name: "RFID-BASED IOT robot for cucumbrt plant identification and precision spraying.",
        fullName: "Ecommerce Web Application Frontend",
        description:
          "User-friendly interface for browsing products, managing cart, and seamless checkout experience.",
        tech: ["React Native", "Node Js", "YOLOv8", "Firebase", "ESP32"],
        githubLink: "https://github.com/janithwijethunga/JClothing",
        image:
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079050/2026_04_12_20_13_IMG_4726_wpdlhf.png",
        imageArray: [
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079050/2026_04_12_20_13_IMG_4726_wpdlhf.png",
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079048/2026_02_25_11_10_IMG_2649_ow2xsw.jpg",
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079036/2026_03_03_16_25_IMG_2910_ysboes.jpg",
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079035/2026_03_09_11_33_IMG_3124_iwgkkw.jpg",
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079035/2026_03_09_11_33_IMG_3129_xchscf.jpg",
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079035/2026_03_09_11_33_IMG_3122_xtvm4a.jpg",
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079031/2026_03_09_11_33_IMG_3119_duixlz.jpg",
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079030/2026_03_09_11_33_IMG_3109_xomh7d.jpg",
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795079030/2026_03_05_15_40_IMG_4725_punyp8.jpg",
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1795078165/2026_03_09_11_33_IMG_3124_ngnv8p.jpg",
        ],
        overview:
          "For my undergraduate research dissertation at SLIIT, I designed and developed an autonomous RFID-based IoT robot to automate disease monitoring and precision spraying in cucumber polytunnels. To overcome the limitations of manual inspection and wasteful blanket spraying on tall, vertically grown cucumber plants, I engineered a modular mobile platform powered by an ESP32 microcontroller. I integrated IR sensors for autonomous line-following navigation and an MFRC522 RFID reader to link each physical plant to an individual digital health record. To inspect leaves across varying canopy heights, I built a stepper-driven vertical gantry carrying a mobile camera controlled via a React Native app. I trained a custom YOLOv8 computer vision model to detect cucumber leaves in real time, used Firebase Firestore for cloud synchronization, scan logging, and fail-safe decision handshakes, and implemented a servo-controlled nozzle and pump system for targeted treatment.",
      },
    ],
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    fullName: "Mobile Application Development",
    description:
      "Immersive and high-performance native and cross-platform mobile applications.",
    image:
      "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135537/brick_scimaj.webp",
    color: "#00adb5",
    projects: [
      {
        id: 1,
        name: "BrickBlaster Mania",
        fullName: "Mobile Game Application",
        description:
          "Bounce the ball to break bricks, track score, manage 3 lives, and store high-scores in Kotlin/Android Studio.",
        tech: ["Kotlin", "Android Studio"],
        githubLink: "https://github.com/janithwijethunga/The-Brick-Blaster",
        image:
          "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135537/brick_scimaj.webp",
      },
    ],
  },
];
