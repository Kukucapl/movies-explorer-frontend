import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();
  
  return (
    <main className='not-found'>
      <div className='not-found__error-container'>
        <h1 className='not-found__error'>404</h1>
        <p className='not-found__error-text'>Страница не найдена</p>
      </div>
      <button className='not-found__button button' onClick={() => navigate(-1)}>Назад</button>
    </main>
  );
};