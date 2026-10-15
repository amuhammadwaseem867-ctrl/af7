import Counter from "@/components/motion/Counter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { manufacturing, finishes, applicationAreas } from "@/data/company";

const stats = [
  { value: 4, label: "Zipper types", note: "Metal · Aluminium · Nylon · Vislon" },
  { value: manufacturing.steps.length, label: "In-house stages", note: "From tape to finished zipper" },
  { value: finishes.items.length, label: "Metal finishes", note: "Antique, shiny & matt options" },
  { value: applicationAreas.items.length, label: "Application areas", note: "Apparel, denim, bags & more" },
];

export default function Stats() {
  return (
    <section className="home-stats" aria-label="AF7 at a glance">
      <Stagger className="home-stats-grid" stagger={0.1}>
        {stats.map((stat) => (
          <StaggerItem className="home-stat" key={stat.label}>
            <span className="home-stat-value">
              <Counter value={stat.value} />
            </span>
            <span className="home-stat-label">{stat.label}</span>
            <span className="home-stat-note">{stat.note}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
