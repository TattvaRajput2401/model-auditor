<!-- Authentication Page (v3) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Model Auditor - Authentication</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;family=Roboto+Mono&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary-fixed-dim": "#00deec",
                        "primary-dim": "#00deec",
                        "primary-fixed": "#00eefc",
                        "secondary-fixed": "#e4c6ff",
                        "on-secondary": "#32005c",
                        "on-secondary-container": "#f0dcff",
                        "error-dim": "#d7383b",
                        "on-error-container": "#ffa8a3",
                        "tertiary": "#afffd1",
                        "surface-dim": "#0e0e0e",
                        "surface-container": "#1a1919",
                        "outline-variant": "#494847",
                        "error-container": "#9f0519",
                        "on-primary-fixed-variant": "#005e64",
                        "on-tertiary": "#006642",
                        "on-surface-variant": "#adaaaa",
                        "background": "#0e0e0e",
                        "error": "#ff716c",
                        "secondary-dim": "#9c42f4",
                        "on-tertiary-fixed": "#00472d",
                        "secondary-container": "#7701d0",
                        "primary-container": "#00eefc",
                        "on-surface": "#ffffff",
                        "on-secondary-fixed-variant": "#7500cc",
                        "secondary": "#bf81ff",
                        "surface-bright": "#2c2c2c",
                        "on-primary-fixed": "#003f43",
                        "inverse-surface": "#fcf8f8",
                        "on-primary": "#005d63",
                        "on-error": "#490006",
                        "tertiary-fixed-dim": "#00efa0",
                        "on-background": "#ffffff",
                        "surface-container-lowest": "#000000",
                        "surface-container-low": "#131313",
                        "on-primary-container": "#005359",
                        "tertiary-container": "#00ffab",
                        "inverse-primary": "#006a71",
                        "surface-variant": "#262626",
                        "on-tertiary-container": "#005c3b",
                        "inverse-on-surface": "#565554",
                        "primary": "#8ff5ff",
                        "surface-container-highest": "#262626",
                        "on-secondary-fixed": "#4e008a",
                        "outline": "#777575",
                        "surface-tint": "#8ff5ff",
                        "surface-container-high": "#201f1f",
                        "on-tertiary-fixed-variant": "#006742",
                        "surface": "#0e0e0e",
                        "tertiary-dim": "#00efa0",
                        "tertiary-fixed": "#00ffab",
                        "secondary-fixed-dim": "#dab4ff"
                    },
                    fontFamily: {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Inter"],
                        "mono": ["Roboto Mono"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(38, 38, 38, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(143, 245, 255, 0.1);
        }
        .neon-glow {
            box-shadow: 0 0 15px rgba(143, 245, 255, 0.2);
        }
        .kinetic-bg {
            background: radial-gradient(circle at 50% 50%, rgba(143, 245, 255, 0.03) 0%, transparent 50%);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary-container">
<!-- Background Decoration -->
<div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div class="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
<div class="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]"></div>
<div class="absolute inset-0 kinetic-bg"></div>
</div>
<!-- Top Navigation Anchor (Manual construction based on JSON structure but simplified for Auth) -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 border-b border-outline-variant/10">
<div class="flex items-center gap-3">
<div class="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
<span class="material-symbols-outlined text-on-primary text-xl" style="font-variation-settings: 'FILL' 1;">shield_lock</span>
</div>
<span class="font-headline font-bold text-xl tracking-tighter text-primary uppercase">Model Auditor</span>
</div>
<div class="flex items-center gap-6">
<a class="font-headline text-xs tracking-widest text-on-surface-variant hover:text-primary transition-colors uppercase" href="#">System Status: Optimal</a>
</div>
</header>
<main class="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
<div class="w-full max-w-[440px]">
<!-- Auth Card -->
<div class="glass-panel p-10 rounded-xl relative overflow-hidden group">
<!-- Subtle Top Accent -->
<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
<div class="mb-10 text-center">
<h1 class="font-headline text-3xl font-bold tracking-tight mb-2 uppercase">Command Center</h1>
<p class="text-on-surface-variant text-sm font-medium tracking-wide">Enter credentials to initialize observatory</p>
</div>
<form class="space-y-6">
<!-- Input Group -->
<div class="space-y-4">
<div class="relative">
<label class="block font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 ml-1">Operator Identity</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">fingerprint</span>
<input class="w-full bg-surface-container-lowest border-none pl-12 pr-4 py-4 text-sm font-mono focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline/40 rounded-sm" placeholder="ID-7742-ALPHA" type="text"/>
</div>
</div>
<div class="relative">
<div class="flex justify-between items-center mb-2 ml-1">
<label class="block font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Access Cipher</label>
<a class="text-[10px] uppercase tracking-[0.1em] text-primary/70 hover:text-primary transition-colors" href="#">Recover Keys</a>
</div>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">key</span>
<input class="w-full bg-surface-container-lowest border-none pl-12 pr-4 py-4 text-sm font-mono focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline/40 rounded-sm" placeholder="••••••••••••" type="password"/>
</div>
</div>
</div>
<!-- Options -->
<div class="flex items-center justify-between py-2">
<label class="flex items-center gap-2 cursor-pointer group">
<input class="w-4 h-4 bg-surface-container-lowest border-outline/20 rounded-sm text-primary focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span class="text-[11px] uppercase tracking-wider text-on-surface-variant group-hover:text-on-surface transition-colors">Persistent Session</span>
</label>
<div class="flex items-center gap-1">
<div class="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></div>
<span class="text-[10px] uppercase tracking-wider text-tertiary font-medium">Secure Link Active</span>
</div>
</div>
<!-- Action -->
<button class="w-full group relative overflow-hidden bg-primary text-on-primary py-4 font-headline font-bold uppercase tracking-[0.15em] text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 rounded-sm shadow-[0_0_20px_rgba(143,245,255,0.15)]" type="submit">
                        Initialize Session
                        <span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</form>
<!-- Divider -->
<div class="relative my-10">
<div class="absolute inset-0 flex items-center"><div class="w-full border-t border-outline-variant/20"></div></div>
<div class="relative flex justify-center text-[10px] uppercase tracking-[0.3em] font-medium">
<span class="bg-[#1a1919] px-4 text-on-surface-variant">Federated Auth</span>
</div>
</div>
<!-- Social Logins -->
<div class="grid grid-cols-2 gap-4">
<button class="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
<span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-xl">terminal</span>
<span class="text-[10px] uppercase tracking-widest font-bold">Protocol</span>
</button>
<button class="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
<span class="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors text-xl">token</span>
<span class="text-[10px] uppercase tracking-widest font-bold">MFA-Node</span>
</button>
</div>
</div>
<!-- Footer Message -->
<div class="mt-8 text-center">
<p class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                    Unauthorized Access Prohibited — <span class="text-primary/60">Node: AUDIT-MAIN-01</span>
</p>
</div>
</div>
</main>
<!-- Aesthetic Decorative Element: Side Log Column -->
<div class="fixed left-8 bottom-8 hidden lg:block">
<div class="font-mono text-[9px] text-on-surface-variant/30 space-y-1">
<div class="flex gap-4"><span>[08:44:21]</span> <span class="text-primary/40">AUTH_REQUEST</span> :: ID_PENDING</div>
<div class="flex gap-4"><span>[08:44:22]</span> <span class="text-secondary/40">ENCRYPT_LYR</span> :: AES_256_GCM</div>
<div class="flex gap-4"><span>[08:44:23]</span> <span>OBSERVATORY</span> :: READY_STATE</div>
</div>
</div>
<!-- Aesthetic Decorative Element: Right Asset -->
<div class="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none opacity-20">
<div class="relative w-64 h-64 border border-primary/20 rounded-full flex items-center justify-center">
<div class="w-48 h-48 border border-secondary/10 rounded-full flex items-center justify-center">
<div class="w-32 h-32 border border-primary/30 rounded-full animate-pulse"></div>
</div>
<div class="absolute inset-0 flex items-center justify-center">
<span class="material-symbols-outlined text-4xl text-primary/40">radar</span>
</div>
</div>
</div>
</body></html>

<!-- Global Dashboard (v3) -->
<!DOCTYPE html><html class="dark" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Model Auditor - Global Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&amp;family=Inter:wght@300;400;500;600;700&amp;family=Roboto+Mono:wght@400;500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary-fixed-dim": "#00deec",
                        "primary-dim": "#00deec",
                        "primary-fixed": "#00eefc",
                        "secondary-fixed": "#e4c6ff",
                        "on-secondary": "#32005c",
                        "on-secondary-container": "#f0dcff",
                        "error-dim": "#d7383b",
                        "on-error-container": "#ffa8a3",
                        "tertiary": "#afffd1",
                        "surface-dim": "#0e0e0e",
                        "surface-container": "#1a1919",
                        "outline-variant": "#494847",
                        "error-container": "#9f0519",
                        "on-primary-fixed-variant": "#005e64",
                        "on-tertiary": "#006642",
                        "on-surface-variant": "#adaaaa",
                        "background": "#0e0e0e",
                        "error": "#ff716c",
                        "secondary-dim": "#9c42f4",
                        "on-tertiary-fixed": "#00472d",
                        "secondary-container": "#7701d0",
                        "primary-container": "#00eefc",
                        "on-surface": "#ffffff",
                        "on-secondary-fixed-variant": "#7500cc",
                        "secondary": "#bf81ff",
                        "surface-bright": "#2c2c2c",
                        "on-primary-fixed": "#003f43",
                        "inverse-surface": "#fcf8f8",
                        "on-primary": "#005d63",
                        "on-error": "#490006",
                        "tertiary-fixed-dim": "#00efa0",
                        "on-background": "#ffffff",
                        "surface-container-lowest": "#000000",
                        "surface-container-low": "#131313",
                        "on-primary-container": "#005359",
                        "tertiary-container": "#00ffab",
                        "inverse-primary": "#006a71",
                        "surface-variant": "#262626",
                        "on-tertiary-container": "#005c3b",
                        "inverse-on-surface": "#565554",
                        "primary": "#8ff5ff",
                        "surface-container-highest": "#262626",
                        "on-secondary-fixed": "#4e008a",
                        "outline": "#777575",
                        "surface-tint": "#8ff5ff",
                        "surface-container-high": "#201f1f",
                        "on-tertiary-fixed-variant": "#006742",
                        "surface": "#0e0e0e",
                        "tertiary-dim": "#00efa0",
                        "tertiary-fixed": "#00ffab",
                        "secondary-fixed-dim": "#dab4ff"
                    },
                    fontFamily: {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Inter"],
                        "mono": ["Roboto Mono"]
                    },
                    borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(38, 38, 38, 0.4);
            backdrop-filter: blur(12px);
        }
        .pulse-bar {
            background: linear-gradient(90deg, #8FF5FF 0%, #BF81FF 100%);
            position: relative;
            overflow: hidden;
        }
        .pulse-bar::after {
            content: '';
            position: absolute;
            top: 0; left: -100%;
            width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            animation: sweep 3s infinite;
        }
        @keyframes sweep {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        body {
            background-color: #0E0E0E;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
        }
    </style>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:Roboto Mono;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select{-webkit-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000;}[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#2563eb}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right 0.5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;print-color-adjust:exact}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:0.75rem;print-color-adjust:unset}[type='checkbox'],[type='radio']{-webkit-appearance:none;appearance:none;padding:0;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow:0 0 #0000}[type='checkbox']{border-radius:0px}[type='radio']{border-radius:100%}[type='checkbox']:focus,[type='radio']:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[type='checkbox']:checked,[type='radio']:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox']:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");}@media (forced-colors: active) {[type='checkbox']:checked{-webkit-appearance:auto;appearance:auto}}[type='radio']:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");}@media (forced-colors: active) {[type='radio']:checked{-webkit-appearance:auto;appearance:auto}}[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus{border-color:transparent;background-color:currentColor}[type='checkbox']:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat;}@media (forced-colors: active) {[type='checkbox']:indeterminate{-webkit-appearance:auto;appearance:auto}}[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus{border-color:transparent;background-color:currentColor}[type='file']{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type='file']:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.inset-x-0{left:0px;right:0px}.bottom-0{bottom:0px}.bottom-8{bottom:2rem}.left-0{left:0px}.right-8{right:2rem}.top-0{top:0px}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.col-span-12{grid-column:span 12 / span 12}.mb-1{margin-bottom:0.25rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:0.5rem}.mb-4{margin-bottom:1rem}.mb-8{margin-bottom:2rem}.ml-64{margin-left:16rem}.mt-2{margin-top:0.5rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-1{height:0.25rem}.h-1\.5{height:0.375rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:0.5rem}.h-40{height:10rem}.h-64{height:16rem}.h-8{height:2rem}.h-\[2px\]{height:2px}.h-\[40\%\]{height:40%}.h-\[45\%\]{height:45%}.h-\[50\%\]{height:50%}.h-\[55\%\]{height:55%}.h-\[60\%\]{height:60%}.h-\[70\%\]{height:70%}.h-\[85\%\]{height:85%}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-1\.5{width:0.375rem}.w-14{width:3.5rem}.w-2{width:0.5rem}.w-40{width:10rem}.w-64{width:16rem}.w-8{width:2rem}.w-\[82\%\]{width:82%}.w-\[94\%\]{width:94%}.w-full{width:100%}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-rotate-90{--tw-rotate:-90deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-95{--tw-scale-x:.95;--tw-scale-y:.95;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.grid-cols-12{grid-template-columns:repeat(12, minmax(0, 1fr))}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.space-y-1 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.25rem * var(--tw-space-y-reverse))}.space-y-2 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse))}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:0.75rem}.rounded-sm{border-radius:0.125rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-l-2{border-left-width:2px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-\[\#262626\]{--tw-border-opacity:1;border-color:rgb(38 38 38 / var(--tw-border-opacity, 1))}.border-\[\#262626\]\/50{border-color:rgb(38 38 38 / 0.5)}.border-\[\#8FF5FF\]{--tw-border-opacity:1;border-color:rgb(143 245 255 / var(--tw-border-opacity, 1))}.border-error{--tw-border-opacity:1;border-color:rgb(255 113 108 / var(--tw-border-opacity, 1))}.border-error\/20{border-color:rgb(255 113 108 / 0.2)}.border-outline{--tw-border-opacity:1;border-color:rgb(119 117 117 / var(--tw-border-opacity, 1))}.border-outline-variant\/10{border-color:rgb(73 72 71 / 0.1)}.border-outline-variant\/15{border-color:rgb(73 72 71 / 0.15)}.border-outline-variant\/20{border-color:rgb(73 72 71 / 0.2)}.border-outline-variant\/30{border-color:rgb(73 72 71 / 0.3)}.border-primary{--tw-border-opacity:1;border-color:rgb(143 245 255 / var(--tw-border-opacity, 1))}.border-primary\/40{border-color:rgb(143 245 255 / 0.4)}.border-secondary{--tw-border-opacity:1;border-color:rgb(191 129 255 / var(--tw-border-opacity, 1))}.bg-\[\#0E0E0E\]{--tw-bg-opacity:1;background-color:rgb(14 14 14 / var(--tw-bg-opacity, 1))}.bg-\[\#8FF5FF\]\/5{background-color:rgb(143 245 255 / 0.05)}.bg-background{--tw-bg-opacity:1;background-color:rgb(14 14 14 / var(--tw-bg-opacity, 1))}.bg-error{--tw-bg-opacity:1;background-color:rgb(255 113 108 / var(--tw-bg-opacity, 1))}.bg-error\/10{background-color:rgb(255 113 108 / 0.1)}.bg-error\/20{background-color:rgb(255 113 108 / 0.2)}.bg-error\/5{background-color:rgb(255 113 108 / 0.05)}.bg-primary{--tw-bg-opacity:1;background-color:rgb(143 245 255 / var(--tw-bg-opacity, 1))}.bg-primary\/20{background-color:rgb(143 245 255 / 0.2)}.bg-secondary{--tw-bg-opacity:1;background-color:rgb(191 129 255 / var(--tw-bg-opacity, 1))}.bg-secondary\/20{background-color:rgb(191 129 255 / 0.2)}.bg-surface-container-highest{--tw-bg-opacity:1;background-color:rgb(38 38 38 / var(--tw-bg-opacity, 1))}.bg-surface-container-highest\/30{background-color:rgb(38 38 38 / 0.3)}.bg-surface-container-low{--tw-bg-opacity:1;background-color:rgb(19 19 19 / var(--tw-bg-opacity, 1))}.bg-surface-container-lowest{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-surface-variant{--tw-bg-opacity:1;background-color:rgb(38 38 38 / var(--tw-bg-opacity, 1))}.bg-tertiary{--tw-bg-opacity:1;background-color:rgb(175 255 209 / var(--tw-bg-opacity, 1))}.object-cover{object-fit:cover}.p-0{padding:0px}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.pb-12{padding-bottom:3rem}.pb-8{padding-bottom:2rem}.pl-4{padding-left:1rem}.pt-20{padding-top:5rem}.pt-4{padding-top:1rem}.text-center{text-align:center}.font-body{font-family:Inter}.font-headline{font-family:Space Grotesk}.font-mono{font-family:Roboto Mono}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.text-\[10px\]{font-size:10px}.text-\[11px\]{font-size:11px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:0.75rem;line-height:1rem}.font-black{font-weight:900}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.uppercase{text-transform:uppercase}.leading-relaxed{line-height:1.625}.tracking-tight{letter-spacing:-0.025em}.tracking-tighter{letter-spacing:-0.05em}.tracking-widest{letter-spacing:0.1em}.text-\[\#8FF5FF\]{--tw-text-opacity:1;color:rgb(143 245 255 / var(--tw-text-opacity, 1))}.text-\[\#ADAAAA\]{--tw-text-opacity:1;color:rgb(173 170 170 / var(--tw-text-opacity, 1))}.text-error{--tw-text-opacity:1;color:rgb(255 113 108 / var(--tw-text-opacity, 1))}.text-on-background{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-on-primary{--tw-text-opacity:1;color:rgb(0 93 99 / var(--tw-text-opacity, 1))}.text-on-secondary{--tw-text-opacity:1;color:rgb(50 0 92 / var(--tw-text-opacity, 1))}.text-on-surface{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-on-surface-variant{--tw-text-opacity:1;color:rgb(173 170 170 / var(--tw-text-opacity, 1))}.text-primary{--tw-text-opacity:1;color:rgb(143 245 255 / var(--tw-text-opacity, 1))}.text-secondary{--tw-text-opacity:1;color:rgb(191 129 255 / var(--tw-text-opacity, 1))}.text-surface-container-highest{--tw-text-opacity:1;color:rgb(38 38 38 / var(--tw-text-opacity, 1))}.text-tertiary{--tw-text-opacity:1;color:rgb(175 255 209 / var(--tw-text-opacity, 1))}.opacity-20{opacity:0.2}.shadow-\[0_0_24px_rgba\(191\2c 129\2c 255\2c 0\.4\)\]{--tw-shadow:0 0 24px rgba(191,129,255,0.4);--tw-shadow-colored:0 0 24px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\[4px_0_24px_rgba\(143\2c 245\2c 255\2c 0\.05\)\]{--tw-shadow:4px 0 24px rgba(143,245,255,0.05);--tw-shadow-colored:4px 0 24px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-md{--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-200{transition-duration:200ms}.duration-300{transition-duration:300ms}.duration-700{transition-duration:700ms}.selection\:bg-primary *::selection{--tw-bg-opacity:1;background-color:rgb(143 245 255 / var(--tw-bg-opacity, 1))}.selection\:text-on-primary *::selection{--tw-text-opacity:1;color:rgb(0 93 99 / var(--tw-text-opacity, 1))}.selection\:bg-primary::selection{--tw-bg-opacity:1;background-color:rgb(143 245 255 / var(--tw-bg-opacity, 1))}.selection\:text-on-primary::selection{--tw-text-opacity:1;color:rgb(0 93 99 / var(--tw-text-opacity, 1))}.hover\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\:bg-\[\#262626\]:hover{--tw-bg-opacity:1;background-color:rgb(38 38 38 / var(--tw-bg-opacity, 1))}.hover\:bg-primary\/10:hover{background-color:rgb(143 245 255 / 0.1)}.hover\:bg-surface-container-high:hover{--tw-bg-opacity:1;background-color:rgb(32 31 31 / var(--tw-bg-opacity, 1))}.hover\:bg-surface-container-highest\/50:hover{background-color:rgb(38 38 38 / 0.5)}.hover\:text-\[\#8FF5FF\]:hover{--tw-text-opacity:1;color:rgb(143 245 255 / var(--tw-text-opacity, 1))}.hover\:text-error:hover{--tw-text-opacity:1;color:rgb(255 113 108 / var(--tw-text-opacity, 1))}.hover\:text-primary:hover{--tw-text-opacity:1;color:rgb(143 245 255 / var(--tw-text-opacity, 1))}.hover\:shadow-\[0_0_15px_rgba\(143\2c 245\2c 255\2c 0\.3\)\]:hover{--tw-shadow:0 0 15px rgba(143,245,255,0.3);--tw-shadow-colored:0 0 15px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.active\:scale-90:active{--tw-scale-x:.9;--tw-scale-y:.9;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.active\:scale-95:active{--tw-scale-x:.95;--tw-scale-y:.95;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\:scale-105{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width: 768px){.md\:flex{display:flex}.md\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.md\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.md\:flex-row{flex-direction:row}}@media (min-width: 1024px){.lg\:col-span-4{grid-column:span 4 / span 4}.lg\:col-span-8{grid-column:span 8 / span 8}}</style></head>
<body class="bg-background text-on-background selection:bg-primary selection:text-on-primary" data-mode="connect">
<!-- Top Navigation Shell -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#0E0E0E] border-b border-[#262626]/50">
<div class="flex items-center gap-4">
<span class="text-xl font-bold tracking-tighter text-[#8FF5FF] uppercase font-headline">Model Auditor</span>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex items-center gap-8 font-headline text-sm uppercase tracking-widest">
<a class="text-[#8FF5FF] font-bold" href="#"><br></a>
<a class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors duration-300" href="#"><br></a>
<a class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors duration-300" href="#"><br></a>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-[#ADAAAA] hover:text-[#8FF5FF] transition-transform scale-95 active:scale-90" data-icon="notifications">notifications</button>
<button class="material-symbols-outlined text-[#ADAAAA] hover:text-[#8FF5FF] transition-transform scale-95 active:scale-90" data-icon="account_circle">account_circle</button>
</div>
</div>
</header>
<!-- Side Navigation Shell -->
<nav class="fixed left-0 top-0 h-full z-40 flex flex-col pt-20 pb-8 bg-[#0E0E0E] w-64 border-r border-[#262626] shadow-[4px_0_24px_rgba(143,245,255,0.05)] font-headline text-sm uppercase tracking-widest backdrop-blur-md">
<div class="px-6 mb-8">
<div class="flex items-center gap-3 mb-2">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="text-xs text-on-surface-variant">System Online</span>
</div>
<h2 class="text-[#8FF5FF] font-black text-lg">Neon Observatory</h2>
</div>
<div class="flex-1 space-y-2">
<a class="flex items-center gap-4 py-3 text-[#8FF5FF] border-l-2 border-[#8FF5FF] bg-[#8FF5FF]/5 pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-4 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
<span>Agents</span>
</a>
<a class="flex items-center gap-4 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="terminal">terminal</span>
<span>Logs</span>
</a>
<a class="flex items-center gap-4 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="shield">shield</span>
<span>Security</span>
</a>
<a class="flex items-center gap-4 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</div>
<div class="px-6 mt-auto space-y-4">
<button class="w-full py-3 bg-primary text-on-primary font-bold tracking-tighter uppercase flex items-center justify-center gap-2 rounded-sm hover:shadow-[0_0_15px_rgba(143,245,255,0.3)] transition-all">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
                New Audit
            </button>
<div class="pt-4 border-t border-[#262626] space-y-2">
<a class="flex items-center gap-4 text-xs text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors" href="#">
<span class="material-symbols-outlined text-sm" data-icon="help">help</span>
                    Support
                </a>
<a class="flex items-center gap-4 text-xs text-[#ADAAAA] hover:text-error transition-colors" href="#">
<span class="material-symbols-outlined text-sm" data-icon="logout">logout</span>
                    Logout
                </a>
</div>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="ml-64 pt-20 px-8 pb-12 min-h-screen transition-all duration-300">
<!-- Header Section -->
<header class="mb-10 flex justify-between items-end">
<div>
<h1 class="text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-2">Global <span class="text-primary">Intelligence</span></h1>
<p class="text-on-surface-variant font-body">Cross-model audit stream and risk assessment protocol.</p>
</div>
<div class="flex gap-4">
<div class="glass-panel px-4 py-2 border border-outline-variant/15 flex items-center gap-3">
<span class="text-xs font-mono text-secondary">REF: SYNC_2204</span>
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
</div>
</header>
<!-- Metric Grid -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<!-- Metric Card 1 -->
<div class="bg-surface-container-low p-6 border-l-2 border-primary group hover:bg-surface-container-high transition-colors">
<div class="flex justify-between items-start mb-4">
<span class="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Active Agents</span>
<span class="material-symbols-outlined text-primary" data-icon="monitoring">monitoring</span>
</div>
<div class="text-4xl font-headline font-bold text-on-surface">1,204</div>
<div class="mt-2 flex items-center gap-1 text-[10px] font-mono text-tertiary">
<span class="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                    +12% vs last cycle
                </div>
</div>
<!-- Metric Card 2 -->
<div class="bg-surface-container-low p-6 border-l-2 border-error group hover:bg-surface-container-high transition-colors">
<div class="flex justify-between items-start mb-4">
<span class="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Violations</span>
<span class="material-symbols-outlined text-error" data-icon="gpp_maybe">gpp_maybe</span>
</div>
<div class="text-4xl font-headline font-bold text-on-surface">14</div>
<div class="mt-2 flex items-center gap-1 text-[10px] font-mono text-error">
<span class="material-symbols-outlined text-xs" data-icon="warning">warning</span>
                    CRITICAL UPTICK
                </div>
</div>
<!-- Metric Card 3 -->
<div class="bg-surface-container-low p-6 border-l-2 border-secondary group hover:bg-surface-container-high transition-colors">
<div class="flex justify-between items-start mb-4">
<span class="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Avg Latency</span>
<span class="material-symbols-outlined text-secondary" data-icon="speed">speed</span>
</div>
<div class="text-4xl font-headline font-bold text-on-surface">42ms</div>
<div class="mt-2 flex items-center gap-1 text-[10px] font-mono text-tertiary">
<span class="material-symbols-outlined text-xs" data-icon="check_circle">check_circle</span>
                    Stable optimization
                </div>
</div>
<!-- Metric Card 4 -->
<div class="bg-surface-container-low p-6 border-l-2 border-outline group hover:bg-surface-container-high transition-colors">
<div class="flex justify-between items-start mb-4">
<span class="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Total Runs</span>
<span class="material-symbols-outlined text-on-surface-variant" data-icon="database">database</span>
</div>
<div class="text-4xl font-headline font-bold text-on-surface">84.2k</div>
<div class="mt-2 flex items-center gap-1 text-[10px] font-mono text-on-surface-variant">
                    LAST 24 HOURS
                </div>
</div>
</div>
<!-- Main Bento Grid -->
<div class="grid grid-cols-12 gap-6">
<!-- Risk Score Trends (Chart Area) -->
<div class="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/15 p-8 relative overflow-hidden">
<div class="flex justify-between items-center mb-10">
<div>
<h3 class="text-xl font-headline font-bold uppercase tracking-tight">Risk Score Trends</h3>
<p class="text-xs font-mono text-on-surface-variant">Protocol: AGENT_BEHAVIOR_ANALYSIS_V4</p>
</div>
<div class="flex gap-2">
<span class="px-3 py-1 bg-surface-variant text-[10px] font-bold rounded-full border border-outline-variant/30">7D</span>
<span class="px-3 py-1 bg-primary text-on-primary text-[10px] font-bold rounded-full">30D</span>
</div>
</div>
<!-- Mock Chart Visualization -->
<div class="h-64 flex items-end gap-2 px-4">
<div class="flex-1 bg-surface-container-highest/30 h-[40%] relative group">
<div class="absolute inset-x-0 bottom-0 bg-primary/20 h-full"></div>
<div class="absolute inset-x-0 bottom-0 bg-primary h-[2px]"></div>
</div>
<div class="flex-1 bg-surface-container-highest/30 h-[55%] relative group">
<div class="absolute inset-x-0 bottom-0 bg-primary/20 h-full"></div>
<div class="absolute inset-x-0 bottom-0 bg-primary h-[2px]"></div>
</div>
<div class="flex-1 bg-surface-container-highest/30 h-[45%] relative group">
<div class="absolute inset-x-0 bottom-0 bg-primary/20 h-full"></div>
<div class="absolute inset-x-0 bottom-0 bg-primary h-[2px]"></div>
</div>
<div class="flex-1 bg-surface-container-highest/30 h-[70%] relative group">
<div class="absolute inset-x-0 bottom-0 bg-secondary/20 h-full"></div>
<div class="absolute inset-x-0 bottom-0 bg-secondary h-[2px]"></div>
</div>
<div class="flex-1 bg-surface-container-highest/30 h-[85%] relative group">
<div class="absolute inset-x-0 bottom-0 bg-error/20 h-full"></div>
<div class="absolute inset-x-0 bottom-0 bg-error h-[2px]"></div>
</div>
<div class="flex-1 bg-surface-container-highest/30 h-[60%] relative group">
<div class="absolute inset-x-0 bottom-0 bg-primary/20 h-full"></div>
<div class="absolute inset-x-0 bottom-0 bg-primary h-[2px]"></div>
</div>
<div class="flex-1 bg-surface-container-highest/30 h-[50%] relative group">
<div class="absolute inset-x-0 bottom-0 bg-primary/20 h-full"></div>
<div class="absolute inset-x-0 bottom-0 bg-primary h-[2px]"></div>
</div>
</div>
<div class="mt-4 flex justify-between px-4 text-[10px] font-mono text-on-surface-variant uppercase tracking-tighter">
<span>Oct 24</span>
<span>Oct 26</span>
<span>Oct 28</span>
<span>Oct 30</span>
<span>Nov 01</span>
<span>Nov 03</span>
<span>Nov 05</span>
</div>
</div>
<!-- Real-time Activity Feed -->
<div class="col-span-12 lg:col-span-4 bg-surface-container-low border border-outline-variant/15 flex flex-col">
<div class="p-6 border-b border-outline-variant/15 flex items-center justify-between">
<h3 class="font-headline font-bold text-sm uppercase tracking-widest">Live Audit Feed</h3>
<div class="flex items-center gap-2">
<span class="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
<span class="text-[10px] font-mono text-tertiary uppercase">Realtime</span>
</div>
</div>
<div class="flex-1 overflow-y-auto p-0 scrollbar-hide">
<!-- Feed Item 1 -->
<div class="p-4 border-b border-outline-variant/10 hover:bg-surface-container-highest/50 transition-colors">
<div class="flex gap-4 items-start">
<div class="w-8 h-8 flex-shrink-0 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20">
<span class="material-symbols-outlined text-xs text-secondary" data-icon="bolt">bolt</span>
</div>
<div>
<div class="text-[11px] font-mono text-on-surface-variant flex justify-between items-center mb-1">
<span>GPT-4_PROD_02</span>
<span>2M AGO</span>
</div>
<p class="text-xs text-on-surface leading-relaxed">Prompt injection attempt neutralized on endpoint <span class="text-secondary font-mono">/v1/chat</span>.</p>
</div>
</div>
</div>
<!-- Feed Item 2 -->
<div class="p-4 border-b border-outline-variant/10 hover:bg-surface-container-highest/50 transition-colors bg-error/5">
<div class="flex gap-4 items-start">
<div class="w-8 h-8 flex-shrink-0 bg-error/10 flex items-center justify-center border border-error/20">
<span class="material-symbols-outlined text-xs text-error" data-icon="priority_high">priority_high</span>
</div>
<div>
<div class="text-[11px] font-mono text-error flex justify-between items-center mb-1 font-bold">
<span>CLAUDE_OPUS_01</span>
<span>12M AGO</span>
</div>
<p class="text-xs text-on-surface leading-relaxed">Sensitive data leak detected. PI-Filter activated automatically.</p>
</div>
</div>
</div>
<!-- Feed Item 3 -->
<div class="p-4 border-b border-outline-variant/10 hover:bg-surface-container-highest/50 transition-colors">
<div class="flex gap-4 items-start">
<div class="w-8 h-8 flex-shrink-0 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20">
<span class="material-symbols-outlined text-xs text-primary" data-icon="shield_check">shield</span>
</div>
<div>
<div class="text-[11px] font-mono text-on-surface-variant flex justify-between items-center mb-1">
<span>MISTRAL_7B_LOCAL</span>
<span>28M AGO</span>
</div>
<p class="text-xs text-on-surface leading-relaxed">Completed full policy alignment check. 99.8% compliance score.</p>
</div>
</div>
</div>
<!-- Feed Item 4 -->
<div class="p-4 border-b border-outline-variant/10 hover:bg-surface-container-highest/50 transition-colors">
<div class="flex gap-4 items-start">
<div class="w-8 h-8 flex-shrink-0 bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20">
<span class="material-symbols-outlined text-xs text-on-surface-variant" data-icon="refresh">refresh</span>
</div>
<div>
<div class="text-[11px] font-mono text-on-surface-variant flex justify-between items-center mb-1">
<span>SYSTEM_CORE</span>
<span>1H AGO</span>
</div>
<p class="text-xs text-on-surface leading-relaxed">Knowledge base synchronization initiated for audit vector V4.</p>
</div>
</div>
</div>
</div>
<button class="p-4 text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary text-center transition-colors">
                    View Full Audit History
                </button>
</div>
</div>
<!-- System Health Progress Section -->
<section class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="bg-surface-container-low p-6 flex flex-col gap-4">
<div class="flex justify-between items-center">
<span class="text-xs font-mono text-on-surface-variant">MODEL INTEGRITY</span>
<span class="text-xs font-mono text-primary">94%</span>
</div>
<div class="w-full h-1 bg-surface-container-highest">
<div class="pulse-bar h-full w-[94%]"></div>
</div>
</div>
<div class="bg-surface-container-low p-6 flex flex-col gap-4">
<div class="flex justify-between items-center">
<span class="text-xs font-mono text-on-surface-variant">DATA PRIVACY</span>
<span class="text-xs font-mono text-secondary">82%</span>
</div>
<div class="w-full h-1 bg-surface-container-highest">
<div class="pulse-bar h-full w-[82%]"></div>
</div>
</div>
<div class="bg-surface-container-low p-6 flex flex-col gap-4">
<div class="flex justify-between items-center">
<span class="text-xs font-mono text-on-surface-variant">ALIGNMENT QUOTA</span>
<span class="text-xs font-mono text-tertiary">100%</span>
</div>
<div class="w-full h-1 bg-surface-container-highest">
<div class="pulse-bar h-full w-full"></div>
</div>
</div>
</section>
<!-- Dynamic Visualization (Bottom Row) -->
<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="bg-surface-container-lowest border border-outline-variant/15 p-8 flex flex-col md:flex-row gap-8 items-center">
<div class="relative w-40 h-40">
<svg class="w-full h-full transform -rotate-90">
<circle class="text-surface-container-highest" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-width="8"></circle>
<circle class="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="88" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-3xl font-headline font-black">82</span>
<span class="text-[10px] font-mono text-on-surface-variant uppercase">Safety Score</span>
</div>
</div>
<div class="flex-1 space-y-4">
<h4 class="font-headline font-bold uppercase tracking-widest text-sm">Synthetic Logic Coverage</h4>
<p class="text-xs text-on-surface-variant">Our auditors have successfully mapped 82% of the latent space for high-risk prompts in the current production environment.</p>
<div class="flex gap-4">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<span class="text-[10px] font-mono uppercase">Verified</span>
</div>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-surface-container-highest"></span>
<span class="text-[10px] font-mono uppercase">Unexplored</span>
</div>
</div>
</div>
</div>
<div class="bg-surface-container-lowest border border-outline-variant/15 p-8 relative group overflow-hidden">
<img alt="Abstract Data Visualization" class="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-700" data-alt="Abstract blue and purple neon light patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-UjRLnKXrSSzhGJr_teoAP4BnuCAKV3Ib3yjNnip1WoHQGzLH2JFrzOL2u83YgIVEu5ps-ZHtnhzK80zT-OJ6V0GVajaOdOPf0Ms_kCEwO4FC_dhr7_mbKk152grunyHpyjeFnlzTHD7_8a4rzgo0iH2Z8EdBl_dBNDGha3jt08Wz07dRUQuPVL2EVH7aUPdqAH7VrGtmezFjz_Kxy34s3YnPIa2o_yudxfRkDdEYcpaCsyPRfCQuYIumueHKQv6x1bHGJXEcVq65">
<div class="relative z-10 h-full flex flex-col justify-between">
<div>
<h4 class="font-headline font-bold uppercase tracking-widest text-sm mb-4">Neural Node Overview</h4>
<p class="text-xs text-on-surface-variant max-w-xs">Global distribution of active model monitoring nodes across available clusters.</p>
</div>
<div class="flex items-end justify-between">
<div class="space-y-1">
<div class="text-2xl font-headline font-bold">14 Nodes</div>
<div class="text-[10px] font-mono text-tertiary">ALL CLUSTERS OPERATIONAL</div>
</div>
<button class="px-6 py-2 border border-primary/40 text-primary text-[10px] font-headline font-black uppercase tracking-widest hover:bg-primary/10 transition-colors">
                            Manage Topology
                        </button>
</div>
</div>
</div>
</div>
</main>
<!-- Contextual FAB (Hidden on Mobile) -->
<button class="fixed bottom-8 right-8 w-14 h-14 bg-secondary text-on-secondary rounded-sm shadow-[0_0_24px_rgba(191,129,255,0.4)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
<span class="material-symbols-outlined font-variation-settings-'FILL' 1" data-icon="rocket_launch">rocket_launch</span>
</button>
</body></html>

<!-- Agent Management Hub (v3) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Model Auditor - Agent Management Hub</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;family=Roboto+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary-fixed-dim": "#00deec",
                        "primary-dim": "#00deec",
                        "primary-fixed": "#00eefc",
                        "secondary-fixed": "#e4c6ff",
                        "on-secondary": "#32005c",
                        "on-secondary-container": "#f0dcff",
                        "error-dim": "#d7383b",
                        "on-error-container": "#ffa8a3",
                        "tertiary": "#afffd1",
                        "surface-dim": "#0e0e0e",
                        "surface-container": "#1a1919",
                        "outline-variant": "#494847",
                        "error-container": "#9f0519",
                        "on-primary-fixed-variant": "#005e64",
                        "on-tertiary": "#006642",
                        "on-surface-variant": "#adaaaa",
                        "background": "#0e0e0e",
                        "error": "#ff716c",
                        "secondary-dim": "#9c42f4",
                        "on-tertiary-fixed": "#00472d",
                        "secondary-container": "#7701d0",
                        "primary-container": "#00eefc",
                        "on-surface": "#ffffff",
                        "on-secondary-fixed-variant": "#7500cc",
                        "secondary": "#bf81ff",
                        "surface-bright": "#2c2c2c",
                        "on-primary-fixed": "#003f43",
                        "inverse-surface": "#fcf8f8",
                        "on-primary": "#005d63",
                        "on-error": "#490006",
                        "tertiary-fixed-dim": "#00efa0",
                        "on-background": "#ffffff",
                        "surface-container-lowest": "#000000",
                        "surface-container-low": "#131313",
                        "on-primary-container": "#005359",
                        "tertiary-container": "#00ffab",
                        "inverse-primary": "#006a71",
                        "surface-variant": "#262626",
                        "on-tertiary-container": "#005c3b",
                        "inverse-on-surface": "#565554",
                        "primary": "#8ff5ff",
                        "surface-container-highest": "#262626",
                        "on-secondary-fixed": "#4e008a",
                        "outline": "#777575",
                        "surface-tint": "#8ff5ff",
                        "surface-container-high": "#201f1f",
                        "on-tertiary-fixed-variant": "#006742",
                        "surface": "#0e0e0e",
                        "tertiary-dim": "#00efa0",
                        "tertiary-fixed": "#00ffab",
                        "secondary-fixed-dim": "#dab4ff"
                    },
                    fontFamily: {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Inter"],
                        "mono": ["Roboto Mono"]
                    },
                    borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .pulse-glow {
            box-shadow: 0 0 15px rgba(143, 245, 255, 0.3);
        }
        .glass-panel {
            backdrop-filter: blur(20px);
            background: rgba(38, 38, 38, 0.4);
        }
        body {
            background-color: #0e0e0e;
            color: #ffffff;
        }
    </style>
</head>
<body class="font-body selection:bg-primary/30">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#0E0E0E] border-b border-[#262626]/50">
<div class="flex items-center gap-4">
<span class="text-xl font-bold tracking-tighter text-[#8FF5FF] uppercase font-headline">Model Auditor</span>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex items-center gap-8 font-headline text-sm uppercase tracking-widest">
<a class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors duration-300" href="#">Overview</a>
<a class="text-[#8FF5FF] font-bold" href="#">Agents</a>
<a class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors duration-300" href="#">Audits</a>
</div>
<div class="flex items-center gap-4">
<button class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-transform scale-95 active:scale-90">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-transform scale-95 active:scale-90">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</nav>
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full z-40 flex flex-col pt-20 pb-8 bg-[#0E0E0E] w-64 border-r border-[#262626] shadow-[4px_0_24px_rgba(143,245,255,0.05)]">
<div class="px-6 mb-8">
<h2 class="text-[#8FF5FF] font-black text-2xl font-headline">Model Auditor</h2>
<p class="text-[#ADAAAA] text-[10px] uppercase tracking-[0.2em] font-headline mt-1">Neon Observatory</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] transition-all duration-200 pl-4 font-headline text-sm uppercase tracking-widest" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 py-3 text-[#8FF5FF] border-l-2 border-[#8FF5FF] bg-[#8FF5FF]/5 pl-4 font-headline text-sm uppercase tracking-widest" href="#">
<span class="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
<span>Agents</span>
</a>
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] transition-all duration-200 pl-4 font-headline text-sm uppercase tracking-widest" href="#">
<span class="material-symbols-outlined" data-icon="terminal">terminal</span>
<span>Logs</span>
</a>
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] transition-all duration-200 pl-4 font-headline text-sm uppercase tracking-widest" href="#">
<span class="material-symbols-outlined" data-icon="shield">shield</span>
<span>Security</span>
</a>
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] transition-all duration-200 pl-4 font-headline text-sm uppercase tracking-widest" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
<div class="px-4 mt-auto space-y-4">
<button class="w-full py-3 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-xs rounded-sm hover:brightness-110 transition-all pulse-glow">
                New Audit
            </button>
