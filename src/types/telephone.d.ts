import 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iphone-16-max': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { mode?: 'light' | 'dark'; rendered?: string },
        HTMLElement
      >
    }
  }
}
