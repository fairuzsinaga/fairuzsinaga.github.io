const fs = require("fs");

const newHtml = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fairuz Irgawan Sinaga - Developer Portfolio</title>
  <link href="dist/output.css" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
</head>
<body class="antialiased overflow-x-hidden relative">

  <div class="custom-cursor hidden md:block"></div>
  <div class="scroll-progress" id="progress-bar"></div>

  <!-- Navbar -->
  <nav class="fixed w-full top-0 z-50 glassmorphism shadow-sm transition-all duration-300" id="navbar">
    <div class="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
      <div class="font-mono font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-brandPurple to-brandCyan">
        &lt;Fairuz /&gt;<span class="animate-blink text-brandPurple">_</span>
      </div>
      
      <div class="hidden md:flex gap-8 items-center font-medium">
        <a href="#home" class="hover:text-brandPurple transition text-sm">Home</a>
        <a href="#about" class="hover:text-brandPurple transition text-sm">About</a>
        <a href="#experience" class="hover:text-brandPurple transition text-sm">Experience</a>
        <a href="#portfolio" class="hover:text-brandPurple transition text-sm">Portfolio</a>
        <a href="#contact" class="hover:text-brandPurple transition text-sm">Contact</a>
        <button id="theme-toggle" class="p-2 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center glow-hover transition">
          <ion-icon name="moon" class="dark:hidden"></ion-icon>
          <ion-icon name="sunny" class="hidden dark:block text-yellow-400"></ion-icon>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="min-h-screen flex items-center pt-24 px-6 relative reveal">
    <div class="absolute top-20 left-10 w-72 h-72 bg-brandPurple rounded-full opacity-20 blur-3xl animate-blob"></div>
    <div class="absolute top-40 right-10 w-72 h-72 bg-brandCyan rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
    
    <div class="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
      <div>
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism text-sm font-semibold mb-6">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Available for Work
        </div>
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Hello, I'm <br />
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-brandPurple to-brandCyan">Fairuz Irgawan Sinaga</span>
        </h1>
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 h-10 text-brandCyan" id="typing-text"></h2>
        <p class="text-lg opacity-80 mb-8 max-w-lg leading-relaxed">
          A Web Developer building modern, clean, and high-performance web applications with <b>Laravel, Vue.js, React & Tailwind CSS</b>. I transform ideas into elegant digital experiences.
        </p>
        
        <div class="flex flex-wrap gap-4 mb-8">
          <a href="#portfolio" class="px-7 py-3 rounded-full bg-gradient-to-r from-brandPurple to-brandCyan text-white font-semibold glow-hover text-sm">View My Work</a>
          <a href="./src/download/CV FAIRUZ IRGAWAN SINAGA.pdf" download class="px-7 py-3 rounded-full border-2 border-brandPurple text-brandPurple dark:text-white font-semibold glow-hover glassmorphism text-sm flex items-center gap-2"><ion-icon name="download-outline"></ion-icon> Download CV</a>
        </div>
        
        <div class="flex gap-4">
          <a href="https://github.com/fairuzsinaga" target="_blank" class="p-3 rounded-full glassmorphism hover:text-brandPurple glow-hover transition"><ion-icon name="logo-github" class="text-xl"></ion-icon></a>
          <a href="#" target="_blank" class="p-3 rounded-full glassmorphism hover:text-brandCyan glow-hover transition"><ion-icon name="logo-linkedin" class="text-xl"></ion-icon></a>
          <a href="https://www.instagram.com/fairuzisng/" target="_blank" class="p-3 rounded-full glassmorphism hover:text-pink-500 glow-hover transition"><ion-icon name="logo-instagram" class="text-xl"></ion-icon></a>
          <a href="https://web.facebook.com/irgha.bonex/" target="_blank" class="p-3 rounded-full glassmorphism hover:text-blue-500 glow-hover transition"><ion-icon name="logo-facebook" class="text-xl"></ion-icon></a>
        </div>
      </div>
      
      <div class="hidden md:flex justify-center relative">
        <div class="w-72 h-72 rounded-full border-[3px] border-dashed border-brandPurple animate-spin-slow absolute"></div>
        <div class="w-80 h-80 rounded-full border-[3px] border-dashed border-brandCyan animate-[spin_12s_linear_infinite_reverse] absolute opacity-50"></div>
        <img src="./src/img/profil.jpeg" alt="Fairuz Irgawan Sinaga" class="rounded-full w-64 h-64 object-cover z-10 shadow-[0_0_40px_rgba(108,99,255,0.3)] glow-hover border-4 border-brandPurple/20">
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-24 px-6 reveal">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-sm font-bold tracking-widest text-brandPurple mb-2 uppercase">About Me</h2>
        <h3 class="text-3xl md:text-4xl font-bold">Crafting Digital Experiences <br/>with Passion & Precision</h3>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Bio -->
        <div class="glassmorphism p-8 rounded-2xl hover:border-brandPurple/30 transition-colors">
          <p class="text-lg opacity-80 leading-relaxed mb-6">
            I am a Web Developer based in Pekanbaru, Riau. I graduated with a Bachelor's degree (S1) in Informatics Engineering from <b>UIN Suska Riau</b> in 2023, and I have been deeply focused on programming and the IT world ever since.
          </p>
          <p class="text-lg opacity-80 leading-relaxed">
            I love building seamless web applications utilizing modern frameworks and clean code principles. My goal is to always create scalable solutions that provide exceptional user experiences.
          </p>
        </div>
        
        <!-- Stats Grid -->
        <div class="grid grid-cols-2 gap-4">
          <div class="glassmorphism p-6 rounded-2xl text-center glow-hover">
            <h4 class="text-4xl font-bold text-brandPurple mb-2">3+</h4>
            <p class="text-sm uppercase tracking-widest opacity-60 font-semibold">Years Experience</p>
          </div>
          <div class="glassmorphism p-6 rounded-2xl text-center glow-hover">
            <h4 class="text-4xl font-bold text-brandCyan mb-2">20+</h4>
            <p class="text-sm uppercase tracking-widest opacity-60 font-semibold">Projects</p>
          </div>
          <div class="glassmorphism p-6 rounded-2xl text-center glow-hover">
            <h4 class="text-4xl font-bold text-emerald-500 mb-2">S1</h4>
            <p class="text-sm uppercase tracking-widest opacity-60 font-semibold">Degree (UIN Suska)</p>
          </div>
          <div class="glassmorphism p-6 rounded-2xl text-center glow-hover">
            <h4 class="text-4xl font-bold text-amber-500 mb-2">5+</h4>
            <p class="text-sm uppercase tracking-widest opacity-60 font-semibold">Tech Mastered</p>
          </div>
        </div>
      </div>
      
      <!-- Skills -->
      <div class="mt-20">
        <h4 class="text-xl font-bold mb-8 text-center">My Tech Stack</h4>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="px-5 py-2 glassmorphism rounded-full font-medium flex items-center gap-2 hover:text-red-500 transition-colors border-red-500/20"><ion-icon name="logo-laravel" class="text-lg"></ion-icon> Laravel</span>
          <span class="px-5 py-2 glassmorphism rounded-full font-medium flex items-center gap-2 hover:text-emerald-500 transition-colors border-emerald-500/20"><ion-icon name="logo-vue" class="text-lg"></ion-icon> Vue.js</span>
          <span class="px-5 py-2 glassmorphism rounded-full font-medium flex items-center gap-2 hover:text-sky-500 transition-colors border-sky-500/20"><ion-icon name="logo-react" class="text-lg"></ion-icon> React</span>
          <span class="px-5 py-2 glassmorphism rounded-full font-medium flex items-center gap-2 hover:text-cyan-500 transition-colors border-cyan-500/20"><ion-icon name="color-palette" class="text-lg"></ion-icon> Tailwind CSS</span>
          <span class="px-5 py-2 glassmorphism rounded-full font-medium flex items-center gap-2 hover:text-violet-500 transition-colors border-violet-500/20"><ion-icon name="logo-css3" class="text-lg"></ion-icon> Bootstrap</span>
          <span class="px-5 py-2 glassmorphism rounded-full font-medium flex items-center gap-2 hover:text-brandPurple transition-colors border-brandPurple/20"><ion-icon name="server" class="text-lg"></ion-icon> MySQL / REST APIs</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section id="portfolio" class="py-24 px-6 reveal bg-gradient-to-b from-transparent to-brandPurple/5 dark:to-[#12121A]">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-sm font-bold tracking-widest text-brandPurple mb-2 uppercase">Portfolio</h2>
        <h3 class="text-3xl md:text-4xl font-bold">Featured Projects</h3>
        <p class="mt-4 opacity-70">A selection of recent web applications I've built.</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Project 1 -->
        <article class="glassmorphism rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div class="h-64 overflow-hidden relative">
            <div class="absolute inset-0 bg-brandPurple/20 group-hover:opacity-0 transition-opacity z-10"></div>
            <img src="./src/img/projects/hana login.png" alt="HANA Project" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-8 relative">
            <span class="absolute top-0 right-8 -translate-y-1/2 bg-sky-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">WORK</span>
            <h4 class="text-2xl font-bold mb-3">HANA - HR System</h4>
            <p class="opacity-80 text-sm mb-6 leading-relaxed">
              Human Resource Management System for PT. Perkebunan Nusantara V, containing several HR operational modules designed for scalable enterprise use.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">Laravel</span>
              <span class="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">Vue.js</span>
              <span class="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">MySQL</span>
            </div>
          </div>
        </article>
        
        <!-- Project 2 -->
        <article class="glassmorphism rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div class="h-64 overflow-hidden relative">
            <div class="absolute inset-0 bg-brandCyan/20 group-hover:opacity-0 transition-opacity z-10"></div>
            <img src="./src/img/projects/sistem pakar diagnosa.jpg" alt="Sistem Pakar" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-8 relative">
            <span class="absolute top-0 right-8 -translate-y-1/2 bg-violet-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">ACADEMIC</span>
            <h4 class="text-2xl font-bold mb-3">Mental Health Expert System</h4>
            <p class="opacity-80 text-sm mb-6 leading-relaxed">
              An expert system designated for mental health screening. It employs the certainty factor method to analyze patient responses and diagnose probable conditions.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">Laravel</span>
              <span class="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">Bootstrap</span>
              <span class="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">Certainty Factor</span>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-12 text-center">
         <a href="./src/download/PORTFOLIO FAIRUZ IRGAWAN SINAGA.pdf" download class="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-brandCyan text-brandCyan hover:bg-brandCyan hover:text-white transition-colors font-semibold text-sm">
           <ion-icon name="document-text-outline" class="text-lg"></ion-icon> View Full Portfolio PDF
         </a>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-24 px-6 reveal">
    <div class="max-w-[800px] mx-auto text-center">
      <h2 class="text-sm font-bold tracking-widest text-brandPurple mb-2 uppercase">Contact</h2>
      <h3 class="text-3xl md:text-5xl font-bold mb-8">Let's Work Together</h3>
      <p class="text-lg opacity-80 mb-12 max-w-2xl mx-auto">
        I am currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open!
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href="mailto:fairuzirgawan77@gmail.com" class="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brandPurple to-brandCyan text-white font-bold text-lg glow-hover flex items-center justify-center gap-3">
          <ion-icon name="mail"></ion-icon> Say Hello
        </a>
        <a href="https://github.com/fairuzsinaga" target="_blank" class="w-full sm:w-auto px-8 py-4 rounded-full glassmorphism font-bold text-lg glow-hover flex items-center justify-center gap-3">
          <ion-icon name="logo-github"></ion-icon> Github
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-8 border-t border-gray-200 dark:border-gray-800/50 mt-12 relative z-10 w-full glassmorphism border-x-0 border-b-0 rounded-none">
    <div class="max-w-[1200px] mx-auto px-6 text-center">
      <div class="font-mono font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-brandPurple to-brandCyan mb-4 inline-block">
        &lt;Fairuz.dev /&gt;
      </div>
      <p class="text-sm opacity-60">
        &copy; 2026 Fairuz Irgawan Sinaga. Crafted with passion + code.
      </p>
    </div>
  </footer>

  <!-- JS Interactions -->
  <script>
    // Theme Toggle
    const toggleBtn = document.getElementById("theme-toggle");
    const htmlEl = document.documentElement;

    // Load or set dark mode
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }

    toggleBtn.addEventListener("click", () => {
      htmlEl.classList.toggle("dark");
      localStorage.theme = htmlEl.classList.contains("dark") ? "dark" : "light";
    });

    // Custom Cursor tracking
    const cursor = document.querySelector(".custom-cursor");
    if(cursor) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.transform = \`translate(\${e.clientX - 10}px, \${e.clientY - 10}px)\`;
      });
    }

    // Scroll Progress bar
    const progressBar = document.getElementById("progress-bar");
    window.addEventListener("scroll", () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (progressBar) progressBar.style.width = scrolled + "%";
    });

    // Dynamic Typing Effect
    const texts = ["Frontend Developer", "Backend Developer", "React Enthusiast", "Laravel Specialist"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    
    function type() {
      if (count === texts.length) count = 0;
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      
      const typingText = document.getElementById("typing-text");
      if (typingText) typingText.textContent = letter + "|";
      
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
      } else {
        setTimeout(type, 100);
      }
    }
    type();

    // Intersection Observer Reveal animations
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });
    
    reveals.forEach(reveal => revealObserver.observe(reveal));
  </script>
</body>
</html>`;

fs.writeFileSync("index.html", newHtml, "utf8");
