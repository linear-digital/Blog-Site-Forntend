import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/post.json";
import comments from "../../data/comments.json";
import api from "../../components/axios.instance";
import moment from "moment";


export async function getServerSideProps(context) {
    const { id } = context.query;
    // Fetch data from external API
    const res = await api.get(`/blog/${id}`);
  
    // Pass data to the page via props
    return { props: { blog: res.data } };
  }


const SingleVendor = ({ blog }) => {

    return (
        <>

            <Layout title={blog?.title} description={blog?.desc}>
                {blog && (
                    <>
                        <main className="bg-grey pb-30">
                            <div className="container single-content">

                                <div className="entry-header entry-header-style-1 mb-50 pt-50">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="entry-meta align-items-center meta-2 font-small color-muted">
                                                <p className="mb-5">
                                                    <Link href={`/author/${blog?.user?._id}`}>
                                                    <a className="author-avatar" href="#">
                                                        <img
                                                            className="img-circle"
                                                            src="/assets/imgs/authors/author-3.jpg"
                                                            alt=""
                                                        />
                                                    </a></Link>
                                                    By
                                                    <Link href={`/author/${blog?.user?._id}`}><a>
                                                        <span className="author-name font-weight-bold">
                                                            {blog?.user?.name}
                                                        </span>
                                                    </a></Link>
                                                </p>
                                                <span className="mr-10">

                                                    {
                                                        moment(blog?.createdAt).format('DD/MM/YYYY')}
                                                </span>
                                                <span className="has-dot">

                                                    {blog?.readTime} mins read
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right d-none d-md-inline">
                                            <ul className="header-social-network d-inline-block list-inline mr-15">
                                                <li className="list-inline-item text-muted">
                                                    <span>Share this: </span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        className="social-icon fb text-xs-center"
                                                        target="_blank"
                                                        href="#"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        className="social-icon tw text-xs-center"
                                                        target="_blank"
                                                        href="#"
                                                    >
                                                        <i className="elegant-icon social_twitter "></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        className="social-icon pt text-xs-center"
                                                        target="_blank"
                                                        href="#"
                                                    >
                                                        <i className="elegant-icon social_pinterest "></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--end single header--> */}

                                {/* <!--figure--> */}
                                <div
                                dangerouslySetInnerHTML={{ __html: blog?.content }}
                                >

                                </div>
                                <article className="entry-wraper mb-50">
                                    
                                    <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                                        <div className="tags">
                                            <span>Tags: </span>
{/* 
                                            <Link href="/category">
                                                <a>{blog?.tags[0]}</a>
                                            </Link>
                                            <Link href="/category">
                                                <a>{blog?.tags[1]}</a>
                                            </Link>
                                            <Link href="/category">
                                                <a>{blog?.tags[2]}</a>
                                            </Link> */}
                                        </div>
                                    </div>
                                    <div className="single-social-share clearfix wow fadeIn animated">
                                        <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
                                            <span className="hit-count mr-15">
                                                <i className="elegant-icon icon_comment_alt mr-5"></i>
                                                {blog?.comments} comments
                                            </span>
                                            <span className="hit-count mr-15">
                                                <i className="elegant-icon icon_like mr-5"></i>
                                                {blog?.likes} likes
                                            </span>
                                            <span className="hit-count">
                                                <i className="elegant-icon icon_star-half_alt mr-5"></i>
                                                Rate: {blog?.rating}/10
                                            </span>
                                        </div>
                                        <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
                                            <li className="list-inline-item text-muted">
                                                <span>
                                                    Share this:
                                                </span>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/#">
                                                    <a
                                                        className="social-icon fb text-xs-center"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/#">
                                                    <a
                                                        className="social-icon tw text-xs-center"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_twitter "></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link href="/#">
                                                    <a
                                                        className="social-icon pt text-xs-center"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_pinterest "></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!--author box--> */}
                                    <div className="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated">
                                        <div className="author-image mb-30">
                                            <Link href={`/author/${blog?.user?._id}`}>
                                                <a>
                                                    <img
                                                        src="/assets/imgs/authors/author-3.jpg"
                                                        alt=""
                                                        className="avatar"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="author-info">
                                            <h4 className="font-weight-bold mb-20">
                                                <span className="vcard author">
                                                    <span className="fn">
                                                        <Link href={`/author/${blog?.user?._id}`}>
                                                            <a>
                                                                {data?.user?.name}
                                                            </a>
                                                        </Link>
                                                    </span>
                                                </span>
                                            </h4>
                                            <h5 className="text-muted">
                                                About author
                                            </h5>
                                            <div className="author-description text-muted">
                                                You should write because
                                                you love the shape of
                                                stories and sentences
                                                and the creation of
                                                different words on a
                                                page.
                                            </div>
                                            <Link href={`/author/${blog?.user?._id}`}>
                                                <a className="author-bio-link mb-md-0 mb-3">
                                                    View all posts ({data?.totalPost})
                                                </a>
                                            </Link>
                                            <div className="author-social">
                                                <ul className="author-social-icons">
                                                    <li className="author-social-link-facebook">
                                                        <Link href="/#">
                                                            <a target="_blank">
                                                                <i className="ti-facebook"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="author-social-link-twitter">
                                                        <Link href="/#">
                                                            <a target="_blank">
                                                                <i className="ti-twitter-alt"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="author-social-link-pinterest">
                                                        <Link href="/#">
                                                            <a target="_blank">
                                                                <i className="ti-pinterest"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="author-social-link-instagram">
                                                        <Link href="/#">
                                                            <a target="_blank">
                                                                <i className="ti-instagram"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--related posts--> */}
                                    <div className="related-posts">
                                        <div className="post-module-3">
                                            <div className="widget-header-2 position-relative mb-30">
                                                <h5 className="mt-5 mb-30">
                                                    Related posts
                                                </h5>
                                            </div>
                                            <div className="loop-list loop-list-style-1">
                                                {data.slice(1, 3).map((item, i) => (
                                                    <article className="hover-up-2 transition-normal wow fadeInUp animated">
                                                        <div className="row mb-40 list-style-2">
                                                            <div className="col-md-4">
                                                                <div className="post-thumb position-relative border-radius-5">
                                                                    <div
                                                                        className="img-hover-slide border-radius-5 position-relative"
                                                                        style={{ backgroundImage: `url(/assets/imgs/news/${item.img})` }}
                                                                    >
                                                                        <Link href={`/blog/${item.id}`}>
                                                                            <a
                                                                                className="img-link"
                                                                            ></a>
                                                                        </Link>
                                                                    </div>
                                                                    <ul className="social-share">
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a>
                                                                                    <i className="elegant-icon social_share"></i>
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a
                                                                                    className="fb"
                                                                                    title="Share on Facebook"
                                                                                    target="_blank"
                                                                                >
                                                                                    <i className="elegant-icon social_facebook"></i>
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a
                                                                                    className="tw"
                                                                                    target="_blank"
                                                                                    title="Tweet now"
                                                                                >
                                                                                    <i className="elegant-icon social_twitter"></i>
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a
                                                                                    className="pt"
                                                                                    target="_blank"
                                                                                    title="Pin it"
                                                                                >
                                                                                    <i className="elegant-icon social_pinterest"></i>
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8 align-self-center">
                                                                <div className="post-content">
                                                                    <div className="entry-meta meta-0 font-small mb-10">
                                                                        <Link href={`/blog/${item.id}`}>
                                                                            <a>
                                                                                <span className="post-cat text-primary">
                                                                                    {item.category}
                                                                                </span>
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <h5 className="post-title font-weight-900 mb-20">
                                                                        <Link href={`/blog/${item.id}`}>
                                                                            <a>
                                                                                {item.title}
                                                                            </a>
                                                                        </Link>
                                                                        <span className="post-format-icon">
                                                                            <i className="elegant-icon icon_star_alt"></i>
                                                                        </span>
                                                                    </h5>
                                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                        <span className="post-on">
                                                                            {item.date}
                                                                        </span>
                                                                        <span className="time-reading has-dot">
                                                                            {item.readTime} mins read
                                                                        </span>
                                                                        <span className="post-by has-dot">
                                                                            {item.views} views
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--More posts--> */}
                                    <div className="single-more-articles border-radius-5">
                                        <div className="widget-header-2 position-relative mb-30">
                                            <h5 className="mt-5 mb-30">
                                                You might be interested
                                                in
                                            </h5>
                                            <button className="single-more-articles-close">
                                                <i className="elegant-icon icon_close"></i>
                                            </button>
                                        </div>
                                        <div className="post-block-list post-module-1 post-module-5">
                                            <ul className="list-post">
                                                <li className="mb-30">
                                                    <div className="d-flex hover-up-2 transition-normal">
                                                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                            <Link href="/single">
                                                                <a className="color-white">
                                                                    <img
                                                                        src="/assets/imgs/news/thumb-1.jpg"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="post-content media-body">
                                                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                <Link href="/single">
                                                                    <a>
                                                                        The
                                                                        Best
                                                                        Time
                                                                        to
                                                                        Travel
                                                                        to
                                                                        Cambodia
                                                                    </a>
                                                                </Link>
                                                            </h6>
                                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                <span className="post-on">
                                                                    27
                                                                    Jan
                                                                </span>
                                                                <span className="post-by has-dot">
                                                                    13k
                                                                    views
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mb-10">
                                                    <div className="d-flex hover-up-2 transition-normal">
                                                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                            <Link href="/single">
                                                                <a className="color-white">
                                                                    <img
                                                                        src="/assets/imgs/news/thumb-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="post-content media-body">
                                                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                <Link href="/single">
                                                                    <a>
                                                                        20
                                                                        Photos
                                                                        to
                                                                        Inspire
                                                                        You
                                                                        to
                                                                        Visit
                                                                        Cambodia
                                                                    </a>
                                                                </Link>
                                                            </h6>
                                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                <span className="post-on">
                                                                    27
                                                                    August
                                                                </span>
                                                                <span className="post-by has-dot">
                                                                    14k
                                                                    views
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!--Comments--> */}
                                    <div className="comments-area">
                                        <div className="widget-header-2 position-relative mb-30">
                                            <h5 className="mt-5 mb-30">
                                                Comments
                                            </h5>
                                        </div>
                                        {comments.map((item, i) => (
                                            <div className="comment-list wow fadeIn animated">
                                                <div className="single-comment justify-content-between d-flex">
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb">
                                                            <img
                                                                src={`/assets/imgs/authors/${item.img}`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="desc">
                                                            <p className="comment">
                                                                {item.desc}
                                                            </p>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <h5>
                                                                        <Link href="/#">
                                                                            <a>
                                                                                {item.name}
                                                                            </a>
                                                                        </Link>
                                                                    </h5>
                                                                    <p className="date">
                                                                        {item.date} {new Date().getFullYear()} at {item.time}

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
                                                {item.reply && item.reply.map((cmntr, i) => ((
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

                                                )))}

                                            </div>

                                        ))}
                                    </div>
                                    {/* <!--comment form--> */}
                                    <div className="comment-form wow fadeIn animated">
                                        <div className="widget-header-2 position-relative mb-30">
                                            <h5 className="mt-5 mb-30">
                                                Leave a Reply
                                            </h5>
                                        </div>
                                        <form
                                            className="form-contact comment_form"
                                            action="#"
                                            id="commentForm"
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            className="form-control w-100"
                                                            name="comment"
                                                            id="comment"
                                                            cols="30"
                                                            rows="9"
                                                            placeholder="Write Comment"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            name="name"
                                                            id="name"
                                                            type="text"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            name="email"
                                                            id="email"
                                                            type="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            name="website"
                                                            id="website"
                                                            type="text"
                                                            placeholder="Website"
                                                        />
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
                                </article>
                            </div>
                            {/* <!--container--> */}
                        </main>
                    </>
                )}
            </Layout>
        </>
    );
};



export default SingleVendor;