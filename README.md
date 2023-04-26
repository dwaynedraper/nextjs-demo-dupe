# Arkane Digital LLC's Next.js Demo

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Storybook

To run Storybook, run the following command:

```bash
npm run storybook
```

Storybook runs on [http://localhost:6006](http://localhost:6006). This project is using Storybook's new Framework API, which automatically tailors itself to match your Next configuration. If you make significant changes to the Next configuration, you may need to rerun the Storybook command to update Storybook's configuration via `@storybook/next`.

For more information about the changes, you visit the following pages:

https://medium.com/storybookjs/integrate-next-js-and-storybook-automatically-bd3c402f8a94

https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/

## Tailwind CSS

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. To keep file size down, the purge option has been set. If you create any folders aside from `components` and `pages` that have markup with class names, you will need to add them to the `purge` array in `tailwind.config.js`, and update this README to reflect the change.

If you need to add colors, make sure to do so in `tailwind.config.js` under `module.exports.theme.colors` as well as `styles/_variables.scss`.

```js
  theme: {
    colors: {
      primary: "#b803a6",
      "primary-hover": "##7E0272",
      "brand-100": "#f4f6fc",
      "brand-200": "#E1E6F4",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
```

This will ensure that the colors are automatically applied to the Tailwind CSS classes. You will be able to automatically use classes such as `bg-brand-dark`, `text-brand-light` and `border-primary` in your JSX. There are rare use cases where you will need the variables somewhere that Tailwind does not provide them. In these cases, you can use the variables in `styles/_variables.scss`.

## React Icons

All icons in the project come from [React Icons](https://react-icons.github.io/react-icons/). It includes all icons from popular packages such as FontAwesome, Bootstrap Icons, Heroicons, Material and more. Coloring and styling is much simpler, and the svgs are used as a React Component, which makes adding them to your JSX simpler. [React Icons Github Repo](https://github.com/react-icons/react-icons) will give you additional details on how to perform more advanced styling.
