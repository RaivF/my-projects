import React from "react";
import styles from './BurgerMenu.module.css';

interface MenuProps {
    children: React.ReactNode;
    open: boolean;
    closeOpenClickHandler: () => void
}

function BurgerMenu(props: MenuProps) {
    const {children, open, closeOpenClickHandler} = props;

    function handleKeypress(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.keyCode === 27) {
            closeOpenClickHandler();
        }
    }

    React.useEffect(() => {
        function fn(event: KeyboardEvent) {
            if (event.keyCode === 27) {
                closeOpenClickHandler();
            }
        }

        document.addEventListener('keydown', fn);

        return () => document.removeEventListener('keydown', fn);
    }, [closeOpenClickHandler]);

    return (
        <div>

            <div
                onClick={closeOpenClickHandler}
                role="presentation"
                onKeyPress={handleKeypress}
                data-open={JSON.stringify(open)}
                className={styles.overlay}
            />
            <div>

                <nav data-open={JSON.stringify(open)} className={styles.menu}>
                    <button className={styles.openButton}
                            onClick={closeOpenClickHandler}>{open === true ?"X":"O"}
                    </button>
                    <div className={styles.test}>{children}</div>
                </nav>
            </div>
        </div>
    );
}

export default BurgerMenu;