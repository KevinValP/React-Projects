import {useState} from 'react';

export function TwitterFollowCard({userName, name, initialIsFollowing, avatarURL}) {
    const [isFollowing, setIsFollowing]= useState(initialIsFollowing);
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button tw-followCard-button isFollowing' : 'tw-followCard-button';
    const imageSrc = avatarURL || `https://unavatar.io/twitter/${userName}?fallback=https://unavatar.io/api/unknown`;
    
    const handleClick =() => {
        setIsFollowing(!isFollowing);
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Avatar de Ejemplo" src={imageSrc} />

                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-button-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
