import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList ({allPics, updateLikes}) {
    console.log(allPics);
    return(
        <>
            {allPics.map(picture => 
                <GalleryItem 
                id={picture.id}
                key={picture.id}
                path={picture.path}
                likes={picture.likes}
                updateLikes={updateLikes}/>
                )}
        </>
    )
}

export default GalleryList