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
          <a class="account-pill" href="#account">My Account</a>
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
          <p class="eyebrow">5G Unlimited+ Plans</p>
          <h1 id="hero-title">$0 today. 0 worry with 5G Unlimited+ Plans.</h1>
          <p>
            A Vue-powered local replica that models StarHub's public customer journeys
            with realistic navigation, campaigns, plan discovery, and support flows.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#plans" data-testid="hero-primary-cta">Shop now</a>
            <a class="button secondary" href="#support">Get help</a>
          </div>
        </div>
        <div class="hero-visual" aria-label="Featured mobile plan">
          <div class="phone-frame">
            <div class="phone-screen">
              <span>5G</span>
              <strong>Unlimited+</strong>
              <small>165 roaming destinations</small>
            </div>
          </div>
          <div class="offer-badge">
            <span>New</span>
            <strong>Buy 3 lines, get 1 free</strong>
          </div>
        </div>
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
  }
];

const campaigns = [
  {
    kicker: "Mobile",
    title: "$0 today. 0 worry.",
    copy: "Upgrade on easy mode with 5G Unlimited+ Plans.",
    cta: "Buy now",
    href: "#mobile",
    tone: "green"
  },
  {
    kicker: "Bundle",
    title: "When everyone comes together, the deals follow.",
    copy: "Sign up for two plans and get a streaming year on us.",
    cta: "Shop bundles",
    href: "#broadband",
    tone: "blue"
  },
  {
    kicker: "HomeHub+",
    title: "Free 6 months 10Gbps broadband.",
    copy: "Enjoy faster home fibre and entertainment in one plan.",
    cta: "Sign up",
    href: "#broadband",
    tone: "gold"
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