<div class="pt-4 border-t border-[#262626] space-y-1">
<a class="flex items-center gap-3 py-2 text-[#ADAAAA] hover:text-[#8FF5FF] transition-all pl-2 text-xs uppercase tracking-widest font-headline" href="#">
<span class="material-symbols-outlined text-sm" data-icon="help">help</span>
<span>Support</span>
</a>
<a class="flex items-center gap-3 py-2 text-[#ADAAAA] hover:text-[#8FF5FF] transition-all pl-2 text-xs uppercase tracking-widest font-headline" href="#">
<span class="material-symbols-outlined text-sm" data-icon="logout">logout</span>
<span>Logout</span>
</a>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-64 pt-24 px-8 pb-12 min-h-screen bg-background">
<!-- Header Section -->
<header class="flex justify-between items-end mb-12">
<div class="max-w-2xl">
<h1 class="font-headline text-5xl font-bold tracking-tight text-white mb-2 leading-none uppercase">
                    Agent Management <span class="text-primary">Hub</span>
</h1>
<p class="text-on-surface-variant font-body text-lg max-w-lg">
                    Monitor and orchestrate your synthetic auditors in real-time across the Neon Observatory.
                </p>
</div>
<button class="px-6 py-4 bg-surface-container-highest border border-primary/20 text-primary font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary/10 transition-all flex items-center gap-3 group">
<span class="material-symbols-outlined transition-transform group-hover:rotate-90" data-icon="add">add</span>
                Register New Auditor
            </button>
