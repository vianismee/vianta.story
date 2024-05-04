# **VIANTA STORY**

---

Version: 0.1.4.0 Main
Unrelease: V 0.2.0.0

---
#### Version 0.2.1.0

Content Update:
- Add image on gallery section

Upcoming:
- Article Page on `/public/page/article/<Judul>.html`
- Gallery page on `/public/page/gallery.html`
- Add audio autoplay

> Repository branch @Revert Update #8 commit [d309089](https://github.com/vianismee/viantastory.github.io/commit/d309089b1a12932f19a8b5614c8d2f7e3f49e511)
> Sabtu, 05/05/2024 -- @vianismee

---
#### Version 0.2.0.0

Content Update:

- Minor Fix Typo

Page Update:
- Add Gallery
- Animate Gallery

Upcoming:
- Article Page on `/public/page/..`
- Add audio autoplay

> Repository branch @main Update #7 commit [d309089](https://github.com/vianismee/viantastory.github.io/commit/d309089b1a12932f19a8b5614c8d2f7e3f49e511)
> Kamis, 02/05/2024 -- @deviceKantor

---

#### Release Main Version 0.1.4.0
Content Update:
- History content update "The Conjuring Date"
- Add file `img/history/`

Fitur Update:
- Add audio autoplay ❌ \\ Karena di refresh audio tidak keluar next time

Upcoming:
- Gallery
- Article Page on `/public/page/..`

> Repository branch @main Update #6 commit [e19629c](https://github.com/vianismee/viantastory.github.io/commit/e19629c50366b6db35a2d581ba38b5d6e985e289)
> Kamis, 02/05/2024 -- @vianismee

---

#### Release Main Version 0.1.3.0
Merge @pagedone to @main
> Repository branch @main Update #5 commit [d77b0a9](https://github.com/vianismee/viantastory.github.io/commit/d77b0a92e8cb5b4b3496df4bb404c9f3b201e6d9)
> Kamis, 02/05/2024 -- @deviceKantor

---

#### Update **Version 0.0.3.0 - @pagedone (Unrelease)**

Content Update:

- Menambah Abstrak pada History, serta menjadi judul "History of Us" menjadi "Glimpse of Us"
- Penambahan update link pada bagian Instagram dengan menambah
  ```html
  <a href="Link" class="cursor-pointer"> //... </a>
  ```

Fitur Baru:

- Carousell foto pada History

> Repository branch @pagedone Update #4 commit [d77b0a9](https://github.com/vianismee/viantastory.github.io/commit/d77b0a92e8cb5b4b3496df4bb404c9f3b201e6d9)
> Kamis, 02/05/2024 -- @deviceKantor

Bug Fix:

- Minor Bug Fixs

#### Update **Version 0.0.2.1 - @pagedone ✔**

Minor Fix

- Memperbaiki teks merapikan structure & section

> Repository branch @pagedone Update #3 commit [dbdee68](https://github.com/vianismee/viantastory.github.io/commit/dbdee687e49d692a0d75f841a34dae79c8e5a670)
> Kamis, 02/05/2024 -- @deviceKantor

---

#### Update **Version 0.0.2 - @pagedone ✔**

Pada update Versi 0.0.2 menambahkan changelog untuk mendeteksi perubahan tree pada github.

- Mendambah CHANGELOG dalam bentuk markdown `.md`

> Repository branch @pagedone Update #2 commit [7fed9b1](https://github.com/vianismee/viantastory.github.io/commit/7fed9b1791576bee4aee73224150335496a7b694)
> Kamis, 02/05/2024 -- @deviceKantor

---

### Update **Version 0.0.1 - @pagedone ✔**

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
