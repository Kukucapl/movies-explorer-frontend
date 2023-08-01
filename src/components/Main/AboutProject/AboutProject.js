import SectionTitle from '../SectionTitle/SectionTitle';

export default function AboutProject() {
  return (
    <section className='about-project'>
      <SectionTitle text={'О проекте'} />
      <ul className='about-project__text-containers'>
        <li className='about-project__text-container'>
          <h3 className='about-project__heading'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__text-container'>
          <h3 className='about-project__heading'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about-project__progress'>
        <div className='about-project__done'>
          <div className='about-project__progress-line about-project__progress-line_done'>1 неделя</div>
          <p className='about-project__progress-subtitle'>Back-end</p>
        </div>
        <div className='about-project__in-progress'>
          <div className='about-project__progress-line'>4 недели</div>
          <p className='about-project__progress-subtitle'>Front-end</p>
        </div>
      </div>
    </section>
  );
};