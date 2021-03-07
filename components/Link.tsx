import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { Children } from 'react'

export default function Link({ children, ...props }) {
    const { asPath } = useRouter()
    const activeClassName = "is-active"

    const child = Children.only(children)
    const childClassName = child.props.className || ''
    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName
    return (
        <NextLink href={props.href} as={props.as}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </NextLink>
    )
}
