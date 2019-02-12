import { yellow as theme } from 'mdx-deck/themes';

export default {
  ...theme,
  liveCode: {
    container: {
      // container styles
    },
    editor: {
      // editor styles
      flexBasis: '60%'
    },
    preview: {
      // preview styles
      background: 'whitesmoke',
      flexBasis: '40%'
    },
    error: {
      // error styles
    }
  }
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
