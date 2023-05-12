import { A } from '@solidjs/router'
import { Component, JSX, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

type IProps = {
	activeClass?: string
	/**
	 * Optional href for the list item. If it passed in, the item will be rendered
	 * as a link, i.e preccing it will take user to the passed url.
	 */
	href?: JSX.AnchorHTMLAttributes<HTMLAnchorElement>['href']
} & Omit<
	JSX.LiHTMLAttributes<HTMLLIElement>,
	'href' | 'activeClass' | 'classList'
>

export const ListItem: Component<IProps> = (props) => {
	const [local, link, other] = splitProps(
		props,
		['class', 'children'],
		['activeClass', 'href']
	)

	return (
		<Dynamic
			class={local.class}
			component={link.href ? A : 'li'}
			{...(link.href ? { activeClass: link.activeClass, href: link.href } : {})}
			{...other}
		>
			{local.children}
		</Dynamic>
	)
}
