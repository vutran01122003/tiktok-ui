import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header')}>
                <img src={images.logo.default} alt="tiktok" />
                <div className={cx('search')}>
                    <input
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        className={cx('search-input')}
                    />

                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
