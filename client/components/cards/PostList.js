import { useContext } from 'react';
import moment from 'moment';
import { Avatar } from 'antd';
import PostImage from '../images/PostImage';
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { UserContext } from '../../context';
import { useRouter } from 'next/router';
import { imageSource } from '../../functions';
import Link from 'next/Link';
import Post from '../../components/cards/Post';

const PostList = ({
  posts,
  handleDelete,
  handleLike,
  handleUnlike,
  handleComment,
}) => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      {posts &&
        posts.map((post) => (
          <Post
            post={post}
            handleDelete={handleDelete}
            handleLike={handleLike}
            handleUnlike={handleUnlike}
            handleComment={handleComment}
          />
        ))}
    </>
  );
};

export default PostList;
