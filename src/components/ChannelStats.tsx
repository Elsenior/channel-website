import VisitCount from "./VisitCount";
import { useVisits } from "../hooks/useVisits";

const stats = [
  { value: "+84 ألف", label: "مشترك في القناة" },
  { value: "+8 مليون", label: "مشاهدة على يوتيوب" },
  { value: "+1000", label: "فيديو تعليمي" },
  { value: "80", label: "قائمة تشغيل" },
  { value: "100%", label: "مجاني وبالعربي" },
];

export default function ChannelStats({ showVisits = false }: { showVisits?: boolean }) {
  const visits = useVisits();

  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
        {showVisits && (
          <div className="stat" hidden={visits === null}>
            <VisitCount as="strong" />
            <span>زيارة للموقع</span>
          </div>
        )}
      </div>
    </section>
  );
}