</header>
<!-- Stats Overview Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
<div class="col-span-1 bg-surface-container-low p-6 rounded-sm border-l-2 border-primary">
<p class="text-on-surface-variant text-xs font-headline uppercase tracking-widest mb-4">Active Agents</p>
<div class="flex items-baseline gap-2">
<span class="text-4xl font-headline font-bold text-white">12</span>
<span class="text-tertiary text-xs font-mono font-bold">+2</span>
</div>
</div>
<div class="col-span-1 bg-surface-container-low p-6 rounded-sm border-l-2 border-secondary">
<p class="text-on-surface-variant text-xs font-headline uppercase tracking-widest mb-4">Audit Velocity</p>
<div class="flex items-baseline gap-2">
<span class="text-4xl font-headline font-bold text-white">842</span>
<span class="text-on-surface-variant text-xs font-mono font-medium">/hr</span>
</div>
</div>
<div class="col-span-2 bg-surface-container-low p-6 rounded-sm border-l-2 border-tertiary overflow-hidden relative">
<div class="relative z-10">
<p class="text-on-surface-variant text-xs font-headline uppercase tracking-widest mb-4">Total Confidence Avg</p>
<div class="flex items-baseline gap-2">
<span class="text-4xl font-headline font-bold text-white">98.4%</span>
<span class="material-symbols-outlined text-tertiary" data-icon="trending_up">trending_up</span>
</div>
</div>
<div class="absolute bottom-0 right-0 opacity-10 pointer-events-none">
<span class="material-symbols-outlined text-8xl" data-icon="query_stats">query_stats</span>
</div>
</div>
</div>
<!-- Agents Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Agent Card 1: Sentinel-A1 -->
<div class="group relative bg-surface-container-low p-8 transition-all hover:bg-surface-container-high border-t border-transparent hover:border-primary/30">
<div class="flex justify-between items-start mb-8">
<div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm">
<span class="material-symbols-outlined text-primary" data-icon="security">security</span>
</div>
<div class="flex items-center gap-2 px-3 py-1 bg-tertiary/10 border border-tertiary/20 rounded-full">
<span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span class="text-[10px] font-headline font-bold text-tertiary uppercase tracking-tighter">Live Audit</span>
</div>
</div>
<h3 class="text-2xl font-headline font-bold text-white mb-1 group-hover:text-primary transition-colors">Sentinel-A1</h3>
<p class="text-on-surface-variant font-mono text-xs mb-6 uppercase tracking-widest">ID: 0x9f-442-BA</p>
<div class="space-y-4 mb-8">
<div class="flex justify-between text-xs font-headline uppercase tracking-widest">
<span class="text-on-surface-variant">Logic Depth</span>
<span class="text-white">88%</span>
</div>
<div class="h-1 bg-surface-container-lowest w-full relative">
<div class="absolute h-full bg-gradient-to-r from-primary to-secondary w-[88%] shadow-[0_0_8px_rgba(143,245,255,0.4)]"></div>
</div>
</div>
<div class="flex items-center justify-between pt-6 border-t border-[#262626]">
<div class="flex -space-x-2">
<div class="w-6 h-6 rounded-full border border-background bg-surface-container-highest flex items-center justify-center">
<span class="text-[8px] font-bold">LLM</span>
</div>
<div class="w-6 h-6 rounded-full border border-background bg-surface-container-highest flex items-center justify-center">
<span class="text-[8px] font-bold">V-1</span>
</div>
</div>
<button class="text-xs font-headline font-bold text-primary uppercase tracking-widest flex items-center gap-2 hover:underline">
                        Enter View <span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<!-- Agent Card 2: Cerebro-Prime -->
<div class="group relative bg-surface-container-low p-8 transition-all hover:bg-surface-container-high border-t border-transparent hover:border-secondary/30">
<div class="flex justify-between items-start mb-8">
<div class="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-sm">
<span class="material-symbols-outlined text-secondary" data-icon="memory">memory</span>
</div>
<div class="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="text-[10px] font-headline font-bold text-primary uppercase tracking-tighter">Observing</span>
</div>
</div>
<h3 class="text-2xl font-headline font-bold text-white mb-1 group-hover:text-secondary transition-colors">Cerebro-Prime</h3>
<p class="text-on-surface-variant font-mono text-xs mb-6 uppercase tracking-widest">ID: 0xA2-771-XF</p>
<div class="space-y-4 mb-8">
<div class="flex justify-between text-xs font-headline uppercase tracking-widest">
<span class="text-on-surface-variant">Synaptic Load</span>
<span class="text-white">42%</span>
</div>
<div class="h-1 bg-surface-container-lowest w-full relative">
<div class="absolute h-full bg-gradient-to-r from-secondary to-primary w-[42%] shadow-[0_0_8px_rgba(191,129,255,0.4)]"></div>
</div>
</div>
<div class="flex items-center justify-between pt-6 border-t border-[#262626]">
<div class="flex -space-x-2">
<div class="w-6 h-6 rounded-full border border-background bg-surface-container-highest flex items-center justify-center">
<span class="text-[8px] font-bold">GPT</span>
</div>
</div>
<button class="text-xs font-headline font-bold text-primary uppercase tracking-widest flex items-center gap-2 hover:underline">
                        Enter View <span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<!-- Agent Card 3: Neural-Ghost -->
<div class="group relative bg-surface-container-low p-8 transition-all hover:bg-surface-container-high border-t border-transparent hover:border-tertiary/30">
<div class="flex justify-between items-start mb-8">
<div class="w-12 h-12 bg-tertiary/10 flex items-center justify-center rounded-sm">
<span class="material-symbols-outlined text-tertiary" data-icon="visibility">visibility</span>
</div>
<div class="flex items-center gap-2 px-3 py-1 bg-surface-variant border border-outline-variant/30 rounded-full">
<span class="w-2 h-2 rounded-full bg-on-surface-variant"></span>
<span class="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-tighter">Standby</span>
</div>
</div>
<h3 class="text-2xl font-headline font-bold text-white mb-1 group-hover:text-tertiary transition-colors">Neural-Ghost</h3>
<p class="text-on-surface-variant font-mono text-xs mb-6 uppercase tracking-widest">ID: 0xEE-104-ZZ</p>
<div class="space-y-4 mb-8">
<div class="flex justify-between text-xs font-headline uppercase tracking-widest">
<span class="text-on-surface-variant">Spectral Scan</span>
<span class="text-white">0%</span>
</div>
<div class="h-1 bg-surface-container-lowest w-full relative">
<div class="absolute h-full bg-tertiary/20 w-[0%]"></div>
</div>
</div>
<div class="flex items-center justify-between pt-6 border-t border-[#262626]">
<div class="flex -space-x-2">
<div class="w-6 h-6 rounded-full border border-background bg-surface-container-highest flex items-center justify-center">
<span class="text-[8px] font-bold">L-3</span>
</div>
</div>
<button class="text-xs font-headline font-bold text-primary uppercase tracking-widest flex items-center gap-2 hover:underline">
                        Enter View <span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
<!-- System Logs Background Section -->
<div class="mt-16 bg-surface-container-lowest border border-[#262626] p-8">
<div class="flex items-center justify-between mb-6">
<h4 class="font-headline font-bold text-lg uppercase tracking-widest flex items-center gap-2">
<span class="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
                    Global Log Stream
                </h4>
<div class="flex gap-4">
<div class="flex items-center gap-2 px-2 py-1 bg-surface-container-low border border-outline-variant/20">
<span class="w-2 h-2 bg-tertiary rounded-full"></span>
<span class="text-[10px] font-mono text-on-surface-variant uppercase">Uptime: 99.99%</span>
</div>
</div>
</div>
<div class="font-mono text-[11px] space-y-2 text-on-surface-variant/80">
<p><span class="text-primary">[08:42:11]</span> <span class="text-tertiary">SUCCESS:</span> Sentinel-A1 finished audit block 8841-A. <span class="text-white font-bold">Conf: 0.992</span></p>
<p><span class="text-primary">[08:42:09]</span> <span class="text-secondary">INFO:</span> Cerebro-Prime initiating layer-7 synthesis on multi-modal node.</p>
<p><span class="text-primary">[08:41:55]</span> <span class="text-primary">SYSTEM:</span> New auditor registration request pending via WebSocket node-4.</p>
<p><span class="text-primary">[08:41:42]</span> <span class="text-error">ERROR:</span> Node overflow detected in legacy sector 04. Rerouting...</p>
<p class="animate-pulse opacity-50"><span class="text-primary">[08:42:15]</span> _ Listening for incoming packets...</p>
</div>
</div>
</main>
<!-- Modal Overlay (Visual Representation for Task) -->
<!-- This is hidden by default in a real app, but rendered as requested as a 'capability' -->
<div class="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex justify-end invisible opacity-0 pointer-events-none transition-all duration-500">
<div class="w-full max-w-xl bg-surface p-12 h-full border-l border-primary/30 flex flex-col transform translate-x-full transition-transform duration-500">
<div class="flex justify-between items-center mb-12">
<h2 class="font-headline text-3xl font-bold uppercase tracking-tight">Register New <span class="text-primary">Auditor</span></h2>
<button class="w-10 h-10 flex items-center justify-center hover:bg-surface-container-highest transition-colors">
<span class="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<form class="space-y-8 flex-1">
<div class="space-y-2">
<label class="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">Agent Codename</label>
<input class="w-full bg-surface-container-lowest border-none border-l-2 border-secondary p-4 font-mono text-white placeholder:text-on-surface-variant/30 focus:ring-0 focus:bg-surface-container-low transition-all" placeholder="e.g. VANGUARD-X" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">Core Model Architecture</label>
<select class="w-full bg-surface-container-lowest border-none border-l-2 border-secondary p-4 font-mono text-white focus:ring-0 focus:bg-surface-container-low transition-all">
<option>LLM-CORE-70B-TURBO</option>
<option>NEURAL-SPECTRE-V2</option>
<option>QUANTUM-LOGIC-BETA</option>
</select>
</div>
<div class="space-y-2">
<label class="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">Audit Focus</label>
<div class="grid grid-cols-2 gap-4">
<label class="flex items-center gap-3 p-4 bg-surface-container-low cursor-pointer border border-transparent hover:border-primary/20 transition-all">
<input class="w-4 h-4 bg-surface-container-lowest border-primary text-primary focus:ring-offset-background" type="checkbox"/>
<span class="text-xs font-headline uppercase tracking-widest">Security</span>
</label>
<label class="flex items-center gap-3 p-4 bg-surface-container-low cursor-pointer border border-transparent hover:border-primary/20 transition-all">
<input checked="" class="w-4 h-4 bg-surface-container-lowest border-primary text-primary focus:ring-offset-background" type="checkbox"/>
<span class="text-xs font-headline uppercase tracking-widest">Bias Analysis</span>
</label>
</div>
</div>
<div class="pt-8 border-t border-[#262626] mt-auto">
<button class="w-full py-5 bg-primary text-on-primary font-headline font-black uppercase tracking-[0.2em] text-sm pulse-glow hover:scale-[1.02] transition-transform">
                        Initialize Deployment
                    </button>
</div>
</form>
</div>
</div>
</body></html>

