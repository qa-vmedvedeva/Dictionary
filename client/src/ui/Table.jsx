export default function Table({   columns,
                                  data,
                                  onRowClick,
                                  onSort,
                                  sortField,
                                  sortDirection }) {
    return (
        <table className="table">
            <thead>
            <tr>
                {columns.map(col => (
                    <th
                        key={col.key}
                        onClick={() => col.sortable && onSort(col.key)}
                        style={{
                            cursor: col.sortable ? "pointer" : "default"
                        }}
                    >
                        {col.title}
                        {col.sortable && sortField === col.key && (
                            <span className="sort-icon">
                  {sortDirection === "asc" ? " ▲" : " ▼"}
                </span>
                        )}
                    </th>
                ))}
            </tr>
            </thead>

            <tbody>
            {data.map(row => (
                <tr
                    key={row.id}
                    onClick={() => onRowClick?.(row)}
                    style={{ cursor: onRowClick ? "pointer" : "default" }}
                >
                    {columns.map(col => (
                        <td key={col.key}>
                            {col.render ? col.render(row) : row[col.key]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}