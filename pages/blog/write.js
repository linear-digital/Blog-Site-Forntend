
import React, { useState } from "react";
import { Editor } from "primereact/editor";
import Layout from "../../components/layout/layout";
import { Button, Input } from "antd";

function BasicDemo() {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const uploadFile = async () => {
        try {
            const imageData = new FormData()
            image.append('image', image)

            const res = await api.post('/upload', imageData)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="container"
            style={{
                minHeight: '100vh'
            }}
        >

            <h2 className="mb-4">Write New Blog Here</h2>
            <Input
                placeholder="Title"
                size="large"
                style={{
                    marginTop: '20px'
                }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label
                className="blog-cover"
                htmlFor="cover"
                style={{
                    backgroundImage: imagePreview ? `url(${imagePreview})` : 'none',
                    marginTop: '20px',
                    cursor: 'pointer',
                }}
            >
                {
                    <div className="overlay"
                        style={{
                            opacity: imagePreview ? 0.4 : 1
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                            style={{
                                width: '30px',
                                height: '30px'
                            }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <p>
                            Click here to  Upload Image
                        </p>
                    </div>
                }
            </label>
            <input
                onChange={(e) => {
                    if (e.target.files[0]) {
                        setImage(e.target.files[0])
                        setImagePreview(URL.createObjectURL(e.target.files[0]))
                    }
                }}
                type="file" name="cover" id="cover" accept="image/*"
                className="d-none"
            />
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ minHeight: '500px' }} />
                <button className="btn btn-primary">
                    Publish
                </button>
        </div>
    )
}


const write = () => {
    return (
        <Layout>
            <BasicDemo />
        </Layout>
    );
};

export default write;