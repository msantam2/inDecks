const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '20px',
    opacity         : '0',
    transition      : 'opacity 0.5s',
    background      : 'rgb(83, 194, 234)',
    borderRadius    : '38px',
    width           : '50%',
    margin          : '0 auto'
  }
};

export default ModalStyle;
