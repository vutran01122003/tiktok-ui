import classNames from 'classnames/bind';

import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './LayoutDefault.module.scss';

const cx = classNames.bind(styles);

function LayoutDeafault({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default LayoutDeafault;
