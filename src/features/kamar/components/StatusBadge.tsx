type Status = "active" | "disabled";

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`px-2 py-0.5 text-xs rounded-sm font-medium ${
        status === "active"
          ? "bg-green-100 text-green-700"
          : "bg-gray-200 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}