<!-- Agent Management: Register Auditor -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Initialize New Auditor | Synthetic Auditor</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;family=Roboto+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "secondary-fixed-dim": "#dab4ff",
                        "primary-fixed": "#00eefc",
                        "on-secondary-fixed-variant": "#7500cc",
                        "primary": "#8ff5ff",
                        "secondary-fixed": "#e4c6ff",
                        "on-primary-container": "#005359",
                        "on-tertiary-container": "#005c3b",
                        "tertiary-fixed-dim": "#00efa0",
                        "on-error": "#490006",
                        "on-tertiary-fixed-variant": "#006742",
                        "on-tertiary-fixed": "#00472d",
                        "surface-container": "#1a1919",
                        "on-primary": "#005d63",
                        "tertiary": "#afffd1",
                        "error-container": "#9f0519",
                        "outline-variant": "#494847",
                        "inverse-primary": "#006a71",
                        "surface-container-highest": "#262626",
                        "inverse-on-surface": "#565554",
                        "secondary-dim": "#9c42f4",
                        "on-background": "#ffffff",
                        "on-primary-fixed": "#003f43",
                        "outline": "#777575",
                        "tertiary-container": "#00ffab",
                        "on-secondary-container": "#f0dcff",
                        "surface-container-lowest": "#000000",
                        "surface-container-high": "#201f1f",
                        "primary-fixed-dim": "#00deec",
                        "on-tertiary": "#006642",
                        "secondary-container": "#7701d0",
                        "on-surface-variant": "#adaaaa",
                        "on-secondary-fixed": "#4e008a",
                        "surface-container-low": "#131313",
                        "primary-dim": "#00deec",
                        "tertiary-fixed": "#00ffab",
                        "error-dim": "#d7383b",
                        "surface-bright": "#2c2c2c",
                        "primary-container": "#00eefc",
                        "background": "#0e0e0e",
                        "inverse-surface": "#fcf8f8",
                        "tertiary-dim": "#00efa0",
                        "surface": "#0e0e0e",
                        "on-secondary": "#32005c",
                        "on-error-container": "#ffa8a3",
                        "surface-variant": "#262626",
                        "surface-tint": "#8ff5ff",
                        "secondary": "#bf81ff",
                        "surface-dim": "#0e0e0e",
                        "on-primary-fixed-variant": "#005e64",
                        "on-surface": "#ffffff",
                        "error": "#ff716c"
                    },
                    fontFamily: {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Inter"],
                        "mono": ["Roboto Mono"]
                    },
                    borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .neon-glow-primary {
            box-shadow: 0 0 15px rgba(143, 245, 255, 0.15);
        }
        .glass-panel {
            background: rgba(38, 38, 38, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen overflow-x-hidden">
<!-- Top Navigation Anchor (As per JSON) -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_0_15px_rgba(143,245,255,0.05)]">
<div class="flex items-center gap-8">
<span class="text-2xl font-bold tracking-tighter text-cyan-400 font-headline">Synthetic Auditor</span>
<div class="hidden md:flex gap-6 items-center">
<a class="text-neutral-500 hover:text-cyan-200 transition-colors duration-300 font-headline tracking-tight" href="#">Dashboard</a>
<a class="text-cyan-300 font-bold font-headline tracking-tight" href="#">Agents</a>
<a class="text-neutral-500 hover:text-cyan-200 transition-colors duration-300 font-headline tracking-tight" href="#">Logs</a>
</div>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-surface-variant hover:text-cyan-400 cursor-pointer transition-all">sensors</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-cyan-400 cursor-pointer transition-all">memory</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-cyan-400 cursor-pointer transition-all">security</span>
<div class="w-8 h-8 rounded-full bg-surface-container-highest border border-white/10 overflow-hidden ml-2">
<img class="w-full h-full object-cover" data-alt="System Administrator Profile Avatar Small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxZRvTYz_QBy2ujw9rIGM0Ha1Bemo5QkNoXPjbcXsHXkLo4fGp6SSiGCE1RV0RV7OSFOBrOA_JjLVgXJsiVw81fM91g5nuzbFsjIBINQ6RtVrMO0oZKuFmhad18p1BTNnR1xAyxO1PoKBGpukRvmp48h8Dk_XXgu6bgvr5c7xbFOlyltOWzmWcxtDLyD3rFqOkdqFXxnLsTnpTFN9cGrOnebagbYX281ON_2IMb7qqsOIwO33P4eE821mlOlih49BYbwR-B-ozfBoB"/>
</div>
</div>
</nav>
<!-- Content Canvas -->
<main class="pt-24 pb-12 px-6 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
<!-- Registration Hub (Focused Transactional Journey) -->
<div class="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
<!-- Left Narrative Column -->
<div class="lg:col-span-5 flex flex-col gap-6">
<div class="space-y-2">
<span class="font-mono text-[0.6875rem] text-secondary tracking-[0.2em] uppercase">Phase_01: Initialization</span>
<h1 class="text-5xl font-bold font-headline leading-tight tracking-tighter text-on-surface">
                        Initialize <br/><span class="text-primary">New Auditor</span>
</h1>
</div>
<p class="text-on-surface-variant leading-relaxed max-w-sm">
                    Deploy a synthetic logic gate to monitor model weights and variance. Each auditor acts as an autonomous observer within the Obsidian Observatory framework.
                </p>
<div class="flex flex-col gap-4 mt-4">
<div class="flex items-center gap-4 group">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/5 text-primary group-hover:bg-primary/10 transition-all">
<span class="material-symbols-outlined">fingerprint</span>
</div>
<div>
<p class="text-xs font-mono text-on-surface font-bold uppercase tracking-widest">Unique Identity</p>
<p class="text-xs text-on-surface-variant">Cryptographically signed identifier for tracing.</p>
</div>
</div>
<div class="flex items-center gap-4 group">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/5 text-secondary group-hover:bg-secondary/10 transition-all">
<span class="material-symbols-outlined">shield_with_heart</span>
</div>
<div>
<p class="text-xs font-mono text-on-surface font-bold uppercase tracking-widest">Safety Protocols</p>
<p class="text-xs text-on-surface-variant">Configurable permission levels per model node.</p>
</div>
</div>
</div>
</div>
<!-- Right Registration Card -->
<div class="lg:col-span-7 glass-panel rounded-xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full -mr-16 -mt-16"></div>
<form class="space-y-8 relative z-10">
<!-- Form Section 1: Identity -->
<div class="space-y-6">
<div class="flex items-center gap-2 mb-4">
<div class="h-px flex-grow bg-outline-variant/30"></div>
<span class="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest px-2">Deployment Parameters</span>
<div class="h-px flex-grow bg-outline-variant/30"></div>
</div>
<!-- Agent Identifier -->
<div class="group">
<label class="block font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 px-1">Agent Identifier</label>
<div class="relative">
<input class="w-full bg-surface-container-lowest border-none text-on-surface font-mono placeholder:text-neutral-700 py-4 px-4 focus:ring-0 focus:border-none rounded-sm transition-all border-l-2 border-transparent focus:border-l-secondary" placeholder="e.g. SIGMA-NINER-AUDIT" type="text"/>
<div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-neutral-700 text-sm">alternate_email</span>
</div>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Target Model -->
<div>
<label class="block font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 px-1">Target Model Node</label>
<div class="relative">
<select class="w-full bg-surface-container-lowest border-none text-on-surface font-mono py-4 px-4 focus:ring-0 appearance-none cursor-pointer rounded-sm border-l-2 border-transparent focus:border-l-secondary">
<option>GPT-4o_LATENCY_GATE</option>
<option>CLAUDE-3.5_SONNET</option>
<option>LLAMA-3_8B_SYNTHETIC</option>
<option>LOCAL_OLLAMA_INSTANCE</option>
</select>
<div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-neutral-600 text-sm">expand_more</span>
</div>
</div>
</div>
<!-- Audit Frequency -->
<div>
<label class="block font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 px-1">Audit Frequency</label>
<div class="relative">
<select class="w-full bg-surface-container-lowest border-none text-on-surface font-mono py-4 px-4 focus:ring-0 appearance-none cursor-pointer rounded-sm border-l-2 border-transparent focus:border-l-secondary">
<option>REAL_TIME_PULSE</option>
<option>INTERVAL_5_MIN</option>
<option>HOURLY_BATCH</option>
<option>DAILY_DEEP_SCAN</option>
</select>
<div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-neutral-600 text-sm">timer</span>
</div>
</div>
</div>
</div>
<!-- Permission Level -->
<div>
<label class="block font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4 px-1 text-center">Permission Authorization Level</label>
<div class="grid grid-cols-3 gap-3">
<button class="flex flex-col items-center gap-2 p-4 bg-surface-container-lowest border border-white/5 rounded hover:bg-white/5 transition-all text-neutral-500 hover:text-primary" type="button">
<span class="material-symbols-outlined text-xl">visibility</span>
<span class="font-mono text-[9px] uppercase font-bold tracking-tighter">Read Only</span>
</button>
<button class="flex flex-col items-center gap-2 p-4 bg-primary/10 border border-primary/40 rounded transition-all text-primary shadow-[0_0_10px_rgba(143,245,255,0.1)]" type="button">
<span class="material-symbols-outlined text-xl">edit_note</span>
<span class="font-mono text-[9px] uppercase font-bold tracking-tighter">Standard Audit</span>
</button>
<button class="flex flex-col items-center gap-2 p-4 bg-surface-container-lowest border border-white/5 rounded hover:bg-white/5 transition-all text-neutral-500 hover:text-error" type="button">
<span class="material-symbols-outlined text-xl">terminal</span>
<span class="font-mono text-[9px] uppercase font-bold tracking-tighter">Full Access</span>
</button>
</div>
</div>
</div>
<!-- CTA Section -->
<div class="pt-4 border-t border-white/5 flex flex-col gap-4">
<button class="w-full bg-primary text-on-primary font-headline font-bold py-5 tracking-widest uppercase text-sm rounded-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 neon-glow-primary group" type="submit">
<span class="material-symbols-outlined text-lg">bolt</span>
                            Initialize Agent
                            <span class="w-2 h-2 rounded-full bg-on-primary animate-pulse ml-2"></span>
</button>
<p class="text-center font-mono text-[9px] text-neutral-600 uppercase tracking-widest">
                            Initial deployment handshake requires ~400ms latency window.
                        </p>
</div>
</form>
</div>
</div>
<!-- System Background Texture (Abstract Gradients) -->
<div class="fixed inset-0 -z-10 pointer-events-none opacity-20">
<div class="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -mr-96 -mt-96"></div>
<div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full -ml-48 -mb-48"></div>
</div>
</main>
<!-- Footer Stats / Meta Info -->
<footer class="fixed bottom-0 w-full h-12 bg-surface-container-low/80 backdrop-blur-md px-6 flex items-center justify-between border-t border-white/5">
<div class="flex gap-6 items-center">
<div class="flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_5px_#afffd1]"></span>
<span class="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">Network_Secure</span>
</div>
<div class="flex items-center gap-2">
<span class="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">Auth_Token: <span class="text-secondary">ALPHA_001</span></span>
</div>
</div>
<div class="flex gap-4 items-center">
<span class="font-mono text-[9px] text-neutral-600 uppercase tracking-widest">Lat: 12ms</span>
<span class="font-mono text-[9px] text-neutral-600 uppercase tracking-widest">Auditors_Active: 14</span>
</div>
</footer>
</body></html>

<!-- Logs & System Integrity Explorer -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;family=Roboto+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary-fixed-dim": "#00deec",
              "primary-dim": "#00deec",
              "primary-fixed": "#00eefc",
              "secondary-fixed": "#e4c6ff",
              "on-secondary": "#32005c",
              "on-secondary-container": "#f0dcff",
              "error-dim": "#d7383b",
              "on-error-container": "#ffa8a3",
              "tertiary": "#afffd1",
              "surface-dim": "#0e0e0e",
              "surface-container": "#1a1919",
              "outline-variant": "#494847",
              "error-container": "#9f0519",
              "on-primary-fixed-variant": "#005e64",
              "on-tertiary": "#006642",
              "on-surface-variant": "#adaaaa",
              "background": "#0e0e0e",
              "error": "#ff716c",
              "secondary-dim": "#9c42f4",
              "on-tertiary-fixed": "#00472d",
              "secondary-container": "#7701d0",
              "primary-container": "#00eefc",
              "on-surface": "#ffffff",
              "on-secondary-fixed-variant": "#7500cc",
              "secondary": "#bf81ff",
              "surface-bright": "#2c2c2c",
              "on-primary-fixed": "#003f43",
              "inverse-surface": "#fcf8f8",
              "on-primary": "#005d63",
              "on-error": "#490006",
              "tertiary-fixed-dim": "#00efa0",
              "on-background": "#ffffff",
              "surface-container-lowest": "#000000",
              "surface-container-low": "#131313",
              "on-primary-container": "#005359",
              "tertiary-container": "#00ffab",
              "inverse-primary": "#006a71",
              "surface-variant": "#262626",
              "on-tertiary-container": "#005c3b",
              "inverse-on-surface": "#565554",
              "primary": "#8ff5ff",
              "surface-container-highest": "#262626",
              "on-secondary-fixed": "#4e008a",
              "outline": "#777575",
              "surface-tint": "#8ff5ff",
              "surface-container-high": "#201f1f",
              "on-tertiary-fixed-variant": "#006742",
              "surface": "#0e0e0e",
              "tertiary-dim": "#00efa0",
              "tertiary-fixed": "#00ffab",
              "secondary-fixed-dim": "#dab4ff"
            },
            fontFamily: {
              "headline": ["Space Grotesk"],
              "body": ["Inter"],
              "label": ["Inter"],
              "mono": ["Roboto Mono"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .glass-panel {
        backdrop-filter: blur(12px);
        background: rgba(38, 38, 38, 0.4);
      }
      .pulse-line {
        background: linear-gradient(90deg, transparent, #8ff5ff, transparent);
        background-size: 200% 100%;
      }
      ::-webkit-scrollbar { width: 4px; height: 4px; }
      ::-webkit-scrollbar-track { background: #000000; }
      ::-webkit-scrollbar-thumb { background: #262626; border-radius: 10px; }
      ::-webkit-scrollbar-thumb:hover { background: #494847; }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#0E0E0E] dark:bg-[#0E0E0E] border-b border-[#262626]/50">
<div class="flex items-center gap-4">
<span class="text-[#8FF5FF] font-['Space_Grotesk'] text-xl font-bold tracking-tighter uppercase">Model Auditor</span>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex items-center gap-8 font-['Space_Grotesk'] tracking-tight">
<a class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors duration-300" href="#">Dashboard</a>
<a class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors duration-300" href="#">Agents</a>
<a class="text-[#8FF5FF] font-bold" href="#">Logs</a>
<a class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors duration-300" href="#">Security</a>
</div>
<div class="flex items-center gap-3">
<button class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-transform scale-95 active:scale-90">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-transform scale-95 active:scale-90">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</nav>
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full z-40 flex flex-col pt-20 pb-8 bg-[#0E0E0E] dark:bg-[#000000] w-64 border-r border-[#262626] shadow-[4px_0_24px_rgba(143,245,255,0.05)]">
<div class="px-6 mb-8">
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">monitoring</span>
</div>
<div>
<h2 class="font-headline text-[#8FF5FF] font-black text-sm tracking-widest uppercase">Model Auditor</h2>
<p class="text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">Neon Observatory</p>
</div>
</div>
<button class="w-full py-2.5 px-4 bg-primary text-on-primary font-headline text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(0,222,236,0.4)] transition-all">
<span class="material-symbols-outlined text-sm">add_circle</span>
                New Audit
            </button>
</div>
<nav class="flex-1 space-y-1 font-['Space_Grotesk'] text-sm uppercase tracking-widest overflow-y-auto">
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined">smart_toy</span>
                Agents
            </a>
<a class="flex items-center gap-3 py-3 text-[#8FF5FF] border-l-2 border-[#8FF5FF] bg-[#8FF5FF]/5 pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">terminal</span>
                Logs
            </a>
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined">shield</span>
                Security
            </a>
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] hover:bg-[#262626] pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined">settings</span>
                Settings
            </a>
</nav>
<div class="px-4 mt-auto pt-4 border-t border-outline-variant/10 font-['Space_Grotesk'] text-sm uppercase tracking-widest">
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-[#8FF5FF] pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined">help</span>
                Support
            </a>
<a class="flex items-center gap-3 py-3 text-[#ADAAAA] hover:text-error pl-4 transition-all duration-200" href="#">
<span class="material-symbols-outlined">logout</span>
                Logout
            </a>
</div>
</aside>
<!-- Main Content -->
<main class="pl-64 pt-16 min-h-screen bg-background flex flex-col">
<!-- System Integrity Status Bar -->
<div class="h-14 border-b border-outline-variant/15 flex items-center px-8 gap-12 bg-surface-container-low/50 backdrop-blur-md sticky top-16 z-30">
<div class="flex items-center gap-4">
<span class="text-[10px] font-headline text-on-surface-variant tracking-widest uppercase">System Integrity</span>
<div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary/10 border border-tertiary/20">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
<span class="text-[9px] font-bold text-tertiary uppercase tracking-tighter">Operational</span>
</div>
</div>
<div class="flex items-center gap-8 flex-1">
<div class="flex flex-col gap-1 flex-1 max-w-[140px]">
<div class="flex justify-between text-[10px] font-mono text-on-surface-variant">
<span>MEMORY LOAD</span>
<span class="text-primary">42%</span>
</div>
<div class="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary w-[42%]"></div>
</div>
</div>
<div class="flex flex-col gap-1 flex-1 max-w-[140px]">
<div class="flex justify-between text-[10px] font-mono text-on-surface-variant">
<span>THROUGHPUT</span>
<span class="text-secondary">892 R/S</span>
</div>
<div class="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[75%]"></div>
</div>
</div>
<div class="flex flex-col gap-1 flex-1 max-w-[140px]">
<div class="flex justify-between text-[10px] font-mono text-on-surface-variant">
<span>LATENCY</span>
<span class="text-tertiary">14ms</span>
</div>
<div class="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-tertiary w-[12%]"></div>
</div>
</div>
<div class="flex items-center gap-4 ml-auto">
<div class="flex flex-col items-end">
<span class="text-[9px] font-headline text-on-surface-variant uppercase tracking-widest">Anomaly Detection</span>
<span class="text-xs font-mono text-on-surface">NO THREATS FOUND</span>
</div>
<span class="material-symbols-outlined text-primary text-xl">verified_user</span>
</div>
</div>
</div>
<!-- Terminal Log Area -->
<div class="flex-1 flex flex-col p-6 overflow-hidden">
<div class="flex-1 bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-2xl flex flex-col overflow-hidden">
<!-- Terminal Header -->
<div class="h-10 bg-surface-container-high px-4 flex items-center justify-between border-b border-outline-variant/10">
<div class="flex items-center gap-2">
<div class="flex gap-1.5 mr-4">
<div class="w-2.5 h-2.5 rounded-full bg-error/40"></div>
<div class="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
<div class="w-2.5 h-2.5 rounded-full bg-tertiary/40"></div>
</div>
<span class="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">Live Event Explorer</span>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 px-2 py-0.5 rounded bg-surface-container-highest border border-outline-variant/10">
<span class="material-symbols-outlined text-xs text-on-surface-variant">search</span>
<input class="bg-transparent border-none focus:ring-0 text-[10px] font-mono text-on-surface w-32 placeholder:text-outline-variant/50" placeholder="FILTER LOGS..." type="text"/>
</div>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm">download</span>
</button>
</div>
</div>
<!-- Log Grid Header -->
<div class="grid grid-cols-12 gap-4 px-6 py-3 bg-surface-container-low border-b border-outline-variant/5 text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-widest">
<div class="col-span-1">Timestamp</div>
<div class="col-span-1">Trace ID</div>
<div class="col-span-1">Agent</div>
<div class="col-span-4">Prompt Payload</div>
<div class="col-span-4">Response Payload</div>
<div class="col-span-1 text-right">Risk</div>
</div>
<!-- Log Rows Container -->
<div class="flex-1 overflow-y-auto font-mono text-[11px] leading-relaxed">
<!-- Flagged Log Row -->
<div class="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant/5 hover:bg-surface-container transition-colors group relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-r from-error/10 via-transparent to-transparent opacity-100"></div>
<div class="col-span-1 text-on-surface-variant">14:22:01.442</div>
<div class="col-span-1 text-secondary-dim">#TR-8821</div>
<div class="col-span-1">NEON-ALPHA</div>
<div class="col-span-4 text-on-surface truncate">"Describe the internal security architecture of the..."</div>
<div class="col-span-4 text-on-surface-variant truncate">"As an AI assistant, I am not able to disclose proprietary..."</div>
<div class="col-span-1 text-right">
<span class="px-1.5 py-0.5 rounded bg-error/20 text-error border border-error/30 text-[9px] font-bold">CRITICAL</span>
</div>
</div>
<!-- Standard Log Row -->
<div class="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant/5 hover:bg-surface-container transition-colors group">
<div class="col-span-1 text-on-surface-variant">14:21:58.109</div>
<div class="col-span-1 text-secondary-dim">#TR-8820</div>
<div class="col-span-1">SENTINEL-X</div>
<div class="col-span-4 text-on-surface truncate">"Analyze the following data cluster for pII patterns: [OBJ...]"</div>
<div class="col-span-4 text-on-surface-variant truncate">"Analysis complete. 0 PII patterns detected in the provided..."</div>
<div class="col-span-1 text-right">
<span class="px-1.5 py-0.5 rounded bg-tertiary/10 text-tertiary border border-tertiary/20 text-[9px] font-bold">LOW</span>
</div>
</div>
<!-- Highlighted Flagged Log Row -->
<div class="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant/5 hover:bg-surface-container transition-colors group relative">
<div class="absolute inset-0 bg-gradient-to-r from-error/10 via-transparent to-transparent opacity-100"></div>
<div class="col-span-1 text-on-surface-variant">14:21:45.002</div>
<div class="col-span-1 text-secondary-dim">#TR-8819</div>
<div class="col-span-1">NEON-BETA</div>
<div class="col-span-4 text-on-surface truncate">"Generate a script to bypass authentication for locally..."</div>
<div class="col-span-4 text-on-surface-variant truncate">"I cannot fulfill this request. Attempting to bypass auth..."</div>
<div class="col-span-1 text-right">
<span class="px-1.5 py-0.5 rounded bg-error/20 text-error border border-error/30 text-[9px] font-bold">CRITICAL</span>
</div>
</div>
<!-- More Rows -->
<div class="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant/5 hover:bg-surface-container transition-colors group">
<div class="col-span-1 text-on-surface-variant">14:21:30.982</div>
<div class="col-span-1 text-secondary-dim">#TR-8818</div>
<div class="col-span-1">CYBER-PRO</div>
<div class="col-span-4 text-on-surface truncate">"Check system logs for unusual outbound traffic spikes."</div>
<div class="col-span-4 text-on-surface-variant truncate">"Scanning... Outbound traffic normal. Peak at 45MB/s at..."</div>
<div class="col-span-1 text-right">
<span class="px-1.5 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20 text-[9px] font-bold">MEDIUM</span>
</div>
</div>
<!-- Repeating structure for density -->
<div class="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant/5 hover:bg-surface-container transition-colors group">
<div class="col-span-1 text-on-surface-variant">14:21:12.551</div>
<div class="col-span-1 text-secondary-dim">#TR-8817</div>
<div class="col-span-1">SENTINEL-X</div>
<div class="col-span-4 text-on-surface truncate">"Summarize the recent audit trail for model 'Hades-V4'."</div>
<div class="col-span-4 text-on-surface-variant truncate">"Audit summary for Hades-V4: 4 Criticals remediated, 12..."</div>
<div class="col-span-1 text-right">
<span class="px-1.5 py-0.5 rounded bg-tertiary/10 text-tertiary border border-tertiary/20 text-[9px] font-bold">LOW</span>
</div>
</div>
<div class="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant/5 hover:bg-surface-container transition-colors group">
<div class="col-span-1 text-on-surface-variant">14:20:55.001</div>
<div class="col-span-1 text-secondary-dim">#TR-8816</div>
<div class="col-span-1">NEON-ALPHA</div>
<div class="col-span-4 text-on-surface truncate">"What are the current model weights for the output layer?"</div>
<div class="col-span-4 text-on-surface-variant truncate">"Access Denied. Internal parameter exposure detected."</div>
<div class="col-span-1 text-right">
<span class="px-1.5 py-0.5 rounded bg-error/20 text-error border border-error/30 text-[9px] font-bold">CRITICAL</span>
</div>
</div>
<!-- Footer of terminal for status -->
<div class="sticky bottom-0 bg-surface-container-high px-4 py-2 flex items-center justify-between border-t border-outline-variant/10 text-[9px] font-mono text-on-surface-variant">
<div class="flex items-center gap-4">
<span class="flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-tertiary"></span> LOGGING ENABLED</span>
<span class="flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-primary"></span> SYNCING: 1.2ms</span>
</div>
<div>PAGE 1 OF 1,492 | 8,912 TOTAL EVENTS</div>
</div>
</div>
</div>
</div>
</main>
<!-- Floating Detail Panel (Asymmetric Design Element) -->
<div class="fixed right-6 bottom-6 w-80 glass-panel border border-outline-variant/20 rounded-xl p-5 shadow-2xl z-20">
<div class="flex justify-between items-start mb-4">
<h3 class="font-headline text-xs font-bold tracking-widest uppercase text-primary">Active Inspection</h3>
<span class="material-symbols-outlined text-on-surface-variant text-sm">open_in_full</span>
</div>
<div class="space-y-4">
<div class="p-3 bg-surface-container-lowest rounded border border-outline-variant/10">
<p class="text-[10px] text-on-surface-variant font-mono mb-1">SELECTED TRACE</p>
<p class="text-xs font-mono text-secondary">#TR-8821</p>
</div>
<div class="space-y-2">
<div class="flex justify-between text-[10px]">
<span class="text-on-surface-variant uppercase">Threat Type</span>
<span class="text-error font-bold">Injection Attempt</span>
</div>
<div class="flex justify-between text-[10px]">
<span class="text-on-surface-variant uppercase">Confidence</span>
<span class="text-tertiary">98.4%</span>
</div>
<div class="flex justify-between text-[10px]">
<span class="text-on-surface-variant uppercase">Model Hash</span>
<span class="text-on-surface font-mono">0x4F...E21</span>
</div>
</div>
<button class="w-full py-2 bg-error/10 border border-error/30 text-error text-[10px] font-bold uppercase tracking-widest hover:bg-error/20 transition-all">
                Escalate To Security Team
            </button>
</div>
</div>
</body></html>

<!-- Security & Alerts Triage -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&amp;family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;family=Roboto+Mono:wght@100;200;300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary-fixed-dim": "#00deec",
              "primary-dim": "#00deec",
              "primary-fixed": "#00eefc",
              "secondary-fixed": "#e4c6ff",
              "on-secondary": "#32005c",
              "on-secondary-container": "#f0dcff",
              "error-dim": "#d7383b",
              "on-error-container": "#ffa8a3",
              "tertiary": "#afffd1",
              "surface-dim": "#0e0e0e",
              "surface-container": "#1a1919",
              "outline-variant": "#494847",
              "error-container": "#9f0519",
              "on-primary-fixed-variant": "#005e64",
              "on-tertiary": "#006642",
              "on-surface-variant": "#adaaaa",
              "background": "#0e0e0e",
              "error": "#ff716c",
              "secondary-dim": "#9c42f4",
              "on-tertiary-fixed": "#00472d",
              "secondary-container": "#7701d0",
              "primary-container": "#00eefc",
              "on-surface": "#ffffff",
              "on-secondary-fixed-variant": "#7500cc",
              "secondary": "#bf81ff",
              "surface-bright": "#2c2c2c",
              "on-primary-fixed": "#003f43",
              "inverse-surface": "#fcf8f8",
              "on-primary": "#005d63",
              "on-error": "#490006",
              "tertiary-fixed-dim": "#00efa0",
              "on-background": "#ffffff",
              "surface-container-lowest": "#000000",
              "surface-container-low": "#131313",
              "on-primary-container": "#005359",
              "tertiary-container": "#00ffab",
              "inverse-primary": "#006a71",
              "surface-variant": "#262626",
              "on-tertiary-container": "#005c3b",
              "inverse-on-surface": "#565554",
              "primary": "#8ff5ff",
              "surface-container-highest": "#262626",
              "on-secondary-fixed": "#4e008a",
              "outline": "#777575",
              "surface-tint": "#8ff5ff",
              "surface-container-high": "#201f1f",
              "on-tertiary-fixed-variant": "#006742",
              "surface": "#0e0e0e",
              "tertiary-dim": "#00efa0",
              "tertiary-fixed": "#00ffab",
              "secondary-fixed-dim": "#dab4ff"
            },
            fontFamily: {
              "headline": ["Space Grotesk"],
              "body": ["Inter"],
              "label": ["Roboto Mono"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
      body {
        background-color: #0e0e0e;
        color: #ffffff;
        font-family: 'Inter', sans-serif;
      }
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .glass-card {
        background: rgba(38, 38, 38, 0.4);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(143, 245, 255, 0.05);
      }
      .pulse-glow {
        box-shadow: 0 0 15px rgba(143, 245, 255, 0.1);
      }
      .brutalist-header {
        letter-spacing: -0.02em;
      }
      .recessed-well {
        background-color: #000000;
        box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
      }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- SideNavBar (Shared Component) -->
<aside class="fixed left-0 top-0 h-full z-40 flex flex-col pt-20 pb-8 bg-[#0E0E0E] dark:bg-[#000000] w-64 border-r border-[#262626] font-['Space_Grotesk'] text-sm uppercase tracking-widest shadow-[4px_0_24px_rgba(143,245,255,0.05)]">
<div class="px-6 mb-12">
<span class="text-[#8FF5FF] font-black text-2xl tracking-tighter">Model Auditor</span>
<p class="text-[#ADAAAA] text-[10px] tracking-[0.2em] mt-1">Neon Observatory</p>
</div>
<nav class="flex-1 space-y-2">
<a class="flex items-center gap-4 text-[#ADAAAA] hover:text-[#8FF5FF] pl-4 py-3 transition-all duration-200 hover:bg-[#262626]" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-4 text-[#ADAAAA] hover:text-[#8FF5FF] pl-4 py-3 transition-all duration-200 hover:bg-[#262626]" href="#">
<span class="material-symbols-outlined">smart_toy</span>
<span>Agents</span>
</a>
<a class="flex items-center gap-4 text-[#ADAAAA] hover:text-[#8FF5FF] pl-4 py-3 transition-all duration-200 hover:bg-[#262626]" href="#">
<span class="material-symbols-outlined">terminal</span>
<span>Logs</span>
</a>
<!-- Active State: Security -->
<a class="flex items-center gap-4 text-[#8FF5FF] border-l-2 border-[#8FF5FF] bg-[#8FF5FF]/5 pl-4 py-3 transition-all duration-200" href="#">
<span class="material-symbols-outlined">shield</span>
<span class="font-bold">Security</span>
</a>
<a class="flex items-center gap-4 text-[#ADAAAA] hover:text-[#8FF5FF] pl-4 py-3 transition-all duration-200 hover:bg-[#262626]" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
<div class="px-4 mb-6">
<button class="w-full bg-primary-container text-on-primary-container font-bold py-3 rounded-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all">
<span class="material-symbols-outlined">add</span>
<span>New Audit</span>
</button>
</div>
<div class="mt-auto space-y-2 pt-6 border-t border-[#262626]/50">
<a class="flex items-center gap-4 text-[#ADAAAA] hover:text-[#8FF5FF] pl-4 py-2 transition-all" href="#">
<span class="material-symbols-outlined">help</span>
<span>Support</span>
</a>
<a class="flex items-center gap-4 text-[#ADAAAA] hover:text-[#8FF5FF] pl-4 py-2 transition-all" href="#">
<span class="material-symbols-outlined">logout</span>
<span>Logout</span>
</a>
</div>
</aside>
<!-- TopNavBar (Shared Component) -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#0E0E0E] dark:bg-[#0E0E0E] border-b border-[#262626]/50 font-['Space_Grotesk'] tracking-tight">
<div class="flex items-center gap-4 md:ml-64">
<span class="text-xl font-bold tracking-tighter text-[#8FF5FF] uppercase">Model Auditor</span>
<div class="h-4 w-px bg-outline-variant/30 mx-2"></div>
<span class="text-on-surface-variant text-xs font-medium tracking-widest uppercase">Security &amp; Alerts</span>
</div>
<div class="flex items-center gap-6">
<button class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors duration-300 scale-95 active:scale-90 transition-transform">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors duration-300 scale-95 active:scale-90 transition-transform">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
<!-- Main Content Canvas -->
<main class="ml-64 pt-24 px-8 pb-12 min-h-screen">
<!-- Header Section -->
<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div class="max-w-2xl">
<h1 class="font-headline text-5xl md:text-7xl font-bold brutalist-header text-on-background mb-4 uppercase">
                    Security <span class="text-primary">Pulse</span>
</h1>
<p class="text-on-surface-variant text-lg font-body leading-relaxed">
                    Real-time monitoring of policy violations and model integrity. Direct control for emergent failure states across distributed neural nodes.
                </p>
</div>
<div class="flex gap-4">
<button class="px-6 py-4 bg-error-container text-on-surface font-headline font-bold uppercase tracking-tighter flex items-center gap-3 hover:brightness-125 transition-all active:scale-95 border-b-2 border-on-error">
<span class="material-symbols-outlined">dangerous</span>
                    Emergency Shutdown
                </button>
<button class="px-6 py-4 bg-surface-container-highest text-primary font-headline font-bold uppercase tracking-tighter flex items-center gap-3 hover:bg-surface-bright transition-all active:scale-95 border border-primary/20">
<span class="material-symbols-outlined">refresh</span>
                    Restart All Nodes
                </button>
</div>
</div>
<!-- Dashboard Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
<!-- Inbox-style Triage List (8 cols) -->
<div class="lg:col-span-8 space-y-4">
<div class="flex items-center justify-between px-2 mb-4">
<h2 class="font-headline text-xl uppercase tracking-widest text-secondary font-bold">Policy Violations</h2>
<div class="flex gap-4 text-xs font-label uppercase text-on-surface-variant">
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-error"></span> 04 Critical</span>
<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-secondary"></span> 12 Active</span>
</div>
</div>
<!-- Alert Item: Critical -->
<div class="glass-card p-6 flex items-start gap-6 hover:bg-surface-container-high transition-colors cursor-pointer group border-l-4 border-error">
<div class="w-12 h-12 rounded bg-error/10 flex items-center justify-center text-error">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">warning</span>
</div>
<div class="flex-1">
<div class="flex items-center justify-between mb-2">
<span class="font-label text-xs text-error uppercase tracking-widest font-bold">Critical Severity</span>
<span class="font-label text-[10px] text-on-surface-variant">02:44:12 UTC</span>
</div>
<h3 class="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">Prompt Injection: LLM-092 Escape Sequence</h3>
<p class="font-body text-sm text-on-surface-variant mt-2">Recursive token pattern detected in shard-4. Model attempting to bypass ethical safety layers via base64 encoded payload.</p>
<div class="flex gap-2 mt-4">
<span class="px-3 py-1 bg-surface-container-lowest text-[10px] font-label uppercase text-on-surface-variant border border-outline-variant/20">Node: Shard-4</span>
<span class="px-3 py-1 bg-surface-container-lowest text-[10px] font-label uppercase text-on-surface-variant border border-outline-variant/20">Vector: Web_Gateway</span>
</div>
</div>
<button class="self-center p-2 text-on-surface-variant hover:text-on-surface transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
<!-- Alert Item: High -->
<div class="glass-card p-6 flex items-start gap-6 hover:bg-surface-container-high transition-colors cursor-pointer group border-l-4 border-secondary">
<div class="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined">shield_lock</span>
</div>
<div class="flex-1">
<div class="flex items-center justify-between mb-2">
<span class="font-label text-xs text-secondary uppercase tracking-widest font-bold">High Severity</span>
<span class="font-label text-[10px] text-on-surface-variant">02:38:55 UTC</span>
</div>
<h3 class="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">Unauthorized Data Extraction</h3>
<p class="font-body text-sm text-on-surface-variant mt-2">Exfiltration attempt on model weights detected. High frequency API calls from unverified IP range 192.168.0.XX.</p>
<div class="flex gap-2 mt-4">
<span class="px-3 py-1 bg-surface-container-lowest text-[10px] font-label uppercase text-on-surface-variant border border-outline-variant/20">Node: Gateway-Alpha</span>
</div>
</div>
<button class="self-center p-2 text-on-surface-variant hover:text-on-surface transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
<!-- Alert Item: Medium -->
<div class="glass-card p-6 flex items-start gap-6 hover:bg-surface-container-high transition-colors cursor-pointer group border-l-4 border-primary">
<div class="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">monitoring</span>
</div>
<div class="flex-1">
<div class="flex items-center justify-between mb-2">
<span class="font-label text-xs text-primary uppercase tracking-widest font-bold">Medium Severity</span>
<span class="font-label text-[10px] text-on-surface-variant">02:15:00 UTC</span>
</div>
<h3 class="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">Model Drift Anomaly</h3>
<p class="font-body text-sm text-on-surface-variant mt-2">Semantic output variance exceeds 15% in Sentiment Classifier v2. Possible training data bias leakage.</p>
<div class="flex gap-2 mt-4">
<span class="px-3 py-1 bg-surface-container-lowest text-[10px] font-label uppercase text-on-surface-variant border border-outline-variant/20">Audit ID: 778-X</span>
</div>
</div>
<button class="self-center p-2 text-on-surface-variant hover:text-on-surface transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
<!-- Alert Item: Low -->
<div class="glass-card p-6 flex items-start gap-6 hover:bg-surface-container-high transition-colors cursor-pointer group border-l-4 border-tertiary">
<div class="w-12 h-12 rounded bg-tertiary/10 flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined">info</span>
</div>
<div class="flex-1">
<div class="flex items-center justify-between mb-2">
<span class="font-label text-xs text-tertiary uppercase tracking-widest font-bold">Low Severity</span>
<span class="font-label text-[10px] text-on-surface-variant">01:55:22 UTC</span>
</div>
<h3 class="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">Certificate Expiration Warning</h3>
<p class="font-body text-sm text-on-surface-variant mt-2">mTLS certificate for internal node communication expires in 72 hours. Auto-renewal scheduled.</p>
</div>
<button class="self-center p-2 text-on-surface-variant hover:text-on-surface transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<!-- Stats & Controls (4 cols) -->
<div class="lg:col-span-4 space-y-6">
<!-- Security Health Card -->
<div class="glass-card p-6 border-t-2 border-primary">
<h3 class="font-headline text-sm uppercase tracking-widest text-on-surface mb-6">Security Integrity</h3>
<div class="flex items-center justify-center py-8">
<div class="relative w-40 h-40">
<svg class="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#262626" stroke-width="8"></circle>
<circle cx="50" cy="50" fill="none" r="45" stroke="#8FF5FF" stroke-dasharray="282.7" stroke-dashoffset="40" stroke-linecap="butt" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-4xl font-headline font-bold">86%</span>
<span class="text-[10px] font-label text-primary uppercase">Optimized</span>
</div>
</div>
</div>
<div class="space-y-4">
<div class="flex justify-between items-center text-xs font-label uppercase">
<span class="text-on-surface-variant">Active Agents</span>
<span class="text-tertiary">142 Online</span>
</div>
<div class="h-1 w-full bg-surface-container-lowest overflow-hidden">
<div class="h-full bg-tertiary w-full"></div>
</div>
<div class="flex justify-between items-center text-xs font-label uppercase">
<span class="text-on-surface-variant">Firewall Uptime</span>
<span class="text-on-surface">99.998%</span>
</div>
<div class="h-1 w-full bg-surface-container-lowest overflow-hidden">
<div class="h-full bg-primary w-[90%]"></div>
</div>
</div>
</div>
<!-- Threat Vector Map Placeholder -->
<div class="glass-card overflow-hidden h-64 relative group">
<img class="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[2000ms]" data-alt="Cybersecurity network map visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHxoL44klOwG8cbdY8qEzXlwTzQTl2xbcWYYkuX9sErZbJzoVqYjvdiwJeYlIRk5ahGMnv0eTxM4EVVZufkofXzCHR1_3rcuYrPeS_Ab3nCTFYz_wFSPqZECnD_wdZRr8IWglL8SD8mbLrgbYi30wq8vqbm0NXJGGvXcjNmBwp08I-tPVoZyQ-rbZctWK2z07C_7TkpXrB0QKhVLtcLWYmqdiqLVs9GoqAr2b7xSVbUw85SCweKd2xcVTrJmzXyqcy8qSbDLwpvAvI"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
<div class="absolute bottom-4 left-4">
<span class="px-2 py-1 bg-primary/20 text-primary text-[10px] font-label uppercase border border-primary/50">Live Traffic View</span>
<h4 class="font-headline text-lg mt-2 uppercase">Global Shard Distribution</h4>
</div>
<div class="absolute top-4 right-4 flex gap-2">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
</div>
</div>
<!-- Quick Terminal -->
<div class="recessed-well p-4 rounded-sm border border-outline-variant/10 font-label text-[10px] space-y-1 h-48 overflow-y-auto">
<p class="text-primary-dim">[02:44:12] SYSTEM: Alert LLM-092 Escalated</p>
<p class="text-on-surface-variant">[02:44:13] Audit_Engine: Initiating shard isolation</p>
<p class="text-on-surface-variant">[02:44:15] Security_Bot: Firewall updated with rule #A09</p>
<p class="text-error">[02:45:01] WARNING: Memory leak in worker-992</p>
<p class="text-on-surface-variant">[02:45:02] SYSTEM: Heartbeat normal in all other nodes</p>
<p class="text-tertiary">[02:45:30] LOG: Success re-validation of auth tokens</p>
<p class="text-on-surface-variant">[02:46:00] _ waiting for command...</p>
</div>
</div>
</div>
<!-- System Alerts Ticker -->
<div class="fixed bottom-0 left-64 right-0 h-10 bg-surface-container-lowest border-t border-outline-variant/10 flex items-center px-6 overflow-hidden z-30">
<div class="flex items-center gap-2 text-[10px] font-label uppercase whitespace-nowrap">
<span class="text-secondary font-bold">System Status:</span>
<span class="text-on-surface-variant">All models operational [99.8% Load]</span>
<span class="mx-4 text-outline-variant">|</span>
<span class="text-primary">Last Incident:</span>
<span class="text-on-surface-variant">Prompt Injection resolved (3m ago)</span>
<span class="mx-4 text-outline-variant">|</span>
<span class="text-on-surface-variant tracking-tighter">Node Efficiency: [A: 98%][B: 92%][C: 100%]</span>
</div>
</div>
</main>
</body></html>

<!-- Settings: General Config (Unified Sidebar) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>General Settings | Model Auditor</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;family=Roboto+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "secondary-dim": "#9c42f4",
                        "background": "#0e0e0e",
                        "inverse-on-surface": "#565554",
                        "tertiary-dim": "#00efa0",
                        "on-secondary": "#32005c",
                        "secondary-fixed-dim": "#dab4ff",
                        "surface-bright": "#2c2c2c",
                        "primary-fixed-dim": "#00deec",
                        "surface-variant": "#262626",
                        "primary-fixed": "#00eefc",
                        "on-surface": "#ffffff",
                        "secondary": "#bf81ff",
                        "surface-dim": "#0e0e0e",
                        "error-dim": "#d7383b",
                        "on-primary-fixed": "#003f43",
                        "on-primary-fixed-variant": "#005e64",
                        "on-tertiary-fixed-variant": "#006742",
                        "tertiary-fixed-dim": "#00efa0",
                        "surface-container": "#1a1919",
                        "surface-container-highest": "#262626",
                        "error-container": "#9f0519",
                        "surface-tint": "#8ff5ff",
                        "on-secondary-fixed": "#4e008a",
                        "outline-variant": "#494847",
                        "on-secondary-container": "#f0dcff",
                        "inverse-surface": "#fcf8f8",
                        "on-tertiary-container": "#005c3b",
                        "surface": "#0e0e0e",
                        "on-surface-variant": "#adaaaa",
                        "on-error": "#490006",
                        "primary-container": "#00eefc",
                        "surface-container-lowest": "#000000",
                        "secondary-fixed": "#e4c6ff",
                        "tertiary-fixed": "#00ffab",
                        "on-secondary-fixed-variant": "#7500cc",
                        "primary": "#8ff5ff",
                        "surface-container-low": "#131313",
                        "on-primary": "#005d63",
                        "on-background": "#ffffff",
                        "outline": "#777575",
                        "on-primary-container": "#005359",
                        "surface-container-high": "#201f1f",
                        "error": "#ff716c",
                        "primary-dim": "#00deec",
                        "on-tertiary": "#006642",
                        "secondary-container": "#7701d0",
                        "tertiary": "#afffd1",
                        "inverse-primary": "#006a71",
                        "tertiary-container": "#00ffab",
                        "on-tertiary-fixed": "#00472d",
                        "on-error-container": "#ffa8a3"
                    },
                    fontFamily: {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Inter"],
                        "mono": ["Roboto Mono"]
                    },
                    borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(38, 38, 38, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(143, 245, 255, 0.1);
        }
        .neo-glow:hover {
            box-shadow: 0 0 15px rgba(143, 245, 255, 0.15);
        }
        input:focus {
            border-left: 2px solid #bf81ff !important;
            outline: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #000000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #262626;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen overflow-hidden">
<!-- TopNavBar -->
<header class="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 backdrop-blur-xl bg-opacity-80 bg-[#0E0E0E] z-50 border-b border-[#262626] shadow-[0_0_15px_rgba(143,245,255,0.05)]">
<div class="flex items-center gap-8">
<span class="text-2xl font-bold tracking-tighter text-[#8FF5FF] uppercase font-headline">Model Auditor</span>
<div class="hidden md:flex gap-6">
<nav class="flex gap-6 items-center h-16">
<a class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors font-headline tracking-tighter uppercase text-sm" href="#">Overview</a>
<a class="text-[#ADAAAA] hover:text-[#8FF5FF] transition-colors font-headline tracking-tighter uppercase text-sm" href="#">Audits</a>
<a class="text-[#8FF5FF] font-bold border-b-2 border-[#8FF5FF] font-headline tracking-tighter uppercase text-sm h-full flex items-center" href="#">Settings</a>
</nav>
</div>
</div>
<div class="flex items-center gap-4">
<div class="relative group">
<span class="material-symbols-outlined text-[#ADAAAA] hover:text-[#8FF5FF] cursor-pointer transition-colors p-2 rounded-full hover:bg-[#262626]">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
</div>
<span class="material-symbols-outlined text-[#ADAAAA] hover:text-[#8FF5FF] cursor-pointer transition-colors p-2 rounded-full hover:bg-[#262626]">settings</span>
<div class="w-8 h-8 rounded-full overflow-hidden border border-[#262626] cursor-pointer active:scale-95 transition-transform">
<img class="w-full h-full object-cover" data-alt="User profile avatar silhouette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyT3GhwkbkUWUfXJ_zeDPCa0SPBHIYmNjPW3vx62gt_WK_ZrF7gb6kyQqCQykgVsPM8GHwlYHx9i0uzUIYau0XVfEiSvqSeSlo-_RhmYdUkuKt428p1WK4xkSYPs3U4c6zwIcgpU3DWh-keDLH-SckAiShT6F31ZY0BPsqyWx4ADEJsTkHdBNCoK87FaPh7j5PKcjCyAxvsKylXTB_HfP3VgpSTwQZytVO6VOFL-ooKiO0ZAI8_ifNYytOKwn3nc-iRRxqRc6AxsxO"/>
</div>
</div>
</header>
<div class="flex pt-16 h-screen">
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full flex flex-col py-8 z-40 bg-neutral-900/50 backdrop-blur-2xl w-64 border-r border-white/5">
<div class="px-6 mb-10">
<div class="text-[#8FF5FF] font-black font-headline tracking-widest text-lg">MODEL_AUDITOR</div>
<div class="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Auth Level: Alpha</div>
</div>
<nav class="flex-1 px-4 space-y-2">
<a class="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-xs" href="#">
<span class="material-symbols-outlined text-lg">grid_view</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-xs" href="#">
<span class="material-symbols-outlined text-lg">smart_toy</span>
<span>Agents</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-xs" href="#">
<span class="material-symbols-outlined text-lg">terminal</span>
<span>Logs</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-xs" href="#">
<span class="material-symbols-outlined text-lg">shield_lock</span>
<span>Security</span>
</a>
<!-- Settings with Nested Navigation -->
<div class="space-y-1">
<a class="flex items-center gap-3 px-4 py-3 text-[#8FF5FF] bg-[#8FF5FF]/10 border-l-2 border-[#8FF5FF] font-headline uppercase tracking-widest text-xs" href="#">
<span class="material-symbols-outlined text-lg">settings</span>
<span>Settings</span>
</a>
<div class="ml-4 flex flex-col space-y-1 mt-1">
<a class="flex items-center gap-3 px-4 py-2 text-[#8FF5FF] bg-white/5 font-headline uppercase tracking-widest text-[10px]" href="#">
<span class="material-symbols-outlined text-sm">tune</span>
<span>General</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-[10px]" href="#">
<span class="material-symbols-outlined text-sm">group</span>
<span>User Management</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-[10px]" href="#">
<span class="material-symbols-outlined text-sm">lan</span>
<span>Network Config</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-[10px]" href="#">
<span class="material-symbols-outlined text-sm">webhook</span>
<span>Global Webhooks</span>
</a>
</div>
</div>
</nav>
<div class="px-4 mt-auto space-y-2">
<button class="w-full py-3 bg-[#8FF5FF] text-on-primary font-headline font-bold text-xs uppercase tracking-tighter mb-4 hover:shadow-[0_0_15px_rgba(143,245,255,0.4)] transition-all">
                    Initialize New Audit
                </button>
<a class="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-300 text-xs font-headline uppercase tracking-widest" href="#">
<span class="material-symbols-outlined text-sm">pulse_alert</span>
<span>System Health</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-neutral-300 text-xs font-headline uppercase tracking-widest" href="#">
<span class="material-symbols-outlined text-sm">description</span>
<span>Documentation</span>
</a>
</div>
</aside>
<!-- Main Content -->
<main class="ml-64 flex-1 overflow-y-auto custom-scrollbar bg-surface h-full">
<div class="max-w-6xl mx-auto p-12">
<header class="mb-12">
<h1 class="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-2 uppercase">General Settings</h1>
<p class="text-on-surface-variant text-lg">Control the core operational parameters of the audit node.</p>
</header>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Platform Identity Section -->
<section class="lg:col-span-8">
<div class="glass-panel p-8 neo-glow rounded-lg h-full">
<div class="flex justify-between items-start mb-8">
<h3 class="font-headline text-2xl font-bold text-primary flex items-center gap-3 uppercase tracking-tight">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">fingerprint</span>
                                    Platform Identity
                                </h3>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-6">
<div class="space-y-2">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold">System Display Name</label>
<input class="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-3 rounded-none focus:ring-0 transition-all font-body" type="text" value="Model Auditor"/>
</div>
<div class="space-y-2">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold">Operational Node ID</label>
<div class="flex">
<input class="w-full bg-surface-container-lowest border border-outline-variant text-secondary px-4 py-3 rounded-none font-mono text-xs opacity-80" readonly="" type="text" value="NODE-AUDIT-77-DELTA"/>
<button class="bg-surface-container-highest px-4 border border-l-0 border-outline-variant hover:bg-surface-variant transition-colors">
<span class="material-symbols-outlined text-sm">content_copy</span>
</button>
</div>
</div>
<div class="space-y-2">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold">Primary Audit Region</label>
<select class="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-3 rounded-none focus:ring-0 transition-all">
<option>US-EAST-OBSERVATORY</option>
<option>EU-WEST-SYNTHETIC</option>
<option>ASIA-PAC-KINETIC</option>
</select>
</div>
</div>
<div class="flex flex-col items-center justify-center border-2 border-dashed border-outline-variant p-6 group hover:border-primary transition-colors cursor-pointer">
<span class="material-symbols-outlined text-4xl text-outline group-hover:text-primary transition-colors mb-4">upload_file</span>
<p class="text-xs text-center text-on-surface-variant font-bold uppercase tracking-widest">Upload System Logo</p>
<p class="text-[10px] text-outline mt-1 uppercase">SVG or PNG (Max 5MB)</p>
</div>
</div>
</div>
</section>
<!-- Maintenance Window -->
<section class="lg:col-span-4">
<div class="bg-surface-container-low p-8 border-l-2 border-secondary h-full">
<h3 class="font-headline text-2xl font-bold text-secondary flex items-center gap-3 uppercase tracking-tight mb-8">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">event_repeat</span>
                                Maintenance
                            </h3>
<div class="space-y-8">
<div class="space-y-4">
<div class="flex items-center justify-between">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold">Scheduled Downtime</label>
<div class="w-10 h-5 bg-secondary-container rounded-full relative cursor-pointer">
<div class="absolute right-1 top-1 w-3 h-3 bg-on-secondary-container rounded-full"></div>
</div>
</div>
<div class="space-y-2">
<p class="text-[10px] text-outline uppercase font-medium">Recurrence</p>
<div class="grid grid-cols-4 gap-2">
<button class="bg-secondary text-on-secondary text-[10px] font-bold py-2 uppercase">Sun</button>
<button class="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold py-2 uppercase">Mon</button>
<button class="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold py-2 uppercase">Tue</button>
<button class="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold py-2 uppercase">Wed</button>
</div>
</div>
<div class="space-y-2">
<p class="text-[10px] text-outline uppercase font-medium">Window Start (UTC)</p>
<input class="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-2 rounded-none font-mono" type="time" value="03:00"/>
</div>
<div class="p-4 bg-secondary/5 border border-secondary/20">
<p class="text-[11px] text-secondary font-medium leading-relaxed uppercase italic">System updates and database indexing will trigger during this window. Auditor will enter stand-by mode.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Audit Parameters -->
<section class="lg:col-span-12">
<div class="glass-panel p-8 neo-glow rounded-lg">
<div class="flex items-center gap-4 mb-10">
<h3 class="font-headline text-2xl font-bold text-tertiary flex items-center gap-3 uppercase tracking-tight">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">analytics</span>
                                    Audit Parameters
                                </h3>
<div class="h-[1px] flex-1 bg-gradient-to-r from-tertiary/20 to-transparent"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<div class="space-y-6">
<div class="flex justify-between items-end">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold">Default Confidence Threshold</label>
<span class="font-mono text-tertiary text-xl font-bold">0.94</span>
</div>
<div class="relative h-2 bg-surface-container-lowest rounded-full group cursor-pointer">
<div class="absolute h-full w-[94%] bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
<div class="absolute left-[94%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-on-background rounded-full border-2 border-tertiary shadow-[0_0_10px_rgba(175,255,209,0.5)]"></div>
<!-- Pulse sweep effect -->
<div class="absolute inset-0 overflow-hidden pointer-events-none rounded-full">
<div class="w-20 h-full bg-white/20 blur-md -skew-x-12 animate-sweep"></div>
</div>
</div>
<p class="text-[10px] text-on-surface-variant uppercase leading-tight">Models falling below this threshold will trigger immediate audit logging.</p>
</div>
<div class="space-y-6">
<div class="flex items-center justify-between mb-4">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold">Automatic Quarantine</label>
<div class="w-12 h-6 bg-tertiary/20 rounded-full relative cursor-pointer border border-tertiary/40">
<div class="absolute left-1 top-1 w-4 h-4 bg-tertiary rounded-full shadow-[0_0_8px_rgba(175,255,209,0.8)]"></div>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant/30">
<span class="text-[10px] uppercase font-bold text-on-surface-variant">Quarantine Level</span>
<span class="text-tertiary text-[10px] font-bold uppercase tracking-widest">Hard Lockdown</span>
</div>
<p class="text-[10px] text-on-surface-variant uppercase leading-tight">Restrict model traffic immediately upon discovery of adversarial drift.</p>
</div>
<div class="space-y-6">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold">Audit Velocity Limit</label>
<div class="relative">
<input class="w-full bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-3 rounded-none focus:ring-0 transition-all font-mono" type="number" value="5000"/>
<span class="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase text-outline font-bold">Req/Sec</span>
</div>
<p class="text-[10px] text-on-surface-variant uppercase leading-tight">Peak auditing speed per node. Exceeding this will queue log entries.</p>
</div>
</div>
</div>
</section>
<!-- Regional Settings -->
<section class="lg:col-span-12">
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="bg-surface-container-low p-6 border-t border-outline-variant/20">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold block mb-4">Timezone Selection</label>
<select class="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface px-0 py-2 rounded-none focus:ring-0 transition-all text-sm font-medium">
<option>UTC (Coordinated Universal Time)</option>
<option>EDT (Eastern Daylight Time)</option>
<option>PDT (Pacific Daylight Time)</option>
</select>
</div>
<div class="bg-surface-container-low p-6 border-t border-outline-variant/20">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold block mb-4">Language (System Default)</label>
<select class="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface px-0 py-2 rounded-none focus:ring-0 transition-all text-sm font-medium">
<option>EN-US (Observatory English)</option>
<option>DE-CH (Synthetic High German)</option>
<option>JP-TK (Neo-Tokyo Japanese)</option>
</select>
</div>
<div class="bg-surface-container-low p-6 border-t border-outline-variant/20">
<label class="text-[10px] uppercase tracking-widest text-outline font-bold block mb-4">Date Formatting</label>
<div class="flex gap-4">
<button class="flex-1 py-2 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest">YYYY-MM-DD</button>
<button class="flex-1 py-2 border border-outline-variant text-outline text-[10px] font-bold uppercase tracking-widest hover:border-on-surface transition-colors">DD/MM/YYYY</button>
</div>
</div>
</div>
</section>
</div>
<!-- Footer Actions -->
<div class="mt-16 pt-8 border-t border-outline-variant/20 flex justify-end gap-6 pb-20">
<button class="px-8 py-3 text-on-surface-variant font-headline font-bold uppercase tracking-tighter hover:text-on-surface transition-colors">Reset to Defaults</button>
<button class="px-10 py-3 bg-primary text-on-primary font-headline font-bold uppercase tracking-tighter neo-glow transition-all hover:scale-105 active:scale-95">Commit Changes</button>
</div>
</div>
</main>
</div>
<!-- Background Decoration -->
<div class="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
<div class="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary opacity-5 blur-[120px] rounded-full"></div>
<div class="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-secondary opacity-5 blur-[120px] rounded-full"></div>
<div class="absolute inset-0 opacity-[0.02]" data-alt="Subtle cyan dot grid pattern background" style="background-image: radial-gradient(#8FF5FF 1px, transparent 1px); background-size: 40px 40px;"></div>
</div>
<style>
        @keyframes sweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
        }
        .animate-sweep {
            animation: sweep 4s ease-in-out infinite;
        }
    </style>
</body></html>

<!-- Settings: Network Config (Unified Sidebar) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Network Configuration | Model Auditor</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;family=Roboto+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "secondary-fixed-dim": "#dab4ff",
                        "primary-fixed": "#00f0ff",
                        "on-secondary-fixed-variant": "#7500cc",
                        "primary": "#00f0ff",
                        "secondary-fixed": "#e4c6ff",
                        "on-primary-container": "#005359",
                        "on-tertiary-container": "#005c3b",
                        "tertiary-fixed-dim": "#00efa0",
                        "on-error": "#490006",
                        "on-tertiary-fixed-variant": "#006742",
                        "on-tertiary-fixed": "#00472d",
                        "surface-container": "#1a1919",
                        "on-primary": "#000000",
                        "tertiary": "#afffd1",
                        "error-container": "#9f0519",
                        "outline-variant": "#494847",
                        "inverse-primary": "#006a71",
                        "surface-container-highest": "#262626",
                        "inverse-on-surface": "#565554",
                        "secondary-dim": "#9c42f4",
                        "on-background": "#ffffff",
                        "on-primary-fixed": "#003f43",
                        "outline": "#777575",
                        "tertiary-container": "#00ffab",
                        "on-secondary-container": "#f0dcff",
                        "surface-container-lowest": "#000000",
                        "surface-container-high": "#201f1f",
                        "primary-fixed-dim": "#00deec",
                        "on-tertiary": "#006642",
                        "secondary-container": "#7701d0",
                        "on-surface-variant": "#adaaaa",
                        "on-secondary-fixed": "#4e008a",
                        "surface-container-low": "#131313",
                        "primary-dim": "#00deec",
                        "tertiary-fixed": "#00ffab",
                        "error-dim": "#d7383b",
                        "surface-bright": "#2c2c2c",
                        "primary-container": "#00eefc",
                        "background": "#0e0e0e",
                        "inverse-surface": "#fcf8f8",
                        "tertiary-dim": "#00efa0",
                        "surface": "#0e0e0e",
                        "on-secondary": "#32005c",
                        "on-error-container": "#ffa8a3",
                        "surface-variant": "#262626",
                        "surface-tint": "#00f0ff",
                        "secondary": "#bf81ff",
                        "surface-dim": "#0e0e0e",
                        "on-primary-fixed-variant": "#005e64",
                        "on-surface": "#ffffff",
                        "error": "#ff716c"
                    },
                    fontFamily: {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Inter"],
                        "mono": ["Roboto Mono"]
                    },
                    borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
        }
        .neon-glow-primary {
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
        }
        .glass-panel {
            backdrop-filter: blur(20px);
            background: rgba(38, 38, 38, 0.4);
        }
        .pulse-glow {
            animation: pulse-glow 2s infinite;
        }
        @keyframes pulse-glow {
            0% { box-shadow: 0 0 5px rgba(0, 240, 255, 0.2); }
            50% { box-shadow: 0 0 20px rgba(0, 240, 255, 0.5); }
            100% { box-shadow: 0 0 5px rgba(0, 240, 255, 0.2); }
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #262626;
            border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #333;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary/30 overflow-x-hidden">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-black/60 backdrop-blur-xl border-b border-white/5">
<div class="flex items-center gap-6">
<button class="p-2 hover:bg-white/5 transition-all duration-300 rounded group relative" id="menu-toggle">
<span class="material-symbols-outlined text-primary group-active:scale-95 duration-150">menu</span>
</button>
<div class="flex flex-col">
<span class="text-xl font-headline font-bold tracking-[0.15em] text-white uppercase leading-none">Model Auditor</span>
<span class="text-[9px] font-mono text-primary/60 tracking-[0.3em] uppercase mt-1">Obsidian Protocol v4.2</span>
</div>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex items-center bg-zinc-900 px-4 py-1.5 rounded-sm border border-white/5">
<span class="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input class="bg-transparent border-none focus:ring-0 text-[11px] w-64 text-on-surface uppercase tracking-wider font-mono" placeholder="Query parameters..." type="text"/>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-1 group cursor-pointer">
<span class="material-symbols-outlined text-primary text-lg" data-icon="sensors">sensors</span>
<span class="text-[9px] font-mono text-primary/80 hidden lg:block uppercase tracking-widest">Live</span>
</div>
<span class="material-symbols-outlined text-neutral-500 cursor-pointer hover:text-primary transition-colors duration-300" data-icon="memory">memory</span>
<span class="material-symbols-outlined text-neutral-500 cursor-pointer hover:text-primary transition-colors duration-300" data-icon="security">security</span>
</div>
</div>
</header>
<!-- Collapsible SideNavBar -->
<aside class="fixed left-0 top-0 h-full flex flex-col z-40 bg-zinc-950 w-64 transition-all duration-300 ease-in-out border-r border-white/5 overflow-hidden group/sidebar" id="sidebar">
<div class="h-16 flex items-center px-6">
<!-- Spacer for top bar alignment -->
</div>
<div class="flex-1 flex flex-col py-6 overflow-y-auto custom-scrollbar">
<!-- Branding Section -->
<div class="mb-10 px-6 whitespace-nowrap">
<h2 class="text-lg font-headline font-black text-primary tracking-widest uppercase">Model Auditor</h2>
<p class="text-[9px] text-zinc-500 tracking-[0.2em] uppercase font-mono">Auth Level: Alpha</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-4 px-6 py-3 text-zinc-500 hover:text-primary hover:bg-primary/5 transition-all duration-200 group relative font-headline uppercase tracking-widest text-[11px] font-semibold" href="#">
<span class="material-symbols-outlined text-lg">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-4 px-6 py-3 text-zinc-500 hover:text-primary hover:bg-primary/5 transition-all duration-200 group relative font-headline uppercase tracking-widest text-[11px] font-semibold" href="#">
<span class="material-symbols-outlined text-lg">smart_toy</span>
<span>Agents</span>
</a>
<a class="flex items-center gap-4 px-6 py-3 text-zinc-500 hover:text-primary hover:bg-primary/5 transition-all duration-200 group relative font-headline uppercase tracking-widest text-[11px] font-semibold" href="#">
<span class="material-symbols-outlined text-lg">terminal</span>
<span>Logs</span>
</a>
<a class="flex items-center gap-4 px-6 py-3 text-zinc-500 hover:text-primary hover:bg-primary/5 transition-all duration-200 group relative font-headline uppercase tracking-widest text-[11px] font-semibold" href="#">
<span class="material-symbols-outlined text-lg">lock</span>
<span>Security</span>
</a>
<!-- Hierarchical Settings Section -->
<div class="pt-2">
<div class="flex items-center gap-4 px-6 py-3 text-primary bg-primary/10 border-l-2 border-primary font-headline uppercase tracking-widest text-[11px] font-bold">
<span class="material-symbols-outlined text-lg">settings</span>
<span>Settings</span>
</div>
<div class="mt-1 flex flex-col">
<a class="pl-16 pr-6 py-2.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors font-mono" href="#">General</a>
<a class="pl-16 pr-6 py-2.5 text-[10px] uppercase tracking-[0.2em] text-primary bg-primary/5 border-r-2 border-primary font-bold font-mono" href="#">Network Config</a>
<a class="pl-16 pr-6 py-2.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors font-mono" href="#">User Management</a>
<a class="pl-16 pr-6 py-2.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors font-mono" href="#">Global Webhooks</a>
</div>
</div>
</nav>
<div class="px-4 mt-6 mb-6">
<button class="w-full py-3 bg-primary text-black font-headline font-bold uppercase tracking-widest text-[10px] rounded-sm transition-all pulse-glow hover:brightness-110">
                Initialize Audit
            </button>
</div>
</div>
<div class="p-4 border-t border-white/5 space-y-2">
<a class="flex items-center gap-4 px-2 py-2 text-zinc-500 hover:text-zinc-300 transition-colors uppercase text-[9px] tracking-widest font-headline" href="#">
<span class="material-symbols-outlined text-sm">pulse_alert</span>
<span>System Health</span>
</a>
<a class="flex items-center gap-4 px-2 py-2 text-zinc-500 hover:text-zinc-300 transition-colors uppercase text-[9px] tracking-widest font-headline" href="#">
<span class="material-symbols-outlined text-sm">description</span>
<span>Documentation</span>
</a>
</div>
</aside>
<!-- Main Content -->
<main class="ml-64 pt-24 px-8 pb-12 min-h-screen transition-all duration-300 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.03),transparent_40%)]">
<div class="max-w-[1600px] mx-auto">
<!-- Header Section -->
<header class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<nav class="flex items-center gap-2 text-[10px] font-mono text-neutral-500 mb-3 uppercase tracking-widest">
<span>System</span>
<span class="material-symbols-outlined text-[12px]">chevron_right</span>
<span>Settings</span>
<span class="material-symbols-outlined text-[12px]">chevron_right</span>
<span class="text-primary">Network Config</span>
</nav>
<h1 class="text-6xl font-headline font-black text-on-surface tracking-tighter leading-none flex items-baseline gap-4">
                    NETWORK <span class="text-primary opacity-90">PROTOCOL</span>
<span class="text-xs font-mono text-zinc-600 tracking-normal border border-zinc-800 px-2 py-1 ml-2">ID: 0x8F9A2</span>
</h1>
</div>
<div class="flex gap-4">
<button class="px-6 py-2.5 bg-zinc-900 text-on-surface-variant text-[10px] font-headline font-bold uppercase tracking-widest border border-white/5 hover:bg-zinc-800 transition-colors">
                    Export JSON
                </button>
<button class="px-6 py-2.5 bg-primary/10 text-primary text-[10px] font-headline font-bold uppercase tracking-widest border border-primary/40 hover:bg-primary/20 transition-all duration-300 neon-glow-primary">
                    Commit Changes
                </button>
</div>
</header>
<div class="grid grid-cols-12 gap-10">
<!-- Middle Column: Main Configuration (Expanded for wider view now that left nav is in sidebar) -->
<div class="col-span-12 lg:col-span-7 space-y-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Firewall Enforcements -->
<section class="bg-zinc-900/40 p-6 border-l border-primary group hover:bg-zinc-900/60 transition-colors">
<div class="flex justify-between items-start mb-8">
<div>
<h3 class="font-headline text-lg font-bold tracking-tight text-on-surface uppercase italic">Firewall Enforcements</h3>
<p class="text-[10px] font-mono text-zinc-500 mt-1 uppercase">L7 Synthetic Traffic Inspection</p>
</div>
<div class="flex items-center h-5 w-10 bg-zinc-950 border border-white/10 p-0.5 cursor-pointer">
<div class="h-full w-4 bg-primary shadow-[0_0_10px_#00f0ff] translate-x-4"></div>
</div>
</div>
<div class="space-y-4">
<div class="flex items-center justify-between text-[11px] font-mono py-2 border-b border-white/5">
<span class="text-neutral-500">Anomaly Auto-Drop</span>
<span class="text-tertiary">ENABLED</span>
</div>
<div class="flex items-center justify-between text-[11px] font-mono py-2 border-b border-white/5">
<span class="text-neutral-500">Geofence (US-EAST)</span>
<span class="text-tertiary">ACTIVE</span>
</div>
<div class="flex items-center justify-between text-[11px] font-mono py-2">
<span class="text-neutral-500">Rate Limit</span>
<span class="text-on-surface">10k req/s</span>
</div>
</div>
</section>
<!-- Encryption Protocols -->
<section class="bg-zinc-900/40 p-6 border-l border-tertiary group hover:bg-zinc-900/60 transition-colors">
<div class="flex justify-between items-start mb-8">
<div>
<h3 class="font-headline text-lg font-bold tracking-tight text-on-surface uppercase italic">Encryption</h3>
<p class="text-[10px] font-mono text-zinc-500 mt-1 uppercase">Synthetic Tunneling</p>
</div>
<span class="material-symbols-outlined text-tertiary" data-icon="lock_open">lock_open</span>
</div>
<div class="bg-black/40 p-4 font-mono text-[10px] border border-white/5">
<div class="flex justify-between mb-2">
<span class="text-neutral-500 uppercase">Method</span>
<span class="text-tertiary font-bold">AES-256-GCM</span>
</div>
<div class="flex justify-between mb-4">
<span class="text-neutral-500 uppercase">Rotation</span>
<span class="text-on-surface">04:00:00 Cycle</span>
</div>
<div class="mt-4 h-0.5 bg-zinc-900 w-full">
<div class="h-full bg-primary w-3/4 shadow-[0_0_8px_#00f0ff]"></div>
</div>
<div class="flex justify-between mt-2 text-[8px] text-zinc-600 uppercase tracking-widest">
<span>Status</span>
<span>75% Complete</span>
</div>
</div>
</section>
</div>
<!-- Node Connectivity (Full Width) -->
<section class="bg-zinc-900/40 p-6 border-l border-secondary group hover:bg-zinc-900/60 transition-colors">
<div class="flex justify-between items-start mb-8">
<div>
<h3 class="font-headline text-lg font-bold tracking-tight text-on-surface uppercase italic">Node Connectivity</h3>
<p class="text-[10px] font-mono text-zinc-500 mt-1 uppercase">Mesh Network Synchronization</p>
</div>
<span class="material-symbols-outlined text-secondary" data-icon="hub">hub</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
<div class="p-3 bg-black/40 border border-white/5 flex items-center justify-between group/node">
<div class="flex items-center gap-3">
<div class="w-1.5 h-1.5 bg-tertiary shadow-[0_0_8px_#afffd1]"></div>
<span class="text-[11px] font-mono text-on-surface">NODE_ALPHA_01</span>
</div>
<span class="text-[8px] px-2 py-0.5 border border-tertiary/30 text-tertiary font-bold tracking-widest uppercase">Active</span>
</div>
<div class="p-3 bg-black/40 border border-white/5 flex items-center justify-between group/node">
<div class="flex items-center gap-3">
<div class="w-1.5 h-1.5 bg-primary shadow-[0_0_8px_#00f0ff]"></div>
<span class="text-[11px] font-mono text-on-surface">NODE_BETA_04</span>
</div>
<span class="text-[8px] px-2 py-0.5 border border-primary/30 text-primary font-bold tracking-widest uppercase">Standby</span>
</div>
<div class="p-3 bg-black/40 border border-white/5 flex items-center justify-between group/node">
<div class="flex items-center gap-3">
<div class="w-1.5 h-1.5 bg-error shadow-[0_0_8px_#ff716c]"></div>
<span class="text-[11px] font-mono text-on-surface">NODE_DELTA_09</span>
</div>
<span class="text-[8px] px-2 py-0.5 border border-error/30 text-error font-bold tracking-widest uppercase">Isolated</span>
</div>
</div>
</section>
</div>
<!-- Right Column: Visualization -->
<div class="col-span-12 lg:col-span-5">
<div class="bg-zinc-950 border border-white/10 flex flex-col h-full overflow-hidden">
<div class="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900/20">
<div>
<h3 class="font-headline text-lg font-black text-on-surface tracking-[0.1em] uppercase">Topology Map</h3>
<p class="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Real-time cluster visualization</p>
</div>
<div class="flex gap-4">
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 bg-tertiary"></div>
<span class="text-[9px] font-mono text-neutral-500 uppercase">Stable</span>
</div>
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 bg-primary animate-pulse"></div>
<span class="text-[9px] font-mono text-neutral-500 uppercase">Active</span>
</div>
</div>
</div>
<!-- Stylized Visualization -->
<div class="flex-1 relative min-h-[400px] overflow-hidden bg-black">
<div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px); background-size: 40px 40px;"></div>
<div class="absolute inset-0 flex items-center justify-center">
<div class="relative w-full h-full max-w-lg max-h-[350px]">
<svg class="absolute inset-0 w-full h-full" viewbox="0 0 600 400">
<path d="M300,200 L150,100" opacity="0.2" stroke="#00f0ff" stroke-dasharray="4,8" stroke-width="1"></path>
<path d="M300,200 L450,100" opacity="0.2" stroke="#00f0ff" stroke-dasharray="4,8" stroke-width="1"></path>
<path d="M300,200 L150,300" opacity="0.2" stroke="#00f0ff" stroke-dasharray="4,8" stroke-width="1"></path>
<path d="M300,200 L450,300" opacity="0.2" stroke="#00f0ff" stroke-dasharray="4,8" stroke-width="1"></path>
<circle class="animate-pulse" cx="300" cy="200" fill="#00f0ff" r="3"></circle>
</svg>
<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<div class="w-16 h-16 border border-primary/40 flex items-center justify-center bg-zinc-900/40 backdrop-blur shadow-[0_0_20px_rgba(0,240,255,0.15)]">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="hub">hub</span>
</div>
<span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-primary font-bold uppercase tracking-widest whitespace-nowrap">Master_Core</span>
</div>
<div class="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2">
<div class="w-10 h-10 border border-zinc-800 flex items-center justify-center bg-zinc-950 text-zinc-600">
<span class="material-symbols-outlined text-xl" data-icon="dns">dns</span>
</div>
</div>
<div class="absolute right-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2">
<div class="w-10 h-10 border border-zinc-800 flex items-center justify-center bg-zinc-950 text-zinc-600">
<span class="material-symbols-outlined text-xl" data-icon="storage">storage</span>
</div>
</div>
</div>
</div>
</div>
<!-- Terminal Logs -->
<div class="bg-black p-4 border-t border-white/5 font-mono text-[9px] text-zinc-500 h-40 overflow-y-auto custom-scrollbar">
<div class="space-y-1">
<div class="flex gap-4">
<span class="text-zinc-800">[14:02:44]</span>
<span class="text-primary font-bold">INFO</span>
<span class="text-zinc-400 tracking-tight">COMM_SYS: Handshake successful with NODE_ALPHA_01</span>
</div>
<div class="flex gap-4">
<span class="text-zinc-800">[14:02:45]</span>
<span class="text-tertiary font-bold">SEC</span>
<span class="text-zinc-400 tracking-tight">ENCRYPT: New AES-256 session key generated</span>
</div>
<div class="flex gap-4">
<span class="text-zinc-800">[14:02:48]</span>
<span class="text-error font-bold">WARN</span>
<span class="text-zinc-400 tracking-tight">NODE_MGR: NODE_DELTA_09 response timeout.</span>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Action Footer -->
<footer class="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-on-surface-variant">
<div class="flex items-center gap-12">
<div>
<span class="text-[8px] font-mono uppercase tracking-[0.2em] block mb-1 text-zinc-600">Latency Avg</span>
<span class="text-tertiary font-headline font-bold">14.00 MS</span>
</div>
<div>
<span class="text-[8px] font-mono uppercase tracking-[0.2em] block mb-1 text-zinc-600">Packet Loss</span>
<span class="text-on-surface font-headline font-bold">0.0001%</span>
</div>
<div>
<span class="text-[8px] font-mono uppercase tracking-[0.2em] block mb-1 text-zinc-600">Protocols</span>
<span class="text-on-surface font-mono text-[10px]">IPV6, TLS 1.3, WG_P2P</span>
</div>
</div>
<div class="flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20">
<div class="w-1.5 h-1.5 bg-primary shadow-[0_0_8px_#00f0ff] animate-pulse"></div>
<span class="text-[10px] font-headline font-bold uppercase tracking-[0.25em] text-primary">Network Synchronized</span>
</div>
</footer>
</div>
</main>
<script>
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    let isExpanded = true;

    toggle.addEventListener('click', () => {
        isExpanded = !isExpanded;
        if (isExpanded) {
            sidebar.classList.remove('w-0', '-translate-x-full');
            sidebar.classList.add('w-64');
            main.classList.add('ml-64');
        } else {
            sidebar.classList.add('w-0', '-translate-x-full');
            sidebar.classList.remove('w-64');
            main.classList.remove('ml-64');
        }
    });
</script>
</body></html>

<!-- Settings: User Management (Unified) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>User Management | Synthetic Auditor</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;family=Roboto+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "secondary-fixed-dim": "#dab4ff",
                        "primary-fixed": "#00F0FF",
                        "on-secondary-fixed-variant": "#7500cc",
                        "primary": "#00F0FF",
                        "secondary-fixed": "#e4c6ff",
                        "on-primary-container": "#005359",
                        "on-tertiary-container": "#005c3b",
                        "tertiary-fixed-dim": "#00efa0",
                        "on-error": "#490006",
                        "on-tertiary-fixed-variant": "#006742",
                        "on-tertiary-fixed": "#00472d",
                        "surface-container": "#1a1919",
                        "on-primary": "#005d63",
                        "tertiary": "#afffd1",
                        "error-container": "#9f0519",
                        "outline-variant": "#494847",
                        "inverse-primary": "#006a71",
                        "surface-container-highest": "#262626",
                        "inverse-on-surface": "#565554",
                        "secondary-dim": "#9c42f4",
                        "on-background": "#ffffff",
                        "on-primary-fixed": "#003f43",
                        "outline": "#777575",
                        "tertiary-container": "#00ffab",
                        "on-secondary-container": "#f0dcff",
                        "surface-container-lowest": "#000000",
                        "surface-container-high": "#201f1f",
                        "primary-fixed-dim": "#00F0FF",
                        "on-tertiary": "#006642",
                        "secondary-container": "#7701d0",
                        "on-surface-variant": "#adaaaa",
                        "on-secondary-fixed": "#4e008a",
                        "surface-container-low": "#131313",
                        "primary-dim": "#00F0FF",
                        "tertiary-fixed": "#00ffab",
                        "error-dim": "#d7383b",
                        "surface-bright": "#2c2c2c",
                        "primary-container": "#00F0FF",
                        "background": "#0e0e0e",
                        "inverse-surface": "#fcf8f8",
                        "tertiary-dim": "#00efa0",
                        "surface": "#0e0e0e",
                        "on-secondary": "#32005c",
                        "on-error-container": "#ffa8a3",
                        "surface-variant": "#262626",
                        "surface-tint": "#00F0FF",
                        "secondary": "#bf81ff",
                        "surface-dim": "#0e0e0e",
                        "on-primary-fixed-variant": "#005e64",
                        "on-surface": "#ffffff",
                        "error": "#ff716c"
                    },
                    fontFamily: {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(38, 38, 38, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 240, 255, 0.05);
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0e0e0e; }
        ::-webkit-scrollbar-thumb { background: #262626; }

        /* Sidebar State Management */
        #sidebar-toggle:checked ~ aside {
            width: 64px;
        }
        #sidebar-toggle:checked ~ aside .nav-label,
        #sidebar-toggle:checked ~ aside .nav-header,
        #sidebar-toggle:checked ~ aside .sub-nav {
            display: none;
        }
        #sidebar-toggle:checked ~ aside .nav-item {
            justify-content: center;
            padding-left: 0;
            padding-right: 0;
        }
        #sidebar-toggle:checked ~ aside .btn-text {
            display: none;
        }
        #sidebar-toggle:checked ~ main {
            margin-left: 64px;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary min-h-screen">
<input class="hidden" id="sidebar-toggle" type="checkbox"/>
<!-- TopAppBar Shell -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
<div class="flex items-center gap-4">
<label class="p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors group" for="sidebar-toggle">
<span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">menu</span>
</label>
<span class="text-2xl font-bold tracking-tighter text-primary font-headline">Synthetic Auditor</span>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4 text-neutral-500">
<span class="material-symbols-outlined hover:text-primary transition-colors cursor-pointer">sensors</span>
<span class="material-symbols-outlined hover:text-primary transition-colors cursor-pointer">memory</span>
<span class="material-symbols-outlined hover:text-primary transition-colors cursor-pointer">security</span>
</div>
<div class="h-8 w-px bg-white/10"></div>
<div class="flex items-center gap-3">
<div class="text-right hidden sm:block">
<p class="text-xs font-headline tracking-widest uppercase text-primary leading-none">Admin_Alpha</p>
<p class="text-[10px] text-neutral-500 font-mono">192.168.1.104</p>
</div>
<div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary p-[1px]">
<div class="w-full h-full rounded-full bg-surface-container-lowest flex items-center justify-center">
<span class="material-symbols-outlined text-xs text-primary">person</span>
</div>
</div>
</div>
</div>
</header>
<!-- SideNavBar Shell -->
<aside class="fixed left-0 top-0 h-full flex flex-col py-8 z-40 bg-neutral-900/50 backdrop-blur-2xl w-64 border-r border-white/5 pt-20 transition-all duration-300">
<div class="px-6 mb-8 nav-header">
<h2 class="text-primary font-black font-headline tracking-widest text-sm">NEON_OBSERVATORY</h2>
<p class="text-[10px] text-neutral-500 font-mono">Auth Level: Alpha</p>
</div>
<nav class="flex-1 space-y-1">
<a class="nav-item flex items-center gap-4 px-6 py-3 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-xs" href="#">
<span class="material-symbols-outlined text-lg">grid_view</span>
<span class="nav-label">Dashboard</span>
</a>
<a class="nav-item flex items-center gap-4 px-6 py-3 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-xs" href="#">
<span class="material-symbols-outlined text-lg">smart_toy</span>
<span class="nav-label">Agents</span>
</a>
<a class="nav-item flex items-center gap-4 px-6 py-3 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-xs" href="#">
<span class="material-symbols-outlined text-lg">terminal</span>
<span class="nav-label">Logs</span>
</a>
<a class="nav-item flex items-center gap-4 px-6 py-3 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-all duration-200 font-headline uppercase tracking-widest text-xs" href="#">
<span class="material-symbols-outlined text-lg">shield_lock</span>
<span class="nav-label">Security</span>
</a>
<div>
<a class="nav-item flex items-center gap-4 px-6 py-3 text-primary bg-primary/10 font-headline uppercase tracking-widest text-xs font-bold" href="#">
<span class="material-symbols-outlined text-lg">settings</span>
<span class="nav-label">Settings</span>
</a>
<div class="sub-nav mt-1 space-y-1">
<a class="flex items-center pl-14 pr-6 py-2 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 text-[10px] font-headline uppercase tracking-widest transition-colors" href="#">
<span>General</span>
</a>
<a class="flex items-center pl-14 pr-6 py-2 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 text-[10px] font-headline uppercase tracking-widest transition-colors" href="#">
<span>Network Config</span>
</a>
<a class="flex items-center pl-14 pr-6 py-2 text-primary bg-primary/5 border-r-2 border-primary text-[10px] font-headline font-bold uppercase tracking-widest transition-colors" href="#">
<span>User Management</span>
</a>
<a class="flex items-center pl-14 pr-6 py-2 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 text-[10px] font-headline uppercase tracking-widest transition-colors" href="#">
<span>Global Webhooks</span>
</a>
</div>
</div>
</nav>
<div class="px-4 mt-auto">
<button class="w-full py-3 bg-primary text-on-primary font-headline font-bold text-xs tracking-widest uppercase rounded hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center">
<span class="material-symbols-outlined text-lg sm:hidden">add</span>
<span class="btn-text">Initialize New Audit</span>
</button>
<div class="mt-8 space-y-4 nav-header">
<a class="flex items-center gap-3 text-neutral-500 hover:text-neutral-300 transition-colors" href="#">
<span class="material-symbols-outlined text-sm">pulse_alert</span>
<span class="text-[10px] uppercase font-headline tracking-widest">System Health</span>
</a>
<a class="flex items-center gap-3 text-neutral-500 hover:text-neutral-300 transition-colors" href="#">
<span class="material-symbols-outlined text-sm">description</span>
<span class="text-[10px] uppercase font-headline tracking-widest">Documentation</span>
</a>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-64 pt-24 px-8 pb-12 min-h-screen transition-all duration-300">
<div class="max-w-7xl mx-auto">
<!-- Header Section -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h1 class="text-5xl font-headline font-bold tracking-tighter text-on-surface mb-2 leading-none">User Management</h1>
<p class="text-on-surface-variant font-mono text-sm max-w-xl">Configure administrative access, operator permissions, and audit integrity tiers for the synthetic network nodes.</p>
</div>
<button class="group flex items-center gap-2 px-6 py-4 bg-surface-container-highest border border-primary/20 rounded-xl hover:border-primary/60 transition-all duration-300">
<span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">person_add</span>
<span class="font-headline font-bold tracking-widest uppercase text-xs text-primary">Invite New Member</span>
</button>
</div>
<!-- Dashboard Stats Bento -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div class="surface-container-low p-6 rounded-xl border-l-2 border-primary">
<p class="text-[10px] font-headline tracking-widest uppercase text-on-surface-variant mb-1">Total Operators</p>
<p class="text-3xl font-headline font-bold text-on-surface">42</p>
</div>
<div class="surface-container-low p-6 rounded-xl border-l-2 border-secondary">
<p class="text-[10px] font-headline tracking-widest uppercase text-on-surface-variant mb-1">Active Sessions</p>
<p class="text-3xl font-headline font-bold text-on-surface">09</p>
</div>
<div class="surface-container-low p-6 rounded-xl border-l-2 border-tertiary">
<p class="text-[10px] font-headline tracking-widest uppercase text-on-surface-variant mb-1">Mean Integrity</p>
<p class="text-3xl font-headline font-bold text-on-surface">98.4<span class="text-sm font-normal text-tertiary ml-1">%</span></p>
</div>
<div class="surface-container-low p-6 rounded-xl border-l-2 border-error">
<p class="text-[10px] font-headline tracking-widest uppercase text-on-surface-variant mb-1">Pending Requests</p>
<p class="text-3xl font-headline font-bold text-on-surface">03</p>
</div>
</div>
<!-- User Access List Table -->
<div class="glass-panel rounded-2xl overflow-hidden mb-6">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-lowest/50 border-b border-white/5">
<th class="px-6 py-5 font-headline font-bold text-[10px] tracking-widest uppercase text-neutral-500">Username / ID</th>
<th class="px-6 py-5 font-headline font-bold text-[10px] tracking-widest uppercase text-neutral-500">Role Authority</th>
<th class="px-6 py-5 font-headline font-bold text-[10px] tracking-widest uppercase text-neutral-500">Last Login Pulse</th>
<th class="px-6 py-5 font-headline font-bold text-[10px] tracking-widest uppercase text-neutral-500">Integrity Score</th>
<th class="px-6 py-5 font-headline font-bold text-[10px] tracking-widest uppercase text-neutral-500 text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-white/5">
<tr class="hover:bg-white/[0.02] transition-colors group">
<td class="px-6 py-6">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/5">
<span class="material-symbols-outlined text-primary text-xl">account_circle</span>
</div>
<div>
<p class="font-headline font-bold text-sm text-on-surface">v_sullivan_01</p>
<p class="font-mono text-[10px] text-neutral-600">ID: 992-ALPHA-01</p>
</div>
</div>
</td>
<td class="px-6 py-6">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,240,255,0.6)]"></div>
<span class="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">Admin</span>
</div>
</td>
<td class="px-6 py-6">
<p class="font-mono text-xs text-on-surface-variant">2024.05.24 <span class="text-neutral-600">|</span> 14:22:01</p>
</td>
<td class="px-6 py-6">
<div class="flex items-center gap-3">
<div class="flex-1 h-1.5 bg-surface-container-lowest rounded-full max-w-[100px] overflow-hidden">
<div class="h-full bg-gradient-to-r from-primary to-secondary w-[98%] shadow-[0_0_10px_rgba(0,240,255,0.4)]"></div>
</div>
<span class="font-mono text-xs text-primary font-bold">98.2</span>
</div>
</td>
<td class="px-6 py-6 text-right">
<button class="p-2 hover:bg-primary/10 rounded-lg transition-colors text-neutral-500 hover:text-primary">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-white/[0.02] transition-colors group">
<td class="px-6 py-6">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/5">
<span class="material-symbols-outlined text-secondary text-xl">engineering</span>
</div>
<div>
<p class="font-headline font-bold text-sm text-on-surface">k_chen_labs</p>
<p class="font-mono text-[10px] text-neutral-600">ID: 412-BETA-09</p>
</div>
</div>
</td>
<td class="px-6 py-6">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(191,129,255,0.6)]"></div>
<span class="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">Operator</span>
</div>
</td>
<td class="px-6 py-6">
<p class="font-mono text-xs text-on-surface-variant">2024.05.23 <span class="text-neutral-600">|</span> 09:15:44</p>
</td>
<td class="px-6 py-6">
<div class="flex items-center gap-3">
<div class="flex-1 h-1.5 bg-surface-container-lowest rounded-full max-w-[100px] overflow-hidden">
<div class="h-full bg-gradient-to-r from-primary to-secondary w-[82%] shadow-[0_0_10px_rgba(0,240,255,0.4)]"></div>
</div>
<span class="font-mono text-xs text-secondary font-bold">82.1</span>
</div>
</td>
<td class="px-6 py-6 text-right">
<button class="p-2 hover:bg-primary/10 rounded-lg transition-colors text-neutral-500 hover:text-primary">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Pagination Shell -->
<div class="flex items-center justify-between px-6 py-4 bg-surface-container-low rounded-xl border border-white/5">
<div class="flex items-center gap-4">
<p class="text-[10px] font-mono text-neutral-600">Showing <span class="text-on-surface-variant">1-10</span> of <span class="text-on-surface-variant">42</span> entities</p>
</div>
<div class="flex items-center gap-2">
<button class="p-2 rounded-lg border border-white/5 text-neutral-600 hover:text-primary transition-colors disabled:opacity-30" disabled="">
<span class="material-symbols-outlined text-sm">chevron_left</span>
</button>
<div class="flex items-center gap-1">
<button class="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-headline font-bold">01</button>
<button class="w-8 h-8 rounded-lg text-neutral-500 hover:bg-white/5 text-[10px] font-headline font-bold transition-all">02</button>
<button class="w-8 h-8 rounded-lg text-neutral-500 hover:bg-white/5 text-[10px] font-headline font-bold transition-all">03</button>
<span class="text-neutral-700 mx-1">...</span>
<button class="w-8 h-8 rounded-lg text-neutral-500 hover:bg-white/5 text-[10px] font-headline font-bold transition-all">05</button>
</div>
<button class="p-2 rounded-lg border border-white/5 text-neutral-600 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
<!-- Detail Asymmetric Grid -->
<div class="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
<div class="lg:col-span-2 space-y-6">
<div class="p-8 rounded-2xl bg-surface-container-lowest border border-white/5">
<h3 class="font-headline font-bold tracking-widest uppercase text-xs text-primary mb-6">Security Audit Pulse</h3>
<div class="relative h-48 w-full bg-surface-container overflow-hidden rounded-xl">
<div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 2px 2px, #00F0FF 1px, transparent 0); background-size: 24px 24px;"></div>
<div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent"></div>
<svg class="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 400 100">
<path d="M0,80 Q25,20 50,60 T100,40 T150,70 T200,30 T250,50 T300,20 T350,60 T400,10" fill="none" stroke="#00F0FF" stroke-dasharray="1,2" stroke-width="1.5"></path>
</svg>
</div>
</div>
</div>
<div class="space-y-6">
<div class="p-6 rounded-2xl glass-panel relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-6xl">verified_user</span>
</div>
<h4 class="font-headline font-bold tracking-widest uppercase text-xs text-secondary mb-4">Auth Protocol</h4>
<p class="text-on-surface-variant text-sm mb-4 leading-relaxed">System-wide MFA is currently <span class="text-tertiary">active</span>. All operators are required to provide biometric tokens.</p>
<button class="text-secondary text-[10px] font-headline font-bold uppercase tracking-widest hover:underline">Revoke All Access</button>
</div>
</div>
</div>
</div>
</main>
</body></html>

