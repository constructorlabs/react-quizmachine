const startImages=[
  'https://media.giphy.com/media/uFmMNcXaDNrMCzjCMq/giphy.gif',
  'https://media.giphy.com/media/KBx7fQoLxuV7G/giphy.gif',
  'https://media.giphy.com/media/5th0Kv3uoZkDC/giphy.gif',
  'https://media.giphy.com/media/3o6ZtePsqpjpew9Kzm/giphy.gif'
];
const index = Math.floor(Math.random()*startImages.length);

function image(state=startImages[index], action){

  switch (action.type) {
    case 'LOAD_IMAGE':
    const images=[
      'https://media.giphy.com/media/uFmMNcXaDNrMCzjCMq/giphy.gif',
      'https://media.giphy.com/media/KBx7fQoLxuV7G/giphy.gif',
      'https://media.giphy.com/media/5th0Kv3uoZkDC/giphy.gif',
      'https://media.giphy.com/media/3o6ZtePsqpjpew9Kzm/giphy.gif',
      'https://media.giphy.com/media/9B18cSkNiBW9i/giphy.gif',
      'https://media.giphy.com/media/GCvktC0KFy9l6/giphy.gif',
      'https://media.giphy.com/media/1zSiX3p2XEZpe/giphy.gif',
      'https://media.giphy.com/media/Dg0hzaN9wiEjS/giphy.gif',
      'https://media.giphy.com/media/xTiTnzEhdR9y9PNyc8/giphy.gif',
      'https://media.giphy.com/media/5oGIdt1xapQ76/giphy.gif'
    ];
      const image = images[Math.floor(Math.random()*images.length)];

      return state = image;
      case 'LOAD_SORRY_IMAGE':
      const sorryImages=[
        'https://media.giphy.com/media/3o7aD4XavHnL5UsWEE/giphy.gif',
        'https://media.giphy.com/media/3ohs7Ys9J8XyFVheg0/giphy.gif',
        'https://media.giphy.com/media/kAC4na628Wljy/giphy.gif',
        'https://media.giphy.com/media/O6Hw3wYDqzUis/giphy.gif',
        'https://media.giphy.com/media/26BRzJmX5rH5Jbzuo/giphy.gif',
        'https://media.giphy.com/media/26xBziMPJcCmBbpVm/giphy.gif',
        'https://media.giphy.com/media/3oriOfZaIiMIf9pA6k/giphy.gif'
      ]
      const sorryImage = sorryImages[Math.floor(Math.random()*sorryImages.length)];
      return state = sorryImage;
    default:
      return state
  }

}

export default image;
