import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { H4 } from '../Heading';
import { fileBaseUrl } from '../../constants/defaultValues';

function Card({ data, visible }) {
  const [transition, setTransition] = useState('transition-start');
  useEffect(() => {
    if (visible) {
      setTransition('transition-finish');
    } else {
      setTransition('transition-start');
    }
  }, [visible]);

  return (
      <a className={`${visible ? 'show ' : 'hide '}card-holder ${transition}`}>
        <div className="image-holder">
          <img src={`${fileBaseUrl}${data.thumb.url}`} alt={data.title} />
        </div>
        <div className="card-title">
          <H4>{data.title}</H4>
        </div>
      </a>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    uri: PropTypes.string,
    featured: PropTypes.bool,
    type: PropTypes.string,
    tools: PropTypes.shape({
      list: PropTypes.arrayOf(PropTypes.string),
    }),
    viewOrder: PropTypes.number,
    thumb: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  visible: PropTypes.bool,
};
Card.defaultProps = {
  data: {},
  visible: false,
};

export default Card;
