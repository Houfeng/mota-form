import React from "react";
export interface ITipProps {
    className?: string;
    children?: React.ReactNode;
    bind?: string;
    style?: React.CSSProperties;
}
export declare function Tip(props: ITipProps): JSX.Element;
