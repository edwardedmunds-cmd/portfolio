type DataTableProps<T> = {
  columns: Array<{ key: string; label: string; render: (row: T) => React.ReactNode }>;
  rows: T[];
  minWidth?: string;
};

export function DataTable<T>({ columns, rows, minWidth = "900px" }: DataTableProps<T>) {
  return (
    <div className="table-scroll rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-left text-sm" style={{ minWidth }}>
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-3 font-bold">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-slate-200 transition hover:bg-slate-50">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 align-top text-slate-600">
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
