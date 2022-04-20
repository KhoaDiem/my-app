import React from "react";
interface IFrame {
    a : string | number | undefined
}
export const Header:React.FC<IFrame>= (): JSX.Element=> {
    return (
        <div>header</div>
    )
}
