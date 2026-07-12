// ============================================================
// SITE CONFIG — fill in the placeholders below and redeploy.
// Every tracker and form on the site reads from this one file.
// Leave a value as "" (empty) to disable that tracker entirely.
// ============================================================

export const ANALYTICS = {
  // Google Tag Manager — container ID, e.g. "GTM-XXXXXXX"
  GTM_ID: 'GTM-KB7GHNGG',

  // Google Analytics 4 — measurement ID, e.g. "G-XXXXXXXXXX"
  // (Skip if you load GA4 through GTM instead.)
  GA4_ID: 'G-2ST4M1LN0W',

  // Meta (Facebook/Instagram) Pixel — numeric ID, e.g. "1234567890123456"
  META_PIXEL_ID: '3302102963303672',

  // X (Twitter) Pixel — e.g. "abcde"
  X_PIXEL_ID: 'rdp19',

  // TikTok Pixel — e.g. "XXXXXXXXXXXXXXXXXX"
  TIKTOK_PIXEL_ID: '',

  // Microsoft Clarity (free heatmaps/session recordings) — e.g. "abcdefghij"
  CLARITY_ID: '',

  // Pinterest Tag — e.g. "2612345678901"
  PINTEREST_TAG_ID: '',
};

export const FORMS = {
  // Formspree — create two forms at https://formspree.io and paste the
  // 8-character form IDs below (the part after /f/ in the endpoint URL).
  NEWSLETTER_FORMSPREE_ID: 'xjgnbzba',
  CONTACT_FORMSPREE_ID: 'xjgnbzba',
};

export const LINKS = {
  amazonAuthorPage:
    'https://www.amazon.com/stores/author/B0057K5UEY/allbooks',
  instagram: 'https://www.instagram.com/richard_l_becker',
  facebook: 'https://www.facebook.com/people/Richard-l-Becker/61572162396675/',
  x: 'https://x.com/richardlbecker',
  linkedin: 'https://www.linkedin.com/in/richard-l-becker-4991487',
  agent: 'https://growpalmbeach.com/',
};

// Append Amazon Attribution tags here once created in the Amazon Ads
// console (Attribution tags are per-link, not a site-wide script).
export const BOOKS = [
  {
    slug: 'the-catch',
    title: 'THE CATCH',
    tagline: 'Reality-TV thriller with high-stakes moral choices',
    hook: 'The only way out is to win… or die trying.',
    positioning: 'The Bachelor meets Squid Game.',
    cover: '/covers/the-catch.jpg',
    amazon:
      'https://www.amazon.com/Catch-Richard-Becker-ebook/dp/B07RHQ4NPV',
    featured: true,
  },
  {
    slug: 'hell-beckons',
    title: 'HELL BECKONS',
    tagline: 'Chaos, revenge & redemption in a world gone mad',
    hook: 'A post-9/11 occult thriller that reads as disturbingly prescient.',
    positioning: 'For fans of Stephen King, John Grisham, and Gillian Flynn.',
    cover: '/covers/hell-beckons.jpg',
    amazon:
      'https://www.amazon.com/Hell-Beckons-Richard-Becker-ebook/dp/B07RLSBQSP',
    featured: true,
  },
  {
    slug: 'divorce-and-the-holy-puck',
    title: 'DIVORCE AND THE HOLY PUCK',
    tagline: 'Darkly comic legal & hockey absurdity',
    hook: 'The courtroom and the rink collide — and nobody skates away clean.',
    positioning: 'Grisham-meets-Turow with a slapshot.',
    cover: '/covers/divorce-and-the-holy-puck.jpg',
    amazon:
      'https://www.amazon.com/Divorce-Holy-Puck-Richard-Becker-ebook/dp/B079J4R99P',
    featured: true,
  },
  {
    slug: 'the-heart-lands',
    title: 'THE HEART LANDS',
    tagline: 'Love and loss across an unforgiving American landscape',
    hook: 'Some places take more than they give.',
    positioning: '',
    cover: '/covers/the-heart-lands.jpg',
    amazon: 'https://www.amazon.com/stores/author/B0057K5UEY/allbooks',
    featured: false,
  },
  {
    slug: 'the-neighborhood',
    title: 'THE NEIGHBORHOOD',
    tagline: 'Behind every manicured lawn, a secret worth burying',
    hook: 'Everyone waves. No one talks.',
    positioning: '',
    cover: '/covers/the-neighborhood.jpg',
    amazon: 'https://www.amazon.com/stores/author/B0057K5UEY/allbooks',
    featured: false,
  },
  {
    slug: 'ice-cream-man',
    title: 'ICE CREAM MAN',
    tagline: 'A sweet route through a sour town',
    hook: 'He knows every street — and every secret on it.',
    positioning: '',
    cover: '/covers/ice-cream-man.jpg',
    amazon: 'https://www.amazon.com/stores/author/B0057K5UEY/allbooks',
    featured: false,
  },
];
