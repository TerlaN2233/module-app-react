import style from '../popup/style.module.css'
export default function Popup({ children, closeOpenMenu }) {
    const closeMenu = () => {
        closeOpenMenu(false)
    }
    return (
        <>
            <div>
                <div className={style.popup} onClick={closeMenu}></div>
                <div className={style.content}>
                    <div>{children}</div>
                </div>
            </div>
        </>
    )
}