import image from './assets/image.jpg';
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
  VideoBlock,
} from './classes/blocks';
export const model = [
  new TitleBlock('Site builder using js', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #c3b6a1, #9d907a)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Image',
  }),
  new ColumnsBlock(['Something', 'broken ', 'into', 'columns'], {
    styles: {
      background: 'linear-gradient(to bottom, #eab521, #c48419)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold',
    },
  }),
  new TextBlock('something', {
    styles: {
      background: 'linear-gradient(to left, #726246, #c3b6a1)',
      padding: '1rem',
      'font-weight': 'bold',
      'text-align': 'center',
    },
  }),
  new VideoBlock('https://www.youtube.com/embed/BLyz7_Ou5bY', {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
  })
];