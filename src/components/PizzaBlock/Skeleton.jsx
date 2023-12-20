import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="125" cy="125" r="120" />
        <rect x="0" y="310" rx="8" ry="8" width="260" height="80" />
        <rect x="0" y="270" rx="8" ry="8" width="260" height="26" />
        <rect x="0" y="410" rx="8" ry="8" width="95" height="30" />
        <rect x="109" y="403" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton

