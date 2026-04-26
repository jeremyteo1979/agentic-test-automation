<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="audience-bar" aria-label="Audience navigation">
        <div class="audience-links">
          <a href="#personal" aria-current="page">Personal</a>
          <a href="#sme">SME</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#about">About Us</a>
        </div>
        <div class="account-links">
          <a href="#support">Support</a>
          <a href="#stores">Store locator</a>
          <div class="account-menu">
            <a class="account-pill" href="#account">My Account</a>
            <div class="account-popover" aria-label="Account actions">
              <a href="#account">Manage my account (Preferred)</a>
              <a href="#account">Hub iD Login</a>
            </div>
          </div>
        </div>
      </div>

      <div class="main-header">
        <a class="brand" href="#home" aria-label="StarHub QE Lab home">
          <span class="brand-mark" aria-hidden="true">★</span>
          <span>StarHub</span>
        </a>

        <button
          class="nav-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="primary-nav"
          data-testid="nav-toggle"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-nav"
          class="primary-nav"
          :class="{ 'is-open': isMenuOpen }"
          aria-label="Primary navigation"
        >
          <button
            v-for="item in navigation"
            :key="item.label"
            type="button"
            :class="{ active: activeMenu === item.label }"
            @click="activeMenu = activeMenu === item.label ? '' : item.label"
          >
            {{ item.label }}
          </button>
        </nav>

        <a class="shop-link" href="#plans" data-testid="header-shop-link">Shop</a>
      </div>

      <div v-if="activeMenu" class="mega-menu" data-testid="mega-menu">
        <div v-for="group in activeNav.groups" :key="group.title" class="mega-column">
          <p>{{ group.title }}</p>
          <a v-for="link in group.links" :key="link" href="#plans">{{ link }}</a>
        </div>
        <div class="mega-feature">
          <span>{{ activeNav.kicker }}</span>
          <strong>{{ activeNav.offer }}</strong>
          <a href="#campaigns">View latest promotions</a>
        </div>
      </div>
    </header>

    <main id="home">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">Great deals await at the StarHub IT Show</p>
          <h1 id="hero-title">Available online and in-stores from 23 April - 5 May.</h1>
          <p>
            Shop show-time mobile, fibre broadband, entertainment, and Hubbing deals
            in one Vue-powered local replica built for realistic Playwright journeys.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#plans" data-testid="hero-primary-cta">Shop now</a>
            <a class="button secondary" href="#campaigns">See promotions</a>
          </div>
        </div>
        <div class="hero-visual" aria-label="Featured StarHub IT Show promotion">
          <div class="phone-frame">
            <div class="phone-screen">
              <span>IT Show</span>
              <strong>StarHub deals</strong>
              <small>Mobile, broadband, TV+ and device offers</small>
            </div>
          </div>
          <div class="offer-badge">
            <span>23 Apr - 5 May</span>
            <strong>Start Hubbing and save over $1,000</strong>
          </div>
          <div class="hero-dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      <section class="promise-strip" aria-label="StarHub service promises">
        <article v-for="promise in promises" :key="promise.title">
          <span>{{ promise.icon }}</span>
          <strong>{{ promise.title }}</strong>
        </article>
      </section>

      <section id="campaigns" class="campaign-band" aria-label="Featured promotions">
        <article
          v-for="campaign in campaigns"
          :key="campaign.title"
          class="campaign-card"
          :class="campaign.tone"
        >
          <div>
            <p>{{ campaign.kicker }}</p>
            <h2>{{ campaign.title }}</h2>
            <span>{{ campaign.copy }}</span>
          </div>
          <a :href="campaign.href">{{ campaign.cta }}</a>
        </article>
      </section>

      <section class="section featured-offers" aria-labelledby="offers-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Curated offers</p>
            <h2 id="offers-title">Curated offers for your different needs.</h2>
          </div>
          <a href="#plans">Check out latest promotions</a>
        </div>

        <div class="offer-grid">
          <article v-for="offer in curatedOffers" :key="offer.title" class="offer-tile">
            <span>{{ offer.kicker }}</span>
            <h3>{{ offer.title }}</h3>
            <p>{{ offer.copy }}</p>
            <a :href="offer.href">{{ offer.cta }}</a>
          </article>
        </div>
      </section>

      <section id="plans" class="section" aria-labelledby="plans-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Shop by category</p>
            <h2 id="plans-title">Mobile, Broadband, Entertainment and more.</h2>
          </div>
          <a href="#support">Need help choosing?</a>
        </div>

        <div class="product-grid">
          <article
            v-for="product in products"
            :id="product.id"
            :key="product.name"
            class="product-card"
            :data-testid="product.id === 'mobile' ? 'mobile-plan-card' : undefined"
          >
            <span class="product-icon">{{ product.icon }}</span>
            <h3>{{ product.name }}</h3>
            <p>{{ product.copy }}</p>
            <ul>
              <li v-for="item in product.links" :key="item">{{ item }}</li>
            </ul>
            <button type="button" @click="selectedPlan = product.name">
              {{ product.cta }}
            </button>
          </article>
        </div>

        <div class="selection-panel" role="status" data-testid="plan-selection">
          {{ selectedPlan ? `${selectedPlan} selected. Ready for a testable journey.` : "Select a category to update this Vue-rendered status region." }}
        </div>
      </section>

      <section class="section devices-section" aria-labelledby="devices-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Trending devices</p>
            <h2 id="devices-title">Up to $388 off for new lines or port-ins.</h2>
          </div>
          <a href="#mobile">Shop phones</a>
        </div>

        <div class="device-grid" data-testid="trending-devices">
          <article v-for="device in devices" :key="device.name" class="device-card">
            <div class="device-art" :class="device.tone" aria-hidden="true">
              <span>{{ device.badge }}</span>
            </div>
            <h3>{{ device.name }}</h3>
            <strong>{{ device.price }}</strong>
            <p>{{ device.copy }}</p>
            <a href="#mobile">Buy now</a>
          </article>
        </div>
      </section>

      <section class="gear-section" aria-labelledby="gear-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Gear up with StarHub</p>
            <h2 id="gear-title">Savings, security, and membership perks.</h2>
          </div>
        </div>
        <div class="gear-grid">
          <article v-for="item in gear" :key="item.title">
            <span>{{ item.kicker }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.copy }}</p>
            <a href="#plans">Learn more</a>
          </article>
        </div>
      </section>

      <section id="support" class="support-section" aria-labelledby="support-title">
        <div class="support-copy">
          <p class="eyebrow">Support</p>
          <h2 id="support-title">How can we help you today?</h2>
          <p>Search common account, billing, service, roaming, and installation topics.</p>
        </div>

        <form class="support-search" data-testid="support-search" @submit.prevent="runSearch">
          <label for="support-query">Search support topics</label>
          <div class="search-row">
            <input
              id="support-query"
              v-model.trim="supportQuery"
              name="query"
              type="search"
              placeholder="Bill payment, data usage, roaming ..."
            >
            <button type="submit">Search</button>
          </div>
          <p class="search-result" data-testid="search-result" aria-live="polite">
            {{ searchResult }}
          </p>
        </form>

        <div class="faq-grid" aria-label="Frequently asked questions">
          <article v-for="topic in supportTopics" :key="topic.title">
            <h3>{{ topic.title }}</h3>
            <a v-for="item in topic.links" :key="item" href="#support">{{ item }}</a>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <strong>StarHub QE Lab</strong>
        <p>Vue local replica for automation practice. Public-site inspired, original implementation.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="#campaigns">Promotions</a>
        <a href="#plans">Plans</a>
        <a href="#support">Support</a>
        <a href="#stores">Store locations</a>
        <a href="#app">StarHub App</a>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const isMenuOpen = ref(false);
const activeMenu = ref("Mobile");
const selectedPlan = ref("");
const supportQuery = ref("");
const searchResult = ref("");

const navigation = [
  {
    label: "Mobile",
    kicker: "All-new 5G Unlimited+",
    offer: "Unlimited data, global roaming, and no contract options.",
    groups: [
      { title: "Mobile Phones", links: ["All phones", "Apple", "Samsung", "OPPO", "Tablets & Watches"] },
      { title: "Mobile Plans", links: ["5G Unlimited+", "Prepaid", "Tourist plans", "Corporate deals"] },
      { title: "Add-ons & Services", links: ["Device Trade-in", "Roaming", "eSIM activation", "SafeHub+"] }
    ]
  },
  {
    label: "Broadband",
    kicker: "HomeHub+",
    offer: "10Gbps fibre, WiFi 7 routers, and entertainment bundles.",
    groups: [
      { title: "Broadband Plans", links: ["Broadband plans", "Broadband & TV+ bundles"] },
      { title: "Routers", links: ["10Gbps routers", "WiFi 6 & 7 routers"] },
      { title: "Services", links: ["Digital Voice", "JuniorProtect", "Improve your WiFi"] }
    ]
  },
  {
    label: "Entertainment",
    kicker: "StarHub TV+",
    offer: "Sports, drama, streaming apps, and cloud recording.",
    groups: [
      { title: "Entertainment Plans", links: ["Browse TV+ passes", "Premier League", "Explore add-ons"] },
      { title: "StarHub TV+", links: ["Cloud recording", "Mobile app", "TV+ box"] },
      { title: "Streaming Apps", links: ["HBO Max", "Disney+", "Netflix"] }
    ]
  },
  {
    label: "Support",
    kicker: "Self-serve support",
    offer: "Account, billing, setup, and troubleshooting journeys.",
    groups: [
      { title: "Managing Your Account", links: ["StarHub App", "Hub iD login", "Service agreement"] },
      { title: "Billing & Payment", links: ["Bill overview", "Pay bills", "Payment methods"] },
      { title: "Device Setup", links: ["WiFi tips", "Trade-in FAQs", "Router FAQs"] }
    ]
  },
  {
    label: "Lifestyle & Safety",
    kicker: "Do more with premium services",
    offer: "Protection, security, lifestyle, and scam-safety add-ons.",
    groups: [
      { title: "Protection & Security", links: ["SafeHub+ Overview", "SmartSupport", "CyberProtect", "SmartSupport Home"] },
      { title: "Safety", links: ["CyberCover", "ScamSafe", "Combating spoof calls"] },
      { title: "Lifestyle", links: ["Travel Protection", "Reviews, Guides & How-To's"] }
    ]
  },
  {
    label: "Membership",
    kicker: "Enjoy more benefits",
    offer: "Membership tiers, exclusive prices, and loyalty perks.",
    groups: [
      { title: "Membership", links: ["Membership Tiers", "Why StarHub?", "Hubbing benefits"] },
      { title: "Exclusive Prices", links: ["Premier League", "DeviceDollars", "Multi-line Savings"] },
      { title: "Useful Links", links: ["Latest promotions", "Switch to StarHub", "Store locations"] }
    ]
  }
];

