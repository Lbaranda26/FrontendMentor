import React from 'react';
import ReactDOM from 'react-dom/client';
import ContainerArticle from './ContainerArticle';
import ContainerImage from './ContainerImage';
import PositionStyle from './position.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={PositionStyle.wrapper}>
      <article className={PositionStyle.article__container}>
        <ContainerArticle/>
      </article>
      <picture className={PositionStyle.picture__container}>
        <ContainerImage/>
      </picture>
    </div>
  </React.StrictMode>,
)


