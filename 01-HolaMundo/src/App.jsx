
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App() {
    const users = [
        { userName: 'reactjs', name: 'React', initialIsFollowing: true, avatarURL: 'https://unavatar.io/twitter/reactjs' },
        { userName: 'angular', name: 'Angular', initialIsFollowing: false, avatarURL: 'https://unavatar.io/twitter/angular' },
        { userName: 'vuejs', name: 'Vue', initialIsFollowing: true, avatarURL: 'https://unavatar.io/twitter/vuejs' },
        { userName: 'vegetta777', name: 'Vegetta777', initialIsFollowing: true, avatarURL: 'https://unavatar.io/twitter/vegetta777' },
        { userName: 'willyrex', name: 'Willyrex', initialIsFollowing: false, avatarURL: 'https://unavatar.io/twitter/willyrex' }

    ]
    return (
        <section className='App'>
            {users.map((user) => (
                <TwitterFollowCard key={user.userName} {...user} />
            ))}

        </section>

    )
}