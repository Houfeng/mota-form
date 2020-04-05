import React from "react";
import { IRule } from "mota-validation";
export interface IControlProps {
    className?: string;
    children?: React.ReactElement;
    bind?: string;
    rules?: IRule[];
    disabled?: boolean;
}
export declare function Control(controlProps: IControlProps): JSX.Element;
