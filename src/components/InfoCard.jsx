export function InfoCard({ title, value, unit }) {
  let displayValue = value;

  if (title === "Air Quality") {
    switch (value) {
      case 1: displayValue = "Good 🌱 (0–50)"; break;
      case 2: displayValue = "Moderate 😐 (51–100)"; break;
      case 3: displayValue = "Unhealthy (Sensitive) (101–150)"; break;
      case 4: displayValue = "Unhealthy 🚫 (151–200)"; break;
      case 5: displayValue = "Very Unhealthy ⚠️ (201–300)"; break;
      case 6: displayValue = "Hazardous ☠️ (301–500)"; break;
      default: displayValue = "N/A";
    }
  }

  return (
    <div className="rounded-lg bg-blue-400/50 p-6 shadow text-lg flex flex-col">
      <span className="font-semibold">{title}</span>
      <span>
        {displayValue}
        {unit ? <span> {unit}</span> : null}
      </span>
    </div>
  );
}
