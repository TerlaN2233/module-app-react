import { useState } from "react"
import style from './style.module.css'
import Popup from "./Popup"
export default function PopupOpenButton() {
    const [show, setShow] = useState(false);
    const showPopup = () => {
        setShow(true)
    }
    const btnClose = () => {
        setShow(false)
    }
    return (
        <>
            {show ?
                <Popup closeOpenMenu={setShow}>
                    <button className={style.btn} onClick={btnClose}>Close</button>
                    <br /><br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit nemo corporis odio error voluptas neque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit nemo corporis odio error voluptas neque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit nemo corporis odio error voluptas neque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit nemo corporis odio error voluptas neque.
                    </p>
                </Popup> : ''}
            <button onClick={showPopup} className={style.showPopup}>Open Module Window</button>
        </>
    )
}
