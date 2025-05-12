type FormInputProps = {
    label: string
    name: string
    type?: string
    required?: boolean
  }
  
  export default function FormInput({ label, name, type = 'text', required = false }: FormInputProps) {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium mb-1">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    )
  }
  