type Props = {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  )
}
