const shuffle = () => {
    const assets = [
        { image: 'https://img.icons8.com/fluency/100/null/call-me.png' },
        { image: 'https://img.icons8.com/fluency/100/null/easy.png' },
        { image: 'https://img.icons8.com/fluency/100/null/hand.png'},
        { image: 'https://img.icons8.com/fluency/100/null/hand-drag.png' },
        { image: 'https://img.icons8.com/fluency/100/null/so-so.png' },
        { image: 'https://img.icons8.com/fluency/100/null/pray.png' },
        { image: 'https://img.icons8.com/fluency/100/null/ok-hand.png'},
        { image: 'https://img.icons8.com/fluency/100/null/hang-10.png' },
      ];
      return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
}

export default shuffle