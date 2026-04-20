# IKKF Website Rebuild Plan

## Phase 1: Acknowledge
Rebuild the IKKF promotional website from scratch. Original was lost during OpenClaw 4.15 reinstall. Site should promote the IKKF CLI tool with Japanese martial arts aesthetic.

## Phase 2: Domain Detection
- **Domain:** Frontend web development (HTML/CSS/JS)
- **Expertise:** Static site generation, modern CSS, responsive design
- **Technology:** Pure HTML/CSS/JS (no framework needed for landing page)

## Phase 3: Check Existing
- Original site files: LOST (only .git remains)
- Memory references exist from 2026-04-10
- Checkout pages (solo.html, team.html): LOST
- Server code (payment.js, license.js): LOST
- Must rebuild everything from memory + best practices

## Phase 4: Research
From memory:
- **Design:** Japanese martial arts aesthetic (vermillion #d94a3a, ink black #1a1a1a, gold #c9a436 accents)
- **Sections:** Hero, Terminal Demo, Features (belt cards), 7 Phases timeline, Pricing
- **Pricing:** Solo $29, Team $99, Enterprise custom
- **Checkout:** Stripe-powered pages for Solo and Team
- **License system:** IKKF-XXXX-XXXX-XXXX format, machine-locked

## Phase 5: Decomposition

| Chunk | Name | Description | Time | Deliverable |
|-------|------|-------------|------|-------------|
| 1 | Project Structure | Set up folder structure, base CSS variables | 10 min | index.html, css/ folder |
| 2 | Hero Section | Main hero with TOOL+ED branding | 15 min | Hero with animations |
| 3 | Terminal Demo | Interactive terminal showing IKKF commands | 15 min | Terminal component |
| 4 | Features Section | Martial arts belt cards for features | 15 min | 3-4 feature cards |
| 5 | 7 Phases Timeline | Visual timeline of IKKF protocol | 15 min | Timeline component |
| 6 | Pricing Section | Pricing cards with CTA buttons | 10 min | 3 pricing tiers |
| 7 | Footer | Links, copyright, social | 10 min | Footer component |
| 8 | Checkout Solo | Stripe checkout for $29 Solo | 15 min | checkout/solo.html |
| 9 | Checkout Team | Stripe checkout for $99 Team | 15 min | checkout/team.html |
| 10 | Polish & Test | Responsive, animations, final checks | 15 min | Full site tested |

**Total: ~130 minutes (~2 hours)**

## Phase 6: Synthesize
Build order:
1. Create project structure with shared CSS
2. Build main landing page sections top-to-bottom
3. Create checkout pages with Stripe integration
4. Add animations and polish
5. Test responsive behavior
6. Commit to git

## Phase 7: Execute
Starting chunk 1 now.
