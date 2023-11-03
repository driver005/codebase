import { DropdownMenu, clx } from "@medusajs/ui"
import { Check, Plus } from "@medusajs/icons"
import React, { useEffect } from "react"

const dateFilters = [
    "is in the last",
    "is older than",
    "is after",
    "is before",
    "is equal to",
]

const CustomerFilters = ({
    tabs,
    activeTab,
    onTabClick,
    onSaveTab,
    onRemoveTab,
    filters,
    submitFilters,
    clearFilters,
}) => {
    const [tempState, setTempState] = React.useState(filters)
    const [name, setName] = React.useState("")

    // const handleRemoveTab = (val) => {
    //     if (onRemoveTab) {
    //         onRemoveTab(val)
    //     }
    // }

    // const handleSaveTab = () => {
    //     if (onSaveTab) {
    //         onSaveTab(name, tempState)
    //     }
    // }

    // const handleTabClick = (tabName: string) => {
    //     if (onTabClick) {
    //         onTabClick(tabName)
    //     }
    // }

    // React.useEffect(() => {
    //     setTempState(filters)
    // }, [filters])

    const onSubmit = () => {
        submitFilters(tempState)
    }

    const onClear = () => {
        clearFilters()
    }

    const setSingleFilter = (filterKey, filterVal) => {
        setTempState((prevState) => ({
            ...prevState,
            [filterKey]: filterVal,
        }))
    }

    const numberOfFilters = Object.entries(filters).reduce(
        (acc, [key, value]: any) => {
            if (value?.open) {
                acc = acc + 1
            }
            return acc
        },
        0
    )

    // useEffect(() => { console.log(tempState.email.open) }, [tempState])

    return (
        <div className="flex space-x-1">
            <DropdownMenu>
                <DropdownMenu.Trigger asChild>
                    <button
                        className={clx(
                            "flex rounded-rounded items-center space-x-1 focus-visible:outline-none focus-visible:shadow-input focus-visible:border-violet-60"
                        )}
                    >
                        <div className="flex rounded-rounded items-center bg-grey-5 border border-grey-20 inter-small-semibold px-2 h-6">
                            Filters
                            <div className="text-grey-40 ml-1 flex items-center rounded">
                                <span className="text-violet-60 inter-small-semibold">
                                    {numberOfFilters ? numberOfFilters : "0"}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center rounded-rounded bg-grey-5 border border-grey-20 inter-small-semibold p-1">
                            <Plus />
                        </div>
                    </button>
                </DropdownMenu.Trigger>
                <div className="flex flex-col w-full pb-2">
                    <div
                        className="flex w-full items-center px-3 mb-1 py-1.5 hover:bg-grey-5 rounded cursor-pointer"
                        onClick={() => {
                            setSingleFilter('email', {
                                open: !tempState.email.open,
                                filter: tempState.email.filter,
                            })
                        }}
                    >
                        <div
                            className={`w-5 h-5 flex justify-center border-grey-30 border text-grey-0 rounded-base ${tempState.email.open && 'bg-violet-60'
                                }`}
                        >
                            <span className="self-center">
                                {tempState.email.open && <Check />}
                            </span>
                            <input
                                type="checkbox"
                                className="hidden"
                                id="Email"
                                name="Email"
                                value="Email"
                                checked={tempState.email.open}
                            />
                        </div>
                        <span
                            className={clx('text-grey-90 ml-2', {
                                'inter-small-semibold': tempState.email.open,
                                'inter-small-regular': !tempState.email.open,
                            })}
                        >
                            Email
                        </span>
                    </div>
                    {tempState.email.open && (
                        <div
                            data-tip={tempState.email.invalidTagsMessage || ''}
                            className="pl-6"
                        >
                            <input
                                className="pt-0 pb-1"
                                placeholder="info@email.com"
                                onChange={(values) => {
                                    setSingleFilter('email', {
                                        open: tempState.email.open,
                                        filter: values.target.value,
                                    })
                                }}
                            />
                        </div>
                    )}
                </div>
                {/* <FilterDropdownItem
                    filterTitle="Date"
                    options={dateFilters}
                    filters={tempState.date.filter}
                    open={tempState.date.open}
                    setFilter={(val) => setSingleFilter("date", val)}
                />
                <SaveFilterItem
                    saveFilter={handleSaveTab}
                    name={name}
                    setName={setName}
                /> */}
            </DropdownMenu>
            {/* {tabs && tabs.map((t) => (
                <TabFilter
                    key={t.value}
                    onClick={() => handleTabClick(t.value)}
                    label={t.label}
                    isActive={activeTab === t.value}
                    removable={!!t.removable}
                    onRemove={() => handleRemoveTab(t.value)}
                />
            ))} */}
        </div >
    )
}

export default CustomerFilters