
```markdown
# Portfolio — Janith Wijethunga

> A high-performance, immersive personal portfolio and software engineering showcase built for Full-Stack Developer and UI/UX Designer Janith Wijethunga. Designed as a modern Single Page Application (SPA), the project eliminates conventional static resumes by combining hardware-accelerated 3D scroll mechanics, fluid inertial physics, and responsive design systems. The frontend architecture is powered by React 19, Vite 7, Tailwind CSS, GSAP ScrollTrigger, Motion One, and Lenis smooth scrolling, decoupled from backend storage through Cloudinary CDN asset pipelines and deployed serverless via Google Firebase Hosting.

---

## ⚡ Tech Stack & Architecture

### Core Technologies & Libraries

- **Runtime & Build Engine**: [Node.js](https://nodejs.org/) (LTS), [Vite 7.0](https://vitejs.dev/) with [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) for HMR and ESM bundling.
- **Frontend Framework**: [React 19](https://react.dev/) (`react` 19.1.0, `react-dom` 19.1.0) utilizing concurrent mode rendering.
- **Client-Side Routing**: [React Router v7](https://reactrouter.com/) (`react-router-dom` 7.6.3) managing hash anchor routing and browser history.
- **Styling & Design System**: [Tailwind CSS 3.4](https://tailwindcss.com/) with PostCSS 8 and Autoprefixer 10, extended with custom dark color palettes, glow shadows, and responsive display typography (`Space Grotesk` for headers, `Manrope` for body).
- **Physics & Scroll Choreography**:
  - [Lenis Scroll](https://github.com/darkroomengineering/lenis) (`lenis` 1.3.17 & `lenis/react`) providing inertial momentum and lerp-based smooth scrolling.
  - [GSAP 3](https://greensock.com/gsap/) (`gsap` 3.14.2) and [@gsap/react](https://greensock.com/react/) (`@gsap/react` 2.1.2) driving pinned timelines, scroll triggers, match-media queries, and 3D transforms.
  - [Motion One](https://motion.dev/) (`motion` 12.34.0) and [Framer Motion](https://www.framer.com/motion/) (`framer-motion` 11.3.16) for scroll-linked CSS subgrid scaling, modal spring physics, and viewport entrance reveals.
  - Custom Catmull-Rom Spline Interpolation Engine (`src/utils/scrollPath.utils.js`) for arc-length parameterized SVG path tracing.
- **Iconography**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons` 5.5.0) incorporating Feather (`fi`) and Material Design (`md`) glyphs.
- **Code Quality**: [ESLint 9](https://eslint.org/) (`eslint` 9.29.0) with flat config (`eslint.config.js`), `@eslint/js`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.
- **Infrastructure & CDN**:
  - [Google Firebase Hosting](https://firebase.google.com/docs/hosting) with SPA rewrites to `/index.html` (Project: `janith-wijethunga`).
  - [Cloudinary](https://cloudinary.com/) cloud media CDN for high-fidelity WebP/PNG image delivery.

### Subsystem Communication & Data Flow

```text
+-----------------------------------------------------------------------------------+
|                                 CLIENT BROWSER                                    |
|                                                                                   |
|  +--------------------+        +---------------------+        +----------------+  |
|  | User Input Events  | -----> | Lenis Smooth Scroll | -----> | Global RAF     |  |
|  | (Wheel / Touch)    |        | (Lerp: 0.08)        |        | Dispatcher     |  |
|  +--------------------+        +---------------------+        +--------+-------+  |
|                                                                        |          |
|                                                                        v          |
|  +---------------------------------------------------------------------+-------+  |
|  |                         ANIMATION COORDINATOR                              |  |
|  |  +--------------------------+  +-------------------+  +------------------+  |  |
|  |  | GSAP ScrollTrigger       |  | Motion One Subgrid|  | Catmull-Rom      |  |  |
|  |  | - Hero Split Panning     |  | - Sticky 360vh    |  | Spline Tracer    |  |  |
|  |  | - 200-Particle Starfield |  |   Layer Scaling   |  | - Arc Length     |  |  |
|  |  | - 3D 180° Card Flip      |  +-------------------+  |   SVG Tracking   |  |  |
|  |  | - Horizontal Project Rail|                         +------------------+  |  |
|  |  +--------------------------+                                               |  |
|  +-----------------------------------------------------------------------------+  |
|                                        |                                          |
|                                        v                                          |
|  +-----------------------------------------------------------------------------+  |
|  |                           MODULAR REACT UI LAYER                            |  |
|  |  Navbar | Hero | Skills | Interests | Education | Projects | Contact | Footer   |  |
|  +-------------------------------------+---------------------------------------+  |
+----------------------------------------|------------------------------------------+
                                         |
                       Asset Requests    v    CDN Delivery
                        +---------------------------------+
                        |  Cloudinary Edge Media Network  |
                        |  (WebP Thumbnails, Logos, Hero) |
                        +---------------------------------+
```

1. **Inertial Wheel Capture**: Lenis captures scroll momentum, executing on an active `requestAnimationFrame` loop with a lerp value of `0.08` to enforce buttery transitions across browsers.
2. **Scroll Synchronization**: Scroll progress drives GSAP timelines using scrub triggers with pinning (`pin: true`), while Motion One calculates subgrid layer offsets (`0.2 end` to `0.8 end`) on sticky viewport coordinates.
3. **Decoupled Static Configuration**: Static datasets (`src/data/`) feed directly into functional components, insulating business logic from UI layouts.
4. **Edge CDN Delivery**: All heavyweight photography, school emblems, and project banners are loaded asynchronously from Cloudinary with low-overhead WebP encoding.

---

## 📂 Project Structure

```text
.
├── .firebase/                     # Firebase local cache configurations
├── .vscode/
│   └── extensions.json           # Recommended workspace editor extensions
├── build/                         # Legacy CRA production output (reference only)
├── dist/                          # Production distribution bundle generated by Vite
├── public/                        # Static unbundled public assets
│   ├── Resume.pdf                 # Curricular resume document download
│   └── vite.svg                   # Vite brand icon
├── src/
│   ├── Components/
│   │   ├── common/                # Global layout chrome components
│   │   │   ├── Footer.jsx         # Site footer with dynamic direct channels
│   │   │   ├── index.js           # Common component barrel export
│   │   │   ├── MobileMenu.jsx     # Framer Motion responsive mobile navigation drawer
│   │   │   ├── Navbar.jsx         # Sticky blurred navbar with smooth hash-scroll links
│   │   │   └── SocialLinks.jsx    # External profile outbound links
│   │   ├── ui/                    # Reusable atomic design primitives
│   │   │   ├── Badge.jsx          # Tag pill component
│   │   │   ├── Button.jsx         # Polymorphic button/anchor with variant styling
│   │   │   ├── Card.jsx           # Glassmorphism dark-theme panel card
│   │   │   ├── Container.jsx      # Max-width layout containment wrapper
│   │   │   ├── CoordOverlay.jsx   # Debug overlay displaying real-time mouse XY coordinates
│   │   │   ├── index.js           # UI barrel export
│   │   │   ├── Input.jsx          # Styled form input field
│   │   │   ├── ProjectModal.jsx   # Detailed project drill-down modal with scroll prevention
│   │   │   ├── ScrollProgressBar.jsx # SVG Catmull-Rom particle trail scroll indicator
│   │   │   ├── SectionHeader.jsx  # Standardized section title, eyebrow, and subtitle header
│   │   │   └── Textarea.jsx       # Multi-line form textarea component
│   │   ├── EducationModal.jsx     # Curriculum and extracurricular drilldown modal
│   │   └── ScrollGridGallery.jsx  # Multi-layer sticky CSS subgrid scroll-driven gallery
│   ├── data/                      # Structured content sources
│   │   ├── about.js               # Bio summary, headlines, and call-to-action data
│   │   ├── contact.js             # Direct communication channels (phone, email, social)
│   │   ├── education.js           # Academic timeline (SLIIT degree & PCC A/Levels)
│   │   ├── hero.js                # Hero title, greeting, and introduction text
│   │   ├── interests.js           # Specialization domains and icon configurations
│   │   ├── projects.js            # Categorized portfolio projects and metadata
│   │   ├── scrollPathPoints.js    # Spline point coordinates for custom scroll tracing
│   │   └── skills.js              # Technical stack icons and technology titles
│   ├── hooks/                     # Custom React hooks (reserved for state logic)
│   ├── layouts/
│   │   ├── index.js               # Layout barrel export
│   │   ├── MainLayout.jsx         # Global shell containing Navbar, main, and Footer
│   │   └── PageLayout.jsx         # Section container layout helper
│   ├── Pages/
│   │   └── Homepage.jsx           # Master route orchestration, Lenis init, and section tree
│   ├── sections/                  # Interactive viewport sections
│   │   ├── AboutSection.jsx       # Biography summary, key competencies, and CV download
│   │   ├── ContactSection.jsx     # Split-screen transmission form and contact cards
│   │   ├── EducationSection.jsx   # 3D GSAP 180° card-flip academic stage
│   │   ├── HeroSection.jsx        # Pinned split-layer GSAP hero-to-about scroll stage
│   │   ├── index.js               # Sections barrel export
│   │   ├── InterestsSection.jsx   # 3D starfield particle engine and convergence cards
│   │   ├── ProjectsSection.jsx    # Pinned horizontal slider with parallax typography
│   │   └── SkillsSection.jsx      # Skills wrapper mounting ScrollGridGallery
│   ├── styles/
│   │   └── globals.css            # Tailwind directives, CSS variables, and typography defaults
│   ├── utils/                     # Algorithmic helpers and utilities
│   │   ├── classNames.js          # Lightweight `cn` class merging utility
│   │   ├── motion.js              # Reusable Framer Motion animation variants
│   │   └── scrollPath.utils.js    # Catmull-Rom spline arc-length math and SVG path parser
│   ├── App.jsx                    # Root React router definition
│   └── main.jsx                   # React 19 StrictMode entry point mounted to DOM `#root`
├── .firebaserc                    # Firebase deployment target configuration
├── .gitignore                     # Git tracking exclusions
├── eslint.config.js               # ESLint flat configuration file
├── firebase.json                  # Firebase Hosting rewrite and caching rules
├── index.html                     # HTML5 shell, font preconnects, and meta tags
├── package.json                   # Dependency manifests, package metadata, and scripts
├── package-lock.json              # Deterministic dependency lockfile
├── postcss.config.js              # PostCSS plugin registration (Tailwind CSS, Autoprefixer)
├── tailwind.config.js             # Tailwind theme extensions, palettes, and typography
└── vite.config.js                 # Vite bundler configuration with React plugin
```

---

## ⚙️ Prerequisites & Environment Variables

### System Requirements

- **Node.js**: `v18.0.0` or higher (`v20.x` or `v22.x` LTS recommended for React 19).
- **Package Manager**: `npm` (`v9.x` or higher), `pnpm` (`v8.x`+), or `yarn` (`v1.22`+).
- **Firebase CLI** *(optional, for production deployment)*: `npm install -g firebase-tools` (`v13.x`+).

### Environment Variables

The application runs entirely on client-side static bundles and requires **no mandatory `.env` variables** for baseline local execution or production builds. If extending the project with third-party form delivery or analytics, use the standard Vite `VITE_` prefix:

| Variable | Description | Required | Example / Default |
| :--- | :--- | :--- | :--- |
| `VITE_FIREBASE_PROJECT_ID` | Custom Firebase Project ID if overriding default target | No | `janith-wijethunga` |
| `VITE_CONTACT_FORM_ENDPOINT` | Third-party endpoint for transmission form routing (e.g., Formspree/EmailJS) | No | `https://formspree.io/f/xyz...` |
| `VITE_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud account name if re-hosting media assets | No | `dksfpirc6` |

---

## 🚀 Getting Started & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/janithwijethunga/Portfolio.git
cd Portfolio
```

### 2. Install Project Dependencies
Install all required runtime and development dependencies specified in `package-lock.json`:
```bash
npm install
```

### 3. Verify Static Assets
Ensure `public/Resume.pdf` is present. Static images are fetched directly from Cloudinary over HTTPS; an active Internet connection is required during runtime.

### 4. Start the Local Development Server
Launch Vite's local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the terminal-assigned port).

To expose the development server to your local network (e.g., testing on mobile devices over Wi-Fi):
```bash
npm run host
```

### 5. Build for Production
To generate an optimized, minified production build:
```bash
npm run build
```
Compiled artifacts are output to the `dist/` directory.

### 6. Preview Production Build Locally
Verify the production bundle locally prior to deployment:
```bash
npm run preview
```

---

## 🛠️ Available Scripts & Usage

All scripts defined in `package.json`:

| Command | Script Invoked | Operational Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Starts the Vite development server with Hot Module Replacement (HMR) on `localhost:5173`. |
| `npm run build` | `vite build` | Compiles JavaScript/JSX via Rollup, executes CSS bundling via PostCSS, and outputs optimized static assets to `dist/`. |
| `npm run lint` | `eslint .` | Runs ESLint 9 across all project files to enforce React Hooks dependencies and React Refresh rules. |
| `npm run preview` | `vite preview` | Boots a local static HTTP server serving the production `dist/` directory to inspect builds before deploying. |
| `npm run host` | `vite --host` | Starts the Vite development server bound to `0.0.0.0`, allowing local network access via LAN IP address. |

---

## 🔑 Key Features & Implementation Details

### 1. Lenis Smooth Scrolling Engine
- **Implementation**: [`src/Pages/Homepage.jsx`](file:///src/Pages/Homepage.jsx)
- **Mechanics**: Implements an instance of `Lenis` configured with `smoothWheel: true`, `smoothTouch: false`, and an interpolation coefficient (`lerp: 0.08`). Hooked directly into the browser's `requestAnimationFrame` loop, dampening abrupt mousewheel increments to create smooth inertial scrolling.
- **Hash Navigation Sync**: Listens to React Router's `location.hash` changes and executes `scrollIntoView({ behavior: 'smooth' })` when selecting navigation targets from the navbar or mobile menu.

### 2. Dual-Layer Scroll-Pinned Hero & Bio Transition
- **Implementation**: [`src/sections/HeroSection.jsx`](file:///src/sections/HeroSection.jsx)
- **Mechanics**: Utilizes GSAP `ScrollTrigger` with `pin: true` and `scrub: true` spanning `+200%` viewport scroll.
- **Motion Logic**:
  - Hero introduction text shifts upwards (`y: -500px`) while the About biography layer scrolls into view simultaneously from below (`y: 500px` to `0`).
  - Hero profile portrait translates horizontally across the viewport (`x: computeRightCornerX()`) using dynamic bounding client rect calculations, finishing at 50% scroll distance.
  - Floating specialty badges (`UI/UX Designer`, `Web Developer`, `Frontend Developer`) accelerate upward (`y: -(window.innerHeight * 1.2)`), clearing the viewport with a `0.06s` stagger.
  - Responsive breakpoints via `gsap.matchMedia()` ensure clean vertical transitions on screen widths under 1024px.

### 3. Motion One Subgrid Skill Stack Gallery
- **Implementation**: [`src/Components/ScrollGridGallery.jsx`](file:///src/Components/ScrollGridGallery.jsx) & [`src/sections/SkillsSection.jsx`](file:///src/sections/SkillsSection.jsx)
- **Mechanics**: Built atop a 5-column, 3-row CSS subgrid spanning a sticky `min-h-[360vh]` track.
- **Motion Logic**: Uses Motion One's `scroll()` and `animate()` APIs to calculate layer opacities and scales across 3 staggered visual depth planes (`layer1`, `layer2`, `layer3`) with specialized cubic-bezier easing (`[0.42, 0, 0.58, 1]`, `[0.76, 0, 0.24, 1]`, `[0.87, 0, 0.13, 1]`), converging onto the central "My Stack" focal point.

### 4. 3D Rotating Starfield & Inbound Convergence Cards
- **Implementation**: [`src/sections/InterestsSection.jsx`](file:///src/sections/InterestsSection.jsx)
- **Mechanics**: Establishes a 3D perspective context (`perspective: 1500px`, `transformStyle: "preserve-3d"`).
- **High-Performance Starfield**: Instantiates 200 DOM star particles. Rather than triggering layout recalculations, it leverages `gsap.quickSetter` for GPU-accelerated coordinate updates (`x`, `y`, `z`) governed by radial trigonometric functions (`cos`/`sin`) tied to scroll progress.
- **Card Convergence**: Interest cards initialize with randomized 3D rotational offsets (`rotationX`, `rotationY`, `rotationZ` up to ±45°) and wide radial distances, smoothly animating into an aligned matrix (`power3.out`) as the user scrolls.

### 5. 3D 180° Flip-Card Academic Journey & Curriculum Modal
- **Implementation**: [`src/sections/EducationSection.jsx`](file:///src/sections/EducationSection.jsx) & [`src/Components/EducationModal.jsx`](file:///src/Components/EducationModal.jsx)
- **Mechanics**: Implements `@gsap/react` `useGSAP` scoping to rotate dual 3D cards 180 degrees (`rotateY: 180`) over a scrubbed, pinned timeline (`end: "+=1200"`).
- **Interaction**: Dynamically swaps CSS `pointer-events` halfway through the timeline so front faces are interactive during entrance and back faces become interactive post-flip.
- **Detailed Curriculum Inspection**: Clicking the back-face trigger opens `EducationModal.jsx`, presenting degree modules categorized across 4 academic years for SLIIT and A/L physical science curricula for Poramadulla Central College.

### 6. Pinned Horizontal Rail Project Showcase & Parallax Text
- **Implementation**: [`src/sections/ProjectsSection.jsx`](file:///src/sections/ProjectsSection.jsx) & [`src/Components/ui/ProjectModal.jsx`](file:///src/Components/ui/ProjectModal.jsx)
- **Mechanics**: Translates full-width panels along the X-axis (`xPercent: -100 * (totalPanels - 1)`) pinned against `window.innerWidth * totalPanels`.
- **Parallax Physics**: Secondary `ScrollTrigger` instances with `containerAnimation: pinTimeline` scrub backdrop typographic watermarks (`bg-parallax-text`) from `30%` to `-30%` and scale media preview layers from `1.2` to `1.0`.
- **Project Modal Inspection**: Selecting "View Projects" displays `ProjectModal.jsx` with Framer Motion spring popups, deep links to GitHub source repositories, and technology badges.

### 7. Catmull-Rom Spline Arc-Length Parameterization Engine
- **Implementation**: [`src/utils/scrollPath.utils.js`](file:///src/utils/scrollPath.utils.js) & [`src/Components/ui/ScrollProgressBar.jsx`](file:///src/Components/ui/ScrollProgressBar.jsx)
- **Mathematical Basis**: Accepts raw coordinate control points (`src/data/scrollPathPoints.js`) and calculates a smooth Catmull-Rom spline curve:
  $$P(t) = 0.5 \cdot \left( 2P_1 + (-P_0 + P_2)t + (2P_0 - 5P_1 + 4P_2 - P_3)t^2 + (-P_0 + 3P_1 - 3P_2 + P_3)t^3 \right)$$
- **Arc-Length Parameterization**: Subdivides segments into discrete samples (`buildArcTable`) to compute cumulative path lengths. Binary search lookups (`pointAtProgress`) map linear scroll progress $[0, 1]$ to constant-speed coordinate positions along the spline, generating dynamically trimmed SVG paths (`tailPathD`) with drop-shadow glows.

### 8. Cyberpunk Contact Transmission Center
- **Implementation**: [`src/sections/ContactSection.jsx`](file:///src/sections/ContactSection.jsx)
- **Mechanics**: Split-pane glassmorphism card with ambient glow blurs (`bg-indigo-500/10`, `bg-fuchsia-500/10`) and radial grid lines.
- **Channels & Inputs**: Connects direct touchpoints (Phone, Email, LinkedIn, GitHub, Facebook) alongside an interactive form equipped with custom animated bottom-border focus indicators (`scale-x-0` to `scale-x-100`).

---

## 🌐 Deployment

The repository is configured for automated deployment to **Firebase Hosting**:

```bash
# 1. Authenticate with Google Firebase
firebase login

# 2. Build production assets
npm run build

# 3. Deploy build output (dist/) to production
firebase deploy --only hosting
```

The configuration is codified in `firebase.json`:
- **Public Directory**: `dist`
- **SPA Rewrites**: All routes `**` rewrite to `/index.html`
- **Cache Targets**: Defined in `.firebaserc` pointing to project `janith-wijethunga`
```