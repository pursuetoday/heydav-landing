import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'> & {
  moveUp?: boolean;
};
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, moveUp = false, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
	const initial = moveUp ? { y: '-100%' } : { x: '100%' };
	const animate = { x: 0, y: 0 };
	const exit = moveUp ? { y: '100%' } : { x: '-100%' };

	const transition = { duration: 0.6, ease: 'easeInOut' };

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(PageTransition)