const campaigns = [
  {
    kicker: "IT Show",
    title: "Great deals await at the StarHub IT Show!",
    copy: "Available online and in-stores from 23 April - 5 May.",
    cta: "Shop now",
    href: "#mobile",
    tone: "green"
  },
  {
    kicker: "Hubbing",
    title: "Start Hubbing and save over $1,000.",
    copy: "Customise your own bundle at a special price.",
    cta: "Find out more",
    href: "#broadband",
    tone: "blue"
  },
  {
    kicker: "Mobile",
    title: "$0 iPhone with 5G Platinum Plan.",
    copy: "With an upsized trade-in bonus and Apple Watch bundle savings.",
    cta: "Buy now",
    href: "#mobile",
    tone: "gold"
  }
];

const promises = [
  { icon: "✓", title: "Peace of mind" },
  { icon: "↔", title: "Full flexibility" },
  { icon: "$", title: "Multi-service savings" },
  { icon: "24/7", title: "HubCare" }
];

const curatedOffers = [
  {
    kicker: "New",
    title: "$0 with trade-in on 5G Unlimited+ Plus",
    copy: "Gifts worth $457 with screen protection and extended warranty.",
    cta: "Buy now",
    href: "#mobile"
  },
  {
    kicker: "Entertainment",
    title: "Get Mediacorp's FIFA World Cup 2026 Season Pass",
    copy: "Early bird pricing from 2 April to 30 April.",
    cta: "Sign up now",
    href: "#entertainment"
  },
  {
    kicker: "Broadband",
    title: "Speed Deal: 10Gbps Broadband",
    copy: "Free WiFi 7 router and installation at a limited-time monthly price.",
    cta: "Sign up now",
    href: "#broadband"
  },
  {
    kicker: "Entertainment",
    title: "StarHub WatchParty: Premier League Final Day",
    copy: "A Clarke Quay event for fans to register and secure a slot.",
    cta: "Register now",
    href: "#entertainment"
  }
];

