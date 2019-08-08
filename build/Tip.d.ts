import React from "react";
import { IRule } from "mota-validation";
export interface ITipProps {
    className?: string;
    children?: React.ReactNode;
    bind?: string;
    rules?: IRule[];
}
export declare function Tip(props: ITipProps): JSX.Element;
