export default function SizeBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex flex-col bg-gray-100 py-2 rounded-lg w-auto items-center ">
      <p className="text-sm">{title}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}
