import './modal.scss';

export default function Modal({isOpened, toggleModal, children}) {
    return isOpened ? (
        <div 
            className="modal__wrapper"
            onClick={() => toggleModal(false)}>

            <div 
                className="modal"
                onClick={e => e.stopPropagation()}>

                <span 
                    className="modal__close"
                    onClick={() => toggleModal(false)}>
                    
                    Закрыть
                </span>

               {children}
            </div>
        </div>
    ) : false;
}