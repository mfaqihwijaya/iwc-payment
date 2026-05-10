export default function Td({
  children,
  strong,
  align = "left",
}: {
  children: React.ReactNode;
  strong?: boolean;
  align?: "left" | "right";
}) {
  return (
    <td
      className={`px-5 py-3 ${
        strong ? "font-medium text-gray-900" : "text-gray-700"
      } ${align === "right" ? "text-right" : ""}`}
    >
      {children}
    </td>
  );
}