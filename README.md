# Horizontal Timeline Project

A clean, interactive timeline component built with **Next.js**, **TypeScript**, and **Tailwind CSS**.
This project demonstrates a **lane assignment algorithm** and dynamic rendering of events with proportional widths based on their duration.

---

## Project Overview

This timeline showcases:

- **Lane Assignment**: Events are organized into lanes without overlap
- **Proportional Rendering**: Each event’s width reflects its actual time duration
- **UI from Figma**: Designed in Figma and transcribed into code
- **Responsive Layout**: Works with horizontal scrolling for larger datasets

---

## What I Like About This Implementation

- I enjoyed designing the UI/UX of the timeline in **Figma** and then bringing it into code.
- The modular structure (Header, Lanes, Events) keeps the codebase clean and ready for future features.
- It was rewarding to see the **visual alignment between dates and events** come to life.

---

## What I Would Change If Doing It Again

- Spend **less time in Figma** and more on the lane assignment logic.
- Improve **text handling** for short-duration events (ellipsis, tooltips, or adaptive rendering).
- Add animations and interactivity (hover states, tooltips).
- Enhance **mobile experience** with better gestures and zoom controls.

---

## Design Decisions

- I analyzed **Gantt charts** and tools like **Jira, Monday, GitHub Projects**, and especially this Figma Community reference:
  👉 [Figma Timeline Reference](https://www.figma.com/community/file/1196989315003635639)
- After that I made a simple Figma Wireframe to have as guide
  ![Figma Wireframe](docs/figma-timeline.png)

- I chose **Next.js + Tailwind CSS** for rapid development and a consistent design system.
- Events are dynamically rendered from structured data (`assignLanes`), making the layout adaptive.

---

## Testing Strategy (If I Had More Time)

- **Unit tests & integration tests** with **Jest** (lane assignment, event positioning).
- **Accessibility tests** (keyboard navigation, ARIA labels, color contrast).
- **Cross-device testing**: responsive behavior on mobile and tablet.
- **Edge cases**: very long names, overlapping events, and single-day milestones.

---

## Getting Started

### Prerequisites

- Node.js (18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd horizontal-timeline
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the timeline.

---

## Data Structure

Each timeline event has the following structure:

```typescript
{
  id: number;
  start: string; // ISO date, e.g. "2021-01-14"
  end: string; // ISO date, e.g. "2021-01-22"
  name: string; // Event description
}
```

Events are passed into `assignLanes()`, which groups them into lanes and returns a nested array of events for rendering.

---

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── TimelineHeader.tsx
│   │   ├── TimelineLane.tsx
│   │   └── TimelineEvent.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   ├── assignLanes.ts        # Lane assignment algorithm
│   └── timelineUtils.ts      # Date/position calculations
├── types/
│   └── timeline.ts           # Type definitions
└── README.md
```

---

**Created by Arthur Ferreira Costa**
_Horizontal Timeline Project_
