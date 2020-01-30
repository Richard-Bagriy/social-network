import React from 'react'
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import Message from '../../common/Message';

import { generateImagePath } from '../../../utils/helper';

const Posts = ({ posts, addPost, profileImage, id }) => {

    const handleSubmit = ({ message, id }) => {
        addPost(message, id);
    }

    const image = generateImagePath(profileImage);

    return (
        <div>
            <NewPost profileImage={image} onSubmit={handleSubmit} id={id} />
            { posts.length 
                ? <div className="border p-20 bg-white">
                    { posts.map( p => 
                        <Post
                            message={p.message} 
                            date={p.date} 
                            key={p._id}
                            name={p.name}
                            image={p.image}
                        />
                    )}
                </div>
                : <Message message="You don't have any posts" />
            }
        </div>
    )
}

export default Posts;