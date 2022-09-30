import axios from 'axios';
import { useEffect, useState } from 'react';
import BASE_URL from './AIBaseUrl';
import classes from './AIStyle.module.css';
import LodingText from '../Common/LodingText';

const textContext = {
  Natural: [
    'Natural interior design seeks to',
    'bring the outdoors in by incorporating natural',
    'and nature-inspired materials into the home.',
    'creating a look that is fresh, pure,',
    'authentic, and comfortable.',
    'Woven fabrics, wicker or rattan furniture',
    'and decor, and shades of green alongside',
    'nature-inspired neutrals are hallmarks',
    'of this wholesome and on-trend design style.',
  ],
  Mediterranean: [
    'Mediterranean-style interior design',
    'is a riff on the décor found in countries',
    'that border the Mediterranean Sea.',
    'Whether you’re channeling a warm, carefree summer',
    'in Santorini, Capri, or Ibiza.',
    'he best Mediterranean-style interior design',
    'focuses on indoor-outdoor living.',
    'Use materials such as wood, rattan,',
    'ceramics, terracotta, wrought iron, linen, and cotton',
  ],
  Antique: [
    'Antiques offer style, history, and',
    'practicality to any room.',
    'Antiques evoke amazement and great interest',
    'in people, with questions like who made the furnishings,',
    'what great craftsmanship went into its creation,',
    'and what historical events have these pieces been through.',
    'Just their sheer beauty is enough to decorate',
    'with different styles in allowing',
    'the past to come to present day life.',
  ],
};

function AIStyle() {
  const [fileUrl, setFileUrl] = useState(null);
  const [style, setStyle] = useState(null);
  const [predictValue, setPredictValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const imageUpload = async (e) => {
    const file = e.target.files[0];
    setIsLoading(true);
    setFileUrl(URL.createObjectURL(file));
    axios({
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
      url: BASE_URL + 'predict',
      method: 'post',
      data: { image: file },
    })
      .then((response) => {
        const entries = Object.entries(response.data.predict);
        setStyle(entries[0][0]);
        setPredictValue(entries[0][1]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {}, []);

  if (isLoading) {
    return (
      <div className={classes.loading_position}>
        <LodingText />
      </div>
    );
  }
  return (
    <div className={classes.display_flex}>
      <div className={classes.left_width}>
        {style ? (
          <div>
            <h2>{style}</h2>
            <div className={classes.text_group_margin}>
              {textContext[style].map((text) => {
                return <p className={classes.small_text}>{text}</p>;
              })}
            </div>
          </div>
        ) : (
          <div>
            <h2>Pick a Picture</h2>
            <p className={classes.explain_text}>
              Home Sketcher will analyze style of pictureq
            </p>
          </div>
        )}
      </div>

      <div>
        {fileUrl ? (
          <div className={classes.wrapper}>
            <div className={classes.wrapper}>
              <img src={fileUrl} alt="uploaded img" className={classes.user_img} />
            </div>
            <input
              type="file"
              accept="image/*"
              name="img_file"
              onChange={(e) => imageUpload(e)}
            />
          </div>
        ) : (
          <div className={classes.wrapper}>
            <div className={classes.wrapper}>
              <img
                src="https://i0.wp.com/bespok.com/wp-content/uploads/2020/10/placeholder.png?w=1200&ssl=1"
                alt="img upload"
                className={classes.user_img}
              />
            </div>
            <input
              type="file"
              accept="image/*"
              name="img_file"
              onChange={(e) => imageUpload(e)}
            />
          </div>
        )}
      </div>
      <form></form>
    </div>
  );
}

export default AIStyle;
