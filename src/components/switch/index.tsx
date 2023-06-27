import { FC, memo } from "react";
import classes from "./style.module.scss";
import { ISwitchInput } from "./type";

const { radioButtons, full, positive, negative } = classes;

const SwitchButton: FC<ISwitchInput> = ({ isFull, trueLabel, falseLabel, value, onChange, rowId, columnId }) => {
    return (
        <div className={`${radioButtons} ${isFull && full}`}>
            <input
                id={`trueLabel-${columnId}-${rowId}`}
                type="radio"
                value="true"
                checked={value}
                onChange={onChange}
            />
            <label className={positive} htmlFor={`trueLabel-${columnId}-${rowId}`}>
                <span>{trueLabel}</span>
            </label>
            <input
                id={`falseLabel-${columnId}-${rowId}`}
                type="radio"
                value="false"
                checked={!value}
                onChange={onChange}
            />
            <label className={negative} htmlFor={`falseLabel-${columnId}-${rowId}`}>
                <span>{falseLabel}</span>
            </label>
        </div>
    );
};

export default memo(SwitchButton, (prevProps, nextProps) => prevProps.value === nextProps.value);