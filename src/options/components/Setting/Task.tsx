import React, { useEffect, useMemo } from 'react';
import { Column, useTable } from 'react-table';
import useStore from '@/options/hooks/useStore';

const Task = () => {
  const [task, fetch] = useStore();
  const columns = useMemo<Column[]>(
    () => [
      {
        Header: 'キーバインド',
        accessor: 'keybinds',
      },
      {
        Header: '説明',
        accessor: 'name',
      },
      // {
      //   Header: 'Actions',
      //   accessor: 'actions',
      // },
    ],
    []
  );
  const data = useMemo(
    () =>
      task?.map((t) => ({
        name: t.name,
        keybinds: t.keybinds.map((k) => k.key).join(', '),
        // actions: t.actions.join(', '),
      })) || [],
    [task]
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <table {...getTableProps()} className="table w-full table-compact">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>
                  <pre
                    className={`pl-1 pr-1 w-fit ${
                      cell.column.id === 'keybinds' ? 'bg-base-300' : ''
                    }`}
                  >
                    {cell.render('Cell')}
                  </pre>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Task;
