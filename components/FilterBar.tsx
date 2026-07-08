type SelectFilter = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

type SearchFilter = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

type FilterBarProps = {
  searches?: SearchFilter[];
  selects?: SelectFilter[];
};

export function FilterBar({ searches = [], selects = [] }: FilterBarProps) {
  return (
    <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-4">
      {searches.map((item) => (
        <label key={item.label} className="block text-sm font-semibold text-slate-700">
          {item.label}
          <input
            value={item.value}
            onChange={(event) => item.onChange(event.target.value)}
            placeholder={item.placeholder}
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </label>
      ))}
      {selects.map((item) => (
        <label key={item.label} className="block text-sm font-semibold text-slate-700">
          {item.label}
          <select
            value={item.value}
            onChange={(event) => item.onChange(event.target.value)}
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            {item.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
