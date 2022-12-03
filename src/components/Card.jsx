const Card = ({ image, selected, onClick }) => {


  return (
    <div className="card">
      <div className={selected && 'selected'}>
        <img alt="" src={image} className="card-face" />

        <img
          alt=""
          className="card-back"
          src={'https://img.icons8.com/fluency/48/000000/fingerprint.png'}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
