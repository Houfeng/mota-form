import * as React from "react";
export interface IItemProps {
    className?: string;
    label?: React.ReactNode;
    tip?: React.ReactNode | boolean;
    children?: React.ReactNode;
    percent?: number;
    width?: number | string;
    style?: any;
    block?: boolean;
}
export declare function renderTip(props: IItemProps): JSX.Element;
export declare function renderLabel(props: IItemProps): JSX.Element;
export declare function Item(props: IItemProps): JSX.Element;
