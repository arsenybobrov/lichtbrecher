import React, { useEffect } from 'react';
import styled from 'styled-components';

interface PrismicToolbarProps {
  pageId: string;
}

const Div = styled.div`
  display: none;
`;

const PrismicToolbar: React.FC<PrismicToolbarProps> = ({ pageId }) => {
  useEffect(() => {
    const prismicScript = document.getElementById('prismicToolbar');
    if (!prismicScript) {
      const script = document.createElement('script');
      script.setAttribute('id', 'prismicToolbar');
      script.async = true;
      script.defer = true;
      script.src = `https://static.cdn.prismic.io/prismic.js?repo=${process.env.repoName}&new=true`;
      document.head.appendChild(script);
    }
  }, []);
  return <Div data-wio-id={pageId} />;
};

export default PrismicToolbar;
