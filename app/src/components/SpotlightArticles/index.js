import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

const SpotlightArticles = ({
  articles,
}) => (
  <Box pad="small" direction="column">
    <Heading tag="h3" align="center">
      Spotlight Articles
    </Heading>
    <Box pad={{ vertical: 'small' }} direction="row">
      {articles.map((article, i) =>
        <Box key={i} basis="1/3" pad={{ horizontal: 'small' }}>
          <img src={article.feature_image} />
          <Paragraph>
            {`${article.content.slice(0, 200)}...`}
          </Paragraph>
          <span>
            {`Posted by ${article.user.name}`}
          </span>
          <Button label="Read More" href={`/articles/${article.slug}`} />
        </Box>
      )}
    </Box>
  </Box>
);

SpotlightArticles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default cssModules(SpotlightArticles, styles);