const products = [
  {
    id: "mobile",
    icon: "5G",
    name: "Mobile",
    copy: "Unlimited data plans, phones, eSIM, roaming, and multi-line savings.",
    links: ["5G Unlimited+", "Phones", "Roaming"],
    cta: "View mobile options"
  },
  {
    id: "broadband",
    icon: "WiFi",
    name: "Broadband",
    copy: "Fibre plans, HomeHub+ bundles, routers, and whole-home WiFi support.",
    links: ["Broadband plans", "HomeHub+", "Routers"],
    cta: "View broadband options"
  },
  {
    id: "entertainment",
    icon: "TV+",
    name: "Entertainment",
    copy: "StarHub TV+, sports passes, streaming apps, and cloud recording.",
    links: ["TV+ passes", "Premier League", "Streaming"],
    cta: "View TV options"
  },
  {
    id: "support-card",
    icon: "?",
    name: "Support",
    copy: "Billing, account management, installation, service status, and FAQs.",
    links: ["Billing", "Service setup", "Troubleshooting"],
    cta: "View support topics"
  }
];

const devices = [
  {
    name: "iPhone 17e",
    price: "From $0/mth",
    copy: "With DeviceDollars. Pay later over 24 months.",
    badge: "iOS",
    tone: "silver"
  },
  {
    name: "Samsung Fold7 256GB",
    price: "From $0/mth",
    copy: "$280 off Watch Ultra with eligible plans.",
    badge: "Fold",
    tone: "graphite"
  },
  {
    name: "OPPO Find X9 Pro",
    price: "From $0/mth",
    copy: "Free accessories worth $108 on selected sign-ups.",
    badge: "OPPO",
    tone: "green"
  }
];

const gear = [
  {
    kicker: "Multi-line discount",
    title: "Enjoy greater discounts with multiple lines.",
    copy: "Because saving is better when more services come together."
  },
  {
    kicker: "DeviceDollars",
    title: "Redeem DeviceDollars on device purchases.",
    copy: "Model loyalty rewards and purchase paths in a repeatable test flow."
  },
  {
    kicker: "ScamSafe",
    title: "Defend against scam calls and SMS fraud.",
    copy: "A safety service surface that can later support form and FAQ tests."
  },
  {
    kicker: "What is Hubbing?",
    title: "Save more and get more across services.",
    copy: "A reusable bundle journey for mobile, broadband, and entertainment."
  }
];

const supportTopics = [
  { title: "Managing Your Account", links: ["Appointment and delivery FAQ", "View service agreement", "Combating spoof calls"] },
  { title: "Billing & Payment", links: ["General bill overview", "Pay bills", "Payment options"] },
  { title: "Services & Plans", links: ["DataTravel FAQ", "5G network", "eSIM activation"] }
];

const activeNav = computed(() => navigation.find((item) => item.label === activeMenu.value) || navigation[0]);

function runSearch() {
  const query = supportQuery.value || "popular topics";
  searchResult.value = `Showing Vue local test results for "${query}".`;
}
</script>
