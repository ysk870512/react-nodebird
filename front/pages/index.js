import React, { useEffect } from 'React';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';

const Home = () => {
    const { user, isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    return (
        <div>
            {user ? (
                <div>로그인 했습니다: {user.nickname}</div>
            ) : (
                <div>로그아웃 했습니다.</div>
            )}
            {isLoggedIn && <PostForm />}
            {mainPosts.map(c => {
                return <PostCard key={c} post={c} />;
            })}
        </div>
    );
};
export default Home;