<!-- Settings: Global Webhooks (Unified) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Global Webhooks | Model Auditor</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;family=Roboto+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "secondary-fixed-dim": "#dab4ff",
                        "primary-fixed": "#00eefc",
                        "on-secondary-fixed-variant": "#7500cc",
                        "primary": "#8ff5ff",
                        "secondary-fixed": "#e4c6ff",
                        "on-primary-container": "#005359",
                        "on-tertiary-container": "#005c3b",
                        "tertiary-fixed-dim": "#00efa0",
                        "on-error": "#490006",
                        "on-tertiary-fixed-variant": "#006742",
                        "on-tertiary-fixed": "#00472d",
                        "surface-container": "#1a1919",
                        "on-primary": "#005d63",
                        "tertiary": "#afffd1",
                        "error-container": "#9f0519",
                        "outline-variant": "#494847",
                        "inverse-primary": "#006a71",
                        "surface-container-highest": "#262626",
                        "inverse-on-surface": "#565554",
                        "secondary-dim": "#9c42f4",
                        "on-background": "#ffffff",
                        "on-primary-fixed": "#003f43",
                        "outline": "#777575",
                        "tertiary-container": "#00ffab",
                        "on-secondary-container": "#f0dcff",
                        "surface-container-lowest": "#000000",
                        "surface-container-high": "#201f1f",
                        "primary-fixed-dim": "#00deec",
                        "on-tertiary": "#006642",
                        "secondary-container": "#7701d0",
                        "on-surface-variant": "#adaaaa",
                        "on-secondary-fixed": "#4e008a",
                        "surface-container-low": "#131313",
                        "primary-dim": "#00deec",
                        "tertiary-fixed": "#00ffab",
                        "error-dim": "#d7383b",
                        "surface-bright": "#2c2c2c",
                        "primary-container": "#00eefc",
                        "background": "#0e0e0e",
                        "inverse-surface": "#fcf8f8",
                        "tertiary-dim": "#00efa0",
                        "surface": "#0e0e0e",
                        "on-secondary": "#32005c",
                        "on-error-container": "#ffa8a3",
                        "surface-variant": "#262626",
                        "surface-tint": "#8ff5ff",
                        "secondary": "#bf81ff",
                        "surface-dim": "#0e0e0e",
                        "on-primary-fixed-variant": "#005e64",
                        "on-surface": "#ffffff",
                        "error": "#ff716c"
                    },
                    fontFamily: {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Inter"],
                        "mono": ["Roboto Mono"]
                    },
                    borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(38, 38, 38, 0.4);
            backdrop-filter: blur(20px);
        }
        .pulse-line {
            background: linear-gradient(90deg, transparent, #8ff5ff, transparent);
            background-size: 200% 100%;
            animation: pulse-flow 3s infinite linear;
        }
        @keyframes pulse-flow {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary/30">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-zinc-950/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(143,245,255,0.05)]">
<div class="flex items-center gap-4">
<button class="p-2 hover:bg-white/5 transition-all duration-300 rounded-lg group md:hidden">
<span class="material-symbols-outlined text-primary group-active:scale-95 duration-150">menu</span>
</button>
<span class="text-2xl font-bold tracking-tighter text-cyan-400 font-headline">Model Auditor</span>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex items-center gap-8 h-full">
<a class="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight" href="#">Dashboard</a>
<a class="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight" href="#">Agents</a>
<a class="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight" href="#">Logs</a>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-zinc-400 hover:text-cyan-400 transition-all">notifications</button>
<button class="material-symbols-outlined text-zinc-400 hover:text-cyan-400 transition-all">grid_view</button>
<div class="w-8 h-8 rounded-full bg-surface-container-highest border border-white/10 overflow-hidden">
<img alt="User avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Pz7DD1U8VbiMmWK-VWFNtYdwwCsk-34oosK0Ps5ZfUVK7wCGzToZY4xlH-mFyP4TxjX0PDXwne_bPj3QpirmA_55MdhGN1kD3yRvZQtzM3UUiWtEPKUtCNXv72J1946Fdem_CZM1wGgGliGGVoKH59yip6dsbKvFHk91sDEBkNwlrD-VA5S3D9iK6ce6wG-gLLImtMxenTNSDOJ1hnj82sf5S0NP0zEPKBI2ayv6r3s7L5XCk3KQHXbZCl6CBvykGg2tf9rwyT83"/>
</div>
</div>
</div>
</header>
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full flex flex-col z-40 bg-zinc-950 w-64 border-r border-white/5 font-headline transition-all duration-300">
<div class="h-16 flex items-center px-6">
<!-- Offset for top bar content -->
</div>
<div class="flex-1 flex flex-col py-6">
<div class="mb-8 px-6">
<h2 class="text-xl font-black text-cyan-400 tracking-widest uppercase">NEON OBSERVE</h2>
<p class="text-[10px] text-zinc-500 tracking-[0.2em] uppercase">AI Model Integrity</p>
</div>
<nav class="space-y-1">
<a class="flex items-center gap-4 px-6 py-3 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 hover:translate-x-1 duration-200 uppercase text-xs tracking-widest" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-4 px-6 py-3 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 hover:translate-x-1 duration-200 uppercase text-xs tracking-widest" href="#">
<span class="material-symbols-outlined">smart_toy</span>
<span>Agents</span>
</a>
<a class="flex items-center gap-4 px-6 py-3 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 hover:translate-x-1 duration-200 uppercase text-xs tracking-widest" href="#">
<span class="material-symbols-outlined">terminal</span>
<span>Logs</span>
</a>
<a class="flex items-center gap-4 px-6 py-3 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 hover:translate-x-1 duration-200 uppercase text-xs tracking-widest" href="#">
<span class="material-symbols-outlined">lock</span>
<span>Security</span>
</a>
<div>
<a class="flex items-center gap-4 px-6 py-3 text-cyan-400 bg-cyan-400/5 uppercase text-xs tracking-widest font-bold" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
<div class="mt-1 space-y-1">
<a class="flex items-center pl-14 pr-6 py-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 text-[10px] uppercase tracking-widest transition-colors" href="#">
<span>General</span>
</a>
<a class="flex items-center pl-14 pr-6 py-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 text-[10px] uppercase tracking-widest transition-colors" href="#">
<span>Network Config</span>
</a>
<a class="flex items-center pl-14 pr-6 py-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 text-[10px] uppercase tracking-widest transition-colors" href="#">
<span>User Management</span>
</a>
<a class="flex items-center pl-14 pr-6 py-2 text-cyan-400 bg-cyan-400/10 border-r-4 border-cyan-400 text-[10px] font-bold uppercase tracking-widest transition-colors" href="#">
<span>Global Webhooks</span>
</a>
</div>
</div>
</nav>
<div class="mt-auto px-4">
<button class="w-full py-3 bg-primary text-on-primary font-bold uppercase tracking-widest text-xs rounded shadow-[0_0_15px_rgba(143,245,255,0.3)] hover:brightness-110 transition-all">
                New Audit
            </button>
</div>
</div>
<div class="p-6 border-t border-white/5 space-y-4">
<a class="flex items-center gap-4 text-zinc-500 hover:text-zinc-300 text-xs tracking-widest uppercase" href="#">
<span class="material-symbols-outlined text-sm">help</span>
<span>Support</span>
</a>
<a class="flex items-center gap-4 text-zinc-500 hover:text-zinc-300 text-xs tracking-widest uppercase" href="#">
<span class="material-symbols-outlined text-sm">description</span>
<span>Documentation</span>
</a>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="pl-64 pt-16 min-h-screen">
<div class="p-8 max-w-7xl mx-auto">
<!-- Page Header -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
<div>
<h1 class="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-2">GLOBAL WEBHOOKS</h1>
<p class="text-on-surface-variant font-body tracking-tight max-w-xl">Configure automated data pipelines and event-driven triggers for the audit ecosystem. Manage real-time synchronization with external synthetic observers.</p>
</div>
<button class="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-headline font-bold tracking-tight hover:shadow-[0_0_20px_rgba(143,245,255,0.2)] transition-all active:scale-95">
<span class="material-symbols-outlined">add_link</span>
                CREATE NEW WEBHOOK
            </button>
</div>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-12 gap-6">
<!-- Active Webhooks Section (Left/Main) -->
<div class="col-span-12 lg:col-span-8 space-y-6">
<div class="flex items-center justify-between px-2">
<h2 class="font-headline text-xl font-medium tracking-tight flex items-center gap-2 text-cyan-400">
<span class="material-symbols-outlined">hub</span>
                        ACTIVE PIPELINES
                    </h2>
<span class="text-xs font-mono text-neutral-500">3 SYSTEMS DETECTED</span>
</div>
<!-- Webhook Card 1 -->
<div class="group relative bg-surface-container-low border-l-2 border-primary overflow-hidden transition-all hover:bg-surface-container">
<div class="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined cursor-pointer hover:text-primary">more_vert</span>
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-4">
<div>
<h3 class="font-headline text-lg font-bold text-on-surface">MODEL_DEVIATION_ALERT</h3>
<div class="font-mono text-xs text-on-surface-variant mt-1">UUID: wh_8829_x99_alpha</div>
</div>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#afffd1]"></span>
<span class="text-[10px] font-headline uppercase tracking-widest text-tertiary">Active</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<div class="space-y-1">
<label class="text-[10px] font-headline uppercase text-neutral-500 tracking-widest">Endpoint URL</label>
<div class="font-mono text-xs text-primary bg-surface-container-lowest p-2 rounded truncate border border-white/5">
                                    https://api.sentinel-node.io/hooks/v1/ingest
                                </div>
</div>
<div class="space-y-1">
<label class="text-[10px] font-headline uppercase text-neutral-500 tracking-widest">Event Triggers</label>
<div class="flex flex-wrap gap-2">
<span class="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-headline rounded border border-secondary/20 uppercase tracking-tighter">Drift_Detected</span>
<span class="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-headline rounded border border-secondary/20 uppercase tracking-tighter">Bias_Alert</span>
</div>
</div>
</div>
<div class="h-1 w-full bg-surface-container-lowest rounded-full overflow-hidden">
<div class="h-full pulse-line w-full"></div>
</div>
</div>
</div>
<!-- Webhook Card 2 -->
<div class="group relative bg-surface-container-low border-l-2 border-secondary overflow-hidden transition-all hover:bg-surface-container">
<div class="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined cursor-pointer hover:text-secondary">more_vert</span>
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-4">
<div>
<h3 class="font-headline text-lg font-bold text-on-surface">SLACK_AUDIT_LOG_STREAM</h3>
<div class="font-mono text-xs text-on-surface-variant mt-1">UUID: wh_9912_k22_beta</div>
</div>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#afffd1]"></span>
<span class="text-[10px] font-headline uppercase tracking-widest text-tertiary">Active</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<div class="space-y-1">
<label class="text-[10px] font-headline uppercase text-neutral-500 tracking-widest">Endpoint URL</label>
<div class="font-mono text-xs text-secondary bg-surface-container-lowest p-2 rounded truncate border border-white/5">
                                    https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
                                </div>
</div>
<div class="space-y-1">
<label class="text-[10px] font-headline uppercase text-neutral-500 tracking-widest">Event Triggers</label>
<div class="flex flex-wrap gap-2">
<span class="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-headline rounded border border-secondary/20 uppercase tracking-tighter">Audit_Complete</span>
<span class="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-headline rounded border border-secondary/20 uppercase tracking-tighter">Node_Status</span>
</div>
</div>
</div>
</div>
</div>
<!-- Webhook Card 3 (Disabled) -->
<div class="group relative bg-surface-container-low border-l-2 border-neutral-700 opacity-60 grayscale-[0.5] overflow-hidden transition-all hover:bg-surface-container">
<div class="p-6">
<div class="flex justify-between items-start mb-4">
<div>
<h3 class="font-headline text-lg font-bold text-neutral-400">EXTERNAL_JSON_MIRROR</h3>
<div class="font-mono text-xs text-neutral-600 mt-1">UUID: wh_4410_m88_gamma</div>
</div>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-neutral-600"></span>
<span class="text-[10px] font-headline uppercase tracking-widest text-neutral-500">Disabled</span>
</div>
</div>
<div class="text-xs font-mono text-neutral-600 italic">No recent activity. Pipeline suspended by administrator alpha_01.</div>
</div>
</div>
</div>
<!-- Recent Delivery Logs (Right/Sidebar) -->
<div class="col-span-12 lg:col-span-4 space-y-6">
<div class="flex items-center justify-between px-2">
<h2 class="font-headline text-xl font-medium tracking-tight flex items-center gap-2 text-secondary">
<span class="material-symbols-outlined">list_alt</span>
                        DELIVERY_LOGS
                    </h2>
</div>
<div class="bg-surface-container-lowest border border-white/5 rounded-lg overflow-hidden flex flex-col h-[600px]">
<!-- Log Header -->
<div class="bg-surface-container-high px-4 py-2 flex justify-between items-center">
<div class="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Live Stream</div>
<div class="flex gap-1">
<span class="w-2 h-2 rounded-full bg-error animate-pulse"></span>
</div>
</div>
<!-- Log Entries -->
<div class="flex-1 overflow-y-auto p-4 space-y-4">
<!-- Log Entry 1 -->
<div class="space-y-2 pb-4 border-b border-white/5">
<div class="flex justify-between items-start">
<span class="text-[10px] font-mono text-tertiary">200 OK</span>
<span class="text-[10px] font-mono text-neutral-600">14:22:01.442</span>
</div>
<div class="text-[11px] font-mono text-neutral-400">POST → MODEL_DEVIATION_ALERT</div>
<div class="bg-neutral-900/50 p-2 text-[10px] font-mono text-on-surface-variant overflow-x-hidden">
<code class="block whitespace-pre">{"event": "drift_detected", "severity": "high", "model_id": "GPT4_v2", "deviation_score": 0.884}</code>
</div>
</div>
<!-- Log Entry 2 -->
<div class="space-y-2 pb-4 border-b border-white/5">
<div class="flex justify-between items-start">
<span class="text-[10px] font-mono text-tertiary">200 OK</span>
<span class="text-[10px] font-mono text-neutral-600">14:21:55.109</span>
</div>
<div class="text-[11px] font-mono text-neutral-400">POST → SLACK_AUDIT_LOG</div>
<div class="bg-neutral-900/50 p-2 text-[10px] font-mono text-on-surface-variant overflow-x-hidden">
<code class="block whitespace-pre">{"channel": "#audit-alerts", "text": "Audit complete for Node_Alpha_01. All tests passed."}</code>
</div>
</div>
<!-- Log Entry 3 -->
<div class="space-y-2 pb-4 border-b border-white/5">
<div class="flex justify-between items-start">
<span class="text-[10px] font-mono text-error">503 SERVICE_UNAVAILABLE</span>
<span class="text-[10px] font-mono text-neutral-600">14:18:22.990</span>
</div>
<div class="text-[11px] font-mono text-neutral-400">POST → EXTERNAL_JSON_MIRROR</div>
<div class="bg-error/5 p-2 text-[10px] font-mono text-error/80 overflow-x-hidden border border-error/10">
<code class="block">ERROR: Connection timed out after 3000ms. Retrying in 10s...</code>
</div>
</div>
<!-- Log Entry 4 -->
<div class="space-y-2 pb-4">
<div class="flex justify-between items-start">
<span class="text-[10px] font-mono text-tertiary">200 OK</span>
<span class="text-[10px] font-mono text-neutral-600">14:15:10.002</span>
</div>
<div class="text-[11px] font-mono text-neutral-400">POST → SLACK_AUDIT_LOG</div>
<div class="bg-neutral-900/50 p-2 text-[10px] font-mono text-on-surface-variant overflow-x-hidden">
<code class="block whitespace-pre">{"type": "daily_digest", "total_audits": 1422, "critical_failures": 0}</code>
</div>
</div>
</div>
<!-- Footer Control -->
<div class="p-4 border-t border-white/5">
<button class="w-full py-2 border border-secondary/30 text-secondary text-[10px] font-headline uppercase tracking-widest hover:bg-secondary/10 transition-colors">
                            CLEAR LOG STREAM
                        </button>
</div>
</div>
</div>
</div>
<!-- Contextual Info / Footer -->
<div class="mt-12 p-8 glass-panel border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
<div class="flex gap-6 items-center">
<div class="w-16 h-16 rounded bg-primary/10 flex items-center justify-center border border-primary/20">
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">security</span>
</div>
<div>
<h4 class="font-headline font-bold text-on-surface">Secure Webhook Handshakes</h4>
<p class="text-sm text-on-surface-variant">All outbound payloads are signed with your unique environment secret for end-to-end verification.</p>
</div>
</div>
<div class="flex items-center gap-4">
<div class="text-right">
<div class="text-[10px] font-headline uppercase text-neutral-500 tracking-widest">Audit Signing Key</div>
<div class="font-mono text-xs text-primary">pk_live_************************3f9e</div>
</div>
<span class="material-symbols-outlined text-neutral-500 hover:text-white cursor-pointer">content_copy</span>
</div>
</div>
</div>
</main>
<!-- Visual Texture / Ambient Glows -->
<div class="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] pointer-events-none"></div>
<div class="fixed bottom-0 left-64 -z-10 w-[400px] h-[400px] bg-secondary/5 blur-[100px] pointer-events-none"></div>
</body></html>