import { cardPacks, starterCards, teams } from '../data';

export function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">React + Vite + TypeScript</p>
        <h1>F1 Fantasy Cards</h1>
        <p>
          Collect drivers, constructors, and upgrades, then build a race-day squad to compete across the calendar.
        </p>
      </section>

      <section className="grid" aria-label="Project modules">
        <ModuleCard title="Cards" detail={`${starterCards.length} starter cards modeled`} />
        <ModuleCard title="Teams" detail={`${teams.length} sample teams seeded`} />
        <ModuleCard title="Pack" detail={`${cardPacks.length} pack definitions ready`} />
        <ModuleCard title="Squad" detail="Lineup slots prepared for race strategy" />
        <ModuleCard title="Match" detail="Race scoring contracts defined" />
        <ModuleCard title="Data" detail="Seed data isolated from UI components" />
      </section>
    </main>
  );
}

interface ModuleCardProps {
  title: string;
  detail: string;
}

function ModuleCard({ title, detail }: ModuleCardProps) {
  return (
    <article className="module-card">
      <h2>{title}</h2>
      <p>{detail}</p>
    </article>
  );
}
