export const defaultLang = "en";

export const languages = {
  en: { label: "English", dir: "ltr" },
  fa: { label: "فارسی", dir: "rtl" },
  es: { label: "Español", dir: "ltr" },
  zh: { label: "中文", dir: "ltr" },
  de: { label: "Deutsch", dir: "ltr" },
} as const;

export type Lang = keyof typeof languages;

export const rtlLangs: Lang[] = ["fa"];

// Every string the site renders, keyed by locale. `en` is the source of truth;
// keep the other locales in sync with it.
export const ui = {
  en: {
    "meta.title": "Glyph — A modern markdown viewer & editor",
    "meta.description":
      "Glyph is a fast, cross-platform markdown viewer and editor with platform-native styling. GitHub-flavored rendering, a live editor, canvas boards, math, diagrams, and PDF export.",
    "nav.features": "Features",
    "nav.download": "Download",
    "nav.github": "GitHub",
    "nav.skip": "Skip to content",
    "hero.badge": "Free & open source",
    "hero.title": "Markdown that feels native.",
    "hero.subtitle":
      "A fast, cross-platform markdown viewer and editor with platform-native styling. Render GitHub-flavored markdown, edit live, draw on infinite canvas boards, and export to PDF — all offline, all yours.",
    "hero.cta.download": "Download Glyph",
    "hero.cta.github": "Star on GitHub",
    "hero.note": "Free, open source, and offline-first. macOS, Windows & Linux.",
    "features.heading": "Everything a markdown app should be",
    "features.subheading":
      "Built with Tauri and React for a tiny footprint and a native feel on every platform.",
    "features.render.title": "Faithful rendering",
    "features.render.desc":
      "GitHub-flavored markdown — tables, task lists, footnotes, alerts, and heading anchors. Math via KaTeX, Mermaid diagrams, and syntax highlighting in six themes.",
    "features.editor.title": "Live editor",
    "features.editor.desc":
      "A split-view editor with live preview, styled markdown tokens, find-in-document, and undo/redo for in-app edits like task toggles.",
    "features.canvas.title": "Infinite canvas",
    "features.canvas.desc":
      "Open JSON Canvas (.canvas) files as a pan-and-zoom board. Cards render markdown, images, and links, connected by labelled arrows — round-trips with Obsidian.",
    "features.workspace.title": "Workspace & wikilinks",
    "features.workspace.desc":
      "Open a folder as a workspace with a file tree, [[wikilinks]], a backlinks panel, and a command palette to jump anywhere with Cmd/Ctrl+K.",
    "features.graph.title": "Graph view",
    "features.graph.desc":
      "See your whole workspace as a force-directed graph — notes are nodes, wikilinks are edges. Hover to highlight neighbours, click to open, and watch it update live as you write.",
    "features.export.title": "Export anywhere",
    "features.export.desc":
      "Print or export to PDF, HTML, DOCX, and EPUB — including vector math and diagrams. Your documents leave Glyph looking exactly as they should.",
    "features.themes.title": "Native theming",
    "features.themes.desc":
      "Platform-adaptive styling that respects light and dark mode, with six code themes and typography that feels at home on macOS, Windows, and Linux.",
    "features.notebooks.title": "More than markdown",
    "features.notebooks.desc":
      "Open Jupyter notebooks with rendered cells and outputs, view image and SVG files in a built-in viewer, and read CSV and TSV blocks as clean, scrollable tables.",
    "features.privacy.title": "Local-first & private",
    "features.privacy.desc":
      "Everything runs offline on your machine, and your notes never leave it unless you turn on Cloud Sync to a Git remote you control. Crash reporting is strictly opt-in.",
    "download.heading": "Install Glyph",
    "download.subheading":
      "Pick your platform. Every build is signed and published through the release pipeline.",
    "download.copy": "Copy",
    "download.copied": "Copied!",
    "download.manual": "Or grab a binary from the",
    "download.releases": "Releases page",
    "footer.tagline": "Markdown that feels native.",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.docs": "Documentation",
    "footer.pluginDocs": "Plugin docs",
    "footer.issues": "Report an issue",
    "footer.license": "MIT Licensed",
    "footer.built": "Built with Tauri, React & Astro.",
  },

  fa: {
    "meta.title": "گلیف — نمایشگر و ویرایشگر مدرن مارک‌داون",
    "meta.description":
      "گلیف، نمایشگر و ویرایشگر سریع و چندسکویی مارک‌داون با ظاهری بومی روی هر سیستم‌عامل. رندر سازگار با گیت‌هاب، ویرایش زنده، بوم بی‌نهایت، ریاضی، نمودار و خروجی PDF.",
    "nav.features": "ویژگی‌ها",
    "nav.download": "دانلود",
    "nav.github": "گیت‌هاب",
    "nav.skip": "پرش به محتوا",
    "hero.badge": "رایگان و متن‌باز",
    "hero.title": "مارک‌داون، بومیِ دسکتاپ تو.",
    "hero.subtitle":
      "نمایشگر و ویرایشگر سریع و چندسکویی مارک‌داون، با ظاهری بومی روی هر سیستم‌عامل. مارک‌داون سازگار با گیت‌هاب را بی‌کم‌وکاست رندر کنید، زنده ویرایش کنید، روی بوم بی‌نهایت بکشید و به PDF خروجی بگیرید — همه آفلاین، همه از آنِ شما.",
    "hero.cta.download": "دانلود گلیف",
    "hero.cta.github": "ستاره در گیت‌هاب",
    "hero.note": "رایگان، متن‌باز و آفلاین‌محور. برای مک، ویندوز و لینوکس.",
    "features.heading": "هرآنچه یک برنامهٔ مارک‌داون باید باشد",
    "features.subheading":
      "ساخته‌شده با Tauri و React؛ کم‌حجم، سریع و بومی روی هر سیستم‌عامل.",
    "features.render.title": "رندر بی‌نقص",
    "features.render.desc":
      "مارک‌داون سازگار با گیت‌هاب: جدول، فهرست کار، پانویس، هشدار و لنگر سرفصل. ریاضی با KaTeX، نمودار Mermaid و برجسته‌سازی کد در شش پوسته.",
    "features.editor.title": "ویرایشگر زنده",
    "features.editor.desc":
      "ویرایشگر دوپنجره‌ای با پیش‌نمایش زنده، نشانه‌گذاری سبک‌دار مارک‌داون، جست‌وجو در سند و واگرد/ازنو برای ویرایش‌های درون‌برنامه‌ای مثل تیک‌زدن کارها.",
    "features.canvas.title": "بوم بی‌نهایت",
    "features.canvas.desc":
      "پرونده‌های JSON Canvas (.canvas) را روی بومی باز کنید که آزادانه جابه‌جا و بزرگ‌نمایی می‌شود. کارت‌ها مارک‌داون، تصویر و پیوند را نشان می‌دهند و با فلش‌های برچسب‌دار به هم می‌رسند — سازگار با اوبسیدین، بی‌هیچ تغییری.",
    "features.workspace.title": "فضای کاری و ویکی‌لینک",
    "features.workspace.desc":
      "یک پوشه را به‌عنوان فضای کاری با درخت پرونده، [[ویکی‌لینک]]، پنل بک‌لینک و پالت فرمان باز کنید و با Cmd/Ctrl+K به هرجا بپرید.",
    "features.graph.title": "نمای گراف",
    "features.graph.desc":
      "کل فضای کاری‌تان را به‌شکل یک گراف ببینید: یادداشت‌ها گره‌اند و ویکی‌لینک‌ها یال. روی هر گره بروید تا همسایه‌هایش پررنگ شوند، کلیک کنید تا باز شود، و ببینید که همگام با نوشتن‌تان زنده به‌روز می‌شود.",
    "features.export.title": "خروجی به هر قالب",
    "features.export.desc":
      "چاپ کنید یا به PDF، HTML، DOCX و EPUB خروجی بگیرید — همراه با ریاضی و نمودارهای برداری. سندهای شما دقیقاً همان‌طور که باید، از گلیف بیرون می‌آیند.",
    "features.themes.title": "ظاهر بومی",
    "features.themes.desc":
      "ظاهری که خود را با سیستم‌عامل وفق می‌دهد و حالت روشن و تاریک را دنبال می‌کند؛ با شش پوستهٔ کد و تایپوگرافی‌ای که روی مک، ویندوز و لینوکس انگار جزئی از خودِ سیستم است.",
    "features.notebooks.title": "فراتر از مارک‌داون",
    "features.notebooks.desc":
      "دفترچه‌های Jupyter را با سلول‌ها و خروجی‌های رندرشده باز کنید، پرونده‌های تصویر و SVG را در نمایشگر داخلی ببینید، و بلوک‌های CSV و TSV را به‌شکل جدول‌های تمیز و قابل‌پیمایش بخوانید.",
    "features.privacy.title": "محلی‌محور و خصوصی",
    "features.privacy.desc":
      "همه‌چیز آفلاین روی دستگاه شما اجرا می‌شود و یادداشت‌هایتان جایی نمی‌روند، مگر اینکه همگام‌سازی ابری را به یک مخزن Git که خودتان کنترل می‌کنید روشن کنید. گزارش خرابی کاملاً اختیاری است.",
    "download.heading": "نصب گلیف",
    "download.subheading":
      "سیستم‌عامل خود را انتخاب کنید. هر نسخه امضای دیجیتال دارد و از مسیر رسمی انتشار منتشر می‌شود.",
    "download.copy": "کپی",
    "download.copied": "کپی شد!",
    "download.manual": "یا یک باینری از",
    "download.releases": "صفحهٔ انتشارها",
    "footer.tagline": "مارک‌داون، بومیِ دسکتاپ تو.",
    "footer.product": "محصول",
    "footer.resources": "منابع",
    "footer.docs": "مستندات",
    "footer.pluginDocs": "مستندات افزونه‌ها",
    "footer.issues": "گزارش مشکل",
    "footer.license": "تحت مجوز MIT",
    "footer.built": "ساخته‌شده با Tauri، React و Astro.",
  },

  es: {
    "meta.title": "Glyph — Un visor y editor de markdown moderno",
    "meta.description":
      "Glyph es un visor y editor de markdown rápido y multiplataforma con estilo nativo. Renderizado tipo GitHub, editor en vivo, lienzos infinitos, matemáticas, diagramas y exportación a PDF.",
    "nav.features": "Funciones",
    "nav.download": "Descargar",
    "nav.github": "GitHub",
    "nav.skip": "Saltar al contenido",
    "hero.badge": "Gratis y de código abierto",
    "hero.title": "Markdown que se siente nativo.",
    "hero.subtitle":
      "Un visor y editor de markdown rápido y multiplataforma con estilo nativo. Renderiza markdown estilo GitHub, edita en vivo, dibuja en lienzos infinitos y exporta a PDF — todo sin conexión, todo tuyo.",
    "hero.cta.download": "Descargar Glyph",
    "hero.cta.github": "Estrella en GitHub",
    "hero.note": "Gratis, de código abierto y sin conexión. macOS, Windows y Linux.",
    "features.heading": "Todo lo que una app de markdown debería ser",
    "features.subheading":
      "Creado con Tauri y React para una huella mínima y una sensación nativa en cada plataforma.",
    "features.render.title": "Renderizado fiel",
    "features.render.desc":
      "Markdown estilo GitHub — tablas, listas de tareas, notas al pie, alertas y anclas de encabezado. Matemáticas con KaTeX, diagramas Mermaid y resaltado de sintaxis en seis temas.",
    "features.editor.title": "Editor en vivo",
    "features.editor.desc":
      "Un editor en vista dividida con previsualización en vivo, tokens de markdown con estilo, búsqueda en el documento y deshacer/rehacer para ediciones dentro de la app.",
    "features.canvas.title": "Lienzo infinito",
    "features.canvas.desc":
      "Abre archivos JSON Canvas (.canvas) como un tablero con paneo y zoom. Las tarjetas renderizan markdown, imágenes y enlaces, conectadas por flechas etiquetadas — compatible con Obsidian.",
    "features.workspace.title": "Espacio de trabajo y wikilinks",
    "features.workspace.desc":
      "Abre una carpeta como espacio de trabajo con árbol de archivos, [[wikilinks]], panel de retroenlaces y una paleta de comandos para saltar a cualquier sitio con Cmd/Ctrl+K.",
    "features.graph.title": "Vista de grafo",
    "features.graph.desc":
      "Visualiza todo tu espacio de trabajo como un grafo dirigido por fuerzas: las notas son nodos y los wikilinks, aristas. Pasa el cursor para resaltar vecinos, haz clic para abrir y míralo actualizarse en vivo mientras escribes.",
    "features.export.title": "Exporta a donde sea",
    "features.export.desc":
      "Imprime o exporta a PDF, HTML, DOCX y EPUB — incluyendo matemáticas y diagramas vectoriales. Tus documentos salen de Glyph tal como deben verse.",
    "features.themes.title": "Temas nativos",
    "features.themes.desc":
      "Estilo adaptable a la plataforma que respeta el modo claro y oscuro, con seis temas de código y tipografía que se siente en casa en macOS, Windows y Linux.",
    "features.notebooks.title": "Más que markdown",
    "features.notebooks.desc":
      "Abre cuadernos de Jupyter con celdas y salidas renderizadas, visualiza archivos de imagen y SVG en un visor integrado, y lee bloques CSV y TSV como tablas limpias y desplazables.",
    "features.privacy.title": "Local y privado",
    "features.privacy.desc":
      "Todo funciona sin conexión en tu equipo: tus notas nunca salen de él a menos que actives Cloud Sync hacia un remoto Git que tú controlas. El informe de errores es estrictamente opcional.",
    "download.heading": "Instala Glyph",
    "download.subheading":
      "Elige tu plataforma. Cada compilación está firmada y publicada por el flujo de lanzamiento.",
    "download.copy": "Copiar",
    "download.copied": "¡Copiado!",
    "download.manual": "O descarga un binario desde la",
    "download.releases": "página de Releases",
    "footer.tagline": "Markdown que se siente nativo.",
    "footer.product": "Producto",
    "footer.resources": "Recursos",
    "footer.docs": "Documentación",
    "footer.pluginDocs": "Documentación de complementos",
    "footer.issues": "Reportar un problema",
    "footer.license": "Licencia MIT",
    "footer.built": "Creado con Tauri, React y Astro.",
  },

  zh: {
    "meta.title": "Glyph — 现代 Markdown 阅读器与编辑器",
    "meta.description":
      "Glyph 是一款快速、跨平台的 Markdown 阅读器和编辑器，拥有平台原生外观。支持 GitHub 风格渲染、实时编辑、无限画布、数学公式、图表和 PDF 导出。",
    "nav.features": "功能",
    "nav.download": "下载",
    "nav.github": "GitHub",
    "nav.skip": "跳到内容",
    "hero.badge": "免费且开源",
    "hero.title": "如原生般的 Markdown。",
    "hero.subtitle":
      "一款快速、跨平台的 Markdown 阅读器和编辑器，拥有平台原生外观。渲染 GitHub 风格的 Markdown、实时编辑、在无限画布上作图，并导出为 PDF——全部离线，完全属于你。",
    "hero.cta.download": "下载 Glyph",
    "hero.cta.github": "在 GitHub 加星",
    "hero.note": "免费、开源、离线优先。支持 macOS、Windows 和 Linux。",
    "features.heading": "Markdown 应用应有的一切",
    "features.subheading":
      "基于 Tauri 和 React 构建，体积小巧，在每个平台上都有原生般的体验。",
    "features.render.title": "忠实渲染",
    "features.render.desc":
      "GitHub 风格的 Markdown——表格、任务列表、脚注、提示框和标题锚点。通过 KaTeX 渲染数学公式、Mermaid 图表，以及六种主题的语法高亮。",
    "features.editor.title": "实时编辑器",
    "features.editor.desc":
      "分屏编辑器，带实时预览、带样式的 Markdown 标记、文档内查找，以及任务勾选等应用内编辑的撤销/重做。",
    "features.canvas.title": "无限画布",
    "features.canvas.desc":
      "将 JSON Canvas (.canvas) 文件作为可平移缩放的画板打开。卡片渲染 Markdown、图像和链接，由带标签的箭头连接——可与 Obsidian 互通。",
    "features.workspace.title": "工作区与 Wiki 链接",
    "features.workspace.desc":
      "将文件夹作为工作区打开，带文件树、[[wiki 链接]]、反向链接面板，以及用 Cmd/Ctrl+K 跳转到任意位置的命令面板。",
    "features.graph.title": "关系图视图",
    "features.graph.desc":
      "将整个工作区呈现为力导向关系图：笔记是节点，wiki 链接是连线。悬停高亮相邻节点，点击即可打开，并随你的编辑实时更新。",
    "features.export.title": "随处导出",
    "features.export.desc":
      "打印或导出为 PDF、HTML、DOCX 和 EPUB——包括矢量数学公式和图表。你的文档离开 Glyph 时，外观与应有的样子完全一致。",
    "features.themes.title": "原生主题",
    "features.themes.desc":
      "适配平台的样式，尊重浅色和深色模式，配有六种代码主题，以及在 macOS、Windows 和 Linux 上都自然贴合的排版。",
    "features.notebooks.title": "不止于 Markdown",
    "features.notebooks.desc":
      "打开 Jupyter 笔记本并渲染单元格与输出，在内置查看器中查看图像和 SVG 文件，并将 CSV 和 TSV 块显示为整洁、可滚动的表格。",
    "features.privacy.title": "本地优先且私密",
    "features.privacy.desc":
      "一切都在你的设备上离线运行；除非你开启同步到自己掌控的 Git 远端的云同步，否则你的笔记绝不外传。崩溃报告严格按需选择开启。",
    "download.heading": "安装 Glyph",
    "download.subheading": "选择你的平台。每个版本都经过签名，并通过发布流水线发布。",
    "download.copy": "复制",
    "download.copied": "已复制！",
    "download.manual": "或从以下位置获取二进制文件：",
    "download.releases": "发布页面",
    "footer.tagline": "如原生般的 Markdown。",
    "footer.product": "产品",
    "footer.resources": "资源",
    "footer.docs": "文档",
    "footer.pluginDocs": "插件文档",
    "footer.issues": "报告问题",
    "footer.license": "MIT 许可",
    "footer.built": "基于 Tauri、React 和 Astro 构建。",
  },

  de: {
    "meta.title": "Glyph — Ein moderner Markdown-Viewer & -Editor",
    "meta.description":
      "Glyph ist ein schneller, plattformübergreifender Markdown-Viewer und -Editor mit nativem Look. GitHub-Rendering, Live-Editor, unendliche Canvas-Boards, Mathe, Diagramme und PDF-Export.",
    "nav.features": "Funktionen",
    "nav.download": "Download",
    "nav.github": "GitHub",
    "nav.skip": "Zum Inhalt springen",
    "hero.badge": "Kostenlos & quelloffen",
    "hero.title": "Markdown, das sich nativ anfühlt.",
    "hero.subtitle":
      "Ein schneller, plattformübergreifender Markdown-Viewer und -Editor mit nativem Look. Rendere GitHub-Markdown, bearbeite live, zeichne auf unendlichen Canvas-Boards und exportiere als PDF — alles offline, alles deins.",
    "hero.cta.download": "Glyph herunterladen",
    "hero.cta.github": "Auf GitHub favorisieren",
    "hero.note": "Kostenlos, quelloffen und offline-first. macOS, Windows & Linux.",
    "features.heading": "Alles, was eine Markdown-App sein sollte",
    "features.subheading":
      "Gebaut mit Tauri und React für einen winzigen Footprint und ein natives Gefühl auf jeder Plattform.",
    "features.render.title": "Originalgetreues Rendering",
    "features.render.desc":
      "GitHub-Markdown — Tabellen, Aufgabenlisten, Fußnoten, Hinweise und Überschriften-Anker. Mathe via KaTeX, Mermaid-Diagramme und Syntaxhervorhebung in sechs Themes.",
    "features.editor.title": "Live-Editor",
    "features.editor.desc":
      "Ein geteilter Editor mit Live-Vorschau, gestylten Markdown-Tokens, Suche im Dokument und Rückgängig/Wiederholen für In-App-Bearbeitungen.",
    "features.canvas.title": "Unendliches Canvas",
    "features.canvas.desc":
      "Öffne JSON-Canvas-Dateien (.canvas) als schwenk- und zoombares Board. Karten rendern Markdown, Bilder und Links, verbunden durch beschriftete Pfeile — kompatibel mit Obsidian.",
    "features.workspace.title": "Workspace & Wikilinks",
    "features.workspace.desc":
      "Öffne einen Ordner als Workspace mit Dateibaum, [[Wikilinks]], Backlink-Panel und einer Befehlspalette, um mit Cmd/Strg+K überallhin zu springen.",
    "features.graph.title": "Graphansicht",
    "features.graph.desc":
      "Sieh deinen gesamten Workspace als kräftegeführten Graphen: Notizen sind Knoten, Wikilinks sind Kanten. Fahre über einen Knoten, um Nachbarn hervorzuheben, klicke zum Öffnen, und beobachte, wie er sich beim Schreiben live aktualisiert.",
    "features.export.title": "Überallhin exportieren",
    "features.export.desc":
      "Drucke oder exportiere als PDF, HTML, DOCX und EPUB — inklusive Vektor-Mathe und -Diagrammen. Deine Dokumente verlassen Glyph genau so, wie sie aussehen sollen.",
    "features.themes.title": "Natives Theming",
    "features.themes.desc":
      "Plattformadaptives Design, das hellen und dunklen Modus respektiert, mit sechs Code-Themes und Typografie, die sich auf macOS, Windows und Linux zu Hause fühlt.",
    "features.notebooks.title": "Mehr als Markdown",
    "features.notebooks.desc":
      "Öffne Jupyter-Notebooks mit gerenderten Zellen und Ausgaben, betrachte Bild- und SVG-Dateien in einem integrierten Viewer und lies CSV- und TSV-Blöcke als saubere, scrollbare Tabellen.",
    "features.privacy.title": "Local-first & privat",
    "features.privacy.desc":
      "Alles läuft offline auf deinem Gerät, und deine Notizen verlassen es nie, außer du aktivierst Cloud Sync zu einem Git-Remote, das du kontrollierst. Absturzberichte sind streng optional.",
    "download.heading": "Glyph installieren",
    "download.subheading":
      "Wähle deine Plattform. Jeder Build ist signiert und über die Release-Pipeline veröffentlicht.",
    "download.copy": "Kopieren",
    "download.copied": "Kopiert!",
    "download.manual": "Oder hol dir ein Binary von der",
    "download.releases": "Releases-Seite",
    "footer.tagline": "Markdown, das sich nativ anfühlt.",
    "footer.product": "Produkt",
    "footer.resources": "Ressourcen",
    "footer.docs": "Dokumentation",
    "footer.pluginDocs": "Plugin-Dokumentation",
    "footer.issues": "Problem melden",
    "footer.license": "MIT-lizenziert",
    "footer.built": "Gebaut mit Tauri, React & Astro.",
  },
} as const;
