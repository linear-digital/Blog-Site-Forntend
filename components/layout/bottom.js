import Link from "next/link";
import BottomCarousel from "../slider/BottomCarousel";

import data from "../../data/post.json";
const Bottom = () => {
    return (
        <>
            <div className="site-bottom pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated">
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Destinations</h5>
                                </div>
                                <div className="post-block-list post-module-1">
                                    <ul className="list-post">
                                        {data.slice(1, 4).map((item, i) => (
                                            <li key={i} className="mb-30">
                                                <div className="d-flex hover-up-2 transition-normal">
                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href={`/blog/${item.id}`}>
                                                            <a className="color-white">
                                                                <img
                                                                    src={`/assets/imgs/news/${item.img}`}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                            <Link href={`/blog/${item.id}`}>
                                                                <a>
                                                                    {item.title}
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                {item.date}
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                {item.views} views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                                data-wow-delay="0.2s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Lifestyle</h5>
                                </div>
                                <div className="post-block-list post-module-1">
                                    <ul className="list-post">
                                        {data.slice(5, 8).map((item, i) => (
                                            <li key={i} className="mb-30">
                                                <div className="d-flex hover-up-2 transition-normal">
                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href={`/blog/${item.id}`}>
                                                            <a className="color-white">
                                                                <img
                                                                    src={`/assets/imgs/news/${item.img}`}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                            <Link href={`/blog/${item.id}`}>
                                                                <a>
                                                                    {item.title}
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                {item.date}
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                {item.views} views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                                data-wow-delay="0.4s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Photography</h5>
                                </div>
                                <div className="post-block-list post-module-1">
                                    <ul className="list-post">
                                        {data.slice(2, 5).map((item, i) => (
                                            <li key={i} className="mb-30">
                                                <div className="d-flex hover-up-2 transition-normal">
                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href={`/blog/${item.id}`}>
                                                            <a className="color-white">
                                                                <img
                                                                    src={`/assets/imgs/news/${item.img}`}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                            <Link href={`/blog/${item.id}`}>
                                                                <a>
                                                                    {item.title}
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                {item.date}
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                {item.views} views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-widget widget-latest-posts mb-30 mt-20 wow fadeInUp animated d-none d-lg-block">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Categories</h5>
                        </div>
                        <BottomCarousel />
                    </div>
                </div>
                {/* <!--container--> */}
            </div>
        </>
    );
};

export default Bottom;
