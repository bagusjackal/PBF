import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80" alt="Gambar Tumbail Artikel"></img>
                </div>
                <div className="konten-artikel">
                    <div className="judul-artikel">{props.judul}</div>
                    <p className="isi-artikel">Isi Artikel{props.isi}</p>
                    </div>
                </div>
    )
}

export default Post;