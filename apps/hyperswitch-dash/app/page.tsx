"use client"

import Image from 'next/image'
import { Table, makeData } from '@codebase/ui'
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu } from '@medusajs/ui'

export default function Home() {
    const rerender = React.useReducer(() => ({}), {})[1]

    const columns = React.useMemo<ColumnDef<any>[]>(
        () => [
            {
                header: 'Name',
                footer: props => props.column.id,
                columns: [
                    {
                        accessorKey: 'firstName',
                        cell: info => info.getValue(),
                        footer: props => props.column.id,
                    },
                    {
                        accessorFn: row => row.lastName,
                        id: 'lastName',
                        cell: info => info.getValue(),
                        header: () => <span>Last Name</span>,
                        footer: props => props.column.id,
                    },
                ],
            },
            {
                header: 'Info',
                footer: props => props.column.id,
                columns: [
                    {
                        accessorKey: 'age',
                        header: () => 'Age',
                        footer: props => props.column.id,
                    },
                    {
                        header: 'More Info',
                        columns: [
                            {
                                accessorKey: 'visits',
                                header: () => <span>Visits</span>,
                                footer: props => props.column.id,
                            },
                            {
                                accessorKey: 'status',
                                header: 'Status',
                                footer: props => props.column.id,
                            },
                            {
                                accessorKey: 'progress',
                                header: 'Profile Progress',
                                footer: props => props.column.id,
                            },
                        ],
                    },
                ],
            },
        ],
        []
    )

    const [data, setData] = React.useState(() => makeData(100000))
    const refreshData = () => setData(() => makeData(100000))

    return (
        <>
            <Table
                {...{
                    data,
                    columns,
                }}
            />
        </>
    )
}
