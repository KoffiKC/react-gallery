// const galleryItems = require("../../../server/modules/gallery.data")

function GalleryItem ({id, path, likes, updateLikes}) {
    console.log('all the item tings', id, path, likes);


    const handleClick = () => {
        console.log('we clickin', id)
        updateLikes(id)
    }

    return(
        <>  
            <div key={id}>
                <img src="images/goat_small.jpg" alt="" />
                <button onClick={handleClick}>do you liek et?</button>
                <p>we have {likes} lieks :)</p>
            </div>
        </>
    )
}

export default GalleryItem