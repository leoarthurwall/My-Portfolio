import './LinkButton.scss'

const LinkButton = ({hrefProp, bodyProp}) => {
  return (
    <>
      <a
        className="button"
        href={hrefProp}
        target="_blank"
        rel="noopener noreferrer"
      >
        {bodyProp}
      </a>
    </>
  );
};

export default LinkButton;
