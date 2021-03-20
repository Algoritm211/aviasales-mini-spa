import React from 'react';
import './ErrorPage.scss'

declare var location: Location

const ErrorPage:React.FC = () => {

  const onReload = () => {
    location.reload()
  }

  return (
    <div className={'error'}>
      <div className="error__header">
        Упс, при загрузке произошла ошибка
      </div>
      <div className="error__reload">
        <div>Попробуйте еще раз, перезагрузите страницу</div>
        <div className="error__reload-btn" onClick={onReload}>
          Перезагрузить
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
