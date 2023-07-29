import Navigation from '../Navigation/Navigation';

export default function Popup(props) {


  return (
    <div className='popup'>
        <div className={(`popup__overlay ${props.isOpen ? 'popup__overlay_opened' : ''}`)} />
        <div className={(`popup__box ${props.isOpen ? 'popup__box_opened' : ''}`)}>
          <button className='popup__close-button button' type='button' onClick={props.onClose} aria-label='Закрыть' />
          <Navigation place={'popup'} />
      </div>
    </div>
  );
}

