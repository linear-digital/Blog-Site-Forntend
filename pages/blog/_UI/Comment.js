import Link from 'next/link';
import React from 'react';

import CommentForm from './CommentForm';
import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import api from '../../../components/axios.instance';
import moment from 'moment';
import { Avatar } from 'antd';
const Comment = ({ post }) => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['comments', post?._id],
        queryFn: async () => {
            const comments = await api.get(`/comment/post/${post?._id}`)
            const res = comments.data
            return res
        }
    })
    if (isLoading) {
        return <Spin size='large'/>
    }

    return (
        <div>
            {/* <!--Comments--> */}
            <div className="comments-area">
                <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">
                        Comments
                    </h5>
                </div>
                {data.map((item, i) => (
                    <div className="comment-list wow fadeIn animated">
                        <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                    <Avatar
                                        size={50}
                                        src={`${item.user.avatar}`}
                                        alt=""
                                    />
                                </div>
                                <div className="desc">
                                    <p className="comment">
                                        {item.comment}
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <h5>
                                                <Link href="/#">
                                                    <a>
                                                        {item.user.name}
                                                    </a>
                                                </Link>
                                            </h5>
                                            <p className="date">
                                               {
                                                moment(item.createdAt).fromNow()
                                               }
                                            </p>
                                        </div>
                                        <div className="reply-btn ml-3">
                                            <div className='cursor-pointer'>
                                                <a className="btn-reply">
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {item.reply && item.reply.map((cmntr, i) => ((
                            <>
                                <div className="single-comment depth-2 justify-content-between d-flex mt-50">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img
                                                src={`/assets/imgs/authors/${cmntr.img}`}
                                                alt=""
                                            />
                                        </div>
                                        <div className="desc">
                                            <p className="comment">
                                                {cmntr.desc}
                                            </p>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h5>
                                                        <Link href="/#">
                                                            <a>
                                                                {cmntr.name}
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <p className="date">
                                                        {cmntr.date} {new Date().getFullYear()} at {cmntr.time}

                                                    </p>
                                                </div>
                                                <div className="reply-btn">
                                                    <Link href="/#">
                                                        <a className="btn-reply">
                                                            Reply
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>

                        )))} */}

                    </div>

                ))}
            </div>
            {/* <!--comment form--> */}
            <CommentForm post={post} refetch={refetch}/>
        </div>
    );
};

export default Comment;