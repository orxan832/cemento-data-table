import { FC } from "react"
import { ISearchInput } from "./type"
import { FiSearch } from 'react-icons/fi'
import classes from "./style.module.scss"

const SearchInput: FC<ISearchInput> = ({ placeholder, changeSearchHandler }) => {

    return (
        <div className={classes.inputWrap}>
            <div className={classes.icon}><FiSearch /></div>
            <input
                type="search"
                placeholder={placeholder || 'Search'}
                className={classes.input}
                onChange={changeSearchHandler}
            />
        </div>
    )
}

export default SearchInput