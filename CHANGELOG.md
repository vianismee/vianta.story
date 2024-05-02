## VIANTA STORY

---

Version: 0.0.2.1 (Unrelease)

---

### Update **Version 0.0.2.1 - @pagedone (Unrelease)**
Minor Fix
- Memperbaiki teks merapikan structure & section
  > Repository branch @pagedone Update #3 commit [dbdee68](https://github.com/vianismee/viantastory.github.io/commit/dbdee687e49d692a0d75f841a34dae79c8e5a670)
  > Kamis, 02/05/2024 -- @deviceKantor
---

### Update **Version 0.0.2 - @pagedone (Unrelease)**

Pada update Versi 0.0.2 menambahkan changelog untuk mendeteksi perubahan tree pada github.

- Mendambah CHANGELOG dalam bentuk markdown `.md`
  > Repository branch @pagedone Update #2 commit [7fed9b1](https://github.com/vianismee/viantastory.github.io/commit/7fed9b1791576bee4aee73224150335496a7b694)
  > Kamis, 02/05/2024 -- @deviceKantor

---

### Update **Version 0.0.1 - @pagedone (Unrelease)**

Pada update Versi 0.0.1 menambahkan plugin pendukung Tailwind CSS, UI Library: Pagedone; Daisyui, Icon Library: Lucide, Utilities: Scrollbar Hide

- Plugin [Pagedone](https://pagedone.io/) via CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/pagedone@1.1.2/src/css/pagedone.css" />
```

- Plugin [Daisyui](https://daisyui.com/) Installer:

```bash
npm install daisui@latest
```

```css
// tailwind.config.js
module.exports = {
  daiysui:{
    themes: ["light"]
  },
  theme: {
    // ...
  },
  plugins: [
    require('daisyui')
    // ...
  ]
}
```

- Plugin [Lucide](https://lucide.dev/)

```bash
npm install lucide
```

- Utility [Scrollbar Hide](https://github.com/reslear/tailwind-scrollbar-hide)

```bash
npm install tailwind-scrollbar-hide
```

```css
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
```

> Repository branch @pagedone Update #1 commit [09deb09](https://github.com/vianismee/viantastory.github.io/commit/09deb0935ad27c54f579c64b343a78afaab4972d)
> Rabu, 01/05/2024 -- @vianismee
