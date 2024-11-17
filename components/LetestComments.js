import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import api from './axios.instance';
import { Spin } from 'antd';
import moment from 'moment';

const LetestComments = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['letest-comments'],
        queryFn: async () => {
            const res = await api.get(`/comment?limit=5`)
            return res.data
        }
    })
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
            <div className="widget-header-1 position-relative mb-30">
                <h5 className="mt-5 mb-30">
                    Last comments
                </h5>
            </div>
            <div className="post-block-list post-module-2">
                <ul className="list-post">
                    {
                        data?.map((item, i) => (
                            <li key={i} className="mb-30 wow fadeInUp animated">
                                <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <Link href="/single">
                                            <a
                                                className="color-white"

                                            >
                                                <img
                                                    src="/assets/imgs/authors/author-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content media-body">
                                        <p className="mb-10">
                                            <Link href="/author">
                                                <a>
                                                    <strong>
                                                        {item.user.name}
                                                    </strong>
                                                </a>
                                            </Link>
                                            <span className="ml-15 font-small text-muted has-dot">
                                               {moment(item.createdAt).format('lll')}
                                            </span>
                                        </p>
                                        <p className="text-muted font-small">
                                           {item.comment}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }


                </ul>
            </div>
        </div>
    );
};

export default LetestComments;