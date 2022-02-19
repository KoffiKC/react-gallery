import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList ({allPics, updateLikes}) {
    return(
        <>
            {allPics.map(picture => 
                <GalleryItem 
                id={picture.id}
                key={picture.id}
                path={picture.path}
                desc={picture.description}
                likes={picture.likes}
                updateLikes={updateLikes}/>
                )}
        </>
    )
}

export default GalleryList