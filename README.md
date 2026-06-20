# pohonch — website

A static website for Pohonch, a collective of independent therapists.

## Structure

```
pohonch/
├── index.html        ← Main website (do not edit)
├── content.js        ← ALL editable content lives here ✏️
├── netlify.toml      ← Netlify deploy config
├── images/           ← Therapist photos go here
│   ├── aishwarya-temgire.jpg
│   ├── juhi.jpg
│   ├── pravalika-buddha.jpg
│   ├── preksha-porwal.jpg
│   ├── shraddha-litoriya.jpg
│   └── vipasha.jpg
└── docs/
    └── content-guide.docx  ← Word doc for non-technical editing
```

## How to update content

1. Open `content.js` in any text editor
2. Edit the values (text between `"` quotes)
3. Save and push to GitHub → Netlify auto-deploys

## Adding therapist photos

1. Name the image file exactly as listed in `content.js` under `imagePath`
   - e.g. `aishwarya-temgire.jpg`
2. Place the file inside the `images/` folder
3. Recommended: square crop, min 300×300px, face centered

If no image is found, the site automatically shows the therapist's initials instead.

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect your GitHub repo
4. Build settings: leave everything blank (auto-detected)
5. Click Deploy

Every push to `main` triggers a re-deploy automatically.

## Inquiry form

All CTAs link to the Google Form set in `content.js` under `inquiryFormUrl`.
To change the form link, update that one value and push.
