import style from './Profile.module.scss';
import { clsx } from 'clsx';

function Profile() {
    return (
        <div className="profile__wrapper">
            <h1 className={style.heading}>Profile Page</h1>
            <p className={clsx(style.content, style.font)}>
                Hello world Hello world Hello world Hello world Hello world
                Hello world Hello world Hello world Hello world Hello world
                Hello world Hello world Hello world Hello world Hello world
                Hello world Hello world Hello world Hello world Hello world
                Hello world Hello world Hello world Hello world
            </p>
        </div>
    );
}

export default Profile;
