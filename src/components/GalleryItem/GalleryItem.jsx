// const galleryItems = require("../../../server/modules/gallery.data")

function GalleryItem ({id, path, likes}) {
    console.log('all the item tings', id, path, likes);
    return(
        <>  
            <div key={id}>
                <img src="images/goat_small.jpg" alt="" />
                <button>do you liek et?</button>
                <p>we have {likes}  lieks :)</p>
            </div>
        </>
    )
}

export default GalleryItem