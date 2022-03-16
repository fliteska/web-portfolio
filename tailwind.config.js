function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  purge: ["**/*.html"],
  theme: {
    extend: {
      fontSize: {
        xxs: ['10px', {
          lineHeight: '14px',
        }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
