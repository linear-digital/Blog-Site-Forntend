import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../../util/firebase.init';
import { useQuery } from '@tanstack/react-query';
import api, { getCurrentUser } from '../../../components/axios.instance';
import { Spin } from 'antd';

const CommentForm = ({ post, refetch }) => {
    const [user, loading] = useAuthState(getAuth(app))
    const { data: currentUser, isLoading } = useQuery({
        queryKey: ['current-user', user?.email],
        queryFn: async () => {
            const res = await api.get(`/users/find/one?email=${user?.email}`)
           
            return res.data
        },
        enabled: !!user
    })
  

    const commentHander = async (e) => {
        e.preventDefault();
        try {
            const entry = new FormData(e.target);
            const data = Object.fromEntries(entry.entries())
            const newComment = {
                user: currentUser?._id,
                post: post?._id,
                comment: data?.comment
            }
            const res = await api.post('/comment', newComment)
            e.target.reset()
            refetch()
        } catch (error) {
            console.error(error);
        }
    }
    if (loading || isLoading) {
        return <Spin />
    }
    if (!currentUser) {
        return (
            <div className="comment-form wow fadeIn animated">
                <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">
                        Leave a Comment
                    </h5>
                </div>
                <p className="mb-30">You need to login to comment</p>
            </div>
        )
    }
    return (
        <div className="comment-form wow fadeIn animated">
            <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">
                    Leave a Comment
                </h5>
            </div>
            <form
                onSubmit={commentHander}
                className="form-contact comment_form"
                id="commentForm"
            >
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <textarea
                                required
                                className="form-control w-100"
                                name="comment"
                                id="comment"
                                cols="30"
                                rows="9"
                                placeholder="Write Comment"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        className="btn button button-contactForm"
                    >
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;