import * as React from "react";
import { IRule } from "mota-validation";
export interface ILabelProps {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    rules?: IRule[];
}
export declare function renderRequired(props: ILabelProps): JSX.Element;
export declare function Label(props: ILabelProps): JSX.Element;
