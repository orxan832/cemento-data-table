import { FC, memo, useMemo } from "react"
import Select, { StylesConfig } from "react-select"
import { ISelectOption, ISelect } from "./type"
import classes from './style.module.scss'

const MySelect: FC<ISelect> = ({ name, options, label, placeholder, value, onChange, isDisabled, menuPlacement, errorMessage, isClearable }) => {

    const renderCustomStyles = useMemo(() => {
        const customStyles: StylesConfig<ISelectOption> = {
            control: (styles) => ({
                ...styles,
                borderColor: `${errorMessage ? 'red' : '#E6E6E6'} !important`,
                boxShadow: "none",
                minHeight: "20px",
                borderRadius: "10px",
            }),
            singleValue: (styles) => ({
                ...styles,
                fontSize: "14px",
                color: "#202124",
                lineHeight: "22px",
            }),
            placeholder: (styles) => ({
                ...styles,
                fontSize: "14px",
                lineHeight: "22px",
            }),
            valueContainer: (styles) => ({ ...styles, padding: "7px 16px" }),
            menuPortal: (styles) => ({ ...styles, zIndex: 10000 })
        }
        return customStyles
    }, [errorMessage])

    return (
        <div className='w-full relative'>
            {label && <label className={classes.label} style={{ color: errorMessage ? "red" : "" }}>{label}</label>}
            <Select
                name={name}
                styles={renderCustomStyles}
                menuPortalTarget={document.body}
                className="w-full"
                options={options}
                value={value}
                onChange={onChange}
                placeholder={placeholder || "Select"}
                isDisabled={isDisabled || false}
                menuPlacement={menuPlacement || "auto"}
                isClearable={isClearable || false}
            />
        </div>
    )
}

export default memo(MySelect, (prevProps, nextProps) => prevProps.value === nextProps